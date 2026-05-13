FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Vite dev server — host 0.0.0.0 so it's reachable from Docker host
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
