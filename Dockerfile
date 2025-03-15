# Stage 1: Build the React client
FROM node:18-slim AS client-build
WORKDIR /app/client

COPY client/package*.json ./
RUN npm install --no-cache
COPY client/ ./
RUN npm run build

# Stage 2: Build the Node.js server and copy the client build
FROM node:18-slim AS server

# Install Nginx, Supervisor and vim
RUN apt-get update && \
    apt-get install -y --no-install-recommends nginx supervisor vim && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory in the container for the server
WORKDIR /app/server

# Copy server package files and install dependencies
COPY server/package*.json ./
RUN npm install --no-audit --prefer-online

# Copy the rest of the server files
COPY server/ ./

# Copy the built client files into the server's Nginx web root
COPY --from=client-build /app/client/dist /usr/share/nginx/html

# Expose the Node.js server port and Nginx port
EXPOSE 80 443 3000

# Copy the Supervisor configuration file
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove the default Nginx configuration file
RUN rm /etc/nginx/sites-enabled/default

# Command to run Supervisor, which will manage Nginx and Node.js
CMD ["/usr/bin/supervisord"]