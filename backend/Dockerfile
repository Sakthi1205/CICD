# Dockerfile
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install first (for better caching)
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose port
EXPOSE 5000

# Run the app
CMD ["node", "server.js"]

