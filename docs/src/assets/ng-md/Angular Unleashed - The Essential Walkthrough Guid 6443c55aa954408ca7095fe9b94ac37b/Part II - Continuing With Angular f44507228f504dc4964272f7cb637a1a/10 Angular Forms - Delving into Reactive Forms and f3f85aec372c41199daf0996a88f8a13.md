# 10. Angular Forms - Delving into Reactive Forms and Complex Validation

Owner: Seraf Dos Santos

Angular provides two ways to work with forms: template-driven forms and reactive forms. While template-driven forms are a good fit for simple scenarios and help to get things up and running quickly, they can become unwieldy as the complexity of the form increases. Reactive forms, on the other hand, are more robust and offer more control and predictability, making them a better fit for complex scenarios. This chapter will explore the topic of reactive forms and dive into complex validation scenarios. We will learn how to use the form builder and create custom validators.

## 10.1 Understanding Reactive Forms in Angular

Reactive forms in Angular are a model-driven approach to handling form inputs whose values change over time. The core philosophy of reactive forms is to explicitly manage the state of the form at any given point in time. This means that you always have access to the value and the state of the form and its controls.

Here is a simple example of how to set up a reactive form:

```tsx
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  template: `
    <form [formGroup]="profileForm">
      <label>
        First Name:
        <input type="text" formControlName="firstName">
      </label>
      <label>
        Last Name:
        <input type="text" formControlName="lastName">
      </label>
    </form>
  `,
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}

```

In the above code, we import `FormGroup` and `FormControl` from `@angular/forms`. A `FormGroup` represents a group of form controls, while a `FormControl` represents a single input field. We use the `[formGroup]` directive to bind the `profileForm` to the form in the template. The `formControlName` directive is used to bind the individual form controls to their respective input fields.

## 10.2 Working with Complex Form Validation Scenarios

In addition to simple validations (such as checking if a field is required or validating the format of an email), Angular reactive forms also support more complex validation scenarios. These could include:

- Cross-field validation: Validating the state of one form control based on the state of another.
- Form-level validation: Validating the overall state of a form.
- Asynchronous validation: Performing validation that needs to call a server.

Here is an example that demonstrates a cross-field validation where the password and confirm password fields must match:

```tsx
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-form',
  template: `
    <form [formGroup]="passwordForm">
      <label>
        Password:
        <input type="password" formControlName="password">
      </label>
      <label>
        Confirm Password:
        <input type="password" formControlName="confirmPassword">
      </label>
    </form>
  `,
})
export class PasswordFormComponent {
  passwordForm = new FormGroup({
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  }, { validators: this.passwordsMustMatch });

  passwordsMustMatch(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword ? null : { notMatching: true };
  }
}

```

In the above example, we have added a custom validator `passwordsMustMatch` to the form group. This validator compares the values of the password and confirmPassword fields and returns an error object `{ notMatching: true }` if they do not match.

## 10.3 Using the Form Builder and Custom Validators

The `FormBuilder` service provides convenient methods for generating controls. It reduces the amount of boilerplate needed to create complex forms. Here is the previous example refactored to use `FormBuilder`:

```tsx
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-form',
  template: `
    <form [formGroup]="passwordForm">
      <label>
        Password:
        <input type="password" formControlName="password">
      </label>
      <label>
        Confirm Password:
        <input type="password" formControlName="confirmPassword">
      </label>
    </form>
  `,
})
export class PasswordFormComponent {
  constructor(private fb: FormBuilder) {}

  passwordForm = this.fb.group({
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  }, { validators: this.passwordsMustMatch });

  passwordsMustMatch(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword ? null : { notMatching: true };
  }
}

```

In the above code, `FormBuilder.group()` is a factory method that creates a `FormGroup`. Inside it, we define the controls of the form. The keys are the control names and the values are the control configurations. For each control, we can pass in the initial value and an array of validators.

Angular also allows you to create custom validators. Custom validators are functions that receive a control as input and return an error object or null. They are useful when the built-in validators do not meet your needs.

Here is an example of a custom validator that checks if the entered text includes the word 'angular':

```tsx
import { AbstractControl, ValidationErrors } from '@angular/forms';

export function ContainsAngularValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (typeof value === 'string' && value.includes('angular')) {
    return null;
  } else {
    return { doesNotContainAngular: true };
  }
}

```

In this code, the `ContainsAngularValidator` function checks if the control's value includes the word 'angular'. If it does, the function returns null, indicating that there is no validation error. Otherwise, it returns an error object.

Angular's reactive forms module provides a robust set of tools for managing the state of your forms and performing complex validations. By mastering these tools, you can create flexible and user-friendly forms that meet the needs of your users.