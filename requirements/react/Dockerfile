# Base image
FROM node:latest

# Set working directory
WORKDIR /app

# Update apt-get
RUN apt-get update -y \
	&& npm install react-router-dom

# Start the app
CMD ["npm", "start"]

# # Debug
# RUN apt-get install vim -y
# CMD [ "tail", "-f", "/dev/null"]
