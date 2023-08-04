# 24. Customizing the Angular Compiler

Owner: Seraf Dos Santos

## 24.1 Understanding the Angular Compiler

The Angular Compiler is a crucial part of the Angular framework. It's responsible for taking your Angular HTML and TypeScript code and translating it into efficient JavaScript code that the browser can understand.

Angular provides two types of compilers:

1. **Just-in-Time (JIT) Compiler**: It compiles your app in the browser at runtime. JIT is the default when you run the `ng serve` command.
2. **Ahead-of-Time (AOT) Compiler**: It compiles your app at build time. AOT is the default when you run the `ng build --prod` command.

The compiler processes the Angular components and templates, converting the TypeScript code and Angular syntax into regular JavaScript. It also creates the HTML DOM for the application and binds the application logic to it.

## 24.2 Customizing the Compiler to Improve Performance and Reduce Bundle Size

While Angular's default settings are designed to be efficient and effective for a wide range of applications, there may be specific instances where you want to customize the compiler's behavior to better suit your particular needs. This might include:

1. **Changing the Compilation Strategy**: As mentioned earlier, Angular uses the JIT compilation strategy by default during development and AOT during production. You may want to use AOT even during development to catch template errors earlier and improve performance.
2. **Enable Production Mode**: Angular runs in development mode by default, which includes extra checks and balances that slow down the application. You can enable production mode to improve performance.
3. **Lazy Loading**: This is a design pattern that delays the initialization of an object until it's needed. In Angular, this can drastically reduce the initial bundle size and improve loading times by only loading necessary modules.

## 24.3 Ahead of Time (AOT) Compilation

AOT compiles your app at build time, meaning the browser downloads executable, pre-compiled code. This leads to faster rendering in the browser. It also finds template errors during the build step, which can be a huge advantage.

To use AOT during development, you can modify the angular.json file or use the `--aot` flag with the `ng serve` command. For example:

```
ng serve --aot

```

## 24.4 Tree Shaking

Tree shaking is a method of optimizing our app that the Angular compiler supports. It's a step during the build process where unused code is not included in the bundle, thereby reducing its size.

Angular's build process is set up to take advantage of this by marking parts of the code as "pure", helping tree shaking algorithms. This means that the Angular compiler will only include the parts of the code in the final bundle that are actually used in the application.

When you use the `ng build --prod` command, tree shaking is applied automatically.

## 24.5 Conclusion

While the Angular compiler is powerful out of the box, knowing how to customize it can help you optimize your app for specific use cases. Techniques like AOT compilation and tree shaking can drastically improve your app's performance and reduce its size.