# Production Stage
FROM node:24 AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN apt update && apt install -y curl \
    && npm install -g pnpm  # Install pnpm in the production stage

# Copy built application and node modules from the builder stage
COPY --from=builder /app ./

# Expose port (default for Next.js)
EXPOSE 3000

# Start the Next.js application
CMD ["pnpm", "start"]
