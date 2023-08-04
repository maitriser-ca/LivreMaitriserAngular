# 28. Angular PWA - Progressive Web Applications

Owner: Seraf Dos Santos

## 28.1 Understanding Progressive Web Applications (PWAs)

Progressive Web Applications (PWAs) are a type of web application that uses modern web capabilities to deliver an app-like experience to users. These applications meet certain criteria, are deployed to servers, accessible through URLs, and indexed by search engines.

Key characteristics of PWAs include:

- **Progressive**: Work for every user, regardless of browser choice.
- **Responsive**: Fit any form factor, desktop, mobile, tablet, or whatever is next.
- **Connectivity Independent**: Enhanced with service workers to work offline or on low-quality networks.
- **App-like**: Feel like an app to the user with app-style interactions and navigation.
- **Fresh**: Always up-to-date thanks to the service worker update process.
- **Safe**: Served via HTTPS to prevent snooping and ensure content hasn't been tampered with.
- **Discoverable**: Are identifiable as "applications" thanks to W3C manifests and service worker registration scope allowing search engines to find them.
- **Re-engageable**: Make re-engagement easy through features like push notifications.
- **Installable**: Allow users to "keep" apps they find most useful on their home screen without the hassle of an app store.
- **Linkable**: Easily shared via a URL and do not require complex installation.

## 28.2 Creating a PWA using Angular and the PWA Builder

Angular provides excellent support for creating PWAs thanks to its built-in service worker functionality and PWA tools. Here's a step-by-step guide to creating a PWA using Angular:

1. **Create an Angular Application**: Start by creating a new Angular application using Angular CLI. If you haven't installed Angular CLI yet, you can do so with npm (node package manager) using the following command: `npm install -g @angular/cli`. Once Angular CLI is installed, you can create a new application using `ng new my-app`.
2. **Add PWA Capabilities**: Convert the newly created Angular application into a PWA by adding Angular PWA capabilities. This can be done using Angular CLI with the following command: `ng add @angular/pwa`. This command adds a new file `ngsw-config.json` which is the configuration for the Angular Service Worker, updates `angular.json` file, and updates `index.html` to include the manifest file.
3. **Modify the PWA Configuration**: Modify the `ngsw-config.json` file to specify which files and data URLs the service worker will cache. Also, modify the manifest file `manifest.webmanifest` to specify the name of the app, the icons used, the background color of the splash screen, and other details.
4. **Build the Application**: Finally, build the application using Angular CLI with this command: `ng build --prod`. This command triggers the creation of a service worker and a manifest file for your PWA.

The result is an Angular application that has PWA capabilities and can work offline, be installed on the user's device, and load quickly.

## 28.3 Optimizing Your PWA for Performance and Offline Functionality

To optimize your PWA for performance, you need to ensure that it loads quickly and can function offline. Here are some tips to achieve this:

1. **Use the Angular Service Worker for Caching**: The Angular service worker can cache the application's files and data to ensure it loads quickly and can work offline. Make sure to configure the service worker properly in the `ngsw-config.json` file.
2. **Minimize the Number of HTTP Requests**: Each HTTP request adds to the loading time of your application. Try to minimize the number of HTTP requests by bundling your files, using sprite sheets for images, and minimizing the use of external libraries.
3. **Compress Your Files**: Use tools such as UglifyJS to minimize your JavaScript files, and CSSNano to minimize your CSS files. Also, make sure to compress your images.
4. **Use the Application Shell Architecture**: The Application Shell Architecture renders the shell of your application UI on the server and caches it. This allows for instant loading on repeat visits.
5. **Use Lazy Loading**: Lazy loading allows you to load parts of your application only when they're needed. This can greatly improve the initial loading time of your application.

By following these steps and best practices, you can create a fast, reliable, and engaging PWA with Angular.