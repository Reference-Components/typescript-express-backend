FROM ubuntu:20.04

# Update and install required packages
RUN apt update -y
RUN apt upgrade -y
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

# Add and switch to non-root user
ARG USERNAME=typescript-express-backend
ARG USER_UID=1000
RUN useradd -u $USER_UID $USERNAME
RUN chown -R $USER_UID /app
USER $USERNAME

# Expose port
EXPOSE 8080

# Start app
CMD echo "Starting the app in container..." &&\
    echo "User: $(whoami)" &&\
    echo "Node version: $(node --version)" &&\
    node /app/app.js