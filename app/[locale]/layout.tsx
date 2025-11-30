import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import { getMessages } from "next-intl/server";

import { NextIntlClientProvider } from "next-intl";
import ThemeProvider from "@/components/theme/theme-provider";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import AuthProvider from "./AuthProvider";
import ReactQueryProvider from "./ReactQueryProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Font optimization for better performance
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Font optimization for better performance
  preload: true,
});

const baseUrl = process.env.SALES_URL || "https://botmother.uz";
const basePath = "/website";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}${basePath}`),
  title: {
    default:
      "BotMather - Telegram Bot Constructor | Kod Yozmasdan Bot Yaratish",
    template: "%s | BotMather",
  },
  description:
    "Kod yozmasdan Telegram botlarini yarating. Tayyorlangan shablonlardan foydalanib 5 daqiqada ishga tushiring. E-commerce, CRM, Support bot va boshqa 100+ tayyor shablonlar.",
  keywords: [
    "telegram bot",
    "bot yaratish",
    "telegram bot constructor",
    "bot shablonlari",
    "e-commerce bot",
    "CRM bot",
    "support bot",
    "telegram bot builder",
    "no-code bot",
    "botmather",
    "telegram botlar",
    "bot platformasi",
    "uzbekistan",
    "bot yaratish platformasi",
  ],
  authors: [{ name: "BotMather" }],
  creator: "BotMather",
  publisher: "BotMather",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: `${baseUrl}${basePath}`,
    siteName: "BotMather",
    title: "BotMather - Telegram Bot Constructor | Kod Yozmasdan Bot Yaratish",
    description:
      "Kod yozmasdan Telegram botlarini yarating. Tayyorlangan shablonlardan foydalanib 5 daqiqada ishga tushiring.",
    images: [
      {
        url: `${baseUrl}${basePath}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "BotMather - Telegram Bot Constructor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BotMather - Telegram Bot Constructor",
    description:
      "Kod yozmasdan Telegram botlarini yarating. Tayyorlangan shablonlardan foydalanib 5 daqiqada ishga tushiring.",
    images: [`${baseUrl}${basePath}/og-image.jpg`],
    creator: "@botmather",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${baseUrl}${basePath}`,
    languages: {
      uz: `${baseUrl}${basePath}`,
      en: `${baseUrl}${basePath}/en`,
      ru: `${baseUrl}${basePath}/ru`,
      cr: `${baseUrl}${basePath}/cr`,
    },
  },
  verification: {
    google: "onQY4wdd4B5pMzaHs6qBN0VDSxNxq4-I65aPd7aR8FE", // Google Search Console verification code
    other: {
      "yandex-verification": "f0ff0f420dff80f0", // Yandex verification code
    },
  },
  category: "Technology",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started

  const { locale } = await params;

  const messages = await getMessages({ locale: locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google tag (gtag.js) - Lazy loaded for better performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6SN3VK4KY0"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6SN3VK4KY0', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {/* Structured Data (JSON-LD) */}
        <script
          // TODO: Bularni ko'rib chiqish kerak va real qiymatlarga o'zgartirish kerak
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "BotMather",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description:
                  "Pay-per-use pricing model - pay only for what you use",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "0.50",
                  priceCurrency: "USD",
                  unitText: "per 1000 messages",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "5000",
                bestRating: "5",
                worstRating: "1",
              },
              description:
                "Kod yozmasdan Telegram botlarini yarating. Tayyorlangan shablonlardan foydalanib 5 daqiqada ishga tushiring.",
              url: `${baseUrl}${basePath}`,
              author: {
                "@type": "Organization",
                name: "BotMather",
                url: `${baseUrl}${basePath}`,
                logo: `${baseUrl}${basePath}/logo.png`,
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+998-50-713-70-30",
                  contactType: "Customer Service",
                  email: "info@botmather.uz",
                  availableLanguage: ["Uzbek", "English", "Russian"],
                },
              },
              featureList: [
                "Kod yozmasdan bot yaratish",
                "100+ tayyor shablonlar",
                "Pay-per-use narx modeli",
                "24/7 professional yordam",
                "Real-time analytics",
                "Korxona darajasi xavfsizlik",
              ],
            }),
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BotMather",
              url: `${baseUrl}${basePath}`,
              logo: `${baseUrl}${basePath}/logo.png`,
              description:
                "Kod yozmasdan Telegram botlarini yarating. Professional xizmat, shaffof narxlar, 24/7 yordam.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "UZ",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+998-50-713-70-30",
                contactType: "Customer Service",
                email: "info@botmather.uz",
                availableLanguage: ["Uzbek", "English", "Russian"],
                areaServed: "UZ",
              },
              sameAs: [
                "https://facebook.com/botmather",
                "https://t.me/botmather",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "5000",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
        {/* Reviews Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "BotMather - Telegram Bot Constructor",
              description:
                "Kod yozmasdan Telegram botlarini yarating. Tayyorlangan shablonlardan foydalanib 5 daqiqada ishga tushiring.",
              brand: {
                "@type": "Brand",
                name: "BotMather",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "5000",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Alisher Umarov",
                  },
                  datePublished: "2024-12-15",
                  reviewBody:
                    "BotMather bilan 2 kundan keyin sot botni ishga tushirdim. Juda oson va qulay! Kod yozmasdan professional bot yaratdim. Rahmat BotMather jamoasiga!",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Fotima Karimova",
                  },
                  datePublished: "2024-12-10",
                  reviewBody:
                    "Booking bot 3 oyda 40% ko'p buyurtma keltirib berdi. Eng yaxshi investitsiya! Mijozlarimiz endi 24/7 buyurtma berishlari mumkin. Katta rahmat!",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Javohir Bekov",
                  },
                  datePublished: "2024-12-05",
                  reviewBody:
                    "Avtomatik javoblar botini yaratib, customer support vaqtim 50% qisqardi. Endi ko'proq vaqt o'quvchilarimga qaratishim mumkin. Ajoyib xizmat!",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                },
              ],
            }),
          }}
        />
        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Pay-per-use modelida minimal to'lov bormi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yo'q, hech qanday minimal to'lov yoki abonent to'lovi yo'q. Faqat ishlatgan resurslarga to'laysiz.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Qanday ishlaydi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "3 ta oddiy qadam: 1) Shablonni tanlang, 2) Kod yozmasdan moslang, 3) Ishga tushiring. Hech qanday kod yozish kerak emas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Narxlar qanday?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Barcha narxlar ochiq va shaffof. Xabarlar: $0.50 per 1000 ta, Server resurslari: $0.10/soat. Analytics va xavfsizlik bepul.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Xizmat xavfsizmi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ha, xizmatimiz qonuniy, xavfsiz va etik jihatdan toza. Korxona darajasi xavfsizlik, SSL shifrlash va 24/7 monitoring.",
                  },
                },
              ],
            }),
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <ReactQueryProvider>
            <AuthProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                <Navigation />
                {children}
                <Toaster />
                <Footer />
                <ScrollToTop />
              </ThemeProvider>
            </AuthProvider>
          </ReactQueryProvider>
        </NextIntlClientProvider>
        {/* Yandex.Metrika counter - Lazy loaded for better performance */}
        <Script id="yandex-metrika" strategy="lazyOnload">
          {`
            (function (m, e, t, r, i, k, a) {
              m[i] =
                m[i] ||
                function () {
                  (m[i].a = m[i].a || []).push(arguments);
                };
              m[i].l = 1 * new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) {
                  return;
                }
              }
              (k = e.createElement(t)),
                (a = e.getElementsByTagName(t)[0]),
                (k.async = 1),
                (k.src = r),
                a.parentNode.insertBefore(k, a);
            })(
              window,
              document,
              "script",
              "https://mc.yandex.ru/metrika/tag.js?id=103915287",
              "ym",
            );
            ym(103915287, "init", {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              accurateTrackBounce: true,
              trackLinks: true,
            });
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/103915287"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
      </body>
    </html>
  );
}
