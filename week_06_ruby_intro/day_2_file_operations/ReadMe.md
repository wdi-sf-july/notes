# Text Manipulation
## Regex, Testing, FileIO


### RSpec Testing

*  TDD - Test Driven Development

### Student Learning Objectives:

*  By the end of this lesson you should be able to:

  *  1) Set up an rspec testing environment for a ruby project

  *  2) Write basic describe/it blocks to test an existing Class
  
  *  3) Go through Red/Green/Refactor routine to create a Class with tests
  
## Why do we write tests

*  Helps you organize your thoughts to understand the problem or feature you are trying to code. 

*  Go back to edit your program after a period of time, you can review the tests to see how the program is supposed to work. 

*  You can refactor you code with some degree of assuance that your program still works. 

*  For every new edit you want to release, you don't want to have to test all the buttons and links in you web site.

*  On a project team, you could write code that could break someone else's code.
  
*  On a project team, someone else could write code that could break your code.
  
  
### Test Driven Development Flow:

### Mantra: Red, Green, Refactor

*   "Red" => write test, run test, test fails
*  "Green" => write just enough code to make it pass
*   "Refactor" => look for ways to improve your code



### 1) Setup rspec test environment:

#### Installation

```
  $ gem install rspec
  $ rspec --v
  $ rspec --help
```

#### Go to your working folder for todays lesson

```
  $ rspec --init
    create spec/spec_helper.rb
    create .rspec
```


*  rspec --init created:
  *  a spec folder with the spec_helper.rb file in it  
  *  a .rspec file that is for your configuration 

### Edit .rspec ( use: "ls -a" to see the hidden files)

#### Open .rspec and add the lines:

```
  --color
  --format documentation
```

## Resources

### [Rspec Documentation "Relish"](https://relishapp.com/rspec/)
###[Rspec expectations doc](http://rubydoc.info/gems/rspec-expectations/frames)
###[Better Specs - Rspec guidelines](http://betterspecs.org/)

## Other "expectations":

*  ".should != 5" is same as _".should_not eq(5)"_ 
  *  expect(some_operation).not_to eq(5) 
*  ".should == true" is same as _".should  be_true"_ 
  *  expect(some_operation).to be_true  
*  ".should == false" is same as _".should  be_false"_ 
  *  expect(some_operation).to be_false  
*  ".should < 5" is same as _".should be < 5"_ 
  *  expect(some_operation).to be < 5  
  



# Regex
## Play With Regular Expression


## Rubular Talk

Go to (rubular)(http://rubular.com/) to test out your regex



  






