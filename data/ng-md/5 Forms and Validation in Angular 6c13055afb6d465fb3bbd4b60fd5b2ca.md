# 5. Forms and Validation in Angular

Owner: Seraf Dos Santos

## 5.1 Creating Forms in Angular

Angular offers two ways to create forms: template-driven and reactive. Template-driven forms are simple to create and use, but they're not as scalable as reactive forms. Reactive forms are more robust, reusable, and testable. In this section, we will focus on reactive forms.

To start working with reactive forms, you first need to import the `ReactiveFormsModule` in your module:

```tsx
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    // other imports ...
    ReactiveFormsModule
  ]
})
export class AppModule { }

```

Next, let's create a simple form in our component:

```tsx
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}

```

In the HTML, you can now create a form and bind it to the `profileForm` object:

```html
<form [formGroup]="profileForm">
  <label>
    First Name:
    <input type="text" formControlName="firstName">
  </label>

  <label>
    Last Name:
    <input type="text" formControlName="lastName">
  </label>

  <button type="submit">Submit</button>
</form>

```

## 5.2 Working with Form Controls and Validators

Angular provides a set of built-in validators that you can use to ensure that the input meets certain conditions. You can import the `Validators` class and use its static methods to add validators to your form controls:

```tsx
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  // ...
})
export class AppComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });
}

```

In the above example, both the `firstName` and `lastName` fields are required. If the user tries to submit the form without filling them in, the form won't be valid.

To check the validity of the form, you can use the `valid` property of the `FormGroup`:

```tsx
if (this.profileForm.valid) {
  console.log('Form is valid');
} else {
  console.log('Form is invalid');
}

```

## 5.3 Implementing Custom Validation

There might be cases where the built-in validators are not enough for your needs. In such cases, you can create custom validators.

Here's an example of a custom validator that checks whether the input starts with a number:

```tsx
function startsWithNumber(control: FormControl) {
  const firstChar = control.value.charAt(0);
  if (isNaN(firstChar)) {
    return null;
  } else {
    return { startsWithNumber: true };
  }
}

```

You can use this custom validator just like the built-in ones:

```tsx
@Component({
  // ...
})
export class AppComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, startsWithNumber]),
    lastName: new FormControl('', Validators.required),
  });
}

```

In the above example, the `firstName` field is required and it should not start with a number.

Remember, the key to mastering forms and validation in Angular is practice. Try to create forms with different controls and validators, and you'll get the hang of it in no time. Happy coding!