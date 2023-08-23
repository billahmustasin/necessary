# Use a lightweight web server image as the base image
FROM nginx:alpine

# Copy the frontend files into the container
COPY ./frontend/index.html /usr/share/nginx/html/

# Expose the required port for the web server
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]

