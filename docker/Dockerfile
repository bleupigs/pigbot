# Define base image
FROM oven/bun:1.2-alpine
# Setup environment
WORKDIR /app
COPY appdata ./data
COPY packages ./packages
COPY package.json bun.lock ./
RUN bun install --production
# Define volumes
VOLUME ["/persist"]
# EXPOSE 3000
CMD ["bun", "run", "packages/launcher/index.ts"]