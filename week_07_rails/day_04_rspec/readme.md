#Rspec in Rails

###Learning Objectives
- install rspec in rails app
- create unit tests for our model validations
- create controller specs to test blog routes
- define TDD

###Resources
______________

1. **Rspec-Rails Documentation** https://github.com/rspec/rspec-rails  
2. **Model Specs** https://www.relishapp.com/rspec/rspec-rails/docs/model-specs  
3. **Request Specs** https://www.relishapp.com/rspec/rspec-rails/docs/request-specs/request-spec  
4. **Matchers**  https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers

5. **Model Specs Example** https://github.com/wdi-sf-july/validation_tests
6. **Controller Specs Example** https://github.com/tlicata/rails_blog_lab

###Rspec - Rails Installation
_____________________________

(It's always best to refer to offical documentation, see Resource#1,
in case these instructions go out of date eventually.)

**Step 1:**  

Add rspec rails to your Gemfile in the development, test group and bundle install  

*Gemfile*

        group :development, :test do
          gem 'rspec-rails', '~> 3.0.0'
        end

*Terminal*  
`bundle install`  

**Step 2:**  

Create spec directory, and necessary configurations  

*Terminal*  
`rails generate rspec:install`  

This adds `spec/spec_helper.rb` and `.rspec` files that are used for configuration. See those files for more information.  

**Step 3:**  

Create a spec file for our model.  
This is only necessary if you had a model created before you installed rspec.  

*Terminal*  
`rails generate rspec:model student`  

**Step 4:**  

Run your rspec tests (they should all pass as you don't have any)  

*Terminal*  
`rspec` or `bundle exec rspec`

To run specific specs

```
# Run only model specs
rspec spec/models

# Run only specs for AccountsController
rspec spec/controllers/accounts_controller_spec.rb
```

###Exercise (Model Specs)
__________________

**1.** Write a spec to verify your solution to Exercise 1 from rails_console_lab:

       1. Using the new/save syntax, create a student, first and last name and an age

**2.** Write a spec to verify your solution to Exercise 2 from rails_console_lab:

       2. Save the student to the database

**3.** Anything else? Test our regex?

### Example (Controller Specs)

Pair programming exercise.

The rails-rspec documentation (see Resource#1) has a very interesting
"Controller Specs" example.  They test something called
PostsController, which happens to be the name of our controller in our
rails_blog_lab. Let's add a controller spec to last night's lab.

**1.** Switch to your rails_blog_lab project

**2.** Install 'rspec-rails' in the project by repeating steps 1 & 2
  from the "Rails Installation" instructions above.
  
Hint:

*Gemfile*

        group :development, :test do
          gem 'rspec-rails', '~> 3.0.0'
        end

*Terminal*  
`bundle install`  

*Terminal*  
`rails generate rspec:install`  


**3.** Generate a spec file for your PostsController

      rails generate rspec:controller posts

**4.** Follow the example in the rspec-rails documentation. It fits
  our use case surprisingly well.

### Terms

**TDD** - Write your tests first. [Wikipedia](http://en.wikipedia.org/wiki/Test-driven_development)

**BDD** - Hipster TDD. [Wikipedia](http://en.wikipedia.org/wiki/Behavior-driven_development)

**Tests as documentation** - If your tests are thorough enough,
  someone new to your code could read them to figure out how your code
  works. In this way, your tests are like the [spec]ification for your
  code.

**Unit tests vs. Integration tests vs. Regression Tests**

**Code coverage?**
