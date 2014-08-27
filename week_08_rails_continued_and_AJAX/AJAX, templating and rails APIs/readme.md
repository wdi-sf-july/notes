# AJAX, Templating and Using Typhoeus

## Overview

### Intro to AJAX

Asynchronous Javascript and XML

"With AJAX, web applications can send data to, and retrieve data from,
a server asynchronously (in the background) without interfering with
the display and behavior of the existing page" -
[Wikipedia](http://en.wikipedia.org/wiki/Ajax_\(programming\))

In pure JavaScript - [XMLHttpRequest object](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

With jQuery - [$.ajax()](http://api.jquery.com/jquery.ajax/), [$.get()](http://api.jquery.com/jquery.get/), [$.post()](http://api.jquery.com/jquery.post/), [$.getJSON()](http://api.jquery.com/jquery.getjson/)

Each of these methods perform a very similar action, but the syntax is a bit different so as always, if you're confused, check out the documentation.

### Intro to (Client-side) Templating

In Ruby we've seen .erb templates. In Node we saw .ejs templates. Now
we'll look at templating libraries for the client-side (i.e., browser). When making AJAX requests we will almost always be returned JSON. Thankfully, most client side templating will actually parse the JSON for us so that we have an object we can work with right away.

#### Articles
- [Smashing Magazine](http://www.smashingmagazine.com/2012/12/05/client-side-templating/)
- [Wikipedia](http://en.wikipedia.org/wiki/JavaScript_templating)

#### Libraries
- [Underscore.template](http://documentcloud.github.io/underscore/#template)
- [Mustache](http://mustache.github.io/)
- [Handlebars](http://handlebarsjs.com/)

The library we will be using for client side templating is __handlebars__ which is based off of Mustache - you can try it [here](http://tryhandlebarsjs.com/) in the browser 
        
### Including Handlebars in a Rails App


- gem install handlebars_assets
- create a folder called `templates` in your javascripts file
- add the required assets in application.js

```
//= require handlebars.runtime
//= require_tree ./templates
```
- create a folder in the templates folder for each controller and then include your `.hbs` files in the respective folders
- back in your application.js, write a function to render the pre-compiled templates
- `rake assets:precompile`

### Using Typheous to Ping external APIs

[Typheous](https://github.com/typhoeus/typhoeus)

include `gem 'typhoeus'` in your GemFile

Sample request with OMDB

```
@query = params[:query]
  	
request = Typhoeus.get(
   "http://www.omdbapi.com",
      :params => {:s => @query}
      )
   	
   	@results = JSON.parse(request.body)

```
## Side Topics

### Promises

What happens if you want to wait for your AJAX calls to finish before you execute something? What's wrong with this code? Why does it return undefined? 

```
	movieQuery = function(search){
		$.ajax({
			url: "http://www.omdbapi.com/",
			data: {s: search.replace(/\s/g, ' ')},
			success: function(response){
				console.log(response);
			}
		});
};


var result = movieQuery('titanic');
console.log("This is my titanic result query");
console.log(result);

```
We can refactor this code to use Promises and return the AJAX call 

```
	movieQuery = function(search){
		return $.ajax({
			url: "http://www.omdbapi.com/",
			data: {s: search},
		}).promise();
};

movieQuery('titanic').then(function(result){
	console.log(result);
});

```

### JSONP (Same-Origin Policy)

One of the most important security measures in what's called the Same-Origin Policy which only permits scripts running on pages originating from the same site – a combination of scheme, hostname, and port number[1] – to access each other's DOM with no specific restrictions, but prevents access to DOM on different sites. When you request JSON or other data from other sites using JavaScript, you may encounter this error which can be solved multiple ways, we will show you JSONP. JSONP allows you to make a request from one site for JSON data from another site.

[Same-Origin Policy](http://en.wikipedia.org/wiki/Same-origin_policy)