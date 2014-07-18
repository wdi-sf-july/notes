#Javascript Constructors
> By the end of this lecture, students will understand constructors in a javascript. A way of create objects that share the same methods and attributes

##Debugging tools
###Locus
`npm install locus`

This will install a tool that we can use to enter a code at any given point in node app, similar to `debugger`
####Usage
Require it in your node file

```
//Require it in your node file
require('locus');

//Stop Execution 
eval(locus);
```

###Prompt
`npm instal prompt`

Ask questions in a node file for user input

```
var prompt = require('sync-prompt').prompt;

var name = prompt('What is your name? ');
// User enters "Mike".

console.log('Hello, ' + name + '!');
// -> Hello, Mike!
```

##Constructors
There is a lot of different ways to create objects. 

**Object Literal Notation**

```
var anil = {}
var anil = new Object()

anil.firstName = "anil"
anil.lastName = "bridgpal"
anil.role = "instructor"

```

Object Literal notation, is uses `var` and `:`

**Constructor Notation**

We can use a constructor function to create multiple objects that share the same properties.

```
require('locus')
var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return ("Hello" + firstName + lastName)
  }
}

var anil = new Person("anil", "bridgpal");

console.log(anil.firstName);
console.log(anil.fullName());
eval(locus);
```

Using the `new` keyword, Javascript does a few thing.
 * Creates a new object
 * Sets the `constructor` property to the object Person
 You can use x.constructor to get a direct reference to the object, but it's an anonymous function so there's no way of getting its name.



##Pitfalls
When using the constructor

Don't try to call a constructor without the `new` keyword.

Person("delmer")

`firstName` now exists

====
`return` statements in a constructor does not do anything


##Further Reading
* [Javascript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript)
