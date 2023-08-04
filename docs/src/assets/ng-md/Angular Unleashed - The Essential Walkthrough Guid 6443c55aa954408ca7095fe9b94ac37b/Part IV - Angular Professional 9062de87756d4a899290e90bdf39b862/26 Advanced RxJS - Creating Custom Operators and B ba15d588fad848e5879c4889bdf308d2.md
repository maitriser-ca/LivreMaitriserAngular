# 26. Advanced RxJS - Creating Custom Operators and Beyond

Owner: Seraf Dos Santos

In this chapter, we'll delve into the advanced aspects of Reactive Extensions for JavaScript (RxJS) by exploring how to create custom operators, and employing advanced techniques like higher-order observables and schedulers. By the end of this chapter, you'll have a deeper understanding of RxJS and will be equipped to optimize your RxJS code for better performance and readability.

## 26.1 Understanding RxJS Operators

RxJS Operators are pure functions that enable complex asynchronous code to be written declaratively. They are the fundamental building blocks of Reactive Programming with RxJS and are used to transform, filter, manipulate, or create Observables.

An operator is a function which creates a new Observable based on the current Observable. This is pure function as it does not modify the existing Observable instance. Instead, it simply modifies the Observable's data stream.

### Example: Using the `map` Operator

Consider a simple example where we use the `map` operator to transform the values emitted by an Observable:

```jsx
const { of } = require('rxjs');
const { map } = require('rxjs/operators');

// Observable that emits 1, 2, 3
const source$ = of(1, 2, 3);

// Transform the values using map
const result$ = source$.pipe(
  map(value => value * 10)
);

// Subscribe to the resulting Observable
result$.subscribe(console.log); // Outputs: 10, 20, 30

```

In this code, `source$` is an Observable that emits the values 1, 2, and 3. The `map` operator is used to multiply each emitted value by 10, resulting in a new Observable, `result$`, which emits the values 10, 20, and 30.

## 26.2 Creating Custom Operators

While RxJS provides a comprehensive list of operators, there may be scenarios where you need a specific operator that does not exist. In such cases, you can create a custom operator. A custom operator is simply a function that takes an Observable and returns a new Observable.

### Example: Custom `multiplyBy` Operator

Consider an example where we need an operator to multiply the emitted values by a given factor. Here's how we can create a custom `multiplyBy` operator:

```jsx
const { of } = require('rxjs');

// Custom operator
function multiplyBy(factor) {
  return source$ => new Observable(observer => {
    // Subscribe to the source Observable
    return source$.subscribe({
      next(value) {
        // Multiply the value and forward it
        observer.next(value * factor);
      },
      error(err) {
        // Forward the error
        observer.error(err);
      },
      complete() {
        // Complete the Observable
        observer.complete();
      }
    });
  });
}

// Use the custom operator
const source$ = of(1, 2, 3);
const result$ = source$.pipe(multiplyBy(10));
result$.subscribe(console.log); // Outputs: 10, 20, 30

```

In the code above, `multiplyBy` is a function that takes a factor and returns a function that takes an Observable and returns a new Observable. This returned Observable subscribes to the source Observable and multiplies each value by the given factor before forwarding it.

## 26.3 Advanced Techniques

### 26.3.1 Higher-Order Observables

Higher-order Observables are Observables that emit Observables. In other words, an Observable's emissions are themselves Observables. This might sound complex, but higher-order Observables are a powerful tool to handle complex asynchronous tasks.

### Example: Using `switchMap`

One common use of higher-order Observables is the `switchMap` operator. `switchMap` takes a function that returns an Observable, and switches to this new Observable each time it is called. This is particularly useful when you have a sequence of asynchronous tasks and you want to cancel a task if a new task comes in before the previous task has completed.

```jsx
const { fromEvent } = require('rxjs');
const { switchMap } = require('rxjs/operators');

// Assume button is a button element on the page
const button = document.getElementById('my-button');

// Listen for button clicks
const clicks$ = fromEvent(button, 'click');

// For each click, start a new timer
const result$ = clicks$.pipe(
  switchMap(() => {
    // Return a new Observable that emits a value every second
    return interval(1000);
  })
);

// Subscribe to the resulting Observable
result$.subscribe(console.log);

```

In this example, each time the button is clicked, a new timer is started. If the button is clicked again before the previous timer has completed, the previous timer is cancelled and a new one is started.

### 26.3.2 Schedulers

Schedulers control when a subscription starts and when notifications are delivered. They can be used to control the execution context (e.g., `setTimeout`, `requestAnimationFrame`, or others), or to define the execution (synchronous or asynchronous).

By default, RxJS will execute the Observables in a synchronous manner. But you can change the execution context to asynchronous by using a different scheduler.

### Example: Using the `async` Scheduler

```jsx
const { of, asyncScheduler } = require('rxjs');
const { observeOn } = require('rxjs/operators');

// Create an Observable that emits immediately
const source$ = of(1, 2, 3);

// Use the async scheduler
const async$ = source$.pipe(
  observeOn(asyncScheduler)
);

console.log('Before subscribe');

async$.subscribe(value => {
  console.log(`Got value: ${value}`);
});

console.log('After subscribe');

```

In this example, the `observeOn` operator is used to change the scheduler to `asyncScheduler`. This makes the Observable emit its values asynchronously.

## 26.4 Optimizing Your RxJS Code

Optimization is a broad topic that can include a variety of techniques. However, when it comes to RxJS, there are some key principles that you can follow to ensure your code is as efficient and readable as possible.

### 26.4.1 Understanding and Applying Operator Chaining

Operator chaining is a powerful feature in RxJS that allows you to execute multiple operations in a single pipeline. Chaining operators can lead to cleaner, more readable code. It's important to understand how operator chaining works, and to use it where appropriate.

```jsx
const { from } = require('rxjs');
const { filter, map } = require('rxjs/operators');

from([1, 2, 3, 4, 5, 6]).pipe(
  filter(x => x % 2 === 0),
  map(x => x * 2)
).subscribe(x => console.log(x)); // Outputs: 4, 8, 12

```

In this example, the `filter` and `map` operators are chained together to create a pipeline that filters out odd numbers and then doubles the even numbers.

### 26.4.2 Avoiding Memory Leaks with Unsubscription

When you subscribe to an Observable, it's important to remember to unsubscribe when you're done with it. Failing to unsubscribe can lead to memory leaks, as the Observable will continue to hold onto resources until it completes or errors.

```jsx
const { interval } = require('rxjs');
const subscription = interval(1000).subscribe(x => console.log(x));

// Later...
subscription.unsubscribe();

```

In this example, the `unsubscribe` method is called on the subscription to prevent memory leaks.

### 26.4.3 Using Subjects and Multicasting

Subjects are a special type of Observable that allows values to be multicasted to many Observers. Unlike plain Observables, Subjects can be both an Observer and an Observable at the same time. This means that you can manually call `next`, `error`, and `complete` on a Subject.

```jsx
const { Subject } = require('rxjs');

const subject = new Subject();

// Two subscriptions to the same Subject
subject.subscribe(x => console.log(`Observer A: ${x}`));
subject.subscribe(x => console.log(`Observer B: ${x}`));

subject.next(1); // Outputs: "Observer A: 1" and "Observer B: 1"

```

In this example, the Subject multicasts the same value to two separate Observers.

This concludes our exploration of advanced RxJS techniques. We've seen how to create custom operators, how to use advanced concepts like higher-order Observables and schedulers, and how to optimize RxJS code for performance and readability. With these tools at your disposal, you're well-equipped to tackle complex reactive programming challenges using RxJS.