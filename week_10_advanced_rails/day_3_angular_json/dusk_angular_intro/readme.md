# Intro to Angular

## Outline

* What is Angular?*
  - AngularJS is a client-side Javascript framework for adding interactivity to HTML. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly.

* [Sites that use `Angular'](https://builtwith.angularjs.org/)

- Let's take a step back:

  - HTML is a great declarative language for static documents. It does not contain much in the way of creating applications, and as a result building web applications is an exercise in what do I have to do to trick the browser into doing what I want?

* Why `Angular`? How is it different?
  -  It attempts to minimize the impedance mismatch between document centric HTML and what an application needs by creating new HTML constructs.

  - Angular implements MVC by asking you to split your app into MVC components, then just let Angular do the rest. Angular manages your components for you and also serves as the pipeline that connects them.


###Getting Started
  * Visit [angularjs.org](Angular) and download Angular.

__What is a Directive?__

  * In Angular, we add behavior to our HTML through directives. A directive is a marker on a HTML tag that tells Angular to run or reference some Javascript code.

  * The `ngApp` directive -  denotes the beginning of an application, and everything inside its tags will have access to binding. It attaches the Application Module to the page.


###Data Binding

####Data Binding in Classical Template Systems
  Most templating systems bind data in only one direction: they merge template and model components together into a view. After the merge occurs, changes to the model or related sections of the view are NOT automatically reflected in the view. Worse, any changes that the user makes to the view are not reflected in the model. This means that the developer has to write code that constantly syncs the view with the model and the model with the view.

#####One Way Data Binding
![One Way Data Binding](oneway.png)


####Data Binding in Angular Templates

Angular templates work differently. First the template (which is the uncompiled HTML along with any additional markup or directives) is compiled on the browser. The compilation step produces a live view. Any changes to the view are immediately reflected in the model, and any changes in the model are propagated to the view. The model is the single-source-of-truth for the application state, greatly simplifying the programming model for the developer. You can think of the view as simply an instant projection of your model.

Because the view is just a projection of the model, the controller is completely separated from the view and unaware of it. This makes testing a snap because it is easy to test your controller in isolation without the view and the related DOM/browser dependency.

#####Two-Way Data Binding
![Two-Way Data Binding](twoway.png)

## How to include Angular in our Rails App

1. Head over to [angularjs.org/](https://angularjs.org/) and download the minified version of angular and then place it in `vendor/assets/javascripts`
1. In our application.js add `//= require angular.min`
2. In application.js remove turbolinks
3. In application.html.erb remove `'data-turbolinks-track' => true` for the css and javascript tags
4. Generate a controller and an index action + view `rails g controller CONTROLLER_NAME index`
4. In application.html.erb add to the body tag `ng-app = "NAME_OF_APP"`
5. Create an app.js or app.js.coffee file in your `app/assets/javascripts` directory
6. Include `NAME_OF_APP = angular.module "NAME_OF_APP", []` this array will be a list of dependencies we will include as we explore more about Angular
7. To create a controller (in CoffeeScript) `NAME_OF_APP.controller "IndexCtrl", [ '$scope', ($scope) -> ]`
8. For now, include your angular code in your index.html.erb (this will change)

####Exercise:

1. Create a new rails app and include angular
2. Add your app to the body tag
3. Create your first controller and inside set a `greeting` variable using and display it with Angular templating.

###Built-In Directives:

Angular comes with quite a few built in directives and even allows you to create your own which we will learn later.

###More Directives

  * `ngStyle` - directive allows you to set CSS style on an HTML element conditionally.

  ````
  <div ng-app>
     	<input type="button" value="set color" ng-click="myStyle={color:'red'}">
		<input type="button" value="set background" ng click="myStyle={'background-color':'blue'}">
		<input type="button" value="clear" ng-click="myStyle={}">
		<br>
		<span ng-style="myStyle">Sample Text</span>  </div>
  ````

  * `ng-repeat` - directive instantiates a template once per item from a collection. Each template instance gets its own scope, where the given loop variable is set to the current collection item, and $index is set to the item index or key.

    ````
  <div ng-app>
        <div  ng-init="friends=['larry', 'moe', 'curly']">
      <div  ng-repeat="friend in friends">
        {{friend}}
      </div>
      </div>
  </div>
  ````

  * `ngInit`- directive allows you to evaluate an expression in the current scope

###Angular Forms

   * `ngModel` - directive binds an input,select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive.

  * `ngModel` is responsible for:

    1) Binding the view into the model, which other directives such as input, textarea or select require.

    2) Providing validation behavior (i.e. required, number, email, url).

    3) Setting related css classes on the element (ng-valid, ng-invalid, ng-dirty, ng-pristine) including animations.


   * `ngList` - Text input that converts between a delimited string and an array of strings. The delimiter can be a fixed string (by default a comma) or a regular expression.


     ````
 	   <form>
	     <input type="text" ng-model="favoriteBooks.names" ng-list> <br>
       Show Result
     	<input type="checkbox" ng-model="showTemplate">
      </form>
      <div ng-show="showTemplate">
  		  <div ng-repeat="name in favoriteBooks.names">
	      Why do you like {{name}}?
	      </div>
     </div>
    ````

###Some Other cool directives
   * `ng-cloak` - directive is used to prevent the Angular html template from being briefly displayed by the browser in its raw (uncompiled) form while your application is loading.
   * `ng-pluralize` - directive that displays messages according to en-US localization rules
   * `ng-filter` - Selects a subset of items from array and returns it as a new array
   * To create custom filter: `NAME_OF_APP.filter 'NAME_OF_FILTER', ->`

### Some additional reading about scope in angular

<http://www.ng-newsletter.com/posts/beginner2expert-scopes.html>

<https://github.com/angular/angular.js/wiki/Understanding-Scopes>


