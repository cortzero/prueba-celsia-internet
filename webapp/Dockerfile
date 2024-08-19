# Dockerfile for the webapp
FROM node:20.12.2-alpine
WORKDIR /webapp
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 8082
CMD ["npm", "run", "dev"]