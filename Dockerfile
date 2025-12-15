# 1-bosqich: Base (Asos)
# Node.js 24 versiyasini olamiz. Alpine versiyasi yengilroq va xavfsizroq.
FROM node:24-alpine AS base

# Pnpm ni yoqish (Node 16+ da corepack ichida pnpm bor, uni shunchaki yoqamiz)
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# 2-bosqich: Dependencies (Kutubxonalar)
FROM base AS deps
WORKDIR /app

# Faqat package.json va pnpm-lock.yaml fayllarini nusxalaymiz
COPY package.json pnpm-lock.yaml ./

# DIQQAT: --frozen-lockfile buyrug'i juda muhim!
# U lock faylni o'zgartirmaydi va siz belgilagan (overrides qilingan) 
# versiyalarni aniq o'rnatadi. Virusli yangi versiya kirib kelolmaydi.
RUN pnpm install --frozen-lockfile

# 3-bosqich: Builder (Qurish)
FROM base AS builder
WORKDIR /app

# Deps bosqichidan tayyor node_modules ni olib kelamiz
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js loyihani build qilamiz
RUN pnpm run build

# 4-bosqich: Runner (Ishga tushirish)
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Agar curl kerak bo'lsa (Alpine versiyada apk ishlatiladi)
RUN apk add --no-cache curl

# Security uchun sistemaga alohida user ochish (tavsiya etiladi)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Build qilingan fayllarni ko'chiramiz
COPY --from=builder /app/public ./public

# Next.js kesh papkasi
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# To'g'ri huquqlar (permissions) bilan userni o'zgartiramiz
USER nextjs

EXPOSE 3000

# Dasturni pnpm orqali ishga tushiramiz
CMD ["pnpm", "start"]
