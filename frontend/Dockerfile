# Stage 1: Build the React app
FROM node:lts as builder
WORKDIR /app
COPY package*.json ./
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}
RUN npm install
COPY . .
RUN npm run build
# Stage 2: Create the production image
FROM nginx:latest as web
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]