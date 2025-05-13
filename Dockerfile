FROM node:20-alpine  

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN corepack enable pnpm && pnpm i --frozen-lockfile

COPY . .

RUN apk add --no-cache openssl1.1-compat

RUN npx prisma generate 
EXPOSE 3000
ENV PORT 3000
RUN npm run build
CMD [ "npm", "run", "start:prod" ]

