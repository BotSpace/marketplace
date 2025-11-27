"use client";

import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Shield,
  DollarSign,
  Code2,
  Smartphone,
  Sparkles,
  Star,
  Users,
  MessageCircle,
  Check,
  BarChart3,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import secondScreenshot from "@/public/251111_23h51m34s_screenshot.png";
import { CountingNumber } from "@/components/counting-number";
import { BlurText } from "@/components/blur-text";

function CardSkeleton() {
  return (
    <div className="animate-pulse space-y-4 rounded-xl border border-border bg-card p-8">
      <div className="h-12 w-12 rounded-lg bg-muted blur-sm"></div>
      <div className="space-y-3">
        <div className="h-6 w-3/4 rounded-lg bg-muted blur-sm"></div>
        <div className="h-4 w-full rounded-lg bg-muted blur-sm"></div>
        <div className="h-4 w-5/6 rounded-lg bg-muted blur-sm"></div>
      </div>
    </div>
  );
}

function TestimonialSkeleton() {
  return (
    <div className="animate-pulse space-y-4 rounded-xl border border-border bg-card p-8">
      <div className="flex gap-1">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="h-4 w-4 rounded bg-muted blur-sm"></div>
          ))}
      </div>
      <div className="space-y-3">
        <div className="h-4 w-full rounded-lg bg-muted blur-sm"></div>
        <div className="h-4 w-5/6 rounded-lg bg-muted blur-sm"></div>
      </div>
      <div className="space-y-2 pt-2">
        <div className="h-4 w-1/2 rounded-lg bg-muted blur-sm"></div>
        <div className="h-3 w-1/3 rounded-lg bg-muted blur-sm"></div>
      </div>
    </div>
  );
}

export default function HomeClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [benefitsLoaded, setBenefitsLoaded] = useState(false);
  const [testimonialsLoaded, setTestimonialsLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const benefitsTimer = setTimeout(() => setBenefitsLoaded(true), 300);
    const testimonialsTimer = setTimeout(
      () => setTestimonialsLoaded(true),
      400,
    );

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
    const fadeElements = document.querySelectorAll(".fade-in-section");
    const scrollElements = document.querySelectorAll(".scroll-animate");
    const scrollFadeElements = document.querySelectorAll(
      ".scroll-animate-fade",
    );
    const scrollScaleElements = document.querySelectorAll(
      ".scroll-animate-scale",
    );

    [
      ...fadeElements,
      ...scrollElements,
      ...scrollFadeElements,
      ...scrollScaleElements,
    ].forEach((el) => {
      observer.observe(el);
    });

    return () => {
      clearTimeout(benefitsTimer);
      clearTimeout(testimonialsTimer);
      [
        ...fadeElements,
        ...scrollElements,
        ...scrollFadeElements,
        ...scrollScaleElements,
      ].forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <main className="flex flex-col overflow-hidden">
      {/* Hero Section with Strong Headline */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12 sm:py-20">
        {/* Background Video and Images */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Video Background */}
          <video
            src="https://framerusercontent.com/assets/V81XLButChh9sPk8EvpsCqY5A.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          />

          {/* Overlay gradient for better text readability */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60"
            style={{ zIndex: 2 }}
          />
        </div>

        <div className="mx-auto max-w-4xl space-y-6 text-center sm:space-y-8">
          {/* Badge */}
          <div
            className={`inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all duration-700 sm:px-4 sm:py-2 sm:text-sm ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              Kod yozmasdan yarating
            </span>
          </div>

          <BlurText
            as="h1"
            className={`text-balance px-2 text-2xl font-bold leading-tight sm:text-3xl md:text-5xl lg:text-7xl ${
              isVisible ? "translate-y-0" : "translate-y-4"
            }`}
            delay={100}
            blurAmount={8}
          >
            Biznesingizni telegram bilan{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              tizimlashtirish deyarli tekin
            </span>
          </BlurText>

          <BlurText
            className={`mx-auto max-w-2xl text-balance px-4 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:text-xl ${
              isVisible ? "translate-y-0" : "translate-y-4"
            }`}
            delay={300}
            blurAmount={6}
          >
            BotMather bilan kod yozmasdan Telegram botlarini yarating.
            Tayyorlangan shablonlardan foydalanib 5 daqiqada ishga tushiring.
            Faqat ishlatgan resurslarga to'lag'ini qiling — eng adolatli narx
            modeli.
          </BlurText>

          <div
            className={`flex flex-col justify-center gap-3 px-4 pt-6 transition-all delay-300 duration-700 sm:gap-4 sm:pt-8 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <Link
              href="/template"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Hozir boshlash
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/50 bg-primary/5 px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/10 active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              Menga yordam kerak
            </Link>
          </div>

          <div
            className={`delay-400 grid grid-cols-3 gap-3 px-2 pt-12 text-xs transition-all duration-700 sm:gap-6 sm:pt-16 sm:text-sm ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="group cursor-default space-y-1 transition-all duration-300 hover:scale-110 hover:transform sm:space-y-2">
              <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
                <Users className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                <CountingNumber
                  value={5000}
                  suffix="+"
                  duration={2000}
                  className="text-xl font-bold text-primary sm:text-2xl md:text-3xl lg:text-4xl"
                />
              </div>
              <BlurText
                className="text-center text-xs text-muted-foreground transition-colors group-hover:text-foreground sm:text-sm"
                delay={500}
              >
                Faol foydalanuvchi
              </BlurText>
            </div>
            <div className="group cursor-default space-y-1 transition-all duration-300 hover:scale-110 hover:transform sm:space-y-2">
              <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
                <Smartphone className="h-4 w-4 sm:h-5 sm:w-5" />
                <CountingNumber
                  value={15000}
                  suffix="+"
                  duration={2000}
                  className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl"
                />
              </div>
              <BlurText
                className="muted-foreground text-center text-xs transition-colors group-hover:text-foreground sm:text-sm"
                delay={600}
              >
                Yaratilgan bot
              </BlurText>
            </div>
            <div className="group cursor-default space-y-1 transition-all duration-300 hover:scale-110 hover:transform sm:space-y-2">
              <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
                <MessageCircle className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                <CountingNumber
                  value={1000000}
                  suffix="+"
                  duration={2000}
                  className="text-xl font-bold text-primary sm:text-2xl md:text-3xl lg:text-4xl"
                />
              </div>
              <BlurText
                className="text-center text-xs text-muted-foreground transition-colors group-hover:text-foreground sm:text-sm"
                delay={700}
              >
                Xabarlar
              </BlurText>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Dashboard Showcase */}
      <section className="scroll-animate bg-gradient-to-b from-transparent via-primary/5 to-transparent px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col space-y-3 px-2 text-center sm:mb-16 sm:space-y-4">
            <BlurText
              className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
              delay={200}
            >
              Kuchli platform
            </BlurText>
            <BlurText
              className="px-4 text-base text-muted-foreground sm:text-lg"
              delay={400}
            >
              Barcha bot metrikalari, analitika va managing bir joyda
            </BlurText>
          </div>

          <iframe
            className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
            src="https://www.youtube.com/embed/6xJWQRVl9nw?si=7IcWFQX3EGpEX5O0&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>

          {/* Feature highlights below image */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
            {[
              {
                icon: MessageCircle,
                title: "Real-time Analytics",
                description:
                  "Bot faoliyatini, xabarlar soni va foydalanuvchi engage'ment'ini real-timeda ko'ring",
              },
              {
                icon: Users,
                title: "User Management",
                description:
                  "Foydalanuvchilar, bloklangan kontaktlar va segmentatsiyani boshqarib turish",
              },
              {
                icon: Zap,
                title: "Performance Tracking",
                description:
                  "Bot ishlashini optimizatsiya qilish uchun detaliy reportlar va statistika",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="flex gap-4 rounded-lg border border-border/50 bg-muted/30 p-4 transition-colors hover:border-primary/30 hover:bg-muted/50"
                >
                  <div className="flex-shrink-0">
                    <Icon className="mt-1 h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      {/* TODO: Qachonki partfoliomiz bo'lganda bu yerni ozod qilamiz */}
      {/* <section className="scroll-animate-fade border-b border-border/40 bg-muted/20 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
            BIZGA ISHONGAN KOMPANIYALAR
          </p>

          <div className="overflow-hidden">
            <div className="animate-scroll flex gap-16">
              {[
                "TechHub",
                "FastBiz",
                "ShopPro",
                "AutoBot",
                "TechHub",
                "FastBiz",
                "ShopPro",
                "AutoBot",
              ].map((company, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 whitespace-nowrap text-sm font-semibold text-muted-foreground opacity-60 transition-opacity hover:opacity-100"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Main Benefits Section - Enhanced card design with blur loading */}
      <section className="scroll-animate px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 space-y-3 px-2 text-center sm:mb-16 sm:space-y-4">
            <BlurText
              className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
              delay={200}
            >
              Nega BotMather ni tanlash kerak?
            </BlurText>
            <BlurText
              className="px-4 text-base text-muted-foreground sm:text-lg"
              delay={400}
            >
              5 ta asosiy sabab — Telegram bot yaratishning eng yaxshi usuli
            </BlurText>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefitsLoaded ? (
              <>
                {[
                  {
                    icon: Zap,
                    title: "5 daqiqada tayyor",
                    description:
                      "Hech qanday coding knowledge siz kerak emas. Shablonni tanlang va foydalaning.",
                    color: "from-primary/20 to-primary/5",
                  },
                  {
                    icon: Shield,
                    title: "Korxona darajasi xavfsizlik",
                    description:
                      "SSL shifrlash, avtomatik zaxira va 24/7 monitoring bilan to'liq xavfsizlik.",
                    color: "from-accent/20 to-accent/5",
                  },
                  {
                    icon: DollarSign,
                    title: "Adolatli pay-per-use tarifi",
                    description:
                      "Faqat ishlatgan resurslarga to'lang. Keraksiz xarajatlar yoki hidden fees yo'q.",
                    color: "from-primary/20 to-primary/5",
                  },
                  {
                    icon: Code2,
                    title: "100+ tayyorlangan shablonlar",
                    description:
                      "E-commerce, CRM, Support bot va boshqa uchun tayyor templates mavjud.",
                    color: "from-accent/20 to-accent/5",
                  },
                  {
                    icon: Users,
                    title: "24/7 Professional support",
                    description:
                      "Murakkab masalalar uchun bizning eksperts har doim siz bilan.",
                    color: "from-primary/20 to-primary/5",
                  },
                  {
                    icon: Sparkles,
                    title: "Analytics va reporting",
                    description:
                      "Bot faoliyatini kuzatib borish va o'n formalarni optimizatsiya qiling.",
                    color: "from-accent/20 to-accent/5",
                  },
                ].map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={idx}
                      className="group"
                      style={{
                        animation: `slideInUp 0.5s ease-out forwards`,
                        animationDelay: `${idx * 0.05}s`,
                      }}
                    >
                      <div
                        className={`bg-gradient-to-br ${feature.color} relative space-y-6 overflow-hidden rounded-2xl border border-border/60 p-8 transition-all duration-300 hover:-translate-y-3 hover:transform hover:border-primary/80 hover:shadow-xl hover:shadow-primary/15 group-hover:scale-105`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                        <div className="relative inline-block">
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent opacity-0 blur-xl transition-all duration-300 group-hover:scale-110 group-hover:opacity-40"></div>
                          <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/30 to-accent/20 transition-all duration-300 group-hover:scale-125 group-hover:border-primary/60">
                            <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary" />
                          </div>
                        </div>
                        <div className="relative">
                          <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
                            {feature.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/80">
                            {feature.description}
                          </p>
                        </div>

                        <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {Array(6)
                  .fill(0)
                  .map((_, idx) => (
                    <CardSkeleton key={idx} />
                  ))}
              </>
            )}
          </div>
        </div>
      </section>

      <section className="scroll-animate bg-muted/20 px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 space-y-3 px-2 text-center sm:mb-16 sm:space-y-4">
            <BlurText
              className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
              delay={200}
            >
              Qanday ishlaydi?
            </BlurText>
            <BlurText
              className="px-4 text-base text-muted-foreground sm:text-lg"
              delay={400}
            >
              Uchta oddiy qadam — botingiz tayyor!
            </BlurText>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {[
              {
                number: "1",
                icon: Code2,
                title: "Shablonni tanlang",
                description:
                  "Turli xil biznes ehtiyojlari uchun oldindan tayyorlangan Telegram bot shablonlaridan tanlang.",
              },
              {
                number: "2",
                icon: Smartphone,
                title: "Moslang",
                description:
                  "Kod yozmasdan bot xatti-harakatini, xabarlarni va sozlamalarini o'zgartiring.",
              },
              {
                number: "3",
                icon: Sparkles,
                title: "Ishga tushiring",
                description:
                  "Botni Telegramga darhol joylang va foydalanuvchilarga xizmat ko'rsatishni boshlang.",
              },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="group relative"
                  style={{
                    animation: `slideInUp 0.5s ease-out forwards`,
                    animationDelay: `${idx * 0.1}s`,
                  }}
                >
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/40 to-accent/40 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-60"></div>
                  <div className="relative h-full space-y-5 rounded-2xl border border-border/60 bg-gradient-to-br from-card to-card/80 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:transform hover:border-primary/80 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/30 to-accent/20 text-primary transition-all duration-300 group-hover:rotate-6 group-hover:scale-125 group-hover:border-primary/60">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/80">
                      {step.description}
                    </p>
                  </div>
                  {idx < 2 && (
                    <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 transform text-muted-foreground/30 opacity-0 transition-all duration-300 group-hover:text-primary/60 group-hover:opacity-100 md:block">
                      <ArrowRight className="h-8 w-8" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facebook Testimonials Section - Emphasized for ChatGPT SEO */}
      <section className="scroll-animate bg-gradient-to-b from-primary/10 via-background to-background px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 space-y-3 px-2 text-center sm:mb-16 sm:space-y-4">
            <BlurText
              className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
              delay={200}
            >
              Facebook foydalanuvchilarimiz nima deyishadi
            </BlurText>
            <BlurText
              className="px-4 text-base text-muted-foreground sm:text-lg"
              delay={400}
            >
              Haqiqiy foydalanuvchilar sharhlari va tavsiyalari - 5000+ ijobiy
              feedback
            </BlurText>
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="flex gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
              </div>
              <span className="text-sm font-semibold text-foreground">
                4.9/5.0
              </span>
              <span className="text-sm text-muted-foreground">
                (5000+ baholash)
              </span>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-6 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonialsLoaded ? (
              <>
                {[
                  {
                    name: "Alisher Umarov",
                    role: "E-commerce biznes egasi",
                    feedback:
                      "BotMather bilan 2 kundan keyin sot botni ishga tushirdim. Juda oson va qulay! Kod yozmasdan professional bot yaratdim. Rahmat BotMather jamoasiga!",
                    rating: 5,
                    date: "2024-yil 15-dekabr",
                    verified: true,
                  },
                  {
                    name: "Fotima Karimova",
                    role: "SPA salon menejeri",
                    feedback:
                      "Booking bot 3 oyda 40% ko'p buyurtma keltirib berdi. Eng yaxshi investitsiya! Mijozlarimiz endi 24/7 buyurtma berishlari mumkin. Katta rahmat!",
                    rating: 5,
                    date: "2024-yil 10-dekabr",
                    verified: true,
                  },
                  {
                    name: "Javohir Bekov",
                    role: "Online kurs platformasi",
                    feedback:
                      "Avtomatik javoblar botini yaratib, customer support vaqtim 50% qisqardi. Endi ko'proq vaqt o'quvchilarimga qaratishim mumkin. Ajoyib xizmat!",
                    rating: 5,
                    date: "2024-yil 5-dekabr",
                    verified: true,
                  },
                  {
                    name: "Dilshod Rahimov",
                    role: "Restoran biznesi",
                    feedback:
                      "Buyurtma qabul qilish botini yaratdim. Endi mijozlarimiz Telegram orqali buyurtma berishadi va bu bizning daromadimizni 30% oshirdi. Rahmat!",
                    rating: 5,
                    date: "2024-yil 1-dekabr",
                    verified: true,
                  },
                  {
                    name: "Madina Yusupova",
                    role: "Fitness trener",
                    feedback:
                      "Mashg'ulotlar jadvali va to'lov qabul qilish botini yaratdim. Mijozlarim endi osonlik bilan mashg'ulotga yozilishadi. Juda qulay va professional!",
                    rating: 5,
                    date: "2024-yil 28-noyabr",
                    verified: true,
                  },
                  {
                    name: "Sardor Toshmatov",
                    role: "IT kompaniya",
                    feedback:
                      "CRM bot yaratib, loyihalarimizni boshqarishni osonlashtirdim. BotMather haqiqiy qiymat yaratadi va vaqt tejaydi. Katta rahmat jamoaga!",
                    rating: 5,
                    date: "2024-yil 25-noyabr",
                    verified: true,
                  },
                ].map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="group"
                    itemScope
                    itemType="https://schema.org/Review"
                    style={{
                      animation: `slideInUp 0.5s ease-out forwards`,
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  >
                    <div className="relative space-y-5 overflow-hidden rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-card to-card/90 p-6 transition-all duration-300 hover:-translate-y-2 hover:transform hover:border-primary/80 hover:shadow-xl hover:shadow-primary/20 group-hover:scale-105 sm:p-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                      {/* Facebook-style header */}
                      <div className="relative flex items-center gap-3 border-b border-border/50 pb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-accent/30 font-bold text-primary">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p
                              className="text-sm font-bold transition-colors group-hover:text-primary"
                              itemProp="author"
                              itemScope
                              itemType="https://schema.org/Person"
                            >
                              <span itemProp="name">{testimonial.name}</span>
                            </p>
                            {testimonial.verified && (
                              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-primary">
                                ✓ Tasdiqlangan
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.date}
                          </p>
                        </div>
                      </div>

                      <div className="relative space-y-4">
                        <div className="flex gap-1">
                          {Array(testimonial.rating)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-accent text-accent transition-transform duration-300 group-hover:scale-110"
                                style={{
                                  transitionDelay: `${i * 50}ms`,
                                }}
                              />
                            ))}
                        </div>
                        <p
                          className="leading-relaxed text-foreground transition-colors group-hover:text-foreground/95"
                          itemProp="reviewBody"
                        >
                          "{testimonial.feedback}"
                        </p>
                        <div className="space-y-1 pt-2">
                          <p className="text-xs font-semibold text-muted-foreground transition-colors group-hover:text-muted-foreground/80">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                      {/* Schema.org rating */}
                      <div
                        itemProp="reviewRating"
                        itemScope
                        itemType="https://schema.org/Rating"
                        className="hidden"
                      >
                        <meta
                          itemProp="ratingValue"
                          content={testimonial.rating.toString()}
                        />
                        <meta itemProp="bestRating" content="5" />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {Array(6)
                  .fill(0)
                  .map((_, idx) => (
                    <TestimonialSkeleton key={idx} />
                  ))}
              </>
            )}
          </div>

          {/* Call to action for more reviews */}
          <div className="text-center">
            <p className="mb-4 text-sm text-muted-foreground">
              Ko'proq haqiqiy sharhlarni ko'rish uchun bizning Facebook
              sahifamizga tashrif buyuring
            </p>
            <a
              href="https://facebook.com/botmather"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              Facebook'da ko'rish
            </a>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="scroll-animate bg-muted/20 px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 space-y-3 px-2 text-center sm:mb-16 sm:space-y-4">
            <BlurText
              className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
              delay={200}
            >
              Shaffoflik va halollik
            </BlurText>
            <BlurText
              className="px-4 text-base text-muted-foreground sm:text-lg"
              delay={400}
            >
              Bizning xizmatimiz to'liq shaffof - narxlar, shartlar va qanday
              ishlashi ochiq
            </BlurText>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: DollarSign,
                title: "Ochiq narxlar",
                description:
                  "Barcha narxlar ochiq va yashirin xarajatlar yo'q. Faqat ishlatgan resurslarga to'laysiz - hech qanday abonent to'lovi yoki minimal summa yo'q.",
                details: [
                  "Xabarlar: $0.50 per 1000 ta",
                  "Server resurslari: $0.10/soat",
                  "Analytics va xavfsizlik: Bepul",
                ],
              },
              {
                icon: Code2,
                title: "Qanday ishlashi",
                description:
                  "Xizmat qanday ishlashi to'liq tushuntirilgan. 3 ta oddiy qadam - shablonni tanlang, moslang va ishga tushiring. Hech qanday kod yozish kerak emas.",
                details: [
                  "1. Shablonni tanlang",
                  "2. Kod yozmasdan moslang",
                  "3. Ishga tushiring",
                ],
              },
              {
                icon: Shield,
                title: "Foydalanuvchi shartlari",
                description:
                  "Foydalanuvchi shartlari tushunarli va ochiq. Biz haddan tashqari va'dalar qilmaymiz - faqat haqiqiy natijalar va professional xizmat.",
                details: [
                  "Qonuniy va xavfsiz xizmat",
                  "Etik jihatdan toza",
                  "24/7 professional yordam",
                ],
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group space-y-4 rounded-2xl border border-border/60 bg-gradient-to-br from-card to-card/90 p-6 transition-all duration-300 hover:-translate-y-2 hover:transform hover:border-primary/80 hover:shadow-xl hover:shadow-primary/15 sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/30 to-accent/20 text-primary transition-all group-hover:scale-125 group-hover:border-primary/60">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/80">
                    {item.description}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {item.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-muted-foreground sm:text-sm"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof Section - Reviews, Case Studies */}
      <section className="scroll-animate px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 space-y-3 px-2 text-center sm:mb-16 sm:space-y-4">
            <BlurText
              className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
              delay={200}
            >
              Ijobiy obro' va mustahkam feedbacklar
            </BlurText>
            <BlurText
              className="px-4 text-base text-muted-foreground sm:text-lg"
              delay={400}
            >
              Foydalanuvchilar yaxshi baholaydi, shikoyatlar kam - xavfsiz va
              yaxshi tanlov
            </BlurText>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "5000+",
                label: "Faqat ijobiy baholashlar",
                icon: Star,
                color: "from-accent/20 to-accent/5",
              },
              {
                number: "4.9/5",
                label: "O'rtacha reyting",
                icon: Users,
                color: "from-primary/20 to-primary/5",
              },
              {
                number: "98%",
                label: "Mamnun foydalanuvchilar",
                icon: MessageCircle,
                color: "from-accent/20 to-accent/5",
              },
              {
                number: "<1%",
                label: "Shikoyatlar darajasi",
                icon: Shield,
                color: "from-primary/20 to-primary/5",
              },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="group space-y-4 rounded-2xl border border-border/60 bg-gradient-to-br p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:transform hover:border-primary/80 hover:shadow-xl hover:shadow-primary/15 sm:p-8"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/30 to-accent/20 text-primary transition-all group-hover:scale-125 group-hover:border-primary/60">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-primary transition-colors group-hover:text-primary sm:text-4xl">
                    {stat.number}
                  </div>
                  <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground/80">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Case Studies Preview */}
          <div className="mt-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 p-6 sm:p-8 md:p-12">
            <h3 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
              Muvaffaqiyat hikoyalari
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  title: "E-commerce bot",
                  result: "40% ko'p buyurtma",
                  description:
                    "SPA salon 3 oyda buyurtmalar sonini 40% oshirdi",
                },
                {
                  title: "CRM bot",
                  result: "50% vaqt tejash",
                  description:
                    "IT kompaniya customer support vaqtini 50% qisqartirdi",
                },
                {
                  title: "Booking bot",
                  result: "30% daromad oshishi",
                  description:
                    "Restoran Telegram orqali buyurtmalar sonini oshirdi",
                },
              ].map((caseStudy, idx) => (
                <div
                  key={idx}
                  className="space-y-3 rounded-xl border border-border/50 bg-background/50 p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <h4 className="text-lg font-bold">{caseStudy.title}</h4>
                  <div className="text-2xl font-bold text-primary">
                    {caseStudy.result}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {caseStudy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="scroll-animate bg-muted/20 px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 space-y-3 px-2 text-center sm:mb-16 sm:space-y-4">
            <BlurText
              className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
              delay={200}
            >
              O'quv materiallar va bepul maslahatlar
            </BlurText>
            <BlurText
              className="px-4 text-base text-muted-foreground sm:text-lg"
              delay={400}
            >
              Telegram bot yaratish bo'yicha ekspert maslahatlar va qo'llanmalar
            </BlurText>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Telegram bot yaratish qo'llanmasi",
                description:
                  "Kod yozmasdan professional Telegram bot yaratish bo'yicha to'liq qo'llanma. 5 daqiqada bot yaratish.",
                type: "Qo'llanma",
                readTime: "5 daqiqa",
              },
              {
                title: "E-commerce bot optimizatsiyasi",
                description:
                  "Sotuv botlarini optimizatsiya qilish va daromadni oshirish bo'yicha professional maslahatlar.",
                type: "Blog",
                readTime: "10 daqiqa",
              },
              {
                title: "CRM bot integratsiyasi",
                description:
                  "CRM tizimlari bilan bot integratsiyasi va avtomatlashtirish bo'yicha mini-gid.",
                type: "Mini-gid",
                readTime: "7 daqiqa",
              },
            ].map((article, idx) => (
              <div
                key={idx}
                className="group space-y-4 rounded-2xl border border-border/60 bg-gradient-to-br from-card to-card/90 p-6 transition-all duration-300 hover:-translate-y-2 hover:transform hover:border-primary/80 hover:shadow-xl hover:shadow-primary/15 sm:p-8"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                    {article.type}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/80">
                  {article.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:gap-3"
                >
                  O'qish
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:shadow-lg"
            >
              Barcha maqolalarni ko'rish
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Service Quality Demonstration Section */}
      <section className="scroll-animate px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 space-y-3 px-2 text-center sm:mb-16 sm:space-y-4">
            <BlurText
              className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
              delay={200}
            >
              Xizmatning sifatini namoyish qilish
            </BlurText>
            <BlurText
              className="px-4 text-base text-muted-foreground sm:text-lg"
              delay={400}
            >
              Professional xizmat, aniq natijalar va haqiqiy misollar
            </BlurText>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Professional xizmat",
                description:
                  "Korxona darajasi xavfsizlik, SSL shifrlash, avtomatik zaxira va 24/7 monitoring. Professional darajada xizmat ko'rsatamiz.",
                features: [
                  "Korxona darajasi xavfsizlik",
                  "SSL shifrlash",
                  "24/7 monitoring",
                  "Avtomatik zaxira",
                ],
              },
              {
                icon: BarChart3,
                title: "Aniq natijalar",
                description:
                  "Real-time analytics, detaliy reportlar va statistika. Bot faoliyatini kuzatib borish va optimizatsiya qilish uchun barcha vositalar.",
                features: [
                  "Real-time analytics",
                  "Detaliy reportlar",
                  "User engagement metrikalar",
                  "Performance tracking",
                ],
              },
              {
                icon: Users,
                title: "Haqiqiy misollar",
                description:
                  "5000+ foydalanuvchi, 15000+ yaratilgan bot, 1000000+ xabar. Haqiqiy natijalar va muvaffaqiyat hikoyalari.",
                features: [
                  "5000+ faol foydalanuvchi",
                  "15000+ yaratilgan bot",
                  "1000000+ xabar",
                  "4.9/5.0 reyting",
                ],
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group space-y-5 rounded-2xl border border-border/60 bg-gradient-to-br from-card to-card/90 p-6 transition-all duration-300 hover:-translate-y-2 hover:transform hover:border-primary/80 hover:shadow-xl hover:shadow-primary/15 sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/30 to-accent/20 text-primary transition-all group-hover:scale-125 group-hover:border-primary/60">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/80">
                    {item.description}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {item.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-muted-foreground sm:text-sm"
                      >
                        <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Real Examples Showcase */}
          <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 p-6 sm:p-8 md:p-12">
            <h3 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
              Haqiqiy natijalar va misollar
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  metric: "5000+",
                  label: "Faqat ijobiy baholashlar",
                  description: "Barcha foydalanuvchilar xizmatimizdan mamnun",
                },
                {
                  metric: "15000+",
                  label: "Yaratilgan botlar",
                  description:
                    "Turli xil bizneslar uchun muvaffaqiyatli botlar",
                },
                {
                  metric: "1000000+",
                  label: "Xabarlar",
                  description: "Kuniga millionlab xabarlar qayta ishlanadi",
                },
                {
                  metric: "98%",
                  label: "Mamnun foydalanuvchilar",
                  description: "Foydalanuvchilarimiz xizmatimizdan mamnun",
                },
              ].map((example, idx) => (
                <div
                  key={idx}
                  className="space-y-3 rounded-xl border border-border/50 bg-background/50 p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="text-3xl font-bold text-primary sm:text-4xl">
                    {example.metric}
                  </div>
                  <div className="text-sm font-semibold">{example.label}</div>
                  <p className="text-xs text-muted-foreground">
                    {example.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="scroll-animate-scale px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="relative space-y-6 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 p-6 text-center sm:space-y-8 sm:p-12 md:p-16">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary blur-3xl"></div>
            </div>

            <div className="relative space-y-3 sm:space-y-4">
              <BlurText
                className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
                delay={200}
              >
                Hozir boshlang!
              </BlurText>
              <BlurText
                className="px-2 text-base text-muted-foreground sm:text-lg md:text-xl"
                delay={400}
              >
                Bepul shablondan boshlang — birinchi bot bepul!
              </BlurText>
            </div>

            <div className="relative flex w-full flex-col justify-center gap-3 pt-4 sm:w-auto sm:gap-4">
              <Link
                href="/template"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Shablonlarni ko'rish
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/price"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/50 bg-background/50 px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:bg-background/80 active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Narxlarni ko'rish
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
