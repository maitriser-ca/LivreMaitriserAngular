# 23. Performance Optimization with Web Workers in Angular

Owner: Seraf Dos Santos

## 23.1 Introduction

The modern web is a complex ecosystem, with web applications becoming increasingly sophisticated and demanding. In this environment, the performance of your application is crucial. One way to improve performance and deliver a smoother user experience is through the use of Web Workers.

Web Workers allow for background threads that can be used for performing intensive tasks without blocking the main thread, enabling the application to remain responsive even when it's processing large amounts of data or complex computations. This chapter will provide an understanding of how Web Workers can enhance performance in Angular applications, demonstrate how to create and use Web Workers, and show how to optimize your application for parallelism using Web Workers.

## 23.2 Understanding Web Workers and Performance Optimization

Web Workers are a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. Moreover, they can perform I/O using XMLHttpRequest (although the responseXML and channel attributes are always null). Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and vice versa.)

Using Web Workers in Angular applications can significantly improve performance, especially for tasks that are computationally heavy or require significant amounts of data processing. By moving these tasks to a separate thread, the main thread is free to continue handling user interactions and other tasks, leading to a smoother and more responsive user experience.

For example, consider an application that needs to process a large dataset in order to generate a complex visualization. Without a Web Worker, the processing would occur on the main thread, potentially causing the application to become unresponsive. With a Web Worker, the processing can occur in the background, allowing the application to remain responsive.

## 23.3 Creating and Using Web Workers in Angular

Creating a Web Worker in an Angular application involves a few steps. Here's a basic example:

1. **Create a Web Worker file:** This is where you'll write the code that the Web Worker will execute. For instance, you might create a file called `app.worker.ts` with the following content:

```tsx
addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});

```

1. **Instantiate the Web Worker in your component:** You can do this in the `ngOnInit` lifecycle hook of your component.

```tsx
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private worker: Worker;

  ngOnInit() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      this.worker = new Worker('./app.worker', { type: 'module' });
      this.worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      this.worker.postMessage('hello');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so your program still executes correctly.
    }
  }
}

```

In this example, we first check if the Web Worker API is available in the current environment. If it is, we create a new instance of our Web Worker and set up message handling. We then send a message to the Web Worker with `postMessage`.

## 23.4 Optimizing for Parallelism

When optimizing your Angular application for parallelism using Web Workers, there are several things to consider:

- **Task division:** To take full advantage of Web Workers, you'll want to divide your tasks in such a way that they can be performed in parallel. This usually means breaking down large tasks into smaller subtasks that can be executed independently.
- **Communication overhead:** Remember that communication between the main thread and worker threads is not instantaneous. Sending messages between threads can introduce a delay, especially for large amounts of data. Therefore, you should aim to minimize communication between threads where possible.
- **Number of workers:** Creating too many Web Workers can also slow down your application, as each one comes with a certain amount of overhead. You should aim to strike a balance between the number of workers and the size of the tasks they're performing.

Here is an example of how you might use Web Workers to perform a complex calculation in parallel:

```tsx
// Create an array of workers
const workers = new Array(new Worker('worker1.js'), new Worker('worker2.js'));

// Divide the task into subtasks
const task1 = { start: 0, end: 500 };
const task2 = { start: 500, end: 1000 };

// Assign tasks to workers
workers[0].postMessage(task1);
workers[1].postMessage(task2);

// Handle results from workers
workers[0].onmessage = (event) => handleResult(event.data);
workers[1].onmessage = (event) => handleResult(event.data);

```

In this example, we create two Web Workers and divide a task into two subtasks. We then send each subtask to a different worker and set up an event handler to process the results when they're done.

## 23.5 Conclusion

Web Workers provide a powerful way to improve the performance of your Angular applications by offloading computationally intensive tasks to background threads. This not only allows these tasks to be performed in parallel but also keeps your application responsive by freeing up the main thread to handle user interactions and other tasks. However, using Web Workers effectively requires careful task division and communication management to minimize overhead and maximize performance.