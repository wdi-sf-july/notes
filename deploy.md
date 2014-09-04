#Heroku Deploy

###Step 1: Setup Your Heroku Account/SSH Keys
_____________________________________

####1. Heroku Account  
If you do not already have a heroku account go to www.heroku.com and set one up now.  

![Heroku Login](http://stephensclafani.com/wp-content/uploads/2013/01/step1.png)  

####2. Heroku Gem 

If this is your first time pushing to heroku on your current computer you will need to install the heroku gem.  

In your terminal type  

`$ gem install heroku`  

**DO NOT** put this gem in your gemfile.  

####3. SSH KEYS

Login to heroku through your terminal: `$ heroku login` 

You will be prompted to enter the email and password for your heroku account.    

```
$ heroku login
Enter your Heroku credentials.
Email: schneems@example.com
Password:
Could not find an existing public key.
Would you like to generate one? [Yn]
Generating new SSH public key.
Uploading ssh public key /Users/adam/.ssh/id_rsa.pub
```

This will automatically upload your SSH Keys to heorku and allow you to push code from your computer.  

However, if something goes wrong, you can read more about managing your heroku keys here...  
https://devcenter.heroku.com/articles/keys  

###Step 2: Preparing your Rails App for Deploy
______________________________________________

####1. Make sure your app is a git repo 

  We deploy projects to heorku by pushing the code up via git. So we must make sure our rails app is a git repo.  
  Additionally, make sure you created your git repo in the outermost folder of the rails app (the one that was created when you did `rails new`), and not a sub-folder, or a parent folder you created your rails app inside of.  

**Creating git repo**  
  - `$ git init`
  - `$ git add .`
  - `$ git commit -m "committing things"`

####2. Preparing your Gemfile

  - Make sure you are using the postgres gem  

```ruby
gem 'pg'
```

  - Add the following gem to your Gemfile in group production.

```ruby
group :production do
  gem 'rails_12factor'
end
```
  - Run this command in your terminal `$ bundle install --without production`

####3. Add your changes to your git repo
  - `$ git add .`
  - `$ git commit -m "preparing for deploy`

###Step 3: Deploying to heroku
______________________________

####1. Create a new heroku app

- In your terminal enter `$heroku create` or `$heroku create my_app_name`  
  *The second option allows you to customize your domain extension whereas the first option will generate an extension for you*  

- You should see something like this...
  
  ```
    $ heroku create
    Creating warm-wave-1943... done, stack is cedar
    http://warm-wave-1943.herokuapp.com/ | git@heroku.com:warm-wave-1943.git
    Git remote heroku added
  ```

- Double check you have a new remote with `$git remote -v`  
  
  It should look like this

    ```
    $git remote -v
    heroku  git@heroku.com:example_app.git (fetch)
    heroku  git@heroku.com:example_app.git (push)
    ```

####2. Push your app to heroku
  
In terminal enter `$ git push heroku master` 
  
This should look something like this (but a little longer)  

```
git push heroku master
Initializing repository, done.
Counting objects: 64, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (53/53), done.
Writing objects: 100% (64/64), 14.57 KiB | 0 bytes/s, done.
Total 64 (delta 5), reused 0 (delta 0)

-----> Ruby app detected
-----> Compiling Ruby/Rails
-----> Using Ruby version: ruby-2.0.0
-----> Installing dependencies using 1.5.2
       New app detected loading default bundler cache
       Running: bundle install --without development:test --path vendor/bundle --binstubs vendor/bundle/bin -j4 --deployment
       Fetching gem metadata from https://rubygems.org/..........
       Fetching additional metadata from https://rubygems.org/..
       Using i18n (0.6.9)
       .
       .
       .
       Installing sass-rails (4.0.3)
       Installing rails (4.0.4)
       Your bundle is complete!
       Gems in the groups development and test were not installed.
       It was installed into ./vendor/bundle
       Bundle completed (11.82s)
       Cleaning up the bundler cache.
-----> Writing config/database.yml to read from DATABASE_URL
-----> Preparing app for Rails asset pipeline
       Running: rake assets:precompile
       I, [2014-05-02T18:02:09.672047 #732]  INFO -- : Writing /tmp/build_625a98e6-1b9e-4e57-ba48-8f9cd7bf7d18/public/assets/application-c8d048bf2b32f85ef4807549fa44b21b.js
       I, [2014-05-02T18:02:09.694428 #732]  INFO -- : Writing /tmp/build_625a98e6-1b9e-4e57-ba48-8f9cd7bf7d18/public/assets/application-d0b54dd563966c42aad5fd85b1c1f713.css
       Asset precompilation completed (6.52s)
       Cleaning assets
       Running: rake assets:clean
-----> WARNINGS:
       Include 'rails_12factor' gem to enable all platform features
       See https://devcenter.heroku.com/articles/rails-integration-gems for more information.

-----> Compressing... done, 21.4MB
-----> Launching... done, v6
       http://thingsthingsthings.herokuapp.com/ deployed to Heroku

To git@heroku.com:things.git
 * [new branch]      master -> master
```
  
**IF YOU GET AN ERROR**  

This is a common point for people to run into errors. The most common error that happens here is your assets failing to compile.  

**POSSIBLE SOLUTION** 

- Run `$ rake assets:precompile`  
- Add and commit new changes 
  - `$ git add .`
  - ` $ git commit -m "precompiling assets`
- Try pushing to heroku again
  - `$ git push heroku master`

####3. Migrate your production database 
    
`$ heroku run rake db:migrate`  

Our deployed app has a separate database from our development environment. That means we need to separately run our migrations.  

####4. Checkout your deployed app

`$ heroku open`  

This will open your app in your browser.  

***DEBUGGING*  

Hopefully your app works on heroku, however, you may just see a sad page that looks like this...  

![Sad Heroku](http://media.tumblr.com/tumblr_m8270hYTFn1qcmzd4.png)  

One tool we have for debuggin further problems is our heroku logs.  

Run `$ heroku logs` in your terminal.  

Scan all of the logs for error messages. If you see obvious error messages goole what they mean. If you still can't find a solution, now would be a good time to ask an instructor for help.  

###Step 4: Add your API Keys
____________________________

If you have not added your API keys locally, first read these instructions... https://gist.github.com/jackieiscool/abe49e71e797a9b9ba7a  

**1. Set environment variables on Heroku**

  *change MY_API_KEY to your variable name and your actual key*
  ```
  $ heroku config:set MY_API_KEY=0932nv8d17vhd72o2e8cfv82csd9n1dcd98
  ```
**2. Double check that it worked**
  ```
  $ heroku config 
  => MY_API_KEY: 0932nv8d17vhd72o2e8cfv82csd9n1dcd98
  ```

**3. If you made a mistake and need to unest an API key**
  
  ```
    $ heroku config:unset MY_API_KEY
    Unsetting GITHUB_USERNAME and restarting myapp... done, v13
  ```