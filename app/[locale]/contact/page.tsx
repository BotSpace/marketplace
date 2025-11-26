"use client";

import {
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  MessageSquare,
  MessageCircleMore,
  Instagram,
} from "lucide-react";
import { useEffect, useState } from "react";
import { BlurText } from "@/components/blur-text";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log(response);

      setSubmitStatus("success");
      setFormData({ name: "", contact: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] sm:min-h-[60vh] items-center justify-center overflow-hidden px-4 py-12 sm:py-20">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8 text-center px-2">
          <div className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-primary">
            <span className="inline-flex items-center gap-1.5 sm:gap-2">
              <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Biz bilan bog'laning
            </span>
          </div>

          <BlurText
            as="h1"
            className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight px-2"
            delay={100}
            blurAmount={8}
          >
            Sizning savollaringizga javob berish uchun{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              shunga tayyor
            </span>
          </BlurText>

          <BlurText
            className="mx-auto max-w-2xl text-balance text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground px-4"
            delay={300}
            blurAmount={6}
          >
            BotMather jamoasi har doim sizning yardamingizga tayyor. Istalgan
            savolni yozing va biz tezda javob beramiz.
          </BlurText>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="scroll-animate px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {[
              {
                icon: MessageCircleMore,
                title: "Telegram",
                description: "Savollaringizni yuboring",
                contact: "@botmother_support_bot",
                color: "from-primary/20 to-primary/5",
              },
              {
                icon: Phone,
                title: "Telefon",
                description: "24/7 qo'llab-quvvatlash",
                contact: "+998 50 713 70 30",
                color: "from-accent/20 to-accent/5",
              },
              {
                icon: MapPin,
                title: "Manzil",
                description: "Tashkent, Qoraqamish 3rd Street, 3A",
                contact: "Tashkent, Uzbekistan",
                color: "from-primary/20 to-primary/5",
              },
            ].map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="group"
                  style={{
                    animation: `slideInUp 0.5s ease-out forwards`,
                    animationDelay: `${idx * 0.1}s`,
                  }}
                >
                  <div
                    className={`bg-gradient-to-br ${info.color} relative space-y-4 overflow-hidden rounded-2xl border border-border/60 p-8 transition-all duration-300 hover:-translate-y-3 hover:transform hover:border-primary/80 hover:shadow-xl hover:shadow-primary/15 group-hover:scale-105`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                    <div className="relative inline-block">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent opacity-0 blur-xl transition-all duration-300 group-hover:scale-110 group-hover:opacity-40"></div>
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/30 to-accent/20 transition-all duration-300 group-hover:scale-125 group-hover:border-primary/60">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>

                    <div className="relative space-y-2">
                      <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                        {info.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                      <p className="font-semibold text-foreground">
                        {info.contact}
                      </p>
                    </div>

                    <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="scroll-animate bg-muted/20 px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 sm:mb-12 space-y-3 sm:space-y-4 text-center px-2">
            <BlurText className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" delay={200}>
              Xabar yuboring
            </BlurText>
            <BlurText className="text-base sm:text-lg text-muted-foreground px-4" delay={400}>
              Quyidagi formani to'ldiring va biz tezda javob beramiz
            </BlurText>
          </div>

          <div className="group relative">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 blur transition-opacity duration-500 group-hover:opacity-30"></div>

            {/* Form Container */}
            <div className="relative space-y-6 overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-12 shadow-2xl transition-all duration-500 hover:border-primary/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-foreground"
                    >
                      Ismingiz *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ismingizni kiriting"
                      className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {/* telegram Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="telegram"
                      className="text-sm font-semibold text-foreground"
                    >
                      Aloqa *
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      placeholder="Telefon, Telegra, email"
                      className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-foreground"
                  >
                    Mavzu *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Xabari mavzusu"
                    className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-foreground"
                  >
                    Xabar *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Batafsil xabar yuboring..."
                    rows={6}
                    className="w-full resize-none rounded-lg border border-border bg-muted/30 px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 w-full sm:w-auto"
                  >
                    {isSubmitting ? "Jo'natilmoqda..." : "Xabar jo'natish"}
                    <Send className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400">
                      ✓ Xabar muvaffaqiyatli jo'natildi! Tez orada javob
                      beramiz.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
                      ✗ Xato yuz berdi. Qayta urinib ko'ring.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="scroll-animate px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 sm:mb-12 flex-col flex space-y-3 sm:space-y-4 text-center px-2">
            <BlurText className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" delay={200}>
              Bizni kuzatib turing
            </BlurText>
            <BlurText className="text-base sm:text-lg text-muted-foreground px-4" delay={400}>
              Ijtimoiy tarmoqlarimizda so'nggi yangilanishlarni bilib oling
            </BlurText>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-6 md:grid-cols-3">
            {[
              {
                icon: Linkedin,
                title: "LinkedIn",
                description: "Kasbiy yangilanishlarni kuzatib turing",
                link: "https://www.linkedin.com/company/ico-soft",
                color: "from-blue-500/20 to-blue-500/5",
              },
              {
                icon: Instagram,
                title: "Instagram",
                description: "Eng so'ngi xabarlarni bilib oling",
                link: "https://www.instagram.com/ico_soft_uz",
                color: "from-sky-500/20 to-sky-500/5",
              },
              {
                icon: MessageSquare,
                title: "Telegram",
                description: "Biz bilan bevosita bog'lanish",
                link: "https://t.me/ico_soft",
                color: "from-cyan-500/20 to-cyan-500/5",
              },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  style={{
                    animation: `slideInUp 0.5s ease-out forwards`,
                    animationDelay: `${idx * 0.1}s`,
                  }}
                >
                  <div
                    className={`bg-gradient-to-br ${social.color} relative space-y-3 overflow-hidden rounded-2xl border border-border/60 p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:transform hover:border-primary/80 hover:shadow-xl hover:shadow-primary/15 group-hover:scale-105`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                    <div className="relative inline-block">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/30 to-accent/20 transition-all duration-300 group-hover:scale-125 group-hover:border-primary/60">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>

                    <div className="relative space-y-1">
                      <h3 className="text-lg font-bold transition-colors group-hover:text-primary">
                        {social.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {social.description}
                      </p>
                    </div>

                    <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="scroll-animate bg-muted/20 px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 sm:mb-12 space-y-3 sm:space-y-4 text-center px-2">
            <BlurText className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" delay={200}>
              Tez-tez so'raladigan savollar
            </BlurText>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                question: "BotMother.uz dan foydalanish qancha turadi?",
                answer:
                  "Botning Resurs Iste'moli uchun oylik to'lov. Eng muhimi, bizda faqat ishlatgan resursingiz uchun to'laysiz, keraksiz paketlar yo'q. Dasturchi xizmatlariga nisbatan 90% gacha tejash mumkin.",
              },
              {
                question: `Narxlaringiz qanday aniqlanadi? "Resurs iste'moli" nima degani?`,
                answer:
                  `"Resurs iste'moli" bu botingiz qancha xabar qabul qilgani, qancha ma'lumot saqlagani va ishlashi uchun qancha server kuchi ishlatganini anglatadi. Bizning narxlashimiz shaffof va adolatli. Sizga maxsus Narx Kalkulyatorimiz orqali oyiga taxminiy xarajatni oldindan hisoblash imkoniyatini beramiz.`,
              },
              {
                question: `Bepul sinov muddati yoki "Freemium" rejasi bormi?`,
                answer:
                  `Ha. Siz barcha template'larimizni ko'rishingiz, tanlashingiz va cheklangan imkoniyatlar (masalan, oyiga 100 ta xabar) bilan bepul sinov rejimida ishga tushirishingiz mumkin. Bu sizga tizimimizning qanchalik oson va samarali ekanligini sinab ko'rish imkonini beradi.`,
              },
              {
                question: "Men kodlashni bilmayman. Bot yarata olamanmi?",
                answer:
                  "Albatta! BotMother.uz aynan kodlashni bilmaydigan foydalanuvchilar uchun mo'ljallangan. Bizning Drag and Drop (tortib tushirish) interfeysimiz va tayyor template'larimiz yordamida har qanday odam professional bot yaratishi mumkin.",
              },
              {
                question: "Botni yaratish uchun qancha vaqt ketadi?",
                answer:
                  "Agar template'lardan foydalansangiz, template'ni tanlash, o'zgartirish va ishga tushirish uchun 10 daqiqadan 1 soatgacha vaqt ketadi. Dasturchiga buyurtma berishdan ko'ra ancha tez!",
              },
              {
                question: "O'zim yaratgan botni keyinchalik qanday o'zgartirishim mumkin?",
                answer:
                  "Botingizni o'zgartirish uchun dasturchi kerak emas. Siz istagan vaqtda Constructor interfeysiga kirib, o'zgarishlarni kiritishingiz va darhol ishga tushirishingiz mumkin.",
              },
              {
                question: "Yaratilgan botlar Telegramning barcha xavfsizlik talablariga javob beradimi?",
                answer:
                  "Ha, bizning platformamizda yaratilgan barcha botlar Telegramning API'lari orqali ishlaydi va Telegramning xavfsizlik standartlariga to'liq rioya qiladi. Ma'lumotlaringiz xavfsiz serverlarda saqlanadi.",
              },
              {
                question: "Biznesimga mos template topa olmasam nima qilaman?",
                answer:
                  "Agar tayyor template'lardan hech biri to'liq mos kelmasa, siz biz bilan aloqaga chiqishingiz mumkin! Biz siz uchun vaqt ajratamiz va bunga haq olmaymi yoki bunday holatlarda siz bizni AI agentimizda foydalanishingiz mumkin bo'ladi",
              },
              {
                question: "Botni tashqi tizimlar (CRM, To'lovlar, Google Sheets) bilan ulash mumkinmi?",
                answer:
                  "Ha! BotMother.uz asosiy CRM'lar, shuningdek, mahalliy to'lov tizimlari (Payme, Click) va Google Sheets kabi muhim xizmatlar bilan oson integratsiyalarni qo'llab-quvvatlaydi.",
              },
              {
                question: "Template yaratuvchilar (Dasturchilar) sifatida siz bilan qanday hamkorlik qilishimiz mumkin?",
                answer:
                  "Template yaratuvchilar (Dasturchilar) sifatida siz bilan qanday hamkorlik qilishimiz mumkin?",
              },
              {
                question: "Agar botni ishga tushirishda muammo bo'lsa, kimga murojaat qilishim kerak?",
                answer:
                  "Bizning platformada qadam-baqadam video qo'llanmalar va to'liq hujjatlar mavjud. Agar muammo hal bo'lmasa, siz bizning tezkor Yordam (Support) jamoamizga murojaat qilishingiz mumkin.",
              },
              {
                question: "Ma'lumotlarim (mijozlarim ma'lumotlari) qayerda saqlanadi?",
                answer:
                  "Barcha ma'lumotlar xavfsiz va ishonchli serverlarda saqlanadi. Biz ma'lumotlaringizning xavfsizligini ta'minlash uchun barcha kerakli choralar ko'rilishiga kafolat beramiz.",
              },
              // {
              //   question: "",
              //   answer:
              //     "",
              // },
              // {
              //   question: "",
              //   answer:
              //     "",
              // },
              // {
              //   question: "",
              //   answer:
              //     "",
              // },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-lg border border-border/60 bg-gradient-to-br from-card to-card/90 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
              >
                <summary className="flex cursor-pointer items-center justify-between p-4 sm:p-6 text-sm sm:text-base font-semibold text-foreground transition-colors hover:text-primary">
                  <span className="pr-4">{faq.question}</span>
                  <span className="flex-shrink-0 transition-transform group-open:rotate-180">
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-border/40 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
