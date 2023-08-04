# 11. Advanced Angular Routing Techniques

Owner: Seraf Dos Santos

## 11.1 Introduction

Routing is a fundamental concept in Angular that enables navigation between different components in an application. It provides a seamless user experience by allowing navigation without page refresh. Angular's routing module is powerful and supports various advanced techniques such as nested routes, lazy loading, guards, resolvers, wildcard routes, and route parameters. Understanding these techniques can enhance the functionality and performance of an Angular application. This chapter will dive into these advanced concepts and provide examples of how they can be applied.

## 11.2 Nested Routes

Nested routing refers to the ability to have routes within other routes. This is useful in situations where you have a component that acts as a layout or a shell for other components.

To create a nested route, we define a `children` array within our `routes` configuration. This array then takes more route configurations. Here is a basic example:

```tsx
const routes: Routes = [
  {
    path: 'products', component: ProductsComponent, children: [
      { path: 'create', component: CreateProductComponent },
      { path: 'edit/:id', component: EditProductComponent }
    ]
  }
];

```

In this example, the `ProductsComponent` acts as a layout for `CreateProductComponent` and `EditProductComponent`. The routes to these components are '/products/create' and '/products/edit/:id' respectively.

## 11.3 Lazy Loading

Lazy loading is a design pattern in Angular that allows you to load JavaScript components asynchronously when a specific route is activated. This can significantly increase performance for larger applications with lots of routes and components.

To use lazy loading, we define a path with the `loadChildren` property in our route configuration, like so:

```tsx
const routes: Routes = [
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
];

```

In this example, the `OrdersModule` will be loaded only when the user navigates to the '/orders' path.

## 11.4 Guards

Guards are a way to control whether a route can be activated or deactivated. This is useful for scenarios like protecting routes that should only be accessible when a user is logged in.

Here is an example of a guard that checks if a user is authenticated:

```tsx
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate() {
    return this.authService.isAuthenticated();
  }
}

```

This guard can then be used in a route configuration like so:

```tsx
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

```

In this example, the `DashboardComponent` will only be accessible if the `AuthGuard`'s `canActivate` method returns true.

## 11.5 Resolvers

A resolver is a function that is executed before a certain route is rendered. It is used to fetch the necessary data for that route. This can be very useful in scenarios where a component depends on some asynchronous data.

Here is an example of a resolver that fetches data for a product:

```tsx
@Injectable()
export class ProductResolver implements Resolve<Product> {
  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.productService.getProduct(route.paramMap.get('id'));
  }
}

```

This resolver can then be used in a route configuration like so:

```tsx
const routes: Routes = [
  { path: 'product/:id', component: ProductComponent, resolve: { product: ProductResolver } }
];

```

In this example, the `ProductComponent` will only be rendered after the `ProductResolver` has fetched the product data.

## 11.6 Wildcard Routes and Route Parameters

Wildcard routes are used to handle undefined paths. In other words, we can define a route that will match any path that is not matched by our defined routes.

Here is an example of a wildcard route:

```tsx
const routes: Routes = [
  { path: '**', component: NotFoundComponent }
];

```

In this example, if the user navigates to a path that does not match any of the defined routes, the `NotFoundComponent` will be rendered.

Route parameters are parameters that can be included in the path of a route. They are useful for passing data from one component to another.

Here is an example of a route with a parameter:

```tsx
const routes: Routes = [
  { path: 'product/:id', component: ProductComponent }
];

```

In this example, ':id' is a route parameter. The value for this parameter can be accessed in the `ProductComponent` like so:

```tsx
constructor(private route: ActivatedRoute) {
  let id = this.route.snapshot.paramMap.get('id');
  console.log(id);
}

```

By mastering these advanced routing techniques, you can create more complex and efficient Angular applications. Keep practicing and exploring these concepts to get the most out of Angular's powerful routing module.