import { Button } from "@/components/ui/button";
import {
  Edit3,
  ShoppingCart,
  Calendar,
  Pizza,
  Briefcase,
  Heart,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const templates = [
  {
    icon: ShoppingCart,
    title: "E-commerce Bot",
    description: "Mahsulotlar katalogi, savat, buyurtma berish",
    color: "bg-telegram/10 text-telegram",
    popular: true,
  },
  {
    icon: Pizza,
    title: "Restoran Bot",
    description: "Menyu, buyurtma, yetkazib berish",
    color: "bg-warning/10 text-warning",
    popular: false,
  },
  {
    icon: Calendar,
    title: "Booking Bot",
    description: "Uchrashuv belgilash, eslatmalar",
    color: "bg-success/10 text-success",
    popular: false,
  },
  {
    icon: Briefcase,
    title: "Biznes Bot",
    description: "FAQ, aloqa, xizmatlar ro'yxati",
    color: "bg-accent/10 text-accent",
    popular: true,
  },
  {
    icon: Heart,
    title: "Support Bot",
    description: "Mijozlar bilan muloqot, yordam",
    color: "bg-destructive/10 text-destructive",
    popular: false,
  },
];

const ShowcaseSection = () => {
  return (
    <section id="templates" className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Shablonlar
          </span>
          <h2 className="mb-6 mt-4 font-display text-3xl font-bold md:text-4xl">
            Noldan boshlashga erinasizmi?{" "}
            <span className="text-gradient">Tayyorini oling</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Bizda 50+ tayyor shablonlar bor. Ularni 100% o'zingizga moslab
            o'zgartirishingiz mumkin. Ranglar, matnlar, rasmlar — hammasi
            o'zgaradi.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => (
            <div
              key={index}
              className="bg-gradient-card group relative rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-card"
            >
              {/* Popular Badge */}
              {template.popular && (
                <div className="bg-gradient-primary absolute -top-3 right-4 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Mashhur
                </div>
              )}

              {/* Icon */}
              <div
                className={`h-14 w-14 rounded-xl ${template.color} mb-4 flex items-center justify-center transition-transform group-hover:scale-110`}
              >
                <template.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="mb-2 font-display text-lg font-semibold">
                {template.title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {template.description}
              </p>

              {/* Edit Button */}
              <Button
                variant="ghost"
                size="sm"
                className="group/btn text-primary hover:text-primary"
                asChild
              >
                <Link href={"/templates"}>
                  Ko'proq
                  <ArrowRight className="" />
                </Link>
              </Button>
            </div>
          ))}

          {/* More Templates Card */}
          <div className="flex min-h-[200px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border p-6 text-center transition-colors hover:border-primary/50">
            <div className="text-gradient mb-2 font-display text-4xl font-bold">
              45+
            </div>
            <div className="mb-4 text-sm text-muted-foreground">
              Boshqa shablonlar
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href={"/templates"}>Hammasini ko'rish</Link>
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild variant="hero" size="lg" className="group">
            <Link href={"/templates"}>
              Shablonlarni ko'rish
              <Edit3 className="h-4 w-4 transition-transform group-hover:rotate-12" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
