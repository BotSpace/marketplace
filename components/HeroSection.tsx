"use client";

import { Button } from "@/components/ui/button";
import { useLinkToParent } from "@/lib/link-to-parrent";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { OtpAuthDialog } from "./otp-dialog";

const HeroSection = () => {
  const session = useSession();
  const t = useTranslations("HeroSection");

  const { handleClick: goConstructor } = useLinkToParent({
    href: "/",
    onClick: (e) => console.log("Clicked!"),
  });

  return (
    <section className="bg-gradient-hero relative min-h-screen overflow-hidden pb-16 pt-24">
      {/* Background Effects */}
      <div className="bg-glow absolute inset-0 opacity-50" />
      <div className="animate-pulse-glow absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="animate-pulse-glow absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl delay-500" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="glass animate-slide-up inline-flex items-center gap-2 rounded-full px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                {t("badge")}
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-slide-up font-display text-2xl font-bold leading-tight delay-100 md:text-5xl lg:text-6xl">
              {t("title")}{" "}
              <span className="text-gradient">{t("titleHighlight")}</span>{" "}
              {t("titleEnd")}
            </h1>

            {/* Paragraph */}
            <p className="animate-slide-up max-w-xl text-sm text-muted-foreground delay-200 md:text-xl">
              {t("description")}{" "}
              <span className="font-semibold text-foreground">
                {t("descriptionHighlight")}
              </span>{" "}
              {t("descriptionEnd")}
            </p>

            {/* CTA Buttons */}
            <div className="animate-slide-up flex flex-col gap-4 delay-300 sm:flex-row">
              {session.status !== "authenticated" ? (
                <OtpAuthDialog onSuccess={goConstructor}>
                  <Button variant="hero" size="xl" className="!text-[#fff]">
                    {t("ctaPrimary")}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </OtpAuthDialog>
              ) : (
                <Button
                  onClick={goConstructor}
                  variant="hero"
                  size="xl"
                  className="!text-[#fff]"
                >
                  {t("ctaPrimary")}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              )}
              <Button variant="glass" size="xl" className="group">
                <Play className="h-5 w-5 text-primary" />
                {t("ctaSecondary")}
              </Button>
            </div>

            {/* Stats */}
            <div className="animate-slide-up delay-400 flex items-center justify-between gap-2 pt-4 text-center">
              <div>
                <div className="font-display text-3xl font-bold text-foreground">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("statsTemplates")}
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="font-display text-3xl font-bold text-foreground">
                  10k+
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("statsUsers")}
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="font-display text-3xl font-bold text-foreground">
                  99%
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("statsSatisfaction")}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Device Mockups */}
          <div className="animate-slide-in-right relative delay-200 lg:h-[600px]">
            {/* Laptop Mockup */}
            <div className="animate-float-slow relative z-10">
              <div className="rounded-2xl bg-secondary p-2 shadow-card">
                {/* Laptop Screen */}
                <div className="overflow-hidden rounded-xl bg-card">
                  {/* Browser Bar */}
                  <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-destructive/60" />
                      <div className="h-3 w-3 rounded-full bg-warning/60" />
                      <div className="h-3 w-3 rounded-full bg-success/60" />
                    </div>
                    <div className="mx-4 flex-1">
                      <div className="rounded-md bg-muted px-3 py-1 text-center text-xs text-muted-foreground">
                        botspace.uz/constructor
                      </div>
                    </div>
                  </div>

                  {/* Constructor Interface */}
                  <div className="min-h-[280px] bg-background p-4">
                    <div className="grid grid-cols-3 gap-3">
                      {/* Sidebar */}
                      <div className="space-y-2">
                        <div className="mb-2 text-xs text-muted-foreground">
                          Bloklar
                        </div>
                        {["Matn", "Rasm", "Tugma", "Menyu"].map((item, i) => (
                          <div
                            key={i}
                            className={`rounded-lg p-2 text-xs ${
                              i === 2
                                ? "animate-drag-demo border border-primary/50 bg-primary/20"
                                : "bg-muted"
                            }`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                      {/* Canvas */}
                      <div className="col-span-2 rounded-xl border border-dashed border-border bg-muted/50 p-3">
                        <div className="space-y-2">
                          <div className="rounded-lg border border-border bg-card p-2 text-xs">
                            Salom! Botimizga xush kelibsiz 👋
                          </div>
                          <div className="flex gap-2">
                            <div className="rounded-lg border border-primary/40 bg-primary/20 px-3 py-1.5 text-xs">
                              Mahsulotlar
                            </div>
                            <div className="rounded-lg border border-primary/40 bg-primary/20 px-3 py-1.5 text-xs">
                              Aksiyalar
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Laptop Base */}
              <div className="mx-8 h-3 rounded-b-xl bg-secondary" />
              <div className="mx-16 h-1 rounded-full bg-muted" />
            </div>

            {/* Connection Line */}
            <div className="animate-shimmer absolute bottom-20 right-24 h-px w-24 bg-gradient-to-r from-primary/50 to-transparent md:right-32" />

            {/* Floating Label */}
            <div className="glass animate-fade-in absolute bottom-32 right-0 rounded-lg px-3 py-2 text-xs delay-500 md:right-4">
              <span className="text-primary">→</span> {t("floatingLabel")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
