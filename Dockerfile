FROM node:20-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 3000 4000 6006

CMD ["npm", "run", "dev:all"]
