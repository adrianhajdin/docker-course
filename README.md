<div align="center">
  <br />
    <a href="https://youtu.be/GFgJkfScVNU?feature=shared" target="_blank">
      <img src="https://github.com/JavaScript-Mastery-Pro/docker-course/assets/151519281/983e334b-6f3a-47d1-8ea6-52139796da20" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Node_JS-black?style=for-the-badge&logoColor=white&logo=nodedotjs&color=339933" alt="nodedotjs" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Docker-black?style=for-the-badge&logoColor=white&logo=docker&color=2496ED" alt="docker" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=646CFF" alt="vite" />
  </div>

  <h3 align="center">Docker Crash Course</h3>

   <div align="center">
     Learn how to Dockerize various applications step by step with our detailed tutorial 
     on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube. Join the JSM family!
    </div>
</div>

<br />

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
6. 📦 [Starter Kit](#starter-kits)
7. 🕸️ [Code Snippets](#code-snippets)
8. 🚀 [More](#more)

<br />

## 🚨 Tutorial

This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>. 

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

<a href="https://youtu.be/GFgJkfScVNU?feature=shared" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

Learn the process of containerizing frontend, backend, and database applications built with diverse tech stacks like React, Vue, Svelte, or any Vite projects. 
Additionally, it covers examples of the containerization of complete full-stack applications, including MERN setups or the popular Monorepo full-stack applications using Next.js 14+. 

This repository contains the corresponding code for all these dockerized applications using the latest Docker features, including docker-compose watch and init.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 27k+ members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Docker
- Node.js
- React.js
- Vite
- MongoDB
- Express.js
- Next.js
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Fundamentals of Docker**: Understand the fundamentals of Docker, its purpose, and advantages.

👉 **Managing Images and Containers with Docker Compose**: Explore Docker Compose for orchestrating multiple images and containers efficiently.

👉 **Latest Docker Features**: Learn new features such as docker init, docker scout, and docker compose watch for enhanced development workflows.

👉 **Working with Volumes**: Learn how to use volumes for persistent data management in Docker containers

👉 **Port Mapping with Network**: Implement port mapping using Docker's networking capabilities

👉 **Dockerizing React Applications with Vite**: Step-by-step guide on Dockerizing React applications built with Vite.

👉 **Dockerizing Vite Applications (Vue or Svelte)**: Extend the knowledge to Dockerizing Vite applications, supporting Vue or Svelte frameworks.

👉 **Dockerizing Full Stack Applications**: Dockerize a complete MERN stack application, covering frontend, backend, and database.

👉 **Dockerizing Monorepo Full Stack Applications (Next.js 14+)**: Explore Dockerizing Monorepo full-stack applications using the latest features of Next.js (version 14 and above).

👉 **Publishing Docker Images**: Learn the steps to publish Docker images, making your applications accessible to a broader audience.

...and much more, covering the best practices and usage of different commands in 🐳

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Docker](https://www.docker.com/products/docker-desktop/)
- [MongoDB Compass](https://www.mongodb.com/products/tools/compass)

**Cloning the Repository**

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

For a few specific applications, we require environment variables. I've included a sample .env.example file for these essential projects. 
However, one crucial element needed for these projects is,

```env
DB_URL=
```

For full stack applications, we'll be using MongoDB as a database. So do create an account on [MongoDB Atlas](https://www.mongodb.com/) as well as 
install [MongoDB Compass](https://www.mongodb.com/products/tools/compass) for creating local database instance for the project. 

**Running the Project**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="starter-kits">📦 Starter Kits</a>

Get the starter kits for a few corresponding applications used in the project
* MERN Demo - [Download Kit](https://drive.google.com/file/d/15Yqkb6rNPv6DEfT6zuIHDKchzGkOUblZ/view?usp=sharing)
* Next.js Demo - [Download Kit](https://drive.google.com/file/d/1edSiwP0AwtKblE5y-ZlzIGfq2lcDJBPF/view?usp=sharing)

## <a name="code-snippets">🕸️ Code Snippets</a>

<details>
<summary><code>hello-docker/Dockerfile</code></summary>

```dockerfile
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
```

</details>

<details>
<summary><code>react-docker/Dockerfile</code></summary>

```dockerfile
# set the base image to create the image for react app
FROM node:20-alpine

# create a user with permissions to run the app
# -S -> create a system user
# -G -> add the user to a group
# This is done to avoid running the app as root
# If the app is run as root, any vulnerability in the app can be exploited to gain access to the host system
# It's a good practice to run the app as a non-root user
RUN addgroup app && adduser -S -G app app

# set the user to run the app
USER app

# set the working directory to /app
WORKDIR /app

# copy package.json and package-lock.json to the working directory
# This is done before copying the rest of the files to take advantage of Docker’s cache
# If the package.json and package-lock.json files haven’t changed, Docker will use the cached dependencies
COPY package*.json ./

# sometimes the ownership of the files in the working directory is changed to root
# and thus the app can't access the files and throws an error -> EACCES: permission denied
# to avoid this, change the ownership of the files to the root user
USER root

# change the ownership of the /app directory to the app user
# chown -R <user>:<group> <directory>
# chown command changes the user and/or group ownership of for given file.
RUN chown -R app:app .

# change the user back to the app user
USER app

# install dependencies
RUN npm install

# copy the rest of the files to the working directory
COPY . .

# expose port 5173 to tell Docker that the container listens on the specified network ports at runtime
EXPOSE 5173

# command to run the app
CMD npm run dev
```

</details>

<details>
<summary><code>vite-docker/Dockerfile</code></summary>

```dockerfile
# set the base image to create the image for react app
FROM node:20-alpine

# create a user with permissions to run the app
# -S -> create a system user
# -G -> add the user to a group
# This is done to avoid running the app as root
# If the app is run as root, any vulnerability in the app can be exploited to gain access to the host system
# It's a good practice to run the app as a non-root user
RUN addgroup app && adduser -S -G app app

# set the user to run the app
USER app

# set the working directory to /app
WORKDIR /app

# copy package.json and package-lock.json to the working directory
# This is done before copying the rest of the files to take advantage of Docker’s cache
# If the package.json and package-lock.json files haven’t changed, Docker will use the cached dependencies
COPY package*.json ./

# sometimes the ownership of the files in the working directory is changed to root
# and thus the app can't access the files and throws an error -> EACCES: permission denied
# to avoid this, change the ownership of the files to the root user
USER root

# change the ownership of the /app directory to the app user
# chown -R <user>:<group> <directory>
# chown command changes the user and/or group ownership of for given file.
RUN chown -R app:app .

# change the user back to the app user
USER app

# install dependencies
RUN npm install

# copy the rest of the files to the working directory
COPY . .

# expose port 5173 to tell Docker that the container listens on the specified network ports at runtime
EXPOSE 5173

# command to run the app
CMD npm run dev
```

</details>

<details>
<summary><code>vite-docker/compose.yaml</code></summary>

```yaml
# define the services/containers to be run
services:
  # define the application container/service
  # we can use any name for the service. Here it is `web`
  # we can create multiple services as well
  web:
    # specify the image to build the container from
    # this can be any image available in docker hub or a custom one or the one we want to build
    build:
      # specify the path to the Dockerfile
      context: .
      # specify the file name (optional)
      dockerfile: Dockerfile
    
    # specify the port mapping from host to the container
    # this is similar to the -p flag in `docker run` command
    # first port is the port on host machine and the second is the port inside the container
    ports:
      - 5173:5173

    # specify the volumes to mount
    # what this does is it mounts the current directory to the `/app` directory inside the container. 
    # due to this, any changes made to the files in the current directory will be reflected inside the container. It is similar to the -v flag in `docker run` command. 
    # even if a container is stopped or deleted, volumes are not deleted and can be used by other containers as well.
    volumes:
      # over here, we are mounting the current directory to the `/app` directory inside the container (which is the working directory of the container)
      # syntax is `<path to the directory on host>:<path to the directory inside the container>`
      # we're doing this because we want to reflect the changes made to the files in the current directory inside the container
      - .:/app
      # we also mount the node_modules directory inside the container at /app/node_modules. This is done to avoid installing the node_modules inside the container. 
      # node_modules will be installed on the host machine and mounted inside the container
      - /app/node_modules
```

</details>

<details>
<summary><code>mern-docker/frontend/Dockerfile</code></summary>

```dockerfile
FROM node:20-alpine3.18

# RUN addgroup app && adduser -S -G app app

# USER app

WORKDIR /app

COPY package*.json ./

# USER root

# RUN chown -R app:app .

# USER app

RUN npm install

COPY . .

EXPOSE 5173

CMD npm run dev
```

</details>

<details>
<summary><code>mern-docker/backend/Dockerfile</code></summary>

```dockerfile
FROM node:20-alpine3.18

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY package*.json ./

# change ownership of the /app directory to the app user
USER root

# change ownership of the /app directory to the app user
# chown -R <user>:<group> <directory>
# chown command changes the user and/or group ownership of for given file.
RUN chown -R app:app .

# change the user back to the app user
USER app

RUN npm install

COPY . . 

EXPOSE 8000 

CMD npm start
```

</details>

<details>
<summary><code>mern-docker/compose.yaml</code></summary>

```yaml
# specify the version of docker-compose
version: "3.8"

# define the services/containers to be run
services:
  # define the frontend service
  # we can use any name for the service. A standard naming convention is to use "web" for the frontend
  web:
    # we use depends_on to specify that service depends on another service
    # in this case, we specify that the web depends on the api service
    # this means that the api service will be started before the web service
    depends_on: 
      - api
    # specify the build context for the web service
    # this is the directory where the Dockerfile for the web service is located
    build: ./frontend
    # specify the ports to expose for the web service
    # the first number is the port on the host machine
    # the second number is the port inside the container
    ports:
      - 5173:5173
    # specify the environment variables for the web service
    # these environment variables will be available inside the container
    environment:
      VITE_API_URL: http://localhost:8000

    # this is for docker compose watch mode
    # anything mentioned under develop will be watched for changes by docker compose watch and it will perform the action mentioned
    develop:
      # we specify the files to watch for changes
      watch:
        # it'll watch for changes in package.json and package-lock.json and rebuild the container if there are any changes
        - path: ./frontend/package.json
          action: rebuild
        - path: ./frontend/package-lock.json
          action: rebuild
        # it'll watch for changes in the frontend directory and sync the changes with the container real time
        - path: ./frontend
          target: /app
          action: sync

  # define the api service/container
  api: 
    # api service depends on the db service so the db service will be started before the api service
    depends_on: 
      - db

    # specify the build context for the api service
    build: ./backend
    
    # specify the ports to expose for the api service
    # the first number is the port on the host machine
    # the second number is the port inside the container
    ports: 
      - 8000:8000

    # specify environment variables for the api service
    # for demo purposes, we're using a local mongodb instance
    environment: 
      DB_URL: mongodb://db/anime
    
    # establish docker compose watch mode for the api service
    develop:
      # specify the files to watch for changes
      watch:
        # it'll watch for changes in package.json and package-lock.json and rebuild the container and image if there are any changes
        - path: ./backend/package.json
          action: rebuild
        - path: ./backend/package-lock.json
          action: rebuild
        
        # it'll watch for changes in the backend directory and sync the changes with the container real time
        - path: ./backend
          target: /app
          action: sync

  # define the db service
  db:
    # specify the image to use for the db service from docker hub. If we have a custom image, we can specify that in this format
    # In the above two services, we're using the build context to build the image for the service from the Dockerfile so we specify the image as "build: ./frontend" or "build: ./backend".
    # but for the db service, we're using the image from docker hub so we specify the image as "image: mongo:latest"
    # you can find the image name and tag for mongodb from docker hub here: https://hub.docker.com/_/mongo
    image: mongo:latest

    # specify the ports to expose for the db service
    # generally, we do this in api service using mongodb atlas. But for demo purposes, we're using a local mongodb instance
    # usually, mongodb runs on port 27017. So we're exposing the port 27017 on the host machine and mapping it to the port 27017 inside the container
    ports:
      - 27017:27017

    # specify the volumes to mount for the db service
    # we're mounting the volume named "anime" inside the container at /data/db directory
    # this is done so that the data inside the mongodb container is persisted even if the container is stopped
    volumes:
      - anime:/data/db

# define the volumes to be used by the services
volumes:
  anime:
```

</details>

<details>
<summary><code>next-docker/Dockerfile</code></summary>

```dockerfile
# inherit from a existing image to add the functionality
FROM node:20-alpine3.18

# RUN addgroup app && adduser -S -G app app
# USER app

# Set the working directory and assign ownership to the non-root user
WORKDIR /app

# Copy the package.json and package-lock.json files into the image.
COPY package*.json ./

# change ownership of the /app directory to the app user
# USER root

# change ownership of the /app directory to the app user
# chown -R <user>:<group> <directory>
# chown command changes the user and/or group ownership of for given file.
# RUN chown -R app:app .

# change the user back to the app user
# USER app

# Install the dependencies.
RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD npm run dev
```

</details>

<details>
<summary><code>next-docker/compose.yaml</code></summary>

```yaml
version: '3.8'

services:
  frontend:
    # uncomment the following line if you want to run a local instance of MongoDB
    # depends_on:
    #   - db
    build:
      context: .
      dockerfile: Dockerfile
    
    # do port mapping so that we can access the app from the browser
    ports:
      - 3000:3000
    
    # use docker compose to watch for changes and rebuild the container
    develop:
      watch:
        - path: ./package.json
          action: rebuild
        - path: ./next.config.js
          action: rebuild
        - path: ./package-lock.json
          action: rebuild
        - path: .
          target: /app
          action: sync
    
    # define the environment variables
    environment:
      # we're using MongoDB atlas so we need to pass in the connection string
      DB_URL: mongodb+srv://sujata:rnZzJjIDr3bIDymV@cluster0.hnn88vs.mongodb.net/ 

  # we're using MongoDB atlas so we don't need to run a local instance of MongoDB
  # but if you want to run a local instance, you can do it this way
  # db:
  #   image: mongo
  #   ports:
  #     - 27017:27017
  #   environment:
  #     - MONGO_INITDB_ROOT_USERNAME=sujata
  #     - MONGO_INITDB_ROOT_PASSWORD=rnZzJjIDr3bIDymV
  #   volumes:
  #     - tasked:/data/db
    
volumes:
  tasked:
```

</details>

## <a name="more">🚀 More</a>

**Advance your skills with Next.js 14 Pro Course**

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning adventure. They're packed with detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://jsmastery.pro/next14" target="_blank">
<img src="https://github.com/sujatagunale/EasyRead/assets/151519281/557837ce-f612-4530-ab24-189e75133c71" alt="Project Banner">
</a>

<br />
<br />

**Accelerate your professional journey with the Expert Training program**

And if you're hungry for more than just a course and want to understand how we learn and tackle tech challenges, hop into our personalized masterclass. We cover best practices, different web skills, and offer mentorship to boost your confidence. Let's learn and grow together!

<a href="https://www.jsmastery.pro/masterclass" target="_blank">
<img src="https://github.com/sujatagunale/EasyRead/assets/151519281/fed352ad-f27b-400d-9b8f-c7fe628acb84" alt="Project Banner">
</a>

#
