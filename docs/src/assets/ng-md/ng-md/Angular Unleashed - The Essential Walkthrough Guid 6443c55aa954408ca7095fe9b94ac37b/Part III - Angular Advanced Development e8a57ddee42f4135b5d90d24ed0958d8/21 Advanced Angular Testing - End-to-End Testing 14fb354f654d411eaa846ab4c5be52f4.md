# 21. Advanced Angular Testing - End-to-End Testing

Owner: Seraf Dos Santos

End-to-end testing is an integral part of the software development lifecycle. It helps ensure that the system behaves as expected from the user's perspective. This chapter dives into the specifics of end-to-end (E2E) testing in Angular and demonstrates how to create E2E tests for your Angular application using Protractor, an open-source end-to-end test framework.

## 21.1 Understanding End-to-End Testing in Angular

End-to-end testing involves testing the complete flow of an application from the start to the end, simulating real user scenarios. It encompasses the application's interaction with databases, networks, and other components. In the context of Angular, E2E testing verifies that all components, services, and modules work cohesively to provide the expected functionality.

E2E testing holds several benefits:

1. **User Experience**: It helps ensure that the user experience is smooth and that all features work as expected.
2. **Bug Detection**: It helps catch bugs that unit tests might miss, especially ones related to integration between components.
3. **Confidence**: It provides confidence that the system is working correctly before it gets to the end-user.

## 21.2 Creating End-to-End Tests for Your Angular Application

Angular provides a powerful tool called Protractor for automating end-to-end tests. Protractor is built on WebDriverJS and includes important features for Angular applications. Here's a simple way to set up E2E tests in your Angular application:

1. **Install Protractor**: First, you need to install Protractor globally in your system. You can install it using npm (Node Package Manager).

```bash
npm install -g protractor

```

1. **Set Up Protractor Config**: Create a `protractor.conf.js` file in your project root. This file will house the configuration for your tests.

```jsx
exports.config = {
  framework: 'jasmine',
  seleniumAddress: '<http://localhost:4444/wd/hub>',
  specs: ['e2e/spec.js']
}

```

1. **Write Test Cases**: In the `e2e` folder, create a `spec.js` file. This is where your test cases will live.

```jsx
describe('Protractor Demo', function() {
  it('should have a title', function() {
    browser.get('<http://localhost:4200>');

    expect(browser.getTitle()).toEqual('Protractor Demo');
  });
});

```

1. **Run Test Cases**: Finally, run your test cases using the Protractor command.

```bash
protractor protractor.conf.js

```

In the test case above, Protractor opens the application in a browser, checks the title of the page, and verifies that it matches 'Protractor Demo'.

## 21.3 Using Tools Like Protractor to Automate Testing

Protractor is a powerful tool that allows you to automate your end-to-end tests. It provides a variety of features that simplify testing Angular applications. Some of these features include:

- **Automatic Waiting**: Protractor automatically waits for pages to load and for asynchronous tasks to finish. This eliminates the need for arbitrary sleep or wait statements in your tests.
- **Angular-Specific Locators**: Protractor provides Angular-specific locators, such as `by.model` and `by.binding`, which make it easier to target Angular-specific elements on the page.
- **Jasmine Integration**: Protractor is integrated with Jasmine, a behavior-driven development framework for testing JavaScript code, providing a simple syntax for writing tests.

Here's an example of a more complex test with Protractor:

```jsx
describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));

  beforeEach(function() {
    browser.get('<http://localhost:4200>');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Protractor Demo');
  });

  it('should add one and two', function() {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);
    goButton.click();

    expect(latestResult.getText()).toEqual('3');
  });
});

```

In this test, Protractor uses Angular-specific locators to target elements on the page. It then interacts with these elements, similar to how a user would, and verifies the expected behavior.

In conclusion, end-to-end testing is a critical aspect of developing robust Angular applications. Tools like Protractor make the process simpler and more efficient, allowing you to write comprehensive tests that simulate real user interactions.