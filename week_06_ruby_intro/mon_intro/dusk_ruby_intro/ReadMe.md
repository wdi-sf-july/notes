# Intro To Ruby
## Control Flow and Methods


| Objectives |
|:--- |
| ... identify control flow patterns and functions in JS and utilize them in Ruby |
| ... apply control flow to create command line applications |
| ... apply methods in ruby to solve problems |


## Intro to Ruby

Before we move into ruby it's important to revisit how we learned our first language and use that to organize our study of our new language. Learning our second programming language is a process of translating expressions, patterns, and concepts from our familiar language into our new langauge. However, learning our first language involved more identification and comprehension of knowledge required to implement our first programs. We should really begin by organizing this knowledge to build a better understanding before we transition.


### Types of Knowledge

* Imperative knowledge
> your "how to" knowledge, i.e. describing how to do something
* Declarative knowledge
> your "what is" knowledge. i.e. describing what something is.

### Parts of A Language

* `Primitives`
* `Combinations`
* `Abstractions`


### Ruby vs. JS Primitives

Let's recall some of our JS Data Types


#### Javascript

* `null`, `undefined`
* Strings
* Booleans
* Number
  * `.toString`
* Arrays
  `indexOf`,`splice`, `slice`
* Objects
  * `["some_key"]`, `.some_key`
* operators
  * `==`, `===`, `>`, `>=`, ..
  * `!`, `||`, `&&`
  * `+`, `-`, `/`, `*`
* Console methods
	* `console.log`
	* `prompt`

#### Ruby 

* `nil`
* Integers
	* Fixnum
	* Bignum
 	 * `to_s`
* Floats
* Strings
  * `.to_i` and `.to_f` `*INTEGER`
* Symbols 
* Ranges
* Booleans
* Arrays
  * `[x..y]`, `[x...y]`, `index`
* Hashes
  * `{ key => value }`
  * `{ key: value }` which is the same as `{:key =>value }`
  * `[some_key]` and `[some_key]=` 
  * `key`,`.keys`, `.each`
* operators
  * `++`, `--`, `||=`, `*=`, `/=`
  * `==`, `.equal?`, 
  * `!`, `not`, `||`, `&&`
  * **`**`**, `+`, `-`, `/`, `*`, 
* General Delimited Input
	* `%w`, `%r` 
* Console Methods
	* `puts`, `p`
	* `gets` and `gets.chomp` 

### Control flow


#### Javascript ([Some Control Flow Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements))

* Conditionals 
	* `if`, `else if`, `else`, `switch`, ...
* Loops
	* `do-while`, `while`,  ... 
* iterators,
	* `for-in`
* Exceptions
	* `try`, `catch`

#### Ruby ([Some Control Flow Structures](http://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Control_Structures))

* Conditionals 
	* `if`, `elsif`, `else`, `unless`, `case when else` ...
* Loops
	* `until`, `while`, `times` ... 
* iterators,
	* `.each`, `for ... in`
* Exceptions
	*  `begin`, `rescue`, `ensure` 


### Some Abstractions

#### Javascript

* Function
	* Anonymous: `function (param1, [..param2, [...]]){...}`, 
	* Named: `function Name(param1, [..param2, [...]]){...}`
	* Uses lexical scope
	* Used as values
	* require explicit return
	* all `params` are optional

#### Ruby	

 * Function
	* Anonymous: `function (param1, [..param2, [...]]){...}`, 
	* Named: `function Name(param1, [..param2, [...]]){...}`
	* Do not capture scope
	* Not used as values
	* optional parameters must be specified
	* implicitly returns last evaluation
	
* block
	* used with `.each`, `.map`, et cetera
	
	```
	some_method do |param1, [param2, [...]] 
		# some code
	end
	
	```
	* captures scope

## Exercises

You may create a separate file for each of the exercises to avoid cluttering a file.

### Looping And Other Exercises

Use a loop to do  the following:

1.) Write a method called `pTimes` that takes a `statement` and a `num` puts the `statement` some `num` of times to the console.

2.) Write a method called `wordCount` to count word occurence in a string, returned as a `Hash`.

3.) Write a method called `mockMe` that `gets` some input from the terminal and puts it until the input is the word `quit` or `q`. (Be sure to remove trailing `\n`.)

4.) Write a method called `printContacts` that takes a `hash` of `name` and `phone-number` key-value pairs and puts the `name` with the contact info.

5.) Write a method called `getContact` that

* takes a `contacts` hash,
* prints the contacts,
* prompts the terminal for a **new** `name` and a `phone` number, 
* and then adds the `name` and `phone` as a key value pair respectively if `name` is not already a contact. 
* The `getContact` method should `return` the `contacts` hash.

### List exercises

#### Using `Array#inject`

Write a method for each exercise below that uses `Array#inject`:

1.) Write a method called `getLength` to find the `length` of an array.

2.) Write a method called `getSum` to find the `sum` of the values in an array.

3.) Write a method called `getMax` to find the `max` of the values in an array.

4.) Write a method called `getMin` to find the `min` of the values in an array.

5.) Write a method called `reverseStr` to reverse a string.

**Challenge**: *write a method called `partialSums` that pushes the partial sum of an array to a new list*

```
partialSums([])
#=> [0]
partialSums([5])
#=> [0, 5]
partialSums([5,6,7])
#=> [0, 5, 11, 18]
```

#### Using `Array#map`

Write a method for each exercise below that uses `Array#map`:

1.)  Write a method called `multiplyBy` that takes a number and returns an array of numbers multiplied by that number.

2.)  Write a method called `reverseEach` that takes an array of words and returns an array of reversed words.

3.)  Write method called `getResponses` that takes an array of questions (strings) and returns an array of responses input from the console for each question. (Hint: you will need to use `gets.chomp` and `puts` )

### Method Problems

* Write a method to compute the `factorial` of a number.
* Write a method to check if a number is a `palindrome`.
* Write a method to `reverse` a word in-place, do not use iterators, use only a while loop and indices.
* Write a method to `merge` to two sorted Arrays.

