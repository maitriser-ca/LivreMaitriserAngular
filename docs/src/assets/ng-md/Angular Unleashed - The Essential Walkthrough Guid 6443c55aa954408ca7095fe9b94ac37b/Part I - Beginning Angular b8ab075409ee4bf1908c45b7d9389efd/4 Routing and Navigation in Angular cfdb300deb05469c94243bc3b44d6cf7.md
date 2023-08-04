# 4. Routing and Navigation in Angular

Owner: Seraf Dos Santos

In this chapter, we will delve deep into Angular routing and navigation. This chapter will help you understand how Angular routing works, show you how to create routes and link to them in your app, and discuss how to pass data between routes.

## 4.1 Understanding How Angular Routing Works

Routing is a fundamental aspect of any web application. It allows users to navigate between different parts of the app. Angular provides a powerful routing system that is easy to understand and use.

In Angular, the application's state is represented as a tree of activated routes. This tree can be thought of as a log of the user's path through the app. Each route in this tree is associated with a component, which is instantiated when the route is activated. The state of the route includes information about the URL, any data parameters, and any resolved data.

To define routes in Angular, you use a route configuration, which is an array of route definitions. Each route definition is an object that associates a URL path with a component. The Angular router uses this configuration to match the current URL to a route, which it then activates.

## 4.2 Creating Routes and Linking to Them in Your App

Let's walk through the process of defining routes and linking to them in an Angular application.

First, you define the routes in your application. This is typically done in a separate routing module. Here's an example of a routing configuration:

```tsx
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

In this example, there are two routes defined. The first route, with the path `''`, is associated with the `HomeComponent`. This route will be activated when the user navigates to the root of the application. The second route, with the path `'about'`, is associated with the `AboutComponent`. This route will be activated when the user navigates to '/about' in the application.

Once your routes are defined, you can link to them in your application using the `<a>` element with the `routerLink` directive. Here's an example:

```html
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
</nav>

```

When the user clicks on these links, the router will navigate to the corresponding route and instantiate the associated component.

## 4.3 Passing Data Between Routes

There are several ways to pass data between routes in Angular:

1. **Using route parameters**: You can pass data as parameters in the URL. This is useful for passing small amounts of data, such as IDs. Here's how you define a route with a parameter:
    
    ```tsx
    const routes: Routes = [
      { path: 'product/:id', component: ProductComponent }
    ];
    
    ```
    
    You can then access this parameter in your component using the `ActivatedRoute` service:
    
    ```tsx
    import { ActivatedRoute } from '@angular/router';
    
    constructor(private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
        console.log(params['id']);
      });
    }
    
    ```
    
2. **Using query parameters**: If you need to pass optional data, you can use query parameters. These are defined in a similar way to route parameters, but you use the `queryParams` property of the `routerLink` directive to set them:
    
    ```html
    <a [routerLink]="['/product']" [queryParams]="{ id: 123 }">Product</a>
    
    ```
    
    You can access query parameters in a similar way to route parameters:
    
    ```tsx
    this.route.queryParams.subscribe(params => {
      console.log(params['id']);
    });
    
    ```
    
3. **Using the `data` property**: If you need to pass static data to a route, you can use the `data` property in the route configuration:
    
    ```tsx
    const routes: Routes = [
      { path: 'product', component: ProductComponent, data: { title: 'Product' } }
    ];
    
    ```
    
    You can access this data in your component like so:
    
    ```tsx
    this.route.data.subscribe(data => {
      console.log(data['title']);
    });
    
    ```
    

In this chapter, we have covered the basics of routing and navigation in Angular. We looked at how Angular routing works, how to define routes and link to them in your application, and how to pass data between routes. This knowledge will serve as a solid foundation as you build more complex applications with Angular.