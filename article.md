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
 -  Refers to TypeScript definition files of libraries using <a href="http://definitelytyped.org/tsd/" target="_blank">TSD</a> and defines the missing definitions of Angular 2 in a local file angular2.temp.d.ts
 -  An express REST API to consume in Angular
 -  Gulp to transpile TypeScript code to ES5 and start Node.js server
 - Source TypeScript files of the project are located inside the scripts folder and the public folder is used to store transpiled files

Building Pin Your Achievements Application
-------
###Building Express APIs
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

###Modifying Startup Component and Routes
The index.html file is the starting point of the application. The body portion of this file loads the bootstrap script and creates the `my-app` component. This component in-turn loads other components into the application. The bootstrap.ts file bootstraps the angular application using the main component. As you see, the required injectables exported by the other modules are passed into the function. This makes the services and directives exported by these modules available to all child components of `my-app`. We will be using a form in the application and for that we need to add `formInjectables` exported by the module angular2/forms to the list of injectables.

[js]
import {formInjectables} from 'angular2/forms';
bootstrap(MyApp, [routerInjectables, httpInjectables, formInjectables, AchievementsService]);
[/js]

The startup component of the project is located inside the app folder. The component has two annotations applied on it:

1. Component: It holds configuration properties of the component like selector, names of properties, names of events and list of injectables into the component. Value of the selector can be same as the string to be used on HTML markup, it doesn't need to be camel-cased
2. View: The view annotation loads the data needed for view part of the component. It includes HTML template (can be inline or, a template URL) and list of directives that the component needs

[js]
@Component({
  selector: 'my-app'
})
@View({
  templateUrl: _settings.buildPath + '/components/app/app.html',
  directives: [RouterLink, RouterOutlet]
})
[/js]

The `my-app` component has to define routes for the application and provide a placeholder to load the child views. The `Router` service can be used inside the `MyApp` class to define the routes. Following snippet defines the two routes needed for the application:

[js]
export class MyApp {
  constructor(@Inject(Router) router: Router) {
    router.config([
      { path: '', as: 'home', component: Home },
      { path: '/add', as: 'add', component: Add }
    ]);
  }
}
[/js]

As the add component is not already added, you will face issues if you try running the application now. Create a new folder inside the components folder and name it add. Add two files inside this folder: add.ts and add.html. For the time being, add the following snippet to the add.ts file. We will add more code to this file later.

[js]
import {Component, View} from 'angular2/angular2';
import { _settings } from '../../settings'
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';
import {Inject} from 'angular2/di';
import {Router} from 'angular2/router';
import {AchievementsService} from '../../services/achievementsService';

@Component({
  selector: 'add',
  injectables: [FormBuilder]
})
@View({
	templateUrl: _settings.buildPath + '/components/add/add.html',
  directives:[formDirectives]
})
export class Add {
}
[/js]

The view of this component will have a form accepting inputs to be saved as a new achievement. Add the following HTML to this page:

[html]
<div>Add New Achievement</div>
<br />
<form>
	<div class="input-group">
		<span>Title</span>
		<input type="text" id="title" class="form-control" />
	</div>
	<div class="input-group">
		<span>Type</span>
		<input type="text" id="type" class="form-control" />
	</div>
	<div class="input-group">
		<span>From</span>
		<input type="text" id="from" class="form-control" />
	</div>
	<div>&nbsp;</div>
	<div class="input-group">
		<input type="submit" value="click" class="btn btn-primary" />
		<input type="reset" value="Reset" class="btn" >
	</div>
</form>
[/html]

In the view, we need to create links for navigation between these pages. The `router-link` attribute component helps us in doing this. We need to assign name of the component to the attribute and it takes care of building the link based on the path configured for the component.

[html]
<ul class="nav navbar-nav">
	<li>
		<a router-link="home">Home</a>
	</li>
	<li>
		<a router-link="add">Add</a>
	</li>
</ul>
[/html]

The final piece of HTML we need in the root component is, a `route-outlet` element. This is the place where the child components will be loaded while navigating across views.

[html]
<router-outlet></router-outlet>
[/html]

###Listing all Achievements
Let's modify the home component to display list of all the achievements in the form of pinned boxes on a wall. 
