# 15. Angular Performance Optimization

Owner: Seraf Dos Santos

Angular is an incredibly powerful framework for building complex web applications. However, with great power comes the need for careful optimization to ensure that your application runs smoothly and efficiently. This chapter will explore techniques for identifying performance bottlenecks and optimizing your Angular application for peak performance.

## 15.1 Understanding Performance Optimization in Angular

Performance optimization is the process of modifying your application to make it more efficient. This can involve reducing the amount of data that needs to be loaded, optimizing the code to run faster, or using asynchronous loading to prevent the user from having to wait for long operations to complete.

In Angular, performance optimization often involves techniques such as:

1. **Lazy Loading**: This is a design pattern in Angular that allows you to load parts of your application only when they're needed, reducing the initial load time.
2. **Preloading**: This is the practice of loading data or resources in the background, so they're ready when the user needs them.
3. **Change Detection Strategy**: Angular's default change detection strategy checks for changes on every component, every time something changes. By setting the change detection strategy to `OnPush`, Angular will only check for changes when the input properties of a component change, or when you manually tell it to.
4. **TrackBy function**: When using `ngFor` to loop over a list, Angular keeps track of each item in the list with its index. If the list changes, Angular re-renders the entire list. By using a `trackBy` function, you can tell Angular to track items by their id (or any other unique property), so it only needs to re-render the items that changed.

## 15.2 Identifying Performance Bottlenecks in Your Application

Identifying performance bottlenecks is a crucial part of optimizing your Angular application. Tools like Chrome's DevTools can be very useful for this purpose. Here's how you can use it:

1. **Performance Tab**: The Performance tab in Chrome DevTools allows you to record and analyze runtime performance. You can see where time is spent, from JavaScript, rendering, and painting.
2. **Lighthouse**: This is an open-source tool for improving the quality of web pages. It has audits for performance, accessibility, progressive web apps, SEO, and more.
3. **Memory Tab**: The Memory tab can help you identify memory leaks in your application.

## 15.3 Optimizing Performance with Lazy Loading and Preloading

### 15.3.1 Lazy Loading

Lazy loading is a design pattern that defers the loading of non-critical resources at page load time. Instead, these resources are loaded at a later time when they are needed.

In Angular, you can implement lazy loading by setting up your routing to load components only when they are needed. Here's an example of how to set up lazy loading in your routing module:

```tsx
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

In this example, the `LazyModule` will only be loaded when the user navigates to `/lazy`.

### 15.3.2 Preloading

Preloading, on the other hand, is a strategy that loads feature modules in the background right after the application starts.

You can enable preloading in Angular by using the `PreloadAllModules` strategy:

```tsx
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'preload',
    loadChildren: () => import('./preload/preload.module').then(m => m.PreloadModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

In this example, the `PreloadModule` will be loaded in the background after the application starts.

## 15.4 Conclusion

Optimizing an Angular application requires a deep understanding of how Angular works, as well as the tools and techniques available for optimization. By identifying performance bottlenecks, making good use of lazy loading and preloading strategies, and optimizing change detection, you can significantly improve the performance of your Angular applications.