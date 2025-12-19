# Build Stage
FROM node:24 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


FROM node:24 AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN apt update && apt install curl

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
