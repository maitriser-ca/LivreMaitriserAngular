# 2. Components, Templates, Data Binding, and Directives in Angular

Owner: Seraf Dos Santos

## 2.1 Understanding Angular Components

In Angular, components are the fundamental building blocks of your application. They allow you to encapsulate parts of your application into reusable pieces. Components are defined using the `@Component` decorator, which allows you to specify metadata about the component such as its selector, template, and styles.

Here is a simple example of an Angular component:

```tsx
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `<h1>Hello, world!</h1>`,
})
export class HelloWorldComponent {
}

```

In this example, we've defined a component `HelloWorldComponent` that will display the text "Hello, world!" when it's used in an Angular template. The `selector: 'app-hello-world'` line means that you can include this component in a template using the `<app-hello-world></app-hello-world>` tag.

## 2.2 Using Templates to Create Dynamic and Responsive User Interfaces

Templates in Angular are written in HTML and allow you to create the visual part of your component. You can use Angular's template syntax to bind data to the DOM, handle user events, and more. You can include a template directly in the `@Component` decorator by using the `template` property, or you can put it in a separate file and link to it using the `templateUrl` property.

Here's an example of a component with a more complex template:

```tsx
import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `<h1>Hello, {{ name }}!</h1>`,
})
export class GreetingComponent {
  name = 'Angular';
}

```

In this example, the `{{ name }}` in the template is a binding, which is a way to make the template dynamic. When Angular renders this component, it will replace `{{ name }}` with the value of the `name` property in the component class.

## 2.3 Working with Data Binding and Directives

Data binding is a powerful feature of Angular that allows you to keep your model (the component's properties) and the view (the template) in sync. There are several types of data binding in Angular:

- **Interpolation (`{{...}}`):** Lets you embed expressions into marked up text.
- **Property binding (`[property]="value"`):** Lets you bind a DOM property to a component property.
- **Event binding (`(event)="handler"`):** Lets you respond to user events such as clicks, key presses, etc.
- **Two-way binding (`[(ngModel)]="property"`):** Lets you bind a model property to a form input, so changes to the input update the model and vice versa.

Directives are another powerful feature of Angular. They allow you to add behavior to elements in the DOM. Angular comes with a set of built-in directives, and you can also create your own.

Here's an example that uses some of these features:

```tsx
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">+</button>
    <span>{{ count }}</span>
    <button (click)="decrement()">-</button>
  `,
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

```

In this example, we're using event binding to respond to click events on the buttons. When the "+" button is clicked, it calls the `increment` method, which increases the `count` property by one. When the "-" button is clicked, it calls the `decrement` method, which decreases the `count` property by one. We're also using interpolation to display the current value of the `count` property in the template.

In conclusion, Angular provides a variety of tools to build dynamic and interactive web applications. By understanding and using components, templates, data binding, and directives, you can create sophisticated web applications that respond to user input and provide a great user experience.