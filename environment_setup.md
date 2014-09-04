## Storing API Keys / Environment Variables

In our rails project we want to store our API keys as environment variables, and block them from being pushed to places like github.  We can store these keys in a .env file using the dotenv gem.  


__Step 1__: Add the ```dotenv-rails``` gem to the ```Gemfile```.  The change should look something like this:

```
group :development, :test do
  gem 'dotenv-rails'
end
```

More information on the gem is available on the [dot env github page](https://github.com/bkeepers/dotenv).

__Step 2__: __IMPORTANT__ your  ```.gitignore``` file must ignore the file  that will be created on the next step.  __DO NOT CHECK IN A .ENV FILE TO GITHUB!!__  The following line should be added to the ```.gitignore``` file and committed to github:

```
.env
```

__Step 3__: Add a ```.env``` file in the root of the project.  

`$ touch .env`

The file contains keys and values.  The keys will be accessible in the ENV hash of rails.  

__Step 4__: Add your API keys to your .env file.  


You should add your API key's to the .env file as key-value pairs.  

*.env*
```
KEY_NAME_IN_CAPS: <api key>
```

*example*
```
TWITTER_KEY: dsa8d823nds032khf89d24f23s9h0387sdfocij
TWITTER_SECRET: v832mcsnhodsf873hcs78h89cds83hdh39c723jkds8
```

You can now call on your API keys as environment variables  

*example*  
```
ENV['TWITTER_KEY']
```