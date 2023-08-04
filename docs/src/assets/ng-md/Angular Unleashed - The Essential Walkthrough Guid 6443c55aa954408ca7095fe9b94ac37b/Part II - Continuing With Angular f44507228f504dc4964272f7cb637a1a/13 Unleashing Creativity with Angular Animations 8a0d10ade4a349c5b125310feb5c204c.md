# 13. Unleashing Creativity with Angular Animations

Owner: Seraf Dos Santos

Angular is a powerful tool that not only helps to build robust web applications but also enhances user experiences through its versatile animation capabilities. This chapter provides an introduction to the basics of Angular animations, teaches you how to create animations using Angular's animation API, and takes you through working with keyframes and timing functions.

## 13.1 Understanding the Basics of Angular Animations

Animations in Angular are built on the Web Animations API, a native browser feature that allows for performance-efficient and developer-friendly animations. Angular provides a powerful abstraction over this API, exposing high-level animation capabilities that seamlessly integrate with the rest of the Angular ecosystem.

At a high level, Angular animations involve two primary concepts: **states** and **transitions**.

- **States**: These refer to different styles or conditions that you can define for your components. For example, you might have a "collapsed" state and an "expanded" state for a navigation menu.
- **Transitions**: Transitions define the animations that occur between states. You can specify how your component should animate as it changes from one state to another.

To use animations, you'll need to import the `BrowserAnimationsModule` in your Angular application's main module, like so:

```tsx
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class AppModule { }

```

## 13.2 Creating Animations Using the Angular Animation API

Creating an animation in Angular involves defining states and transitions for your components. This is done using the `trigger`, `state`, and `transition` functions from the `@angular/animations` package.

Here's a simple example of an Angular animation:

```tsx
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  ...
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open <=> closed', [
        animate('1s')
      ]),
    ]),
  ],
  ...
})
export class MyComponent { }

```

In the example above, we're defining an animation trigger called `openClose`. We then define two states, `open` and `closed`, each with different styles. The `transition` function defines an animation that will take place over 1 second when the component changes between the `open` and `closed` states.

The `<=>` operator in the `transition` function means that this animation will apply when the component goes from `open` to `closed`, and vice versa.

## 13.3 Working with Keyframes and Timing Functions

In addition to simple state transitions, Angular allows for more complex animations using **keyframes** and **timing functions**.

**Keyframes** allow you to define intermediate styles that your animation will pass through. This is done using the `keyframes` function, which takes an array of `style` objects. Each `style` object represents a keyframe.

**Timing functions** allow you to control the speed of your animation at different points. This is done using a second parameter to the `animate` function, which can be a string specifying a built-in timing function like `'ease-in'`, `'ease-out'`, `'ease-in-out'`, or `'linear'`.

Here's an example that uses both keyframes and a timing function:

```tsx
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  ...
  animations: [
    trigger('openClose', [
      transition('void => *', [
        animate('2s ease-in', keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 0.5, offset: 0.5 }),
          style({ opacity: 1, offset: 1.0 })
        ]))
      ]),
    ]),
  ],
  ...
})
export class MyComponent { }

```

In this example, the animation will progress from an opacity of 0 to 0.5 to 1 over 2 seconds, easing in. The `offset` property in each `style` object specifies the point in the animation timeline at which that style should apply, as a fraction of the total duration.

## 13.4 Conclusion

Angular provides a powerful and flexible API for creating animations. With an understanding of states, transitions, keyframes, and timing functions, you can create engaging and intuitive animations for your Angular applications. Remember, animations are not just about making your application look good, they can also improve usability by providing visual cues and feedback to your users. Happy animating!