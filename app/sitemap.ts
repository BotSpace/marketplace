import { MetadataRoute } from "next";
import { localeConfig } from "@/i18n/routing";

const baseUrl = process.env.ADMIN_PANEL;
const basePath = "/website";

// Get all templates from API or static data
async function getTemplates() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API || "https://api.botmother.uz";
    const response = await fetch(`${apiUrl}/api/template?page_size=1000`, {
      next: { revalidate: 86400 }, // Revalidate every 24 hours (1 day)
    });

    if (response.ok) {
      const data = await response.json();
      // Handle both API response formats
      return data.data?.results || data.results || [];
    }
  } catch (error) {
    console.error("Error fetching templates for sitemap:", error);
  }

  // Fallback to static templates if API fails
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const templates = await getTemplates();
  const locales = localeConfig.locales;

  // Barcha sahifalar (default locale va boshqa tillar)
  const allPages = locales.flatMap((locale) => {
    const isDefault = locale === localeConfig.defaultLocale;
    // Default locale uchun locale yo'q, boshqa tillar uchun locale basePath dan oldin
    const localePrefix = isDefault ? "" : `/${locale}`;

    return [
      {
        url: `${baseUrl}${localePrefix}${basePath}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: isDefault ? 1.0 : 0.9,
      },
      {
        url: `${baseUrl}${localePrefix}${basePath}/template`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: isDefault ? 0.9 : 0.8,
      },
      {
        url: `${baseUrl}${localePrefix}${basePath}/price`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: isDefault ? 0.8 : 0.7,
      },
      {
        url: `${baseUrl}${localePrefix}${basePath}/contact`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: isDefault ? 0.7 : 0.6,
      },
    ];
  });

  // Template pages
  const templatePages = templates.flatMap((template: any) => {
    const templateUrls = locales.map((locale) => {
      const isDefault = locale === localeConfig.defaultLocale;
      // Default locale uchun locale yo'q, boshqa tillar uchun locale basePath dan oldin
      const localePrefix = isDefault ? "" : `/${locale}`;
      const path = `${baseUrl}${localePrefix}${basePath}/templates/${template.id}`;

      return {
        url: path,
        lastModified: new Date(
          template.updated_at || template.created_at || new Date(),
        ),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    });
    return templateUrls;
  });

  return [...allPages, ...templatePages];
}
