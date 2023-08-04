# 29. Angular and Machine Learning - Integrating with TensorFlow.js

Owner: Seraf Dos Santos

## 29.1 Introduction

In this chapter, we will explore how to integrate TensorFlow.js, a machine learning library for JavaScript, with an Angular application. We will cover the basics of creating and training a machine learning model using TensorFlow.js and subsequently using this model to make predictions in an Angular application.

The popularity of machine learning has surged over the past few years due to its capabilities to extract meaningful insights from data and predict future trends. With the emergence of TensorFlow.js, developers can now build and train machine learning models right in the browser, making machine learning more accessible to web developers.

## 29.2 Integrating TensorFlow.js with Angular

To begin with, you'll need to install TensorFlow.js in your Angular project. You can install TensorFlow.js via npm by running the following command in your terminal:

```bash
npm install @tensorflow/tfjs

```

Once installed, you can import it in your Angular component like any other library:

```tsx
import * as tf from '@tensorflow/tfjs';

```

## 29.3 Creating and Training a Machine Learning Model using TensorFlow.js

In TensorFlow.js, creating a machine learning model typically involves defining the architecture of the model, compiling the model, and then training the model on data. Let's create a simple linear regression model for demonstration.

Firstly, define the model. For our linear regression, we'll use a single dense layer:

```tsx
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

```

Next, compile the model. During compilation, we'll define the loss function and the optimizer:

```tsx
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

```

Now that the model is defined and compiled, it's time to train it. For our example, let's say we're trying to learn the function \(y = 2x - 1\). We'll train the model with six data points:

```tsx
const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

model.fit(xs, ys, {epochs: 250});

```

## 29.4 Using the Model to Make Predictions

Now that our model is trained, we can use it to make predictions. For example, if we want to predict the output for \(x = 10\), we can do so as follows:

```tsx
model.predict(tf.tensor2d([10], [1, 1])).print();

```

## 29.5 Integrating the Model into the Angular Application

To use the trained model in our Angular application, we can wrap the TensorFlow.js code inside a service and then inject this service into the components where we need to use the model.

First, let's create a new service:

```bash
ng generate service prediction

```

Next, let's move our TensorFlow.js code to this service:

```tsx
import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  model: tf.Sequential;

  constructor() {
    this.trainNewModel();
  }

  async trainNewModel() {
    this.model = tf.sequential();
    this.model.add(tf.layers.dense({units: 1, inputShape: [1]}));
    this.model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
    const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
    const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);
    await this.model.fit(xs, ys, {epochs: 250});
  }

  predict(val: number) {
    return this.model.predict(tf.tensor2d([val], [1, 1])).dataSync()[0];
  }
}

```

Finally, we can use this service in our component to make predictions:

```tsx
import { Component } from '@angular/core';
import { PredictionService } from './prediction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tensorflow-angular';

  constructor(private predictionService: PredictionService) { }

  predict(val: number) {
    return this.predictionService.predict(val);
  }
}

```

In the component's HTML, we can create an input field for the user to enter a value to predict:

```html
<div>
  <input type="number" [(ngModel)]="inputValue" placeholder="Enter a number">
  <button (click)="outputValue = predict(inputValue)">Predict</button>
  <p>Prediction: {{ outputValue }}</p>
</div>

```

## 29.6 Conclusion

In this chapter, we have explored how to integrate TensorFlow.js with an Angular application, how to create and train a machine learning model using TensorFlow.js, and how to use this model to make predictions within an Angular application. By combining the power of machine learning with the versatility of Angular, you can create powerful web applications that are capable of complex data analysis and prediction.