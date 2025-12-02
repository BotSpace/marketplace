import { Metadata } from "next";

const baseUrl = process.env.SALES_URL || "https://botmother.uz";
const basePath = "/website";

export function generateHomeMetadata(locale: string): Metadata {
  const localePath = locale === "uz" ? "" : `/${locale}`;

  return {
    title: "BotMather - Telegram Bot Constructor | Kod Yozmasdan Bot Yaratish",
    description:
      "Kod yozmasdan Telegram botlarini yarating. Tayyorlangan shablonlardan foydalanib 5 daqiqada ishga tushiring. 100+ tayyor shablonlar, pay-per-use narx modeli.",
    openGraph: {
      title: "BotMather - Telegram Bot Constructor",
      description:
        "Kod yozmasdan Telegram botlarini yarating. Tayyorlangan shablonlardan foydalanib 5 daqiqada ishga tushiring.",
      url: `${baseUrl}${basePath}${localePath}`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}${basePath}${localePath}`,
    },
  };
}

export function generateTemplatesMetadata(locale: string): Metadata {
  const localePath = locale === "uz" ? "" : `/${locale}`;

  return {
    title: "Telegram Bot Shablonlari - 100+ Tayyor Shablonlar",
    description:
      "E-commerce, CRM, Support, Booking va boshqa 100+ tayyor Telegram bot shablonlari. Kod yozmasdan 5 daqiqada botingizni ishga tushiring.",
    keywords: [
      "telegram bot shablonlari",
      "bot templates",
      "e-commerce bot",
      "CRM bot",
      "support bot",
      "booking bot",
      "telegram botlar",
    ],
    openGraph: {
      title: "Telegram Bot Shablonlari - BotMather",
      description:
        "100+ tayyor Telegram bot shablonlari. Kod yozmasdan botingizni yarating.",
      url: `${baseUrl}${basePath}${localePath}/template`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}${basePath}${localePath}/template`,
    },
  };
}

export function generateTemplateDetailMetadata(
  locale: string,
  template: {
    id: number;
    name: string;
    description: string;
    category?: string;
    price?: number;
  },
): Metadata {
  const localePath = locale === "uz" ? "" : `/${locale}`;
  const url = `${baseUrl}${basePath}${localePath}/templates/${template.id}`;

  return {
    title: `${template.name} - Telegram Bot Shabloni | BotMather`,
    description:
      template.description ||
      `${template.name} - Telegram bot shabloni. Kod yozmasdan botingizni yarating.`,
    keywords: [
      template.name,
      "telegram bot",
      "bot shabloni",
      template.category || "",
      "botmather",
    ].filter(Boolean),
    openGraph: {
      title: `${template.name} - Telegram Bot Shabloni`,
      description:
        template.description || `${template.name} Telegram bot shabloni`,
      url,
      type: "website",
      images: [
        {
          url: `${baseUrl}${basePath}/templates/${template.id}.jpg`,
          width: 1200,
          height: 630,
          alt: template.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${template.name} - Telegram Bot Shabloni`,
      description:
        template.description || `${template.name} Telegram bot shabloni`,
      images: [`${baseUrl}${basePath}/templates/${template.id}.jpg`],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generatePricingMetadata(locale: string): Metadata {
  const localePath = locale === "uz" ? "" : `/${locale}`;

  return {
    title: "Narxlar - Pay-per-use va Enterprise | BotMather",
    description:
      "Adolatli pay-per-use narx modeli. Faqat ishlatgan resurslarga to'lang. Hech qanday yashirin xarajatlar yo'q. Enterprise yechimlar ham mavjud.",
    keywords: [
      "botmather narx",
      "telegram bot narxi",
      "pay-per-use",
      "enterprise bot",
      "bot narxlari",
    ],
    openGraph: {
      title: "Narxlar - BotMather",
      description:
        "Adolatli pay-per-use narx modeli. Faqat ishlatgan resurslarga to'lang.",
      url: `${baseUrl}${basePath}${localePath}/price`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}${basePath}${localePath}/price`,
    },
  };
}

export function generateContactMetadata(locale: string): Metadata {
  const localePath = locale === "uz" ? "" : `/${locale}`;

  return {
    title: "Bog'lanish - BotMather",
    description:
      "BotMather jamoasi bilan bog'laning. Savollaringizga javob oling, maxsus yechimlar haqida ma'lumot oling.",
    openGraph: {
      title: "Bog'lanish - BotMather",
      description: "BotMather jamoasi bilan bog'laning",
      url: `${baseUrl}${basePath}${localePath}/contact`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}${basePath}${localePath}/contact`,
    },
  };
}
