JavaScript started gaining enormous popularity because of the dominance of front-end frameworks like AngularJS, ReactJS, Aurelia and the server platform Node.js. The increasing usage of the language triggered a thought in the minds of the language designers to improve the features to make the language a better fit for developing large applications.

The current stable version of Angular (i.e, Angular 1.x) was built using the features of ES5 and was meant to work on most of the browsers including some of the older versions of IE. The framework was designed based on the features available in JavaScript. So, the framework had to create a module system of its own, abstract away some of the language features and provide a highly abstracted and configuration based interface to work on. Angular 2 is built with features of ES6 (and ES7), Web Components in mind and targeting evergreen browsers. So, the framework was developed from scratch. All good things of Angular 1 are still available in Angular 2 in addition to the simplicity.

TypeScript is the typed super set of JavaScript. The language is built and maintained by Microsoft. Presence of types makes the code written in TypeScript less prone to runtime errors. In recent times, the support for ES6 has been greatly improved in the language and it also added a few features from ES7 spec as well. Angular team at Google chose to use TypeScript for development.

In this article, we will see how to use Angular 2 and TypeScript to build a simple application. As Angular 2 is still in alpha, syntax of the code snippets shown in this article may change before it reaches RTM.

Basics of Angular 2
-----
As already mentioned, Angular 2 was built with simplicity in mind. So, the team removed a number of recipes of Angular 1 that brought the question "Why are we doing this?" in our minds. Watch <a href="https://www.youtube.com/watch?v=gNmWybAyBHI" target="_blank">Angular 2.0 Core session by Igor and Tobias</a> to know what all are removed from Angular 1. Now the framework is comprised of a small set of building blocks and some conventions to be followed. Following are the building blocks in Angular 2:

 -  Components: A component is similar to directive in Angular 1. It is built with features of HTML5 Web Components. Every component has a view and a piece of logic. It can interact with services to achieve its functionality. The services can be Dependency Injected into the component. Anything that has to be used in view of the component has to be a public member on the instance of the component. The components use property binding to check for changes in the values and act on the changes. The components can handle events and event handlers are the public methods defined in the component's class.
 -  Services: A service is a simple ES6 class with some annotations for Dependency Injection.

As in Angular 1.x, Angular 2 uses Dependency Injection to get references of the objects. As scope is removed from the framework, we don't have digest cycle running and hence we don't need to keep calling `scope.$apply` while working in non-Angular world. Angular 2 uses Zones to kick the changes and zones know when to act.

An Angular 2 application starts with a component and rest of the application is divided into components and they are loaded inside the root component. The components 

Check Victor Savkin's blog post on <a href="http://victorsavkin.com/post/118372404541/the-core-concepts-of-angular-2" target="_blank">Core Concepts in Angular 2</a> to learn more about the basics of Angular 2.

Setting Up
----
Angular 2 is still in alpha at the time of writing this article. So, the framework and the resources around it are still pretty raw. They will go through a number of changes and will get better by the time it is ready for production.

There are a number of seed projects to get started with Angular 2 and TypeScript. I found <a href="https://github.com/EladRK/angular-starter" target="_blank"> Elad Katz's seed project</a> to be a very good starting point. If you want to follow along with this tutorial, clone this repository and follow the instructions mentioned in the readme file to install and run the seed project. The seed project contains the following:
 
 -  A basic Angular 2 application using TypeScript
 -  Uses JSPM/SystemJS to load dependencies on the pages
 -  An express REST API to consume in Angular
 -  Gulp to transpile TypeScript code to ES5 and start Node.js server

Building Pin Your Achievements Application
-------
Now that we have some idea on what Angular 2 is and you cloned the seed project, let's modify the seed project and build a simple application to pin your achievements on a board. As first thing, let's add Express APIs to get and add achievements. As I forked the repo and modified the seed project to add basic express APIs, you will see and endpoint serving the existing list of achievements. We need to add an endpoint to post a new achevement. Open the server.js file and add the following snippet to it:

[js]
app.post('/api/achievements', function(request, response){
    achievements.push(JSON.parse(request.body));
    response.send(achievements);
});
[/js]

As Angular 2 is still pretty raw, its `Http` API is not matured enough yet. So, I couldn't figure a way to post JSON data using the service. This will change in the future releases of the framework. The data gets posted in the form of plain text. So, let's add a `bodyParser` middleware to read text from the request body.

[js]
app.use(bodyParser.text({type: 'text/plain'}));
[/js]

Take a few minutes and explore the seed project. 