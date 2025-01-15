# Stage 1: Build frontend
FROM node:18 AS build-frontend

# Set the working directory
WORKDIR /usr/src/app

# Copy the root-level files
COPY package*.json ./

# Copy client and server directories
COPY client ./client
COPY server ./server

# Run root-level npm install (installs both client and server dependencies)
RUN npm install

# Navigate to the client directory and build the frontend
RUN cd client && npm run build

# Stage 2: Setup backend and serve frontend
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy server files and built frontend assets
COPY --from=build-frontend /usr/src/app/server ./server
COPY --from=build-frontend /usr/src/app/client/dist ./client/dist

# Navigate to the server directory for server dependencies
WORKDIR /usr/src/app/server

# Install server dependencies (in case root install missed anything)
RUN npm install --production

# Set production environment
ENV NODE_ENV production

# Expose the server port
EXPOSE 4000

# Start the server
CMD ["npm", "start"]