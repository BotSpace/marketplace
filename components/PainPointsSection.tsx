"use client";

import { Clock, ShieldAlert, Users, Wallet } from "lucide-react";
import { useTranslations } from "next-intl";

const PainPointsSection = () => {
  const t = useTranslations("PainPointsSection");

  const painPoints = [
    {
      icon: Clock,
      title: t("point1Title"),
      description: t("point1Description"),
    },
    {
      icon: Wallet,
      title: t("point2Title"),
      description: t("point2Description"),
    },
    {
      icon: ShieldAlert,
      title: t("point3Title"),
      description: t("point3Description"),
    },
    {
      icon: Users,
      title: t("point4Title"),
      description: t("point4Description"),
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t("badge")}
          </span>
          <h2 className="mb-6 mt-4 font-display text-3xl font-bold md:text-4xl">
            {t("title")}{" "}
            <span className="text-gradient">{t("titleHighlight")}</span>
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-gradient-card group rounded-2xl border border-border p-6 transition-all duration-300 hover:border-destructive/50 hover:shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 transition-colors group-hover:bg-destructive/20">
                <point.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition */}
        <div className="mt-16 text-center">
          <div className="glass inline-flex items-center gap-3 rounded-full px-6 py-3">
            <span className="text-muted-foreground">{t("solutionBadge")}</span>
            <span className="text-2xl">👇</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
