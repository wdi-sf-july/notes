# Intro To Javascript
## Functions and Control Flow



## Objectives

| Objective |
| :--- |
| Student should be able to articulate ...methods and Javascript functons |
| Students should be able understand how functions capture variables in scope |
| Students should be able nest functions and understand there execution |


## Why Stress JS Functions?

Alex Notov was previous WDI instructor who said it very well when it came to learning a langauge


> *Every programming language has one or two things that you really have to  [`grok`](http://en.wikipedia.org/wiki/Grok) in order to understand the rest of the language and its idioms.*
>
> **Alex Notov**

In Javascript we must *"grok"* functions. This was reflected in student feedback

| **Stephen Bauer** via HipChat |
| :--- |
| *"First real struggle was grasping the concept of functional programming/.../How functions are values and nesting functions within others, etc*" |

When Stephen talks about **functional programming** he's talking about a language *"... [where] you really have to `grok` [functions] in order to understand the rest of the language and its idioms."*

Another student phrased it like this:

| Stuart Stein via HipChat |
| :---- |
| *"Oh, these are just like methods"/"but we can't call them methods"/"or they'll get mad at us."* |

Alex Notov gave examples of this `grok`-ing in other languages:

> * In Ruby **everything** is an object 
> * In Java you can't do anything without declaring a class
> * In C or C++ you to understand pointers


## Feedback On This Lesson 

| Stephen Bauer via HipChat |
| :--- |
| *What I remember from that lesson is that the exercises were engaging enough; he let us knock our heads against the concepts he was outlining*|


### Self-Assesment 

The goal of this lesson is to be able to understand why the function below always returns `true` regardless of the value.

```
(function (value) {
  return (function (copy) {
    return copy === value;
  })(value);
})("Hello World");

(function (value) {
  return (function (copy) {
    return copy === value;
  })(value);
})([1, 2, 3]);
```




## Outline

* Review
* Working Toward A Complicated Example
	* arguments and parameters
		* applying more values
	* What about environments? 
		* description exercise
		* Free variable discussion


	
	

### Reveiew

#### Arguments and Return

Earlier we created simple functions like the following:

```
// Let's calculate the circumfrence of a cirlce
var calcCircumfrence = function (pi, radius){
  return 2*pi*radius;
}

calcCirumfrence(3.1459,1+2)
```

#### Environments

If every function just has a copy of its own argument values that it has to work with then what would be the result of the following code.

```
var x = 1;

var changeNum = function (x) {
  x = 2;
}
changeNum(x);

console.log(x)
// logs what?
```


## More On Environments

Every functoin is created in some sort of environment. Let's examine this first.

An onion like example...

```
var myOuterFunc = function (x){

	var myInnerFunc = function (y){
		return y;
	};

  return myInnerFunc;
};

myFunc(1)(2)
```

What does this return? Why?

Partial Disection

* first the outer function is evaluated
	* It recieves one argument, `1`, and does nothing with that in the body
	* the `return` exits the function and with a result that is another function
* next the `return`ed inner function expects one argument, which it recieves as `2`. 

Let's use this onion like example to display function environments.

```
var myOuterFunc = function (x) { 

    var myInnerFunc = function (y) { 
        return x; 
    };

    return myInnerFunc;
};
myOuterFunc(4)(2);
```

What is returned in the following example? Why?


Partial Disection:

* First `x` is received as a parameter value, `4`.
*  the outer function returns an inner function
*  The inner function is automatically executed and given the value `2` for `y`.
*  The body of the inner function has a a `return` expression that contains a variable defined in the outer function
*  The value is of `x` is returned

We say that the inner function in this example captured the variables in the outer function or in it's environment.

It's time take a note from Alex:


> *What's important is that every time a function is invoked, a new environment is created.* 

This environment is like a dictionary that maps variables to values by name.

The `x` used in the inner function above is just an example of a lookup in the environment for an expression's value.

In order to properly disect the crazy example above we should try a simpler example:

```
var myFunc = function (x) { return x };
myFunc(2)
//=> 2
```
What happens is this:

* In the first line, JavaScript parses this whole thing as an expression made up of several sub-expressions.
* It then starts evaluating the expression, including evaluating sub-expressions
* One sub-expression, function (x) { return x } evaluates to a function.
* On the next line, the function call has an argument that evaluates to the number 2.
* JavaScript now applys the function to the argument 2. Here’s where it gets interesting…
* An environment is created.
* The value ‘2’ is bound to the name ‘x’ in the environment.
* The expression ‘x’ (the right side of the function) is evaluated within the environment we just created.
* The value of a variable when evaluated in an environment is the value bound to the variable’s name in that environment, which is ‘2’
* And that’s our result.


#### Description exercise

Fully Describe the following:

```
var myOuterFunc = function (x) { 

    var myInnerFunc = function (y) { 
        return x; 
    };

    return myInnerFunc;
};

myOuterFunc(4)(2);
```

#### Free variables discussion

We should be ready to conclude that a function always has a reference to its immediate parent environment

The following comments illustrate these environments in example from above.


```
var myOuterFunc = function (x) { 
    // { x: 4, '..': global environment }
    var myInnerFunc = function (y) { 
        // { y: 2, '..': { x: 4 } }
        return x; 
    }
    return myInnerFunc;
};

myOuterFunc(4)(2);
```

Exercises:


* What is returned from the following function? 

		var myOuterFunc = function (x) { 

		    var innerFunc = function (x) { 
		        return x; 
		    };
        return innerFunc;
		};
    myOuterFunc(4)(2);

	* Explain the environment of each function.
* What is the returned after the following function?
		
		var x = 1;
		var myOuterFunc = function (x) {
			x = x + 1;

	    var myInnerFunc = function (y) { 
        return x; 
	    };

      return myInnerFunc;
		}
    myOuterFunc(4)(2); 
		console.log(x);

	* What is logged in the console?




Remember functions still capture the environment they are in. Let's experiment with this idea.


Exercise:

* What would be returned from the following? Why?

		var phrase = "Hello!!!"
		
		var sayHello = function () {
			return phrase;
		};

		var greet = function (salutation){
			return salutation();
		};
		
		// What does this return??
		greet(sayHello);

Use Chrome Debugger

## Recursive Functions

A recursive function is a function that calls itself. Like it a loop it has two main concerns which are the following:

* when should it stop
* what should it do until it stops


Let's implement a loop function

```
  var loop = function(count){
    if (x < 10) {
      console.log(x);
      count++
      loop(count);
    }
  }
```
Is there a limit?

## Objects And Functions

### Object literals

Recall how we created an object literal before

```
var  myObject = {"stuff": "is important"};

myObject["taco"] = "late night meal";
myObject["favorites"] = ["taco", "burrito"];
```


#### Key, Val pairs

These key value pairs so far have mostly been strings or arrays, but as we mentioned before we can just make a function a value in our object.

```
myObject = {};

myObject["sayHello"] = function(){ console.log("hello"); };
```

and we can apply this function using something like the following.

```
myObject.sayHello()
//=> console.log("hello")
```

### Modules

Now that we are okay with this idea of functions as values of in an object literal. We can use an object literal to hold data and functional behavior

```
var myGreeter = {
		name: "john doe",
		greet: function(){
			console.log("My name is ", myGreeter.name )
		}
	}

```

Exercises:

* What would be the result of the following?
	
		myGreeter.greet()


This idea is known as a module because it captures some behavior and information in an object that can easily referenced, e.g. the module above is `myGreeter`.




