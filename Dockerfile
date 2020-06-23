# Install Node to run React and its dependencies (here the latest version)
FROM node:latest

# Create react directory and set it as work directory
WORKDIR /app

#COPY DEPENDENCIES
COPY ["package.json", "package-lock.json*", "./"]

#Install dependencies
RUN npm i --silent

#Copy all other files
COPY /src /app/src

#commands for docker
CMD ["npm", "start"]