FROM ubuntu:20.04

# Update and install required packages
RUN apt update
RUN apt install -y curl

# Install Node.js for Ubuntu
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt install -y nodejs

# Copy app to container
COPY ./dist /app
COPY ./node_modules /app/node_modules

# Set environment variables
ENV NODE_PATH=/app
ENV NODE_ENV=production
ENV SERVER_PORT=8080
ENV PUBLIC_DIR=/app/public
ENV PUBLIC_ROUTE=/public

# Start app
CMD echo "Starting the app in container..." &&\
    echo "Node version: $(node --version)" &&\
    node /app/app.js