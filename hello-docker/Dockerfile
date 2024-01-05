# select the base image to run the app. We want to run a javascript app, so we use the node runtime image from docker hub
# we can use any image from docker hub. We can also use a custom image that we have created
# node:20-alpine -> node is the image name, 20-alpine is the tag
# alpine is a lightweight version of linux
# we can see complete list of node image tags here: https://hub.docker.com/_/node
FROM node:20-alpine

# set the working directory to /app. This is the directory where the commands will be run. We can use any directory name but /app is a standard convention
WORKDIR /app

# copy everything from the current directory to the PWD (Present Working Directory) inside the container. 
# First `.` is the path to the current directory on the host machine. Second `.` is the path to the current directory inside the container i.e., source and destination
# source - current directory on the host machine
# destination - current directory inside the container (/app)
COPY . .

# commands to run the app
CMD node hello.js

# build the image
# docker build -t hello-docker .
    # -t -> tag the image with a name
    # hello-docker -> name of the image
    # . -> path to the Dockerfile