# Inheritance
## OOP in Ruby

##Quick Review:
1. What is a method? What is a class?
2. What is an instance method? 
3. Why do we use a class?


##Objectives:
| By the end of this you will be able to... |
| :---- |
| Implement inheritance, describe what's inherited, and compare and contrast this to Javascript inheritance |
| Utilize inheritance to reduce repetition and model the world |
| Separate files using `require`, `require_relative`, `load`.

##Goal #1 - Inheritance:

- Inheritance is used to indicate that one class will get most or all of its features from a parent class. 
    
*When is inheritance useful?
        a. DRY - Don't Repeat Yourself & reuse code functionality
        b. Faster implementation time

        - Example: Suppose you're building an application that helps you ship goods. Many forms of shipping are available, but all forms share some basic functionality (weight calculation, perhaps). We don’t want to duplicate the code that implements this functionality across the implementation of each shipping type. 

## You Try This

```
class Box

  def initialize(w, h)
    @width = w 
    @height = h
  end

  def get_area
    @width * @height
  end

end

class BigBox < Box

  def print_area
    @area = @width * @height
  end

end

1.) How would I create a box? How could I create a BigBox?
1.) How would I print the area of the BigBox?
```

### Stop


## A Guide through Animals

```
class Animal
  
  def initialize(kind)
  	@kind = kind
  	@state = "awake"
  end
  
  def eat(food)
  	if @state == "awake""
    	puts "NOM-nom!!"
    	puts "(#{kind} has eaten #{food})"
    else
    	puts "SLEEPING"
    end
    self
  end
  
  def sleep
  	@state = "sleeping"
  	self
  end
  
  def wake
  	@state = "awake"
  	self
  end
end

class Person < Animal
    def initialize(age, gender, name)
        @age = age
        @gender = gender
        @name = name
    end
end
```

- Single Inheritance
    - In Ruby, a class can only inherit from a single other class. It *cannot* inherit from multiple classes.
    ![](https://draftin.com:443/images/13819?token=LgAN2Cjq0VY2E1kC14KkUjazImyXfmOTtc-EiNJbdofQ25kQLkSBtxVpde5pu1y2if0_H6LTEUeTaklH1Yjmimw) 
    - Benefits and disadvantages to single & multiple inheritance
    - In Ruby, initialize is an ordinary method and inherited just like another method.



##Exercise #1:
Create a Mammal class, Cat class, and Dog class. Have Cat and Dog inherit from Mammal. Include some attributes for each class and a method for mammal.


## Exercise #2:


```
class Dog  
  def initialize(breed)  
    @breed = breed  
  end  
  
  def to_s  
    "(#@breed, #@name)"  
  end  
end  
  
class Lab < Dog  
  def initialize(breed, name)  
	# give the dog a breed efficiently
    @name = name  
  end  
end  
  
puts Lab.new("Labrador", "Ben").to_s 

 # .to_s is called implicitly with any puts or print or p method call  

```

**Think About The Following**

- When you invoke *super* with arguments, Ruby sends a message to the parent of the current object, asking it to invoke a method of the same name as the method invoking super. 
- Super sends the right number of arguments for the parent's class' argument count

##Discuss in pairs:
- Do class variables and instance variables get inherited in Ruby??

Note:

* ​to_s​ is actually defined in class ​Object​. Because ​Object​ is an ancestor of every Ruby.

* Fixnum: http://www.ruby-doc.org/core-2.1.1/Fixnum.html#method-i-to_s
* Hash: http://www.ruby-doc.org/core-2.1.0/Hash.html#method-i-inspect
* Array: http://www.ruby-doc.org/core-2.1.1/Array.html#method-i-to_s

##Exercise #2:

There will be situations where certain properties of the superclass should not be inherited by a particular subclass. Though birds generally know how to fly, penguins are a flightless subclass of birds.

Create a Bird class & a Penguin class. Give the Bird class an initialize, preen, and fly methods. Give the Penguin class a new fly method (since it cannot fly).


##Goal #3 - load & require


##load
- This will reload the ruby file every time it's called.
- Load is typically used for checking for small changes and debugging - does not keep track of whether a file or library has been loaded

##require
- This will load a ruby file ONCE and only once. All subsequent require statements will not reload the file.
- Doesn't need the .rb file extension, but won't hurt if it's there.

##Exercise
Change code and see how load and require behave.

1. Create Person class, in the lib dir, that has name and age attributes. It will also have a method to determine if person can vote. Initially a person can vote if the are over 18.
1. Open pry and "load" this person class.
1. Create a person that is age 19.
1. Can they vote?
1. Now change the person class so that the voting age is now 21.
1. Load the person class. Was the change seen?
