# Text Manipulation
## Regex, Testing, FileIO


### RSpec Testing

* <h3> TDD - Test Driven Development</h3>

### Student Learning Objectives:

* <h3> By the end of this lesson you should be able to:</h3>

  * <h3> 1) Set up an rspec testing environment for a ruby project</h3>

  * <h3> 2) Write basic describe/it blocks to test an existing Class</h3>
  
  * <h3> 3) Go through Red/Green/Refactor routine to create a Class with tests</h3>
  
## Why do we write tests

* <h3> Helps you organize your thoughts to understand the problem or feature you are trying to code. </h3>

* <h3> Go back to edit your program after a period of time, you can review the tests to see how the program is supposed to work. </h3>

* <h3> You can refactor you code with some degree of assuance that your program still works. </h3>

* <h3> For every new edit you want to release, you don't want to have to test all the buttons and links in you web site.</h3>

* <h3> On a project team, you could write code that could break someone else's code.</h3>
  
* <h3> On a project team, someone else could write code that could break your code.</h3>
  
  
### Test Driven Development Flow:

### Mantra: Red, Green, Refactor

*  <h3> "Red" => write test, run test, test fails</h3>
*  <h3>"Green" => write just enough code to make it pass</h3>
*  <h3> "Refactor" => look for ways to improve your code</h3>



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


* <h3> rspec --init created:</h3>
  * <h3> a spec folder with the spec_helper.rb file in it</h3>  
  * <h3> a .rspec file that is for your configuration </h3>

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

* <h3> ".should != 5" is same as _".should_not eq(5)"_ </h3>
  * <h3> expect(some_operation).not_to eq(5)</h3> 
* <h3> ".should == true" is same as _".should  be_true"_ </h3>
  * <h3> expect(some_operation).to be_true</h3>  
* <h3> ".should == false" is same as _".should  be_false"_ </h3>
  * <h3> expect(some_operation).to be_false</h3>  
* <h3> ".should < 5" is same as _".should be < 5"_ </h3>
  * <h3> expect(some_operation).to be < 5</h3>  
  



# Regex
## Play With Regular Expression


## Rubular Talk

Go to (rubular)(http://rubular.com/) to test out your regex



  






