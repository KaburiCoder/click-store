FROM node:20-alpine3.20

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN corepack enable pnpm && pnpm i --frozen-lockfile

COPY . .

# 최신 OpenSSL 라이브러리 설치
RUN apk update && apk add --no-cache openssl openssl-dev

RUN npx prisma generate 
EXPOSE 3000
ENV PORT=3000
RUN npm run build
CMD [ "npm", "run", "start:prod" ]

