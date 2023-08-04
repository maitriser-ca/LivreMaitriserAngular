# 3. Services and Dependency Injection in Angular

Owner: Seraf Dos Santos

## 3.1 Introduction

Services in Angular are a fundamental part of developing applications. They are used to organize and share code across multiple components. In Angular, a service is a class with a specific purpose. It should do something specific and do it well. Angular services are substitutable objects that are wired together using dependency injection (DI). You can use services to organize and share code that's needed by many components.

## 3.2 Understanding the Role of Services in Angular

### 3.2.1 What is a Service?

A service in Angular is essentially a JavaScript function, along with its associated properties and methods, that can be included (or "injected") into any Angular component. This function can be reused wherever it is injected, which promotes efficiency and modularity in your code.

Here are a few key points about services:

- Services are singleton objects which get instantiated only once during the lifetime of an application.
- The main objective of a service is to organize and share business logic, models, or data and functions with different components of an Angular application.
- Angular services are lazily instantiated, meaning the Angular DI does not instantiate a service until an application component depends on it.

### 3.2.2 Why Use Services?

The primary reason we use services in Angular is to share resources across different parts of an application. For example, if you need to share data between components or you have methods that need to be used in several places, you can encapsulate that functionality within a service and then inject that service wherever it's needed.

Benefits of using services include:

- **Code reusability**: We write code once in service and use it across all components.
- **Data sharing**: We can share data between components using a service.
- **Separation of concerns**: Different services can handle different tasks, each one focusing on a specific task.

## 3.3 Creating and Using Services in Angular

### 3.3.1 Creating a Service

Creating a service in Angular involves defining a class and decorating it with the `@Injectable` decorator. This decorator tells Angular that this class will be used as a service.

```tsx
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  constructor() { }

  getGreetings() {
    return 'Hello from SampleService!';
  }
}

```

In the above code, we have created a simple service called `SampleService` with a method `getGreetings` which returns a greeting message.

### 3.3.2 Using a Service

To use a service, you need to "inject" it into the components that will use it. This is done via the component's constructor. Here's an example of how to use the `SampleService` in a component:

```tsx
import { Component } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App';

  constructor(private sampleService: SampleService) {
    console.log(this.sampleService.getGreetings());
  }
}

```

In the above code, we are injecting the `SampleService` into the `AppComponent`. We do this by adding a parameter to the constructor of `AppComponent`. The type of this parameter is `SampleService`, and it is marked as `private`. This means that `sampleService` is available as a field in instances of `AppComponent`.

## 3.4 Implementing Dependency Injection in Angular

Dependency Injection (DI) is a coding pattern in which a class receives its dependencies from external sources rather than creating them itself. In Angular, objects can have dependencies. These dependencies are services or objects that a class needs to perform its function.

Angular's DI system provides dependencies to a class upon instantiation. You can tell Angular that a component depends on a service by using the constructor:

```tsx
constructor(private sampleService: SampleService) {}

```

Here, the `constructor` of the component is asking Angular DI system for an instance of the `SampleService`. If the `SampleService` has not been created yet, Angular creates one and passes it in.

### 3.4.1 Why Use Dependency Injection?

Using DI, we can write more maintainable, testable, and modular code. All the tasks that need to interact with external resources can be delegated to services, making the code cleaner and more maintainable. Furthermore, because services are separate classes, they can be easily mocked or stubbed, making testing easier.

## 3.5 Conclusion

Services and dependency injection are fundamental to developing Angular applications. They provide a way to organize code and promote efficient code reuse. By understanding and leveraging these concepts, you can create robust, maintainable, and testable applications. Remember that services are all about encapsulating functionality and promoting code reuse, and dependency injection is all about providing an instance of a service or an object to the class that needs it.