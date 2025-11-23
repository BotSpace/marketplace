"use client";

import { useState, useEffect } from "react";
import {
  Check,
  Zap,
  Building2,
  ArrowRight,
  MessageCircle,
  DollarSign,
  Shield,
  BarChart3,
  Users,
  Server,
  Clock,
  Globe,
} from "lucide-react";
import { BlurText } from "@/components/blur-text";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<
    "pay-per-use" | "enterprise"
  >("pay-per-use");

  useEffect(() => {
    setIsVisible(true);

    // Enhanced scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          entry.target.classList.add("animate-visible");
        }
      });
    }, observerOptions);

    // Observe all animation elements
    const scrollElements = document.querySelectorAll(".scroll-animate");
    scrollElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      scrollElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const payPerUseFeatures = [
    {
      icon: MessageCircle,
      title: "Xabarlar",
      description: "Har 1000 ta xabar uchun",
      price: "$0.50",
    },
    {
      icon: Server,
      title: "Server resurslari",
      description: "CPU va RAM ishlatish",
      price: "$0.10/soat",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Bepul - barcha metrikalar",
      price: "Bepul",
    },
    {
      icon: Shield,
      title: "Xavfsizlik",
      description: "SSL shifrlash va zaxira",
      price: "Bepul",
    },
    {
      icon: Users,
      title: "Foydalanuvchilar",
      description: "Cheksiz foydalanuvchilar",
      price: "Bepul",
    },
    {
      icon: Globe,
      title: "Ko'p tillilik",
      description: "Barcha tillar qo'llab-quvvatlanadi",
      price: "Bepul",
    },
  ];

  const enterpriseFeatures = [
    {
      icon: Building2,
      title: "Maxsus integratsiya",
      description: "Sizning tizimlaringiz bilan integratsiya",
    },
    {
      icon: Shield,
      title: "Premium xavfsizlik",
      description: "Korxona darajasi xavfsizlik va audit",
    },
    {
      icon: Users,
      title: "Dedicated support",
      description: "24/7 shaxsiy menejer va texnik yordam",
    },
    {
      icon: Zap,
      title: "Yuqori performance",
      description: "Garantiyalangan performance va SLA",
    },
    {
      icon: BarChart3,
      title: "Advanced analytics",
      description: "Maxsus hisobotlar va dashboardlar",
    },
    {
      icon: Clock,
      title: "Custom development",
      description: "Maxsus funksiyalar va modullar",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-primary/5 via-background to-background px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-6 text-center">
            <BlurText
              className={`text-4xl font-bold md:text-6xl ${
                isVisible ? "translate-y-0" : "translate-y-4"
              }`}
              delay={100}
              blurAmount={8}
            >
              Adolatli{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                narx modeli
              </span>
            </BlurText>
            <BlurText
              className={`mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl ${
                isVisible ? "translate-y-0" : "translate-y-4"
              }`}
              delay={300}
              blurAmount={6}
            >
              Faqat ishlatgan resurslarga to'lang. Hech qanday yashirin
              xarajatlar yoki keraksiz to'lovlar yo'q. Yoki korxona uchun maxsus
              yechim tanlang.
            </BlurText>
          </div>
        </div>
      </section>

      {/* Pricing Plans Toggle */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex justify-center">
            <div className="inline-flex rounded-full border border-border/50 bg-muted/30 p-1">
              <button
                onClick={() => setSelectedPlan("pay-per-use")}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  selectedPlan === "pay-per-use"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Pay-per-use
              </button>
              <button
                onClick={() => setSelectedPlan("enterprise")}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  selectedPlan === "enterprise"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Enterprise
              </button>
            </div>
          </div>

          {/* Pay-per-use Plan */}
          {selectedPlan === "pay-per-use" && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Pay-per-use modeli
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Faqat ishlatgan resurslarga to'lang. Hech qanday abonent
                  to'lovi yoki minimal summa yo'q.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {payPerUseFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <Card
                      key={idx}
                      className="scroll-animate group transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
                      style={{
                        animation: `slideInUp 0.5s ease-out forwards`,
                        animationDelay: `${idx * 0.1}s`,
                      }}
                    >
                      <CardHeader>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-all group-hover:scale-110">
                          <Icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl">
                          {feature.title}
                        </CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-primary">
                          {feature.price}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="mx-auto max-w-4xl">
                <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Qanday hisoblanadi?
                    </CardTitle>
                    <CardDescription>
                      Hisob-kitob misoli: oyiga 10,000 ta xabar yuborganingizda
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background/50 p-4">
                      <div>
                        <p className="font-medium">Xabarlar (10,000 ta)</p>
                        <p className="text-sm text-muted-foreground">
                          10 × $0.50 per 1000
                        </p>
                      </div>
                      <div className="text-lg font-semibold">$5.00</div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background/50 p-4">
                      <div>
                        <p className="font-medium">Server resurslari</p>
                        <p className="text-sm text-muted-foreground">
                          Minimal ishlatish
                        </p>
                      </div>
                      <div className="text-lg font-semibold">~$0.50</div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border-2 border-primary/50 bg-primary/5 p-4">
                      <div>
                        <p className="font-bold">Jami oylik to'lov</p>
                        <p className="text-sm text-muted-foreground">
                          Barcha xizmatlar bilan
                        </p>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        ~$5.50
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/template" className="w-full">
                      <Button className="w-full" size="lg">
                        Hozir boshlash
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}

          {/* Enterprise Plan */}
          {selectedPlan === "enterprise" && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Enterprise yechim
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Katta kompaniyalar va tashkilotlar uchun maxsus yechimlar.
                  Barcha funksiyalar va shaxsiy yordam.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {enterpriseFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <Card
                      key={idx}
                      className="scroll-animate group transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
                      style={{
                        animation: `slideInUp 0.5s ease-out forwards`,
                        animationDelay: `${idx * 0.1}s`,
                      }}
                    >
                      <CardHeader>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-all group-hover:scale-110">
                          <Icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl">
                          {feature.title}
                        </CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>

              <div className="mx-auto max-w-4xl">
                <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Enterprise paket xususiyatlari
                    </CardTitle>
                    <CardDescription>
                      Barcha funksiyalar va maxsus yechimlar
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {[
                        "Cheksiz xabarlar va resurslar",
                        "Maxsus integratsiyalar va API",
                        "Dedicated server va infrastructure",
                        "24/7 shaxsiy menejer va support",
                        "Custom development va modullar",
                        "Advanced analytics va reporting",
                        "Korxona darajasi xavfsizlik",
                        "SLA garantiyasi (99.9% uptime)",
                        "Training va onboarding",
                        "Priority feature requests",
                      ].map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 rounded-lg border border-border/50 bg-background/50 p-3"
                        >
                          <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <div className="w-full text-center">
                      <p className="mb-2 text-sm text-muted-foreground">
                        Narx biznes ehtiyojlaringizga qarab belgilanadi
                      </p>
                      <p className="text-2xl font-bold">Individual narx</p>
                    </div>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full" size="lg" variant="outline">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Biz bilan bog'lanish
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="scroll-animate bg-muted/20 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Tez-tez so'raladigan savollar
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Pay-per-use modelida minimal to'lov bormi?",
                answer:
                  "Yo'q, hech qanday minimal to'lov yoki abonent to'lovi yo'q. Faqat ishlatgan resurslarga to'laysiz.",
              },
              {
                question: "Qancha vaqt ichida to'lov amalga oshadi?",
                answer:
                  "To'lovlar real-time hisoblanadi va oy oxirida avtomatik ravishda hisobdan yechiladi.",
              },
              {
                question: "Enterprise paket uchun qanday narx?",
                answer:
                  "Enterprise narx biznes ehtiyojlaringizga qarab belgilanadi. Biz bilan bog'laning va individual taklif oling.",
              },
              {
                question: "To'lov usullari qanday?",
                answer:
                  "Payme, Click, Uzum va boshqa xalqaro to'lov tizimlari qo'llab-quvvatlanadi.",
              },
            ].map((faq, idx) => (
              <Card
                key={idx}
                className="scroll-animate"
                style={{
                  animation: `slideInUp 0.5s ease-out forwards`,
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="scroll-animate-scale px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <Card className="border-primary/30 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold md:text-4xl">
                Hozir boshlang!
              </CardTitle>
              <CardDescription className="text-lg">
                Bepul shablondan boshlang va faqat ishlatgan resurslarga to'lang
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col gap-4 sm:flex-row">
              <Link href="/template" className="flex-1">
                <Button className="w-full" size="lg">
                  Shablonlarni ko'rish
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact" className="flex-1">
                <Button className="w-full" size="lg" variant="outline">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Biz bilan bog'lanish
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}

