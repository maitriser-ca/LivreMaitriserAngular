# 19. Internationalization and Localization in Angular

Owner: Seraf Dos Santos

## 19.1 Understanding Internationalization and Localization in Angular

Internationalization (i18n) and localization (L10n) are two critical aspects of modern web development, especially when the application is meant to cater to users from various regions and languages.

Internationalization, or i18n for short, is the process of designing and preparing your app to be usable in different languages. This involves the ability to translate text and provide cultural appropriateness, from right-to-left reading to the use of currency, dates, and more.

Localization, on the other hand, is the process of translating your internationalized app into specific languages for particular locales.

Angular provides a comprehensive solution for both i18n and L10n, which involves the use of Angular CLI, Angular compiler, runtime i18n support, and the use of ICU expressions for pluralization and gender-based texts.

## 19.2 Configuring your Angular Application to Support Multiple Languages

To internationalize your Angular app, you need to mark text with the i18n attribute in your HTML templates. The Angular CLI then extracts this marked text into an industry-standard translation source file.

You can then translate this file and include it in your application along with the necessary locale data.

Below is an example of how to mark a text for translation:

```html
<h1 i18n>Hello, world!</h1>

```

In this example, Angular will extract "Hello, world!" into the translation file.

After marking all the texts for translation, you can use the Angular CLI to extract them:

```bash
ng xi18n

```

This command will generate a messages.xlf file in the root directory of your project. This file is a standard translation file that you can send to translators. After receiving the translated files, you can include them in your application like this:

```bash
ng serve --configuration=fr

```

In this case, 'fr' is the locale id for French. Replace 'fr' with the locale id of your language.

## 19.3 Working with Pipes and Translations to Support Localization

Angular provides various pipes to transform data. For localization, Angular provides the following pipes:

1. DatePipe: Formats a date value according to locale rules.
2. CurrencyPipe: Transforms a number to a currency string, formatted according to locale rules.
3. DecimalPipe: Transforms a number into a string with a decimal point, where the fraction size is determined by the current locale.
4. PercentPipe: Transforms a number to a percentage string, formatted according to locale rules.

Here's an example of how to use DatePipe:

```html
<p>The current date is: {{ today | date }}</p>

```

In this example, if the locale is 'fr', the date will be displayed according to French rules.

You can also use the i18n attribute along with Angular pipes:

```html
<p i18n>The current date is: {{ today | date }}</p>

```

This example will extract "The current date is: " into the translation file, and it will also display the date according to the current locale.

In conclusion, Angular provides a comprehensive solution for internationalization and localization. By marking text for translation, extracting it, translating it, and including the translated files in your application, you can easily support multiple languages in your Angular app. Furthermore, with Angular pipes, you can ensure that dates, numbers, percentages, and currencies are displayed according to the rules of the current locale.