# Blocks, Iterators and Beyond

## Objectives

* Write simple methods using yield
* Pass arguments to blocks
* Implement iterators with blocks
* Explain the difference between blocks, procs and lambdas

## What are blocks?

A block is set of code that is bound to the surrounding local variables.  Blocks are used frequently in ruby methods for example:

```
# Everything between the curly brackets is a block
12.times { puts "Hello, many times!" }
```

Here is an example of iteration using a block:

```
arr = [2,3,4]

# Again, the block is the code between the curly braces
arr.each { |item| puts item } 
```

A longer example of a block:

```
arr = [5,6,10]

sum = 0

# In this example, sum is a local variable that the block has access to
arr.each { |item| sum += item }
```

## Using Blocks in Methods: Yield

To use a block in a method, we need to understand ```yield``` in ruby.  The keyword ```yield```, essential runs the block that is passed into the function.  For example:

```
# Creates a method that takes a block
# As a parameter.
# The & denotes a block.
def example(&block)
	puts block.inspect
end

# call example example method and pass in a block
example { "a block" }

# The same block can be rewritten this way:
example do
  "a block"
end

# call example and don't pass in a block
# What happens?
example

```

### Discussion

Does the following code contain a block?

```
h = { instructors: ["Tim", "Max", "Elie", "Delmer", "Colt"] }
h[:instructors][0]
```

### Exercise

Write a method that begins a story.  The story method should take 2 parameters and should also be passed a block.  The block should return the conclusion to the story.  Here is an example:

```
story("Ned Stark", "Robert Baratheon") do
  "Some bad things happened to them later on."
end

# Returns the following string: 
# "One day Ned Stark and Robert Baratheon left for King's Landing.  Some bad things happened to them later on."

```

### Implicit blocks

When you define methods, you do not actually have to define the block as one of the parameters.  Instead, the block is implicitly passed as a parameter.  The ```block_given?``` method detects if the caller passed a block to the method:

```
def print_name(first)
  str = "#{first}"
  str += " #{yield}" if block_given?
  puts str
end

 # Prints just my first name
print_name("Tim")

 # Prints my first name plus the result of the block
print_name("Tim") {"Licata"}
```

## Passing Parameters to Blocks

A block can be given a parameter.  The each method is a good example.  In order to get each element from the array, you must create a block that takes a parameter.  The example below shows iterating over an array with or without a parameter.

```
names = ["Stanis", "Jon Snow", "Bran Stark", "Varys"]

# No parameter in the block
names.each { puts "I don't know what names I'm iterating over"}

# Parameter in the block of each item
names.each { |name| puts name }
```


Here is an example of passing a paramter to a block in a method:

```
def calculator(num1, num2)
  yield num1, num2
end

# This method returns the number 50
calculator(5, 10) { |num1, num2| num1 * num2 }
```

### Exercise

Define a person class.  The person class should take a name and an age as a parameter to new.  Write a method that displays the person's name and age in a default manner, ```display_person```.  If the ```display_person``` method is passed a block, a custom message could be displayed.  Below is a sample usage of the person class:

```
p = Person.new("Tim", 30)
p.display_person  # returns a string: Tim is a person.  Age 30.
p.display_person { |name, age| "#{name} is a #{age} year old instructor at general assembly" }
```

## Iterators

An iterator is a method that operates on each item in a data set.  Iterators like ```each```, ```each_with_index```, ```map```, etc. are very common in ruby programming.

### Discussion

How is a iterator implemented internally?

### Exercise

Implement ```each``` that takes an array as a parameter and a block and yields each item to the block.  Here is an example of using the method:

```
arr = %w{ Jon Robb Bran Rickon Arya Sansa }

each arr { |item| puts "#{item} is a character in Game of Thrones" }
```

## Difference between Blocks, Procs, Lambdas

A block is a proc without a name.  A proc is a way of saving a block and calling it over and over again.

Here is an example:

```
proc = Proc.new {puts "All blocks are just procs without names"}

3.times &proc

10.times &proc

```

A Lambda is just a proc but it enforces the number of arguments that are yielded to it.


## Resources

* [Understanding Ruby blocks, Procs, and methods](http://eli.thegreenplace.net/2006/04/18/understanding-ruby-blocks-procs-and-methods/)
* [Ruby & (Ampersand) Parameter Demystified](http://www.skorks.com/2013/04/ruby-ampersand-parameter-demystified/)
* [Going crazy with to_proc](http://iain.nl/going-crazy-with-to_proc)