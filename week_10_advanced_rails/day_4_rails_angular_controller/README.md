# Intro Angular
## Intro To Controllers



### Quick Setup

```
rails new angular_controller_app -T -d postgresql
cd angular_controller_app
```
grab angular

```
curl -L http://code.angularjs.org/1.2.24/angular-1.2.24.zip > "angular-1.2.24.zip" && unzip "angular-1.2.24.zip" && rm "angular-1.2.24.zip" && mv "angular-1.2.24" "vendor/assets/javascripts/angular-1.2.24"
```

require it in the `app/assets/javascripts/application.js`

`app/assets/javascripts/application.js`

```js
//= require angular-1.2.24/angular.min
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

```


```
rails g controller sites index
```


setup the angular layout to be an `ng-app`


```html
<!DOCTYPE html>
<html>
<head>
  <title>AngularControllerApp</title>
  <%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track' => true %>
  <%= javascript_include_tag 'application', 'data-turbolinks-track' => true %>
  <%= csrf_meta_tags %>
</head>
<body ng-app>

<%= yield %>

</body>
</html>

```

### Events 

There are a few events we want to practice 

*ng-submit*


in the `app/views/sites/index.html.erb`


```html
<div ng-controller="PersonCtrl">
	<form ng-submit="handleSubmit(person)">
		<div>
			<input ng-model="person.firstName">
		</div>
		<div>
			<input ng-model="person.lastName">
		</div>
		<button>Save</button>
	</form>
	
	<div ng-repeat="person in people">
		{{ person.firstName }} {{ person.lastName }} 
	</div>
</div>
```

No coffee script

`app/assets/javascripts/people.js`

```javascript

var PersonCtrl = function ($scope) {
	$scope.people = []
	
	$scope.handleSubmit = function (person) {
		$scope.people.push(person)
		person = {}
	}
}
```


and lets add a angular application logic

`app/assets/javascripts/person.js.coffee`

```coffee

window.PersonCtrl = ($scope)->
	$scope.people = []
	
	$scope.handleSubmit = (person)->
		$scope.people.push(person)
		person = {}

```

Here we explicitly passed in a new person object. However, because of scope related to the event the `this` holds a reference to model.


```coffee

window.PersonCtrl = ($scope)->
	$scope.people = []
	
	$scope.handleSubmit = ()->
		$scope.people.push(this.person)
		this.person = {}

```


### More Modular Syntax

Minification shortens variables name. This is bad because when it comes time for you application to run in production and your app is dependent on certian variable naming.

Angular is using `.toString` on the controller function and then parsing the name of the params, which is not only inefficient, but as just mentioned in regards to minimization is dangerous too.


```coffee
App = angular.module("App", [])

App.controller("PersonCtrl", ["$scope", ($scope)->
	
	$scope.people = []
	
	$scope.handleSubmit = ()->
		$scope.people.push(this.person)
		this.person = {}
])
```


### Multiple Controllers

Adding multiple controllers is straightforward

```coffee
App = angular.module("App", [])

App.controller("PersonCtrl", ["$scope", ($scope)->
	
	$scope.people = []
	
	$scope.handleSubmit = ()->
		$scope.people.push(this.person)
		this.person = {}
])

App.controller("PetsCtrl", ["$scope", ($scope)->
	$scope.pets = []
	
	$scope.handleSubmit = ()->
		$scope.pets.push(this.pet)
		this.pet = {}
])
```
### Nesting Controllers

When we nest controllers we inherit from the containing controller prototypically. This means it's time to break out your inheritance diagrams. 



```html
<div ng-controller="PersonCtrl">
	<form ng-submit="handleSubmit()">
		<div>
			<input ng-model="person.firstName">
		</div>
		<div>
			<input ng-model="person.lastName">
		</div>
		<button>Save</button>
	</form>
	
	<div ng-repeat="person in people" ng-controller="PetsCtrl">
		<form ng-submit="handleSubmit()">
			<div>
				<input ng-model="person.firstName">
			</div>
			<div>
				<input ng-model="person.lastName">
			</div>
			<button>Save</button>
		</form>
		{{ person.firstName }} {{ person.lastName }}
		<div ng-repeat"pet in person.pets">
			{{pet.name}}
		</div> 
	</div>
</div>
```

Now let's update our `PetsCtrl`

```coffee

App.controller("PetsCtrl", ["$scope", ($scope)->
	$scope.pets = []
	
	$scope.handleSubmit = ()->
		$scope.person.pets = $scope.person.pets || [];
		$scope.person.pets.push(this.pet)
		this.pet = {}
])
```


### Resources

* Bower Setup: [bower with rails](http://www.iconoclastlabs.com/blog/bower-and-rails-4)