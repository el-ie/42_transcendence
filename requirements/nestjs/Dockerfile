# Base image
FROM node:latest

# Set working directory
WORKDIR /app

# Regenerate the Prisma Client
RUN apt-get update -y\
	&& npm i -g @nestjs/cli \
	&& npm i prisma \
	&& npm i -D ts-node typescript @types/node

# Copy entrypoint script into the container
COPY ./tools/entrypoint.sh /entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x /entrypoint.sh

# Start the application with nodemon using the entrypoint script
ENTRYPOINT ["/entrypoint.sh"]

# Start the application with nodemon
CMD ["npx", "nodemon", "./main.ts"]

# Start the app
# CMD ["npm", "run", "start:dev"]

# # Debug
# RUN apt-get install vim -y
# CMD [ "tail", "-f", "/dev/null"]
