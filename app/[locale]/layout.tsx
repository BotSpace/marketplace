import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "../globals.css";

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
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6SN3VK4KY0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6SN3VK4KY0');
          `}
        </Script>
        {/* Structured Data (JSON-LD) */}
        <script
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
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "5000",
              },
              description:
                "Kod yozmasdan Telegram botlarini yarating. Tayyorlangan shablonlardan foydalanib 5 daqiqada ishga tushiring.",
              url: `${baseUrl}${basePath}`,
              author: {
                "@type": "Organization",
                name: "BotMather",
              },
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
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
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
