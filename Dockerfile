FROM node:20-alpine

WORKDIR /app

COPY package*.json .npmrc* ./

RUN npm install --no-fund --no-audit

COPY . .

EXPOSE 3001

CMD ["npm", "run", "start", "--", "--port", "3001", "--host", "0.0.0.0"]
