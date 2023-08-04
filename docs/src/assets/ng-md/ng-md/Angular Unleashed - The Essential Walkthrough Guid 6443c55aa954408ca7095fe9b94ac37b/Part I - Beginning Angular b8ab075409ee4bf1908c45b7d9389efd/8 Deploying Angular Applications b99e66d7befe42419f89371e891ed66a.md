# 8. Deploying Angular Applications

Owner: Seraf Dos Santos

## 8.1 Preparing Your Angular App for Deployment

Before you can deploy your Angular application, you need to prepare it by performing a build process. The build process transforms your Angular application from source code into an optimized version that can be served by a web server. This process includes steps like minification (to reduce file size) and transpilation (to convert TypeScript code into JavaScript that can be executed by browsers).

### 8.1.1 Building Your Angular App

The Angular CLI provides a simple way to build your application. You can use the `ng build` command to build your Angular app. By default, this command will build your app in development mode. To prepare your app for production, you should build it in production mode by using the `--prod` flag:

```bash
ng build --prod

```

The build process will create a `dist/` directory in your project root, containing all the files needed to serve your application.

### 8.1.2 Checking for Common Issues

After building your application, it's a good idea to check for common issues that might affect your application's performance or functionality in production. The Angular CLI's `ng lint` command can help you identify and fix issues related to code quality:

```bash
ng lint

```

Additionally, consider running your unit tests to ensure that your application behaves as expected:

```bash
ng test

```

## 8.2 Choosing a Deployment Strategy

There are many ways to deploy an Angular application, and the best approach depends on your specific needs and circumstances. Here are some of the most common deployment strategies:

- **Static Web Hosting**: If your Angular application is a static Single Page Application (SPA), you can host it on any web server or service that can serve static files. This includes services like Amazon S3, Netlify, and GitHub Pages.
- **Server-Side Rendering (SSR)**: If your application needs to be crawlable by search engines or needs to display quickly on slow networks, you might want to use Angular Universal for server-side rendering. This approach involves running your Angular application on a server and serving fully-rendered HTML to the client.
- **Containerization**: If you need more control over your deployment environment, you can package your application in a Docker container and deploy it to a container orchestration service like Kubernetes.
- **Platform as a Service (PaaS)**: If you want to avoid managing servers and infrastructure, you can deploy your application to a Platform as a Service like Heroku, Google Cloud Run, or AWS Elastic Beanstalk.

Consider your application's requirements, your team's expertise, and your budget when choosing a deployment strategy.

## 8.3 Deploying to a Web Server or Cloud Platform

The process of deploying your Angular application to a web server or cloud platform will depend on the specific server or platform and the deployment strategy you've chosen. Here are some general steps you may need to follow:

### 8.3.1 Deploying to a Static Web Server

1. **Build your application for production**: Run `ng build --prod` to create a production build of your application.
2. **Upload the build output to your server**: The `dist/` directory created by the build process contains all the files you need to serve your application. Upload these files to your web server.
3. **Configure your server to serve your application**: Depending on your server, you may need to configure it to serve your application's `index.html` file for all requests in order to support Angular's routing.

### 8.3.2 Deploying to a Cloud Platform

1. **Build your application for production**: As before, run `ng build --prod`.
2. **Prepare your application for deployment**: Depending on the platform, you may need to create a `Dockerfile` for containerization, or a `Procfile` for platforms like Heroku.
3. **Deploy your application**: The specific steps will depend on the platform. For example, on Heroku, you would use the Heroku CLI's `heroku push` command.

In all cases, be sure to test your application thoroughly after deployment to ensure it works correctly in its production environment.

Remember, deploying an Angular application involves many factors and decisions. This guide provides a broad overview, but the specifics will depend on your application's requirements and the infrastructure you're working with. Always refer to the official documentation for the tools and platforms you're using for the most accurate and detailed information.