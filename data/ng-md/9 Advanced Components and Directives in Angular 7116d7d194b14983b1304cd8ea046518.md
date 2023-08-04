# 9. Advanced Components and Directives in Angular

Owner: Seraf Dos Santos

Angular is a powerful framework for building complex web applications, offering a variety of tools and techniques for creating highly interactive and dynamic user interfaces. In this chapter, we will delve into creating advanced components with custom events and inputs, working with advanced directives, and using Angular's built-in structural directives to manipulate the DOM.

## 9.1 Creating Advanced Components with Custom Events and Inputs

In Angular, components are the fundamental building blocks of an application. They are reusable, encapsulated, and can interact with other components through inputs and outputs.

### 9.1.1 Custom Inputs

Inputs allow data to flow from a parent component into a child component. Angular provides the `@Input()` decorator to make this possible.

Consider a simple example where a parent component wants to pass a string to a child component. The child component can declare a custom input to receive this data.

```tsx
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{parentData}}</p>`
})
export class ChildComponent {
  @Input() parentData: string;
}

```

The parent component can then pass data to the child component using property binding:

```tsx
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<app-child [parentData]="'Hello from parent!'"></app-child>`
})
export class ParentComponent { }

```

### 9.1.2 Custom Events

Outputs allow data to flow from a child component to a parent component. Angular provides the `@Output()` decorator and the `EventEmitter` class to make this possible.

Below is an example of a child component that emits a custom event when a button is clicked:

```tsx
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendEvent()">Click me</button>`
})
export class ChildComponent {
  @Output() customEvent = new EventEmitter<string>();

  sendEvent() {
    this.customEvent.emit('Hello from child!');
  }
}

```

The parent component can then listen for this custom event and react accordingly:

```tsx
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<app-child (customEvent)="handleEvent($event)"></app-child>`
})
export class ParentComponent {
  handleEvent(event: string) {
    console.log(event);
  }
}

```

## 9.2 Working with Advanced Directives

Directives are a unique and powerful feature of Angular. They are classes that add additional behavior to elements in your Angular applications. Angular directives are used in the HTML and have the power to change the appearance, behavior or layout of DOM elements.

### 9.2.1 Structural Directives

Structural directives alter layout by adding, removing, and replacing elements in the DOM. Angular comes with several built-in structural directives, such as `*ngFor` and `*ngIf`.

Here's an example of using the `*ngFor` directive to render a list of items:

```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>

```

In this code, `*ngFor` is a loop structure that iterates over each item in the `items` array and creates a new `<li>` element for each one.

### 9.2.2 Attribute Directives

Attribute directives change the appearance or behavior of an element, component, or another directive. Angular comes with several built-in attribute directives, such as `NgClass` and `NgStyle`.

Here's an example of using the `NgClass` directive to add a CSS class to an element based on a condition:

```html
<p [ngClass]="{'active': isActive}">Hello, Angular!</p>

```

In this code, `ngClass` is adding the 'active' class to the `<p>` element if the `isActive` property is truthy.

## 9.3 Manipulating the DOM with Angular's Built-In Structural Directives

Angular's built-in structural directives, like `*ngIf`, `*ngFor`, and `*ngSwitch`, give us a high level of control over the elements in a template.

### 9.3.1 The `ngIf` Directive

- `ngIf` is a directive that conditionally includes a template based on the value of an expression. If the expression evaluates to true, Angular renders the template provided in a then clause, and if false or null, Angular renders the template provided in an optional else clause.

Here's an example:

```html
<div *ngIf="isLoggedIn; else loggedOut">
  Welcome back, user!
</div>

<ng-template #loggedOut>
  <div>Please log in.</div>
</ng-template>

```

### 9.3.2 The `ngFor` Directive

We've already seen an example of `*ngFor` when discussing structural directives. It's a directive that instantiates a template once per item from an iterable. The context for each instantiated template inherits from the outer context with the given loop variable set to the current item from the iterable.

```html
<ul>
  <li *ngFor="let item of items; index as i">{{i + 1}} - {{item}}</li>
</ul>

```

### 3.3 The `ngSwitch` Directive

- `ngSwitch` is a directive that conditionally swaps the contents of the div by adding / removing templates from the DOM.

```html
<div [ngSwitch]="conditionExpression">
  <div *ngSwitchCase="'value1'">value1 is matched</div>
  <div *ngSwitchCase="'value2'">value2 is matched</div>
  <div *ngSwitchDefault>When there are no matches</div>
</div>

```

This chapter provided a deep dive into advanced components and directives in Angular. By mastering these concepts, you can create complex, dynamic, and interactive user interfaces with Angular. Happy coding!