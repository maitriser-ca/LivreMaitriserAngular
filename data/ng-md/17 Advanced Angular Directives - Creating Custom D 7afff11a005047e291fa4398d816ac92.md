# 17. Advanced Angular Directives - Creating Custom Directives

Owner: Seraf Dos Santos

## 17.1 Understanding the Lifecycle Hooks for Directives

Just like Angular components, directives also have lifecycle hooks that allow you to tap into specific moments in the lifecycle of a directive. Let's take a look at these lifecycle hooks:

1. **ngOnChanges()**: Called before ngOnInit() and whenever one or more input properties change.
2. **ngOnInit()**: Called once the directive's defined inputs are initialized.
3. **ngDoCheck()**: Called during every Angular change detection cycle.
4. **ngOnDestroy()**: Called just before Angular destroys the directive.

Here is a simple example of a custom directive using lifecycle hooks:

```tsx
import { Directive, SimpleChanges, OnChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnChanges, OnInit, DoCheck, OnDestroy {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}

```

### 17.2 Creating Custom Directives for Your Angular Application

Directives in Angular are a way to encapsulate and share behavior across different components. Let's create a simple custom directive:

```tsx
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}

```

In the above code, we have created a directive named 'appHighlight'. This directive will highlight the background color of any HTML element where it is used.

### 17.3 Using Advanced Techniques for Directives like Host Binding, Host Listeners, and Inputs

Host Binding and Host Listeners are powerful features that allow you to listen for events and bind properties from within your directive code.

Here is an example where we are using Host Listener to listen for mouse events and using Host Binding to bind to the style property of the host element.

```tsx
import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string;

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = null;
  }

}

```

In the above code, we are using the `@Input` decorator to accept the highlight color from the user. The `@HostBinding` decorator is used to bind the `backgroundColor` property of the host element's style object. The `@HostListener` decorator allows us to listen for the 'mouseenter' and 'mouseleave' events and change the background color accordingly.

To use this directive, we would do something like this in our HTML:

```html
<p appHighlight="red">Hover over me!</p>

```

This concludes our chapter on Advanced Angular Directives. With this knowledge, you can start creating powerful, reusable behavior for your Angular applications using custom directives.