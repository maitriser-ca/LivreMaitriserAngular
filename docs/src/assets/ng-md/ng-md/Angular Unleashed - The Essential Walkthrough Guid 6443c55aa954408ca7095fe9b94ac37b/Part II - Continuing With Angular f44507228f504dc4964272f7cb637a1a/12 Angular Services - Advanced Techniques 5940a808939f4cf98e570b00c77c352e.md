# 12. Angular Services - Advanced Techniques

Owner: Seraf Dos Santos

## 12.1 Using the HttpClient to Make API Requests and Handle Responses

In Angular, the HttpClient is the recommended way to make HTTP requests. It provides a powerful, easy-to-use API for making requests and handling responses.

To use the HttpClient, first import it into your service file:

```tsx
import { HttpClient } from '@angular/common/http';

```

Then inject it into your service's constructor:

```tsx
constructor(private http: HttpClient) { }

```

With the HttpClient injected, you can now use it to make API requests. The HttpClient supports all standard HTTP methods, such as GET, POST, PUT, DELETE, etc.

For example, to make a GET request:

```tsx
this.http.get('<https://api.example.com/data>').subscribe(data => {
  console.log(data);
});

```

The HttpClient returns an Observable. We subscribe to this Observable to handle the response. The data returned from the server is passed to the subscribe callback function.

### 12.1.1 Error Handling with HttpClient

Errors can occur during HTTP requests. The HttpClient provides a way to handle these errors. You can pass a second callback function to subscribe that will be called if an error occurs:

```tsx
this.http.get('<https://api.example.com/data>').subscribe(
  data => console.log(data),
  error => console.error('There was an error!', error)
);

```

## 12.2 Working with Interceptors to Modify HTTP Requests and Responses

Interceptors are a powerful feature of HttpClient that allow you to intercept and modify HTTP requests and responses. They can be used for a variety of purposes, such as adding headers to requests, logging responses, handling errors, and more.

To use an interceptor, you create a service that implements the HttpInterceptor interface. This service must have an intercept method that takes a HttpRequest and a HttpHandler and returns an Observable:

```tsx
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify the request and pass it to the next handler.
    const modifiedReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer my-token') });
    return next.handle(modifiedReq);
  }
}

```

Then, you need to provide this service in your app module:

```tsx
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
    // other providers...
  ],
  // other metadata...
})
export class AppModule { }

```

## 12.3 Using RxJS to Handle Complex Asynchronous Scenarios

RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.

Angular uses RxJS extensively, and it's a core part of working with Angular. Observables are used extensively in Angular, including for HTTP requests, form events, route parameters, and more.

Observables represent a stream of values over time. You can subscribe to an Observable to react to new values, and you can transform and combine Observables using a wide variety of operators.

For example, you can use the map operator to transform the values emitted by an Observable:

```tsx
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const numbers = of(1, 2, 3, 4, 5);
const squaredNumbers = numbers.pipe(map(n => n * n));

squaredNumbers.subscribe(n => console.log(n));  // Outputs: 1, 4, 9, 16, 25

```

You can also use RxJS to handle more complex scenarios, such as making multiple HTTP requests in sequence or in parallel, retrying requests that fail, and more.

For example, you can use the concatMap operator to make HTTP requests in sequence:

```tsx
import { from } from 'rxjs';
import { concatMap } from 'rxjs/operators';

const urls = from(['<https://api.example.com/data1>', '<https://api.example.com/data2>']);

const data = urls.pipe(
  concatMap(url => this.http.get(url))
);

data.subscribe(
  data => console.log(data),
  error => console.error('There was an error!', error)
);

```

In this example, the second HTTP request will not be made until the first one completes.

In conclusion, Angular provides a powerful set of tools for working with HTTP requests, including the HttpClient for making requests, interceptors for modifying requests and responses, and RxJS for handling complex asynchronous scenarios. With these tools, you can build robust and responsive applications that work well with modern APIs.