"use client";

import { TemplateDetailType } from "@/types/template";
import { useSession } from "next-auth/react";
import { OtpAuthDialog } from "./otp-dialog";
import MagicButton from "@/components/magic-button";
import { instanceAuth } from "@/services/instance";
import { useLinkToParent } from "@/lib/link-to-parrent";
import toast from "react-hot-toast";

export function HeroSection({ data }: { data: TemplateDetailType }) {
  const session = useSession();

  const { handleClick } = useLinkToParent({
    href: "/templates?show=true&template_id=" + data.id,
  });

  async function handleUseTemplate() {
    const response = await instanceAuth.post("/order/", {
      template: data.id,
    });

    if (response.status === 201) handleClick();
    else toast.error("Xatolik yuz berdi iltimos admin bilan bog'laning");
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-4 sm:mb-8 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground overflow-x-auto">
        <span>Categories</span>
        <span>/</span>
        <span>Blog</span>
        <span>/</span>
        <span className="text-foreground">Isla</span>
      </div>
      {/* Title and Description */}
      <div className="mb-8 sm:mb-12 max-w-3xl">
        <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
          {data.name}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: data.short_description }}
          className="prose prose-sm sm:prose-base max-w-none text-primary"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        {session.status === "unauthenticated" ? (
          <>
            <OtpAuthDialog>
              <button className="w-full sm:w-auto rounded-full bg-foreground px-6 py-3 text-sm sm:text-base font-semibold text-background transition-opacity hover:opacity-90">
                Bepul olish!
              </button>
            </OtpAuthDialog>
          </>
        ) : data.price <= 0 ? (
          <div className="w-full sm:w-auto">
            <MagicButton onClick={() => handleUseTemplate()}>
              Foydalanish
            </MagicButton>
          </div>
        ) : (
          <button className="w-full sm:w-auto rounded-full bg-foreground px-6 py-3 text-sm sm:text-base font-semibold text-background transition-opacity hover:opacity-90">
            Sotib olish
          </button>
        )}
        <button className="w-full sm:w-auto rounded-full border border-border px-6 py-3 text-sm sm:text-base text-foreground transition-colors hover:bg-accent/50">
          Preview
        </button>
      </div>
    </section>
  );
}
