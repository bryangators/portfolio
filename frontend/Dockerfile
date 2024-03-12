# Stage 1: Build the React app
FROM node:latest as builder

# create working dir
WORKDIR /app

# Set the npm registry to use HTTP
RUN npm config set registry http://registry.npmjs.org/

# Set the maximum heap size for Node.js
ENV NODE_OPTIONS="--max_old_space_size=4096"

# install dependencies
COPY package*.json ./
RUN npm install

COPY . .

# build dist
RUN npm run build

# Stage 2: Create the production image on nginx
FROM jonasal/nginx-certbot:latest as web

# copy react build files into public html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80

EXPOSE 443

# up command to start nginx server
CMD ["nginx", "-g", "daemon off;"]