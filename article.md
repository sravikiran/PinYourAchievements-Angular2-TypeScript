JavaScript started gaining enormous popularity because of the dominance of front-end frameworks like AngularJS, ReactJS, Aurelia and the server platform Node.js. The increasing usage of the language triggered a thought in the minds of the language designers to improve the features to make the language a better fit for developing large applications.

The current stable version of Angular (i.e, Angular 1.x) was built using the features of ES5 and was meant to work on most of the browsers including some of the older versions of IE. The framework was designed based on the features available in JavaScript. So, the framework had to create a module system of its own, abstract away some of the language features and provide a highly abstracted and configuration based interface to work on. Angular 2 is built with features of ES6 (and ES7), Web Components in mind and targeting evergreen browsers. So, the framework was developed from scratch. All good things of Angular 1 are still available in Angular 2 in addition to the simplicity.

TypeScript is the typed super set of JavaScript. The language is built and maintained by Microsoft. Presence of types makes the code written in TypeScript less prone to runtime errors. In recent times, the support for ES6 has been greatly improved in the language and it also added a few features from ES7 spec as well. Angular team at Google chose to use TypeScript for development.

In this article, we will see how to use Angular 2 and TypeScript to build a simple application. As Angular 2 is still in alpha, syntax of the code snippets shown in this article may change before it reaches RTM.

Setting Up
----
Angular 2 is still in alpha at the time of writing this article. So, the framework and the resources around it are still pretty raw. They will go through a number of changes and will get better by the time it is ready for production.

There are a number of seed projects to get started with Angular 2 and TypeScript. I found <a href="https://github.com/EladRK/angular-starter" target="_blank"> Elad Katz's seed project</a> to be a very good starting point. I found a few areas where the seed project could be cleaned up, so I forked it and applied the required <a href="https://github.com/sravikiran/angular-starter" target="_blank">changes on my fork</a>. The sample of this article is based on my fork of the repository. If you want to follow along this tutorial, first clone it and follow the instructions mentioned in the readme file to run the seed project.

Basics of Angular 2
-----
As already mentioned, Angular 2 was built with simplicity in mind. So, the team removed a number of recipes of Angular 1 that brought the question "Why are we doing this?" in our minds. Watch <a href="https://www.youtube.com/watch?v=gNmWybAyBHI" target="_blank">Angular 2.0 Core session by Igor and Tobias</a> to know what all are removed from Angular 1. Now the framework is comprised of a small set of building blocks and some conventions to be followed. Following are the building blocks in Angular 2:

 -  Components: A component is similar to directive in Angular 1. It is built with features of HTML5 Web Components. Every component has a view and a piece of logic. It can interact with services to achieve its functionality. The services can be Dependency Injected into the component. Anything that has to be used in view of the component has to be a public member on the instance of the component.
 - Services: A service is a simple ES6 class with some annotations for Dependency Injection.