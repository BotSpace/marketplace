"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, ArrowLeft, Sparkles, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useReactQueryAction } from "@/services/use-react-query-action";
import { TemplateDetailType } from "@/types/template";
import { APIDetailCreateResponse } from "@/types/http";
import { OtpAuthDialog } from "@/components/otp-dialog";
import { useLinkToParent } from "@/lib/link-to-parrent";
import { useSession } from "next-auth/react";
import { instanceAuth } from "@/services/instance";
import toast from "react-hot-toast";

const TemplateDetail = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const session = useSession();

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat("uz-UZ").format(parseFloat(price));
  };

  const { data } = useReactQueryAction<
    APIDetailCreateResponse<TemplateDetailType>
  >({
    url: "/api/template/[id]",
  });

  const { handleClick: redirectBugPage } = useLinkToParent({
    href: "/templates?show=true&template_id=" + data?.data.id,
  });

  function handleBuyTemplate() {
    const toastId = toast.loading("Buy template...");

    instanceAuth
      .post("/order/", {
        template: data?.data.id,
      })
      .then((response) => {
        redirectBugPage();
        toast.success("Template bought successfully!", { id: toastId });
        console.log("Order created:", response.data);
      })
      .catch((error) => {
        toast.success("Error creating order", { id: toastId });
        console.error("Error creating order:", error);
      });
  }

  if (data)
    return (
      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pb-16 pt-24">
          <div className="container mx-auto px-4">
            {/* Back Button */}
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Barcha shablonlar</span>
            </Link>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Media Section */}
              <div className="space-y-4">
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-muted">
                  {isVideoPlaying ? (
                    <video
                      src={data.data.video}
                      className="h-full w-full object-contain"
                      controls
                      autoPlay
                    />
                  ) : (
                    <>
                      <img
                        src={data.data.image}
                        alt={data.data.name}
                        className="h-full w-full object-cover"
                      />
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="group absolute inset-0 flex items-center justify-center bg-black/30 text-white transition-colors hover:bg-black/40"
                      >
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary transition-transform group-hover:scale-110">
                          <Play
                            color="#fff"
                            className="ml-1 h-6 w-6 text-primary-foreground"
                          />
                        </div>
                      </button>
                    </>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>{data.data.views} ko'rildi</span>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="space-y-6">
                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {data.data.categories.map((category) => (
                    <Badge key={category.id} variant="secondary">
                      {category.name}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                  {data.data.name}
                </h1>

                {/* Short Description */}
                <div
                  className="text-lg text-muted-foreground"
                  dangerouslySetInnerHTML={{
                    __html: data.data.short_description,
                  }}
                />

                {/* Pricing */}
                <div className="space-y-4 rounded-2xl border border-border bg-muted/50 p-6">
                  <div className="flex items-center gap-4">
                    {data.data.price === 0 ? (
                      <>
                        <div className="flex flex-col">
                          <span className="text-3xl font-bold text-primary">
                            Bepul
                          </span>
                          <span className="text-lg text-muted-foreground line-through">
                            {formatPrice(data.data.original_price)} so'm
                          </span>
                        </div>
                        <Badge className="border-green-500/20 bg-green-500/10 text-green-500 hover:text-white">
                          {data.data.discount}% chegirma
                        </Badge>
                      </>
                    ) : (
                      <span className="text-3xl font-bold text-foreground">
                        {formatPrice(data.data.price.toString())} so'm
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    {session.status === "unauthenticated" ? (
                      <OtpAuthDialog onSuccess={redirectBugPage}>
                        <Button variant={"hero"} size="lg">
                          <ShoppingCart className="h-5 w-5" />
                          Hoziroq olish
                        </Button>
                      </OtpAuthDialog>
                    ) : (
                      <Button
                        onClick={handleBuyTemplate}
                        variant={"hero"}
                        size="lg"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Hoziroq olish
                      </Button>
                    )}
                    <Button size="lg" variant="outline">
                      <Sparkles className="h-5 w-5" />
                      Demo ko'rish
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Future */}
            <div className="mt-6">
              <ul>
                {data.data.features.map((item) => (
                  <ol key={item.id}>{item.name}</ol>
                ))}
              </ul>
            </div>

            {/* Full Description */}
            <div className="mt-6 max-w-4xl">
              <div
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: data.data.description }}
              />
            </div>
          </div>
        </main>
      </div>
    );
  else return <div className="min-h-screen w-full">Loading ...</div>;
};

export default TemplateDetail;
