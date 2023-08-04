# 16. Angular Security - Authentication and Authorization

Owner: Seraf Dos Santos

## 16.1 Introduction

Security is a crucial aspect of any web application. This chapter covers fundamental security considerations in Angular, a popular web framework. We'll delve into concepts such as authentication and authorization and how they can be implemented in Angular applications. Additionally, we'll explore Angular guards, a powerful tool to restrict access to specific routes or components based on various criteria.

## 16.2 Understanding the Security Challenges in Angular

While Angular comes with built-in protection against common web vulnerabilities such as Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF), it doesn't provide out-of-the-box solutions for user authentication and authorization. These tasks are left to the developer to handle, and how they are addressed can significantly impact the security and user experience of your application.

### 16.2.1 Authentication

Authentication verifies the identity of a user. It ensures that a user is who they claim to be. Common authentication methods include:

- Username/Password: The most common authentication method, where users have a unique username and a secret password.
- Multi-factor Authentication: An extra layer of security where, in addition to username/password, the user must provide another form of authentication, like a one-time code sent to their phone.

### 16.2.2 Authorization

Once a user is authenticated, authorization determines what they can do within the application. For example, a regular user may be able to view and edit their profile but not access administrative functions. Authorization often involves roles (like 'admin', 'editor', 'user') and permissions based on these roles.

## 16.3 Implementing Authentication and Authorization in Angular

Angular doesn't come with built-in authentication and authorization mechanisms, but it provides the tools you need to build these systems. Here's a basic overview of how you might implement these features in an Angular application:

### 16.3.1 Authentication

1. **User Login**: Create a form where users can enter their username and password. When the form is submitted, send a POST request to your backend server with the login data.

```tsx
// in your login component
login() {
  const credentials = {username: this.username, password: this.password};
  this.authService.login(credentials).subscribe();
}

```

1. **Server Validation**: On the server, validate the provided credentials. If they're valid, generate a JSON Web Token (JWT) and send it back to the client.
2. **Store JWT**: On the client side, store the JWT in a secure place like HttpOnly cookies or localStorage (note: each storage method has its own security considerations).

```tsx
// in your auth service
login(credentials: {username: string, password: string}) {
  return this.http.post('/api/auth/login', credentials)
    .pipe(tap((res: any) => {
      localStorage.setItem('token', res.token);
    }));
}

```

1. **Attach JWT to Requests**: For subsequent requests to the server, attach the JWT as an Authorization header. The server can then validate the token and identify the user.

```tsx
// in your auth interceptor
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const token = localStorage.getItem('token');
  const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  return next.handle(authReq);
}

```

### 16.3.2 Authorization

Authorization in Angular is often handled with roles. Once a user is authenticated, their role can be included in the JWT. When the server validates the JWT, it can also check the user's role to ensure they have the necessary permissions to perform the requested operation.

You can also check the user's role on the client side to show or hide certain parts of your application. However, always do a server-side check as well. Never rely solely on client-side authorization!

## 16.4 Using Guards to Restrict Access to Certain Routes or Components

Angular guards are interfaces which can be implemented to control navigation to and from different parts of your application. They're especially useful for authorization, as they can prevent users from navigating to routes they're not authorized to access.

For instance, you can create an `AuthGuard` that checks if a user is logged in before they're allowed to navigate to a route:

```tsx
// auth.guard.ts
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }
}

```

You can then use this guard in your routing module:

```tsx
// app-routing.module.ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

In this example, if a user tries to navigate to the 'profile' route without being logged in, they'll be redirected to the 'login' page.

## 16.5 Conclusion

Securing an Angular application involves handling both authentication and authorization effectively. Angular provides the necessary tools to implement these mechanisms, as well as guards for controlling navigation based on authorization. By understanding these concepts and how to apply them, you can greatly enhance the security and user experience of your Angular applications.