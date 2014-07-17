# Prototypical Inheritance
## Tips and CoffeeScript


| Objectives |
| :---- |
| Apply constructors and prototypes together to implement inheritance between objects in Javascript |
| To examine lookup in the prototype chain and articulate certain advantages via diagrams |

## Related Topics

* Prototypal Inheritance
* Javascript Prototypes
* Special Functions:
	* Apply
	* Call


## Overall Goal

* Reduce code complexity
* Encourage code reuse
* Model the world around us 


## Classical Inheritance




### A Prototype In JS

In javascript we don't have classes. We have prototypes

	function Person(name){
		this.name = name
	}
	
	Person.prototype.greet = function(){
		return "Hello, my name is " + this.name;
	};

* Why do we use the prototype?
* What is a `hasOwnProperty`?
* What is a `prototypeProperty`?
* How do we create a new `Person`?


### Static Methods and Attributes

Here is a static attribute

```
	function Person(name){
		this.name = name
		Person.all.push(name);
	}

	Person.all = [];

	Person.prototype.greet = function(){
		return "Hello, my name is " + this.name;
	};

```

Here is a static method

```
	function Person(name){
		this.name = name
		Person.all.push(name);
	}

	Person.all = [];
	Person.count = function(){
		return Person.all.length;
	};
	
	Person.prototype.greet = function(){
		return "Hello, my name is " + this.name;
	};

```

### Inheriting Via Prototypes -- Classical Pattern

Given the following prototype let's create a student.

	function Person(name){
		this.name = name
	}
	
	Person.prototype.greet = function(){
		return "Hello, my name is " + this.name;
	};

	function Student(name, course){
		this.name = name;
		this.course = course;
	};

	Student.prototype = new Person
	Student.prototype.constructor = Student;

* What's inherited?
* Why set the constructor?


### Shape Exercises:

* Create a method called `inherit` that takes two constructors and achieves the above inheritance.

* Try implementing the following:

   | Quadrilateral |
   | :---- |
   | perimeter |
   | Sides: 4 |
      	   	   
  Note: the `Quadrilateral` constructor should take four side lengths.

*  Use your `inherit` function to have `Rectangle` inherit from `Quadrilateral`. 
* The following should inherit from `Rectangle`, `square`.

* Update the `prototypes` of `Rectangle` and `Square` above so they have more specific methods. `Rectangle` needs an `Area` method and a better `Perimeter` method. `Square` also needs a better `Area` method and  a better `Perimeter` method.

 


### Pitfals--Side Effects

When we inherit in JS we have to watch out for in the wild.

	
	function Person(name){
		this.name = name;
		this.friends = [];
	}
	
	Person.prototype.addFriend = function(name){
		this.friends.push(new Person(name));
	};
	
	function Student(name){
		this.name = name;
	};
	
	Student.prototype = new Person()
	Student.prototype.constructor = Student;

* Create two students and add different  friends to each. What 
	* What happens after adding a friend?


### `call` and `apply`

Example 1:

```
var getAge = function(friend) {
	return friend.age;
}

var john = { name: "john", age: 21 };
getAge(john)

```

rewritten using `this`

```
var getAge = function() {
	return this.age;
}

var john = { name: "john", age: 21 };
getAge.call(john)

```

Example 2:

```
var setAge = function(friend, newAge) {
	friend.age = newAge;
}

var john = { name: "john", age: 21 };
setAge(john, 12)

```

rewritten using `this`

```
var setAge = function(newAge) {
	this.age = newAge;
}

var john = { name: "john", age: 21 };
setAge.call(john, 12)

```

	
	
### Calling on a solution

Let's talk about using `call` or `apply` to set the `this` context for a function before it is run.

	function Person(name){
		this.name = name;
		this.friends = [];
	}
	
	Person.prototype.addFriend = function(name){
		this.friends.push(new Person(name));
	};
	
	function Student(name){
		// masks all the constructor properties
		Person.call(this);
		this.name = name;
	};
	
	Student.prototype = new Person()
	Student.prototype.constructor = Student;


* Do we really want hasOwnProperties?


### Copying the Prototype

	function Person(name){
		this.name = name;
	}
	
	Person.prototype.greet = function(){	
		return "Hello! My name is " + this.name;
	}
	
	function Student(name){
		// masks all the constructor properties
		Person.call(this);
		this.name = name;
	};
	
	var Intermediary = function(){};
	// Copy just the prototype
	Intermediary.prototype = Person.prototype;
	Student.prototype = new Intermediary;

* Turn this inheritance process into a function called `inherits`.
* Create a new `Student`. What's the constructor name of the new student?

This is an interesting idea of copying one objects prototype and returning an instance of a copy. 

* How could we in general take an object and do this process with it?

		function createObject(protoObj){
			function Intermediary(){}
			Intermediary.prototype = obj;
			return new Intermediary();
		}


* Let's use this createObject.
* What would we have to change with `createObject` to have it properly update the constructor property.







