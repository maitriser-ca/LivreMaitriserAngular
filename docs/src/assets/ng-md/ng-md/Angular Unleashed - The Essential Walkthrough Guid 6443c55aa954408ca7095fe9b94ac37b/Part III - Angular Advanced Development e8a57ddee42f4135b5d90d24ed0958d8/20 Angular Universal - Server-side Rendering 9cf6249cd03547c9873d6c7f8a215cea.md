# 20. Angular Universal - Server-side Rendering

Owner: Seraf Dos Santos

In this chapter, we will delve into server-side rendering in Angular, an important and advanced topic in web development. We will explore its key concepts, how to implement it in an Angular application, and how to use pre-rendering to further improve the performance of your application.

## 20.1 Understanding Server-side Rendering in Angular

Angular, by default, is a client-side rendering (CSR) framework. This means that the application is rendered in the browser by JavaScript. However, this approach can have some limitations, including slower initial page load times and less optimal search engine optimization (SEO). This is where server-side rendering (SSR) with Angular Universal comes in.

Angular Universal is a technology that performs server-side rendering of Angular applications. It can generate static application pages on the server through a process called rendering. This means that the browser receives pre-rendered pages, which can be displayed to the user much faster.

Advantages of SSR with Angular Universal include:

1. Better SEO: Search engines can crawl the site for better SEO because the application is fully rendered on the server.
2. Performance: The browser gets a fully rendered HTML page from the server, reducing the time to first meaningful paint and improving the perceived performance for users.
3. Social Sharing: Social media platforms can preview your site properly as the required metadata exists in the server-rendered HTML.

However, it's important to note that while SSR improves initial page load performance and enables crawlers to scan the site, it also requires more computational resources on the server.

## 20.2 Implementing Server-side Rendering in Your Angular Application

To demonstrate how you can implement SSR in your Angular application, we'll use the Angular CLI. Here is a step-by-step guide:

1. **Create a new Angular application**: If you don't have an existing application, you can create a new one using the Angular CLI. Run the following command:

```bash
ng new my-app

```

1. **Add Angular Universal to your application**: Once you have your Angular application, navigate into the root directory of the project and run the following command:

```bash
ng add @nguniversal/express-engine

```

This command will perform a number of tasks:

- It creates a Node Express server (`server.ts`) to dynamically serve your Angular application.
- It adds dependencies and scripts to your `package.json` to run your application in SSR mode.
- It creates an `app.server.module.ts` file which is the entry point for the server-side version of your application.
1. **Build and serve your application**: Now, you can build and serve your application using the following commands:

```bash
npm run build:ssr && npm run serve:ssr

```

Your application is now being served using server-side rendering!

## 20.3 Using Pre-rendering to Improve the Performance of Your Application

Pre-rendering is a form of optimization that generates static HTML pages for all routes at build time. This means that the server doesn't have to generate a new page for each request, which can greatly improve performance.

To use pre-rendering in Angular Universal, you'll have to install the `@nguniversal/builders` package:

```bash
npm install @nguniversal/builders

```

Then, in your `angular.json` file, you need to change the builder and options for the `prerender` target to use the `@nguniversal/builders:prerender` builder. The `angular.json` file should look something like this:

```json
"prerender": {
  "builder": "@nguniversal/builders:prerender",
  "options": {
    "browserTarget": "my-app:build:production",
    "serverTarget": "my-app:server:production",
    "routes": [
      "/",
      "/about",
      "/contact"
    ]
  }
}

```

The `routes` array should contain all the routes in your application that you want to pre-render.

Finally, to run pre-rendering, use the following command:

```bash
npm run prerender

```

Your application will now generate static HTML pages for each specified route at build time!

In conclusion, server-side rendering with Angular Universal can be a powerful tool for improving the performance and SEO of your Angular applications. By understanding its principles and how to implement it, you can create more efficient and user-friendly web applications.