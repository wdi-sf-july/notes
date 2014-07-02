# Intro To Javascript
## Functions



## Objectives

| Objective |
| :--- |
| Student should be able to articulate ..... |
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

* Functions as JS values
* Functions are a reference
	* values vs reference
  * Function Naming
    * function expressions
* Parts of a function
	* arguments
	* return 
	* exercise
* Function declarations



	
	

## Functions as JS values

Type `3` in the chrome JS console. You should get three back. 
<img src="term_sreenshot.png">
The console returns the value `3`.

If we type in

```
var myFunction = function(){}
```

<i name="example_1_q">What do you see?</i> <a href="#example_1">solution</a>
<img src="term_screenshot_3.png">
### Brainstorm: values in Ruby

<i name="brainstorm_1_q">What can you do with values in Javascript?</i>

* <a href="#brainstorm_1">brainstorm</a>

When it comes to Javascript passing values around between methods becomes a powerful feature.




## Functions as a reference type

Before we do anything with functions, let's talk about their type. Hmmm?

Earlier we talked about the difference between value types and reference types.

Let's try the following test we used for checking references in the JS console:

```
var myFunc = function(){};
var myFunc2 = function(){};
```

### values vs references

Recall that a value returns true when compared with something that is equivalent to it. However, we found out that just because two arrays may be **equivalent** that *does not mean they are equal* in JS, because each is a different reference to an object.

## Parts of a function

Now we move into the different parts of the function we entered into the console earlier.

* In JS you might be used to calling methods on objects and passing in some arguments

		[55,42, 81].indexOf(42)
		#=> 1
* In JS you should use functions by "Applying the function to arguments ... x,y,z"

Let's apply a function to zero arguments in the JS console.

```
var myFunc = function(){};
myFunc()
```


* What does this evaluate to?

Appealing to the simple words of Alex Notov.

> *In JS, `undefined` is the absence of value.*

* Why does that make sense here?


### Function Naming

The above example used a variable and assigned it to a something that used the keyword `function`, which might seem weird, but it is really just an expression like anything else we've been doing. The difference is now our variable references a `function` that can do things! Naming things is the most powerful thing we can do.

```
var sayHello = function(){ console.log("hello") }
sayHello();
"hello"
=> undefined
```

You should visualize this as follows:

<img src="js_function_arguments.png">

So far we've described defined writing a function in JS as the following parts

```
    		requires parens
    		for some 
    		specified
    		arguments 
    		even if none
    		  |
    		 \|/	
function () {
 /|\
  |
  requires
  the *function*
  keyword

   -------------
  | A function 	|
  |	requires a	|
  | body marked	|
  | braces even	|
  | if there is	|
  | nothing to	|
  | put into it	|
   -------------
}
```

### Arguments

If you want to add arguments you can just specify the required arguments in a comma separated list denoted by *parens*, `()`, after the function keyword

```
var greeter = function (greeting, name){}
``` 
* What are the arguments?



### Return

The `return` keyword is something that we can include in part of function body, and if you've seen it in ruby, then you already have a head start.


Try the following in the console

```
var greeter  = function(){
	return "Hello, "+" World";
};

greeter();
// => "Hello, World"
```

return exits the function and sets its result to the value supplied to return.


### Arguments and Parameters Again

Let's actually supply values to our functions as arguments

```
var printArray = function (array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
printArray([1,2,3]);
```

Now the value in argument is a copy of the reference to the array we passed to it.

#### Applying more values

Calculate the area of a circumfrence of a circle

```
// Let's calculate the circumfrence of a cirlce
var calcCircumfrence = function (pi, radius){
  return 2*pi*radius;
}

calcCirumfrence(3.1459,1+2)
```

exercise:

* Write a similar function to calculate the area of a rectangle.



What's happening in either of these examples?

* We are applying a function to more than one argument
* The arguments are evaluated first
* Hence function are always applied to values, which happens to be a significant type of evaluation strategy


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



### Exercises:


* Write a `sum` function that will add up all the numbers in a array.
* Write a function that returns another function.

```
// Exercise: Let's have a function return a function

// Your goal is to write a function, which returns a function,
// applying the function, which evaluates to a function that when applied
// evaluates to 'Hello World'. Perform the definition and application in
// one statement. Log the return value to the console.
```

### Function Declarations

