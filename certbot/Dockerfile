# Use the official Certbot image as the base image
FROM certbot/certbot:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the script into the container
COPY entrypoint.sh .

# Set execute permissions for the script
RUN chmod +x entrypoint.sh

# Run the certbot command directly
CMD ["./entrypoint.sh"]