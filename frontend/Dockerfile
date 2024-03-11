# Stage 1: Build the React app
FROM node:latest as builder

# create working dir
WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm install

COPY . .

# build dist
RUN npm run build

# Stage 2: Create the production image on nginx
FROM nginx:latest as web

# copy react build files into public html folder
COPY --from=builder /app/dist /usr/share/nginx/html

#copy nginx configuration file settings
COPY nginx.conf /etc/nginx/nginx.conf

# expose port 80
EXPOSE 80

# up command to start nginx server
CMD ["nginx", "-g", "daemon off;"]