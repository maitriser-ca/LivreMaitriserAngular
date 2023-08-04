# 14. Advanced Change Detection in Angular

Owner: Seraf Dos Santos

## 14.1 Understanding How Change Detection Works in Angular

Change detection in Angular is the process by which the framework checks if any changes have occurred that might affect what is displayed in the view. This includes changes to data, user interactions, and asynchronous operations such as HTTP requests.

Angular uses a mechanism called "Zone.js" to detect when to run change detection. Zone.js is a library that intercepts asynchronous events in the browser and triggers Angular's change detection when these events complete. Examples of these events include clicks, key presses, and HTTP requests.

The key part of Angular's change detection is the concept of a "view". A view in Angular is a segment of the DOM tree with its own change detector. The change detector is responsible for checking if any changes have occurred in that view.

When a change detection cycle runs, Angular starts at the root component and checks each component in the tree one by one. If it finds a change, it updates the view accordingly.

## 14.2 Working with OnPush Change Detection and Change Detection Strategies

Angular provides two strategies for change detection: `Default` and `OnPush`.

The `Default` strategy means that every time something changes in the application, Angular checks every component in the view. This can be inefficient for large applications or complex component trees.

The `OnPush` strategy, on the other hand, instructs Angular to run change detection only when the reference of the component's input properties change, or when an event originated from the component or one of its children. This can significantly optimize performance, but requires careful management of data flow and immutability.

The change detection strategy can be set for each component individually using the `changeDetection` property in the component's decorator:

```tsx
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent { }

```

## 14.3 Implementing Custom Change Detection Mechanisms

In some situations, you might need to implement custom change detection mechanisms. This might be necessary if your data is complex and you can't easily use `OnPush` or if you want to optimize your application even further.

One way to implement custom change detection is by using `ChangeDetectorRef`. This service provides methods to manually control change detection. For example, the `detectChanges()` method triggers change detection for the current component and its children.

```tsx
constructor(private cdr: ChangeDetectorRef) { }

someMethod() {
  // Modify some data here...

  this.cdr.detectChanges();
}

```

You can also detach a component from the change detection system using `detach()`, and reattach it using `reattach()`.

Remember that manual change detection gives you a lot of control, but it also requires more work and attention to detail. Be careful not to introduce hard-to-find bugs by forgetting to run change detection when necessary.

In conclusion, understanding and effectively using change detection strategies in Angular can significantly improve your application's performance. This requires a good understanding of your application's data flows and careful coding, but the benefits can be substantial.