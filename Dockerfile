# Stage 1: Build Angular app
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app in production mode
RUN npm run build --prod

# Stage 2: Serve Angular app using Nginx
FROM nginx:alpine

# Copy built Angular app from the previous stage
COPY --from=build /app/dist/Landing /usr/share/nginx/html

# Copy the default Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to access the app
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
