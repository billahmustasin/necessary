# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the backend files
COPY server.js ./

# Install necessary dependencies
RUN npm install express prom-client

# Expose the required port for the Node.js server
EXPOSE 6000

# Start the Node.js backend server
CMD ["node", "server.js"]

