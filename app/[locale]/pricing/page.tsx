import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Boshlang'ich",
    price: "Bepul",
    period: "",
    description: "Sinab ko'rish uchun ideal",
    icon: Zap,
    features: [
      "1 ta bot yaratish",
      "100 ta foydalanuvchi",
      "Asosiy shablonlar",
      "Email yordam",
    ],
    buttonText: "Bepul boshlash",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Professional",
    price: "99,000",
    period: "so'm/oy",
    description: "O'sib borayotgan bizneslar uchun",
    icon: Crown,
    features: [
      "5 ta bot yaratish",
      "Cheksiz foydalanuvchi",
      "Barcha shablonlar",
      "To'lov integratsiyasi",
      "Analitika",
      "Prioritet yordam",
    ],
    buttonText: "Tanlash",
    buttonVariant: "hero" as const,
    popular: true,
  },
  {
    name: "Biznes",
    price: "249,000",
    period: "so'm/oy",
    description: "Katta jamoalar uchun",
    icon: Rocket,
    features: [
      "Cheksiz botlar",
      "Cheksiz foydalanuvchi",
      "Barcha shablonlar",
      "API kirish",
      "White-label",
      "Shaxsiy menejer",
      "24/7 yordam",
    ],
    buttonText: "Bog'lanish",
    buttonVariant: "outline" as const,
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="bg-gradient-hero min-h-screen">
      <Navbar />

      <main className="pb-20 pt-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="animate-slide-up mx-auto mb-16 max-w-3xl text-center">
            <h1 className="font-display mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Oddiy va <span className="text-gradient">shaffof</span> narxlar
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Yashirin to'lovlar yo'q. Istalgan vaqtda bekor qilish mumkin.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`animate-slide-up relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-card shadow-glow scale-105 border-2 border-primary"
                    : "glass hover:shadow-card"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-primary rounded-full px-4 py-1 text-sm font-semibold text-primary-foreground">
                      Eng mashhur
                    </span>
                  </div>
                )}

                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      plan.popular
                        ? "bg-gradient-primary shadow-button"
                        : "bg-secondary"
                    }`}
                  >
                    <plan.icon
                      className={`h-6 w-6 ${
                        plan.popular
                          ? "text-primary-foreground"
                          : "text-primary"
                      }`}
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="ml-1 text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>

                <p className="mb-6 text-muted-foreground">{plan.description}</p>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.buttonVariant}
                  className="w-full"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mx-auto mt-24 max-w-3xl">
            <h2 className="font-display mb-12 text-center text-3xl font-bold text-foreground">
              Ko'p so'raladigan savollar
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Bepul rejada qancha vaqt foydalana olaman?",
                  a: "Bepul reja cheksiz. Siz xohlagan vaqtingizgacha foydalanishingiz mumkin.",
                },
                {
                  q: "To'lovni qanday amalga oshiraman?",
                  a: "Payme, Click yoki bank kartasi orqali to'lashingiz mumkin.",
                },
                {
                  q: "Rejani istalgan vaqtda o'zgartira olamanmi?",
                  a: "Ha, rejangizni istalgan vaqtda yangilash yoki pasaytirish mumkin.",
                },
                {
                  q: "Pulimni qaytarib olsam bo'ladimi?",
                  a: "Ha, 14 kun ichida to'liq qaytarib olishingiz mumkin.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-6 transition-shadow hover:shadow-card"
                >
                  <h3 className="mb-2 font-semibold text-foreground">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-24 text-center">
            <div className="glass-strong mx-auto max-w-2xl rounded-2xl p-12">
              <h2 className="font-display mb-4 text-2xl font-bold text-foreground md:text-3xl">
                Hali aniq emasmisiz?
              </h2>
              <p className="mb-6 text-muted-foreground">
                Bepul demo olish uchun biz bilan bog'laning. Barcha
                savollaringizga javob beramiz.
              </p>
              <Button variant="hero" size="lg">
                Demo so'rash
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
