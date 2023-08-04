# 25. Advanced Angular Animations - Creating Complex Animations

Owner: Seraf Dos Santos

## 25.1 Introduction

Angular's animation system is built on CSS functionality, which means you can animate any property that the browser considers animatable. This includes positions, sizes, transforms, colors, borders, etc. The most common animations are 2D transformations: translation, rotation, scale, and skew. The main Angular modules for animations are `BrowserAnimationsModule` and `NoopAnimationsModule`.

In this chapter, we will delve deeper into Angular animations, exploring advanced techniques such as keyframes, timelines, and user-interactive animations. We will also provide tips on optimizing your animations for better performance and smoother transitions.

## 25.2 Creating Complex Animations with Keyframes and Timelines

### 25.2.1: Working with Keyframes

Keyframes in Angular animations are used to define the styles that will be applied at various stages of the animation. The `keyframes()` function is used alongside the `style()` function to define keyframes for the animation.

Here is a basic example of an animation with keyframes:

```tsx
import { trigger, animate, style, keyframes } from '@angular/animations';

@Component({
  selector: 'my-app',
  template: `<div [@myAnimation]>...</div>`,
  animations: [
    trigger('myAnimation', [
      animate('5s', keyframes([
        style({ backgroundColor: 'red', offset: 0 }),
        style({ backgroundColor: 'blue', offset: 0.5 }),
        style({ backgroundColor: 'green', offset: 1.0 })
      ]))
    ])
  ]
})
export class AppComponent { }

```

In this example, the background color of the div will change from red to blue at the halfway point of the animation, and then to green when the animation completes.

### 25.2.2: Building Animations with Timelines

You can use timelines to build more complex animations that involve multiple elements or sequences of animations. The `sequence()` function is used to define a series of animations that should be run one after the other.

Here's an example of an animation sequence:

```tsx
import { trigger, animate, style, sequence } from '@angular/animations';

@Component({
  selector: 'my-app',
  template: `<div [@myAnimation]>...</div>`,
  animations: [
    trigger('myAnimation', [
      sequence([
        animate('1s', style({ opacity: 0 })),
        animate('2s', style({ opacity: 1, backgroundColor: 'red' })),
        animate('3s', style({ transform: 'scale(1.5)' })),
      ])
    ])
  ]
})
export class AppComponent { }

```

In this example, the div will first become transparent, then it will become opaque and turn red, and finally it will scale up by 1.5 times. Each animation will start when the previous one finishes.

## 25.3 Creating Interactive Animations

Animations can respond to user input, such as clicks, scrolls, or typing, and interact with other elements on the page. The `@HostListener()` decorator can be used to listen for DOM events and trigger animations in response.

Here's an example of an animation that responds to a click event:

```tsx
import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'my-app',
  template: `<div [@openClose]>...</div>`,
  animations: [
    trigger('openClose', [
      state('open', style({ height: '200px', opacity: 1, backgroundColor: 'yellow' })),
      state('closed', style({ height: '100px', opacity: 0.5, backgroundColor: 'green' })),
      transition('open <=> closed', [animate('1s')]),
    ]),
  ],
})
export class AppComponent {
  isOpen = true;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}

```

In this example, clicking on the div will toggle its state between 'open' and 'closed', triggering the corresponding animation.

## 25.4 Optimizing Angular Animations

While animations can greatly enhance the user experience, they can also be resource-intensive and affect the performance of your application. It's important to optimize your animations to ensure they run smoothly.

Here are some tips for optimizing Angular animations:

- **Limit the number of concurrent animations**: Having too many animations running at the same time can slow down your application. If possible, try to limit the number of concurrent animations.
- **Use `requestAnimationFrame` for animations**: The `requestAnimationFrame` method tells the browser to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.
- **Avoid animating expensive properties**: Some properties, like `box-shadow` or `border-radius`, are expensive to animate and can cause your animations to run slowly. Instead, try to animate properties like `transform` and `opacity`, which are cheaper to animate.
- **Use the Web Animations API**: Angular's animation system is built on top of the Web Animations API, a powerful and efficient API for creating animations in the browser. Using this API directly can give you more control over your animations and help you optimize them for performance.

In conclusion, Angular provides a powerful and flexible framework for creating complex, interactive animations. By understanding how to use keyframes, timelines, and user events, and by optimizing your animations for performance, you can create a dynamic and engaging user interface for your Angular applications.