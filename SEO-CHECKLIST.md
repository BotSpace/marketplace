# SEO Tahlil Ro'yxati

Bu fayl loyihadagi SEO tavsiyalarini tekshirish natijalarini o'z ichiga oladi.

## ✅ Bajarilganlar

### 4. Sayt tili o'zgartirganda URL da ham o'zgarishi

- **Holat**: ✅ Bajarilgan
- **Tavsif**: `next-intl` orqali locale prefixlar ishlatilmoqda (`/uz`, `/en`, `/ru`, `/cr`)
- **Fayl**: `middleware.ts`, `i18n/routing.ts`

### 5. Sitemap ga barcha sahifalar kiritilgan

- **Holat**: ✅ Qisman bajarilgan
- **Tavsif**: Sitemap mavjud va template sahifalari, statik sahifalar kiritilgan
- **Muammo**: Sitemap har soatda yangilanmoqda (`revalidate: 3600`), 1 kunda bir marta yangilash kerak
- **Fayl**: `app/sitemap.ts`

### 6. Robots.txt fayl mavjud

- **Holat**: ✅ Qisman bajarilgan
- **Tavsif**: `/api/`, `/_next/`, `/admin/` bloklangan
- **Muammo**: Profilga oid URL lar tekshirilmagan (agar mavjud bo'lsa)
- **Fayl**: `public/robots.txt`

### 7. Tarjimalar

- **Holat**: ✅ Bajarilgan
- **Tavsif**: `next-intl` orqali 4 til qo'llab-quvvatlanmoqda
- **Fayl**: `messages/` papkasi

### 10. Meta taglar har bir sahifa uchun

- **Holat**: ✅ Qisman bajarilgan
- **Tavsif**: `generateMetadata` funksiyalari orqali title, description, keywords sozlanmoqda
- **Muammo**: Admin panel orqali meta taglarni tahrirlash imkoniyati yo'q
- **Fayl**: `app/[locale]/metadata.ts`

### 11. Canonical link

- **Holat**: ✅ Bajarilgan
- **Tavsif**: `alternates.canonical` orqali har bir sahifa uchun canonical URL sozlanmoqda
- **Fayl**: `app/[locale]/metadata.ts`

### 12. Har bir sahifada bir dona H1

- **Holat**: ❌ Qo'shish kerak
- **Tavsif**:
  - ✅ Template detail sahifasida H1 mavjud
  - ❌ Home sahifada H1 yo'q (BlurText ishlatilmoqda)
  - ❌ Template list sahifasida H1 yo'q (BlurText ishlatilmoqda)
  - ❌ Price sahifasida H1 yo'q (BlurText ishlatilmoqda)
  - ❌ Contact sahifasida H1 yo'q (BlurText ishlatilmoqda)
- **Qo'shish kerak**: Barcha sahifalarda H1 tag qo'shish (BlurText componentiga parametr sifatida berib ketish kerak)
- **Fayllar**:
  - `app/[locale]/template/[id]/sections/hero-section.tsx` (✅ mavjud)
  - `app/[locale]/home-client.tsx` (❌ qo'shish kerak)
  - `app/[locale]/template/page.tsx` (❌ qo'shish kerak)
  - `app/[locale]/price/page.tsx` (❌ qo'shish kerak)
  - `app/[locale]/contact/page.tsx` (❌ qo'shish kerak)

### 15. Ichki sahifalarda nofollow ishlatilmaydi

- **Holat**: ✅ Bajarilgan
- **Tavsif**: Kodda `rel="nofollow"` topilmadi

---

## ❌ Qo'shilishi kerak bo'lganlar

### 1. Sayt rasmlarini optimizatsiya qilish

- **Holat**: ❌ Qo'shish kerak
- **Muammo**:
  - Ba'zi joylarda `<img>` tag ishlatilmoqda (`TemplateCardV2.tsx`)
  - Rasm o'lchamlari optimizatsiya qilinmagan
  - Har bir blok uchun to'g'ri px o'lchamlari sozlanmagan
- **Qo'shish kerak**:
  - Barcha `<img>` taglarni Next.js `Image` komponentiga o'zgartirish
  - Rasm o'lchamlari va `sizes` prop qo'shish
  - WebP formatga konvertatsiya qilish

### 2. Rasmlarni browserda 30 kunlik cache qilish

- **Holat**: ❌ Qo'shish kerak
- **Muammo**: Cache headers sozlanmagan
- **Qo'shish kerak**:
  - `next.config.ts` da `headers` funksiyasi qo'shish
  - Yoki middleware orqali image fayllar uchun `Cache-Control: public, max-age=2592000` (30 kun)

### 3. JS, CSS fayllarni browserda 30 kunlik cache qilish

- **Holat**: ❌ Qo'shish kerak
- **Muammo**: Static assetlar uchun cache headers yo'q
- **Qo'shish kerak**:
  - `_next/static/` fayllar uchun cache headers
  - `Cache-Control: public, max-age=2592000, immutable`

### 8. Yandex verification meta tag

- **Holat**: ❌ Qo'shish kerak
- **Kod**: `<meta name="yandex-verification" content="f0ff0f420dff80f0" />`
- **Qo'yish joyi**: `app/[locale]/layout.tsx` da `<head>` ichida

### 9. Google verification meta tag

- **Holat**: ❌ Qo'shish kerak
- **Muammo**: Hozirda placeholder mavjud: `"your-google-verification-code"`
- **Kod**: `<meta name="google-site-verification" content="onQY4wdd4B5pMzaHs6qBN0VDSxNxq4-I65aPd7aR8FE" />`
- **Qo'yish joyi**: `app/[locale]/layout.tsx` da `metadata.verification.google` ni yangilash

### 13. Barcha rasmda alt bo'lishi

- **Holat**: ❌ Qisman muammo
- **Muammo**:
  - `blur-image-server.tsx` da hardcoded `alt="image"` ishlatilmoqda, `alt` prop e'tiborga olinmayapti
  - Ba'zi rasmlarda alt mavjud, lekin barcha rasmlarda to'liq alt tekshirilmagan
- **Qo'shish kerak**:
  - `blur-image-server.tsx` da `alt` prop ishlatilishi kerak
  - Barcha rasmlarda har bir tilda to'g'ri alt matnlar

### 14. URL larda slug, pastgi chiziq emas, faqat tire

- **Holat**: ❌ Qo'shish kerak
- **Muammo**:
  - Hozirda URL larda ID ishlatilmoqda: `/template/${id}`
  - Slug yoki pastgi chiziq tekshiruvi yo'q
- **Qo'shish kerak**:
  - Template URL larda slug qo'shish (masalan: `/template/e-commerce-bot-123`)
  - Slug generatsiya qilishda faqat tire (`-`) ishlatish
  - Lotin harflari va raqamlar ishlatish
  - Pastgi chiziq (`_`) ishlatmaslik

### 16. Rasmlar hajmi 100 kb dan oshib ketmasligi

- **Holat**: ❌ Qo'shish kerak
- **Muammo**: Rasm hajmi tekshiruvi yo'q
- **Qo'shish kerak**:
  - Image optimization sozlamalari
  - Rasm yuklashda hajm tekshiruvi
  - Yoki Next.js Image komponentining `quality` parametrini sozlash

### 17. URL larda 115 belgidan oshib ketmasligi

- **Holat**: ❌ Qo'shish kerak
- **Muammo**: URL uzunligi tekshiruvi yo'q
- **Qo'shish kerak**:
  - Slug generatsiya qilishda uzunlik cheklovi
  - URL uzunligini tekshirish va kerak bo'lsa qisqartirish
  - ID qo'shish orqali noyoblikni ta'minlash

### 18. Sayt sahifalarini cache bilan ishlaydigan qilish

- **Holat**: ❌ Qisman bajarilgan
- **Muammo**:
  - Ba'zi joylarda `revalidate: 3600` ishlatilmoqda
  - Har bir sahifa uchun cache sozlanmagan
- **Qo'shish kerak**:
  - Barcha sahifalar uchun `revalidate` sozlash
  - Yoki ISR (Incremental Static Regeneration) to'liq qo'llash
  - Bazaga har safar so'rov bormasligi uchun cache strategiyasi

### 19. Yandex Metrika qo'shish

- **Holat**: ❌ Qo'shish kerak
- **Kod**:

```html
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
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
</script>
<noscript
  ><div>
    <img
      src="https://mc.yandex.ru/watch/103915287"
      style="position:absolute; left:-9999px;"
      alt=""
    /></div
></noscript>
<!-- /Yandex.Metrika counter -->
```

- **Qo'yish joyi**: `app/[locale]/layout.tsx` da `</body>` dan oldin

### 20. Bo'limlarni URL da ID bilan emas, nom bilan qilish

- **Holat**: ❌ Qo'shish kerak (Agar kategoriya sahifalari bo'lsa)
- **Muammo**: Hozirda kategoriya sahifalari yo'q ko'rinadi
- **Qo'shish kerak**:
  - Kategoriya sahifalari yaratish: `/category/elektronika/` formatida
  - Slug generatsiya qilish kategoriya nomidan
  - ID o'rniga slug ishlatish

---

## 📝 Qo'shimcha tekshirishlar

### Robots.txt yaxshilash

- Profil sahifalari mavjud bo'lsa, ularni bloklash kerak
- Masalan: `Disallow: /profile/`, `Disallow: /user/` va hokazo

### Sitemap yangilanishi

- Hozirda `revalidate: 3600` (1 soat)
- 1 kunda bir marta yangilash uchun `revalidate: 86400` (24 soat) qilish

### Meta taglar admin panel orqali

- Har bir sahifa uchun title, description, keywords ni admin panel orqali tahrirlash imkoniyati
- Yoki universal input polya qo'shish

### H1 tekshiruvi

- ✅ Template detail sahifasida H1 mavjud
- ❌ Home sahifada H1 yo'q - qo'shish kerak
- ❌ Template list sahifasida H1 yo'q - qo'shish kerak
- ❌ Price sahifasida H1 yo'q - qo'shish kerak
- ❌ Contact sahifasida H1 yo'q - qo'shish kerak

---

## 📊 Umumiy holat

- **To'liq bajarilgan**: 5 ta
- **Qisman bajarilgan**: 3 ta
- **Qo'shish kerak**: 12 ta
- **Jami**: 20 ta tavsiya

## 🎯 Prioritizatsiya

### Yuqori prioritet (darhol qilish kerak):

1. Yandex va Google verification meta taglar
2. Yandex Metrika
3. Cache headers (rasmlar, JS, CSS)
4. Rasm optimizatsiyasi

### O'rta prioritet:

5. URL slug generatsiyasi
6. Alt atributlar to'liq sozlash
7. Sitemap yangilanishi
8. Page caching

### Past prioritet:

9. Rasm hajmi tekshiruvi
10. URL uzunligi tekshiruvi
11. Admin panel orqali meta taglar
