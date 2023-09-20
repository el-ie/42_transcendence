# Base image
FROM node:latest

# Set working directory
WORKDIR /app

COPY ./tools/launch_script.sh /

RUN chmod +x /launch_script.sh

CMD ["sh", "/launch_script.sh"]

# Start the app
#CMD ["npm", "start"]

# # Debug
# RUN apt-get install vim -y
# CMD [ "tail", "-f", "/dev/null"]
