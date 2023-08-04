# 6. Making HTTP Requests and Working with Observables in Angular

Owner: Seraf Dos Santos

## 6.1 Introduction

Angular, a robust web application framework developed by Google, is widely recognized for its excellent data binding and dependency injection, which eliminates a lot of code that would otherwise have to be written.

In today's digital era, web applications are expected to deliver dynamic and customized data that meets the needs of the user. To accomplish this, the application must be able to communicate with a server and request or send data. This is where HTTP (HyperText Transfer Protocol) requests come in.

In Angular, HTTP requests are made using the `HttpClient` module. This module simplifies the implementation of HTTP requests by offering powerful methods for request and response manipulation.

Alongside HTTP requests, another crucial feature of Angular is Observables. Observables are part of the RxJS library, a powerful tool for managing asynchronous data. In Angular, Observables are often used to handle HTTP requests.

This chapter aims to guide you through making HTTP requests in Angular, working with Observables for asynchronous data retrieval, and handling errors and exceptions.

## 6.2 Making HTTP Requests in Angular

Before you can make HTTP requests, you need to import the `HttpClientModule` into your Angular application. This is typically done in the `app.module.ts` file:

```tsx
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    // other imports here...
    HttpClientModule
  ],
  // other declarations here...
})
export class AppModule { }

```

To make an HTTP request, you first need to import the `HttpClient` in your component:

```tsx
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) { }

```

Then you can use the `http.get()`, `http.post()`, `http.put()`, or `http.delete()` methods to make the corresponding HTTP requests. Here's an example using `http.get()`:

```tsx
this.http.get('<https://api.example.com/data>').subscribe(data => {
  console.log(data);
});

```

In this example, the `get()` method makes a GET request to the specified URL and returns an Observable. The `subscribe()` method is used to subscribe to this Observable and log the returned data to the console.

## 6.3 Working with Observables

In Angular, Observables are used extensively in conjunction with HTTP requests. An Observable is similar to a Promise, but it can provide multiple values over time.

To work with Observables, we first need to import the `Observable` from the RxJS library:

```tsx
import { Observable } from 'rxjs';

```

To create an Observable, you can use the `new Observable()` constructor. Here's an example:

```tsx
const myObservable = new Observable(observer => {
  setTimeout(() => {
    observer.next('Hello from Observable!');
  }, 2000);
});

myObservable.subscribe(value => console.log(value));

```

In this example, the Observable emits a single value ('Hello from Observable!') after a delay of 2000 milliseconds. The `subscribe()` method is used to subscribe to the Observable and log the emitted value.

## 6.4 Handling Errors and Exceptions

When working with HTTP requests, it's crucial to handle any potential errors. The `catchError` operator from the RxJS library can be used for this purpose.

First, import the necessary operators from RxJS:

```tsx
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

```

Then, you can use `pipe()` and `catchError()` in your HTTP request to handle any errors:

```tsx
this.http.get('<https://api.example.com/data>').pipe(
  catchError(error => {
    console.log('Error occurred: ', error);
    return throwError(error);
  })
).subscribe(data => {
  console.log(data);
});

```

In this example, if an error occurs during the GET request, the `catchError()` operator catches the error and logs it to the console. The `throwError()` function is used to re-throw the error, allowing you to handle it elsewhere in your application if needed.

## 6.5 Conclusion

In this chapter, we've explored how to make HTTP requests in Angular, how to work with Observables for asynchronous data retrieval, and how to handle errors and exceptions. With these tools at your disposal, you can create dynamic, data-driven Angular applications that provide an excellent user experience.