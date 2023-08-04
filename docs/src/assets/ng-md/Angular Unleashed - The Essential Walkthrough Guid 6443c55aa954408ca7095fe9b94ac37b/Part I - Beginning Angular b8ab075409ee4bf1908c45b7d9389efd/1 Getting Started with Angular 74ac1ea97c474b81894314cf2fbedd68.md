# 1. Getting Started with Angular

Owner: Seraf Dos Santos

## 1.1 Introduction to Angular and its Key Concepts

Angular is a platform that makes it easy to build applications with the web. It is a TypeScript-based open-source framework led by the Angular Team at Google and by a community of individuals and corporations. It is used for developing web, mobile web, native mobile, and native desktop applications.

Angular combines declarative templates, dependency injection, end-to-end tooling, and integrated best practices to solve development challenges. It has a very modular architecture, where an application is set up as a set of independent modules.

Key concepts in Angular include:

- **Components**: These are the basic building blocks of an Angular application. A component controls a part of the screen—a view—through its associated template.
- **Modules**: Angular apps are modular and Angular has its own modularity system called NgModules. NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities.
- **Services and Dependency Injection**: For data or logic that isn't associated with a specific view, and that you want to share across components, you create a service class. Angular's dependency injection system provides the necessary services.
- **Routing**: The Angular Router NgModule provides a service that lets you define a navigation path among the different application states and view hierarchies in your app.

## 1.2 Setting up a Development Environment

To get started with Angular, you need to set up a development environment. Here are the steps:

1. **Install Node.js and npm**: Angular requires Node.js version 10.9.0 or later and npm (which comes with Node.js) to run. You can download and install Node.js from the official website.
2. **Install the Angular CLI**: The Angular CLI (Command Line Interface) is a powerful tool that lets you initialize, develop, and maintain Angular applications. You can install it globally by running the following command in your terminal:
    
    ```
    npm install -g @angular/cli
    
    ```
    
3. **Create a new Angular project**: After installing the Angular CLI, you can create a new project by running the following command, replacing 'my-app' with the name of your application:
    
    ```
    ng new my-app
    
    ```
    
4. **Serve the application**: Go into the project directory and launch the server:
    
    ```
    cd my-app
    ng serve
    
    ```
    

You should be able to see your new Angular application by opening your web browser and navigating to `http://localhost:4200/`.

## 1.3 Building and Running Your First Angular App

Now that your environment is set up, let's build a simple Angular application. For the sake of this tutorial, we'll create a simple app that displays "Hello, Angular!" on the screen.

1. **Create a new component**: In your project directory, generate a new component named 'hello' by using the Angular CLI command:
    
    ```
    ng generate component hello
    
    ```
    
    This command creates a new folder named 'hello' inside the 'app' folder, with four files: `hello.component.ts`, `hello.component.html`, `hello.component.css`, and `hello.component.spec.ts`.
    
2. **Edit the component**: Open the `hello.component.ts` file and modify the content as follows:
    
    ```tsx
    import { Component } from '@angular/core';
    
    @Component({
      selector: 'app-hello',
      templateUrl: 'hello.component.html',
      styleUrls: ['hello.component.css']
    })
    export class HelloComponent {
      title = 'Hello, Angular!';
    }
    
    ```
    
    This code declares a new component and sets its selector to 'app-hello'. The `title` property is set to 'Hello, Angular!'.
    
3. **Edit the template**: Next, open `hello.component.html` and replace its content with the following:
    
    ```html
    <h1>{{ title }}</h1>
    
    ```
    
    This code will display the value of the `title` property from the component.
    
4. **Use the component**: Finally, you need to tell Angular where to display this component. Open `app.component.html` and replace its content with the following:
    
    ```html
    <app-hello></app-hello>
    
    ```
    
5. **Run the application**: Go back to your terminal and run the following command to start the Angular development server:
    
    ```
    ng serve
    
    ```
    

Open your web browser and navigate to `http://localhost:4200/`. You should see "Hello, Angular!" displayed on the screen. Congratulations, you've just created your first Angular application!

In the following chapters, we will delve deeper into Angular's components, services, routing, and more. So, stay tuned!