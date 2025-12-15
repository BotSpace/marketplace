"use client";

// 1. useLocale ni import qilamiz
import toast from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { useRouter } from "@/i18n/routing";

const languages = [
  { value: "uz", label: "O'zbek" },
  { value: "en", label: "English" },
  { value: "ru", label: "Русский" },
  { value: "cr", label: "Cyrilcha" },
];

export function LanguageSection() {
  const router = useRouter();
  const pathname = usePathname();
  // 2. Hozirgi tilni URL'dan qirqib olish shart emas, hook bor:
  const currentLocale = useLocale();

  // UI qotib qolmasligi uchun useTransition ishlatgan ma'qul
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (lang: string) => {
    // Agar tanlangan til hozirgisi bilan bir xil bo'lsa, to'xtatamiz
    if (lang === currentLocale) return;

    const langId = toast.loading("Til o'zgarishi...");

    // TODO: Toast bilan bildirishnoma qo'shish mumkin
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });

    if (window) {
      toast.success("Til muvaffaqiyatli o'zgartirildi!", { id: langId });
      window.location.href = pathname;
    }
  };

  return (
    <Select
      // 4. Value sifatida hookdan kelgan tilni beramiz
      value={currentLocale}
      onValueChange={handleLanguageChange}
      disabled={isPending}
    >
      <SelectTrigger id="language" className="w-full">
        <SelectValue placeholder="Tilni tanlang" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
