# 22. Advanced Angular Deployment Techniques

Owner: Seraf Dos Santos

## 22.1 Introduction

Building an Angular application is just the first step in the journey to delivering a successful product. Deployment is the phase where the application is made available to users. While simple deployment strategies may work for small, less critical applications, when it comes to deploying complex, large-scale, and critical applications, advanced deployment techniques come into play. These techniques ensure that your application is deployed safely, with minimal downtime and the ability to rollback if needed.

In this chapter, we'll explore advanced deployment techniques for Angular applications, including Docker and Kubernetes-based deployments, as well as canary and blue-green deployment strategies.

## 22.2 Dockerizing Angular Application

Docker provides an efficient way to bundle your application along with its environment. This makes your application portable, scalable, and easy to deploy.

### Example

Consider an Angular application which is built using the `ng build` command. The output of this command is a `dist/` directory which contains the static files of the application.

A Dockerfile for this application would look something like this:

```
# Stage 1: Build the Angular application
FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/my-app /usr/share/nginx/html

```

This Dockerfile uses a multi-stage build process. In the first stage, it builds the Angular application using a Node.js image. In the second stage, it serves the application using an Nginx server. The built application from the first stage is copied to the Nginx server in the second stage.

## 22.3 Kubernetes Deployment

Kubernetes is a powerful orchestration tool for managing containers, like those created by Docker. It provides features like scaling, load balancing, and rolling updates.

To deploy an Angular application on Kubernetes, you first need to create a Docker image of your application, and then define a Kubernetes Deployment configuration.

### Example

A simple Kubernetes Deployment configuration for the Dockerized Angular application might look like this:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app:1.0.0
        ports:
        - containerPort: 80

```

This configuration creates a Deployment with 3 replicas of the Docker image `my-app:1.0.0`, each listening on port 80. Kubernetes automatically load balances traffic between these replicas.

## 22.4 Canary Deployments

Canary deployments are a pattern for rolling out new versions of an application to a small subset of users before rolling it out to everyone. This allows you to test the new version in a live environment with a smaller impact if something goes wrong.

### Example

To implement a canary deployment in Kubernetes, you could create two Deployments, one for the stable version of your application and one for the canary version. You then adjust the number of replicas and the service routing to control the percentage of users who see the canary version.

Here is an example:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app
spec:
  selector:
    app: my-app
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app-stable
spec:
  replicas: 90
  selector:
    matchLabels:
      app: my-app
      track: stable
  template:
    metadata:
      labels:
        app: my-app
        track: stable
    spec:
      containers:
      - name: my-app
        image: my-app:1.0.0
        ports:
        - containerPort: 80
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app-canary
spec:
  replicas: 10
  selector:
    matchLabels:
      app: my-app
      track: canary
  template:
    metadata:
      labels:
        app: my-app
        track: canary
    spec:
      containers:
      - name: my-app
        image: my-app:1.1.0-canary
        ports:
        - containerPort: 80

```

In this example, the Service routes traffic to both the stable and canary Deployments. The stable Deployment has 90 replicas, and the canary Deployment has 10 replicas, so approximately 10% of users will be served the canary version of the application.

## 22.5 Blue-Green Deployments

Blue-green deployment is a strategy that reduces downtime and risk by running two identical production environments, named Blue and Green. At any given time, only one of the environments is live.

### Example

Here's how you might set up a blue-green deployment for an Angular application in Kubernetes:

First, create two services, one for each environment:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-blue
spec:
  selector:
    app: my-app
    version: blue
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: my-app-green
spec:
  selector:
    app: my-app
    version: green
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80

```

Then, create a Deployment for each environment:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app-blue
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
      version: blue
  template:
    metadata:
      labels:
        app: my-app
        version: blue
    spec:
      containers:
      - name: my-app
        image: my-app:1.0.0
        ports:
        - containerPort: 80
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app-green
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
      version: green
  template:
    metadata:
      labels:
        app: my-app
        version: green
    spec:
      containers:
      - name: my-app
        image: my-app:1.1.0
        ports:
        - containerPort: 80

```

Finally, to switch from the blue environment to the green environment, you would update the selector of the public-facing service to point to the green service:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app
spec:
  selector:
    app: my-app
    version: green
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80

```

With this setup, you can test the new version of the application in the green environment, and then switch over to the green environment when you're ready to deploy the new version to all users.

## 22.6 Conclusion

In this chapter, we covered some advanced techniques for deploying Angular applications. By leveraging Docker and Kubernetes, we can create scalable and highly available deployments. With canary and blue-green deployment strategies, we can minimize the risk and impact of deploying new versions of our applications. These techniques provide a solid foundation for deploying complex Angular applications in a robust and reliable way.