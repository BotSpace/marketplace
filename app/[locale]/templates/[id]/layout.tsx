import { Metadata } from "next";
import { generateTemplateDetailMetadata } from "../../metadata";

async function getTemplate(id: string) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API || "https://api.botmother.uz";
    const response = await fetch(`${apiUrl}/api/template/${id}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Error fetching template:", error);
  }

  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const template = await getTemplate(id);

  if (template?.data) {
    return generateTemplateDetailMetadata(locale, {
      id: template.data.id,
      name: template.data.name,
      description:
        template.data.description || template.data.short_description || "",
      category: template.data.category?.name,
      price: template.data.price,
    });
  }

  // Fallback metadata
  return {
    title: "Template - BotMather",
    description: "Telegram bot shabloni",
  };
}

export default function TemplateDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
