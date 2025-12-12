"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Eye,
  Heart,
  ArrowLeft,
  Check,
  Sparkles,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { useReactQueryAction } from "@/services/use-react-query-action";
import { TemplateDetailType } from "@/types/template";
import { APIDetailCreateResponse } from "@/types/http";

// Mock data - in real app this would come from API
const templateData = {
  id: 1,
  name: "Go'zallik saloni boti",
  slug: "gozalik_saloni_bot",
  image: "https://api.botmother.uz/resources/media/template/hq720.avif",
  video:
    "https://api.botmother.uz/resources/media/template-video/Telegram_bot_to_generate_text_to_video_reels_tech_ai.mp4",
  short_description:
    "<div>The perfect starting point for your projects in the field of well-being, health and personal care. It transmits peace and serenity thanks to a combination of colors, animations and a carefully crafted design.</div>",
  description:
    "<h2>About this Template</h2><p>This modern, versatile Framer template has been specifically designed for wellness-focused brands and businesses. It seamlessly combines beautiful design with all the essential features needed to showcase your products and services.Whether you're promoting natural products, vegan cosmetics, or luxury items, this template is built with optimization at its core. It prioritizes both user experience and conversion, perfect for entrepreneurs and businesses committed to holistic health, emotional well-being, holistic therapies, and healthy lifestyles. It's an excellent choice for entrepreneurs, life coaches, therapists, wellness practitioners, alternative medicine practitioners, and businesses promoting natural products, vegan cosmetics, or luxury items.</p>",
  price: 0.0,
  views: 250,
  likes: 48,
  original_price: "500000.00",
  discount: "100.00",
  discount_type: "percent",
  categories: [
    { id: 1, name: "Catalog" },
    { id: 2, name: "Yetkazib berish" },
    { id: 3, name: "Shaxsiy brend" },
  ],
  features: [
    {
      id: 1,
      name: "🍽 @RestoranBot – Sizning shaxsiy ofitsiantingiz!",
      value:
        "<div>📲 Buyurtmalarni onlayn qabul qiladi, menyuni ko'rsatadi va aksiyalar haqida xabardor qiladi!</div>",
    },
    {
      id: 2,
      name: "⭐️ Botning asosiy funksiyalari",
      value:
        "<div>🥗 <strong>🧾 Menyu ko'rish</strong><br> — Barcha taomlar bo'limlarga ajratilgan holda:<br> 🍕 Pitsa<br> 🍔 Fast-food<br> 🥗 Salatlar<br> 🍰 Desertlar<br> 🫖 Ichimliklar</div>",
    },
    {
      id: 3,
      name: "🛒 📦 Buyurtma berish",
      value:
        "<div>— Taomni tanlash → miqdorini belgilash → manzilni kiritish → tasdiqlash!<br> — 🏃‍♂️ <em>Tez yetkazib berish xizmati qo'llab-quvvatlanadi.</em></div>",
    },
    {
      id: 4,
      name: "📍 📌 Yetkazib berish manzilini belgilash",
      value:
        "<p>— Geolokatsiya yuborish orqali tezkor manzil aniqlash.<br> — Xarita orqali aniqlik kiritish 📍🗺️</p><div><br></div>",
    },
  ],
};

const TemplateDetail = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const template = templateData;

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat("uz-UZ").format(parseFloat(price));
  };

  const { data } = useReactQueryAction<
    APIDetailCreateResponse<TemplateDetailType>
  >({
    url: "/api/template/[id]",
  });

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
                      src={template.video}
                      className="h-full w-full object-cover"
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
                        className="group absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
                      >
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary transition-transform group-hover:scale-110">
                          <Play className="ml-1 h-6 w-6 text-primary-foreground" />
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
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex items-center gap-2 transition-colors ${isLiked ? "text-red-500" : "hover:text-red-500"}`}
                  >
                    <Heart
                      className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`}
                    />
                    <span>{template.likes + (isLiked ? 1 : 0)} yoqdi</span>
                  </button>
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
                        <span className="text-3xl font-bold text-primary">
                          Bepul
                        </span>
                        <span className="text-lg text-muted-foreground line-through">
                          {formatPrice(data.data.original_price)} so'm
                        </span>
                        <Badge className="border-green-500/20 bg-green-500/10 text-green-500">
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
                    <Button size="lg" className="flex-1 gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Hoziroq olish
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1 gap-2"
                    >
                      <Sparkles className="h-5 w-5" />
                      Demo ko'rish
                    </Button>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Xususiyatlari
                  </h3>
                  <div className="space-y-3">
                    {data.data.features.map((feature) => (
                      <div
                        key={feature.id}
                        className="rounded-xl border border-border bg-muted/30 p-4 transition-colors hover:border-primary/30"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Check className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <div>
                            <h4 className="mb-1 font-medium text-foreground">
                              {feature.name}
                            </h4>
                            <div
                              className="text-sm text-muted-foreground"
                              dangerouslySetInnerHTML={{
                                __html: feature.name,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Full Description */}
            <div className="mt-16 max-w-4xl">
              <div
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: data.data.description }}
              />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  else return <div className="min-h-screen w-full">Loading ...</div>;
};

export default TemplateDetail;
