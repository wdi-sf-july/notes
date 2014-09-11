# $HTTP

### The $http service is a core Angular service that facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP.


## How to include $http it in your Angular application

In your controller, $http will be one of the dependencies so before you include it make sure you have a controller and app set up

1. Define your app and include it in your body tag

	- In your app.js: `TestApp = angular.module("TestApp", []`

	- And in your application.html.erb: `<body ng-app="TestApp">`

3. In your controller, specify include the $http dependency `TestApp.controller("TestCtrl", ["$scope", "$http", ($scope, $http) ->`

## Ways to write $http

1. Long form

```

  $http({method: 'GET', url: '/someUrl'}).
    success(function(data, status, headers, config) {
	    // these are all possible parameters for the callback
    }).
    error(function(data, status, headers, config) {
    	 // these are all possible parameters for the callback
    });

```

2. Shortcut methods  (similar to the jQuery $.getJSON method)

```
$http.get('/someUrl').success(function(data){
	// do something with the data here
});
```

You can also use...

```
$http.post
$http.put
$http.delete
$http.jsonp
$http.patch
```

## Let's talk a little more about headers -

The $http service will automatically add certain HTTP headers to all requests. These defaults can be fully configured by accessing the $httpProvider.defaults.headers configuration object, which currently contains this default configuration:

```
$httpProvider.defaults.headers.common (headers that are common for all requests):
Accept: application/json, text/plain, * / *
$httpProvider.defaults.headers.post: (header defaults for POST requests)
Content-Type: application/json
$httpProvider.defaults.headers.put (header defaults for PUT requests)
Content-Type: application/json
```

What might we need to add to our headers in our Rails app? How about the CSRF Token? We would do that using the config option (this is essential for our Rails app and we will not be able to make any calls to our API without this configuration)

```
TestApp.config(["$httpProvider", function($httpProvider){
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
}])
```

## Angular Router

As we start to move our routes to the front-end we will need to include the Angular Router with the $routeProvider (for routing) and $locationProvider (for URL rewriting) dependencies (the .when goes on for however many routes you have)

```
NAME_OF_APP.config ["$routeProvider", "$locationProvider", ($routeProvider, $locationProvider)->
  $routeProvider
    .when "ROUTE",
      templateUrl: "NAME_OF_TEMPLATE",
      controller: "NAME_OF_CONTROLLER"
    .when "ROUTE",
      templateUrl: "NAME_OF_TEMPLATE",
      controller: "NAME_OF_CONTROLLER" 
  .otherwise
    redirectTo: "ROUTE"

  $locationProvider.html5Mode(true)
]
```

## To include templates 

Since we will be using Angular templates and not rendering pages from the views folder, we need a good way to include angular templates.

1. In your Gemfile include `gem 'angular-rails-templates'` and then run bundle install 
2. In your application.js include `//= require angular-rails-templates` and `//= require_tree ../templates`
3. Place your templates in `app/assets/templates ` and make sure that they have an extention of .html (it can also be .html.erb or .html.haml)
4. In your angular module, include the `'templates'` dependency. Example: `BookApp = angular.module("BookApp", ["ngRoute", "templates"])`
5. In your $routeProvider, include your template as the template URL. Example:

```
  .when "/",
      templateUrl: "index.html",
      controller: "BooksCtrl"
```

