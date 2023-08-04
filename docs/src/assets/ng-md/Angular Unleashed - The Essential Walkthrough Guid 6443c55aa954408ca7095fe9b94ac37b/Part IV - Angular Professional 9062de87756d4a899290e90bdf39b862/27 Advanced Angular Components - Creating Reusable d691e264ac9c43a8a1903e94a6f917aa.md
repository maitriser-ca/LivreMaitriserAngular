# 27. Advanced Angular Components - Creating Reusable Component Libraries

Owner: Seraf Dos Santos

## 27.1 Introduction

In large-scale projects, reusability is key to maintaining a clean, efficient codebase. One way to achieve this is by creating a library of reusable components in Angular. These components encapsulate specific functionalities that can be reused throughout an application.

In this chapter, we will delve into advanced techniques for creating reusable Angular components, including component inheritance, dynamic component loading, and various optimization strategies.

## 27.2 Creating Reusable Angular Components

The first step in creating a reusable component is to define a common interface. The component should have a well-defined set of input properties and events that allow it to interact with the rest of the application.

### Example:

```tsx
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button (click)="handleClick()">{{label}}</button>`,
})
export class ButtonComponent {
  @Input() label: string;
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}

```

In this example, the `ButtonComponent` can be reused in various parts of the application. The `label` input property allows the button text to be customized, and the `onClick` event allows the parent component to react to button clicks.

## 27.3 Component Inheritance

Component inheritance is a technique where a component inherits properties and methods from a base component, similar to how classes can inherit from a base class in object-oriented programming. This can be useful in creating variations of a base component.

### Example:

```tsx
import { Component } from '@angular/core';

@Component({
  selector: 'base-component',
  template: `<h1>{{title}}</h1>`
})
export class BaseComponent {
  title = 'Base Component';
}

@Component({
  selector: 'derived-component',
  template: `<div>{{title}} - {{subtitle}}</div>`
})
export class DerivedComponent extends BaseComponent {
  subtitle = 'Derived Component';
}

```

In this example, `DerivedComponent` inherits the `title` property from `BaseComponent`.

## 27.4 Dynamic Component Loading

Dynamic component loading is a technique where components are loaded dynamically at runtime. This can be useful in scenarios where the components to be displayed are not known at compile time.

### Example:

```tsx
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-component-loader',
  template: `<ng-template #container></ng-template>`
})
export class DynamicComponentLoader {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadComponent(component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    this.container.clear();
    this.container.createComponent(componentFactory);
  }
}

```

In this example, the `DynamicComponentLoader` component can dynamically load any component passed to the `loadComponent` method.

## 27.5 Optimizing Component Libraries

When building reusable component libraries, there are several strategies that can be used to optimize performance and ease of use:

- **Lazy loading**: This technique involves loading components only when they are needed, reducing the initial load time of the application.
- **OnPush change detection**: By default, Angular uses the `Default` change detection strategy, which checks for changes in every component, even if the data hasn't changed. The `OnPush` strategy, on the other hand, only checks for changes when the input properties change, which can improve performance.
- **Documentation**: Providing comprehensive documentation, including examples of how to use the components, can make the component library easier to use.
- **Testing**: It's important to thoroughly test the components in the library to ensure they work correctly in all expected scenarios.

By mastering these advanced Angular techniques, developers can create robust, reusable component libraries that can significantly streamline the development process and improve the quality of their code.