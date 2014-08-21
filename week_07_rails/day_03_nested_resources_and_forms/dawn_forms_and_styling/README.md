# Forms and Resources
## More CRUD


## Intro

| Objectives |
| :---- |
| Review **CRUD** in the context of a Rails application, especially **Updating** and **Deleting** a resource. |
| Examine **form helpers** and **partials** (if time permits) in a  Rails Application. |
| Apply styling and **Bootstrap** to our site to create a custom layout. |


### Previously

* Routing requests to a controller method
	* **INDEX**
	* **NEW** 
	* **CREATE**
	* **SHOW** 	
* RESTful resources
* Basic HTML Forms 	

### Outline

| Background |
| :--- |
| A bog is a mire that accumulates peat, a deposit of dead plant material—often mosses. |

Researchers are collecting data on a local bog and need app to quickly record field data. Our goal is to create a **Bog App**. 

I hear bog and think of this...

![luke](http://1.bp.blogspot.com/-Aa0TuXoIMoU/T4M7_GbT8uI/AAAAAAAAin8/lcUZkoqoJM4/s1600/Yoda-and-Luke.jpg)

but if you were thinking of peat more...

![bog peat](http://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Peat-Stack_in_Ness%2C_Outer_Hebrides%2C_Scotland.jpg/2560px-Peat-Stack_in_Ness%2C_Outer_Hebrides%2C_Scotland.jpg)
![peat](http://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Feu_de_tourbe.JPG/1920px-Feu_de_tourbe.JPG)
![scotch](http://files.sbe.com/content/uploads/2014/02/scotch.jpg)

#### Part I: Review and Apply Form Helpers

* Drop in Bootstrap
* Create a **Creature** model.
	* verify it works in console 
* Setup a **`/creatures/`** index
	* iterate over each post
* Setup a **`/creatures/new`** and **CREATE**
	* Use form helpers with a new `Creature`
* Setup a **`/creatures/:id`** to show a particular `creature`

#### Part II: Setup Edit, Update, and Delete

* Setup a **`/creatures/:id/edit`** and **UPDATE**
* Setup a **Delete**


## Part I: Review and Refactor


### CRUD and REST Reference

Typically we associate **CRUD** with the following **HTTP** methods

| CRUD Operation | HTTP Method | Example|
| :---  |	:--- | :-- |
| Create | POST | `POST "/puppies?name=spot"` (create a puppy named spot) |
| Read   | GET  | `GET "/puppies"` (Shows all puppies) |
| Update | PUT or UPDATE | `PUT "/puppies/1?name=lassy"` (change puppy number 1 to have name lassy) |
| Delete | DELETE | `Delete "/puppies/1"` (destroy the first puppy, yikes!!!!) |

REST stands for **REpresentational State Transfer**. We will demonstrate these practices throughout this lesson, but for now preparing don't worry too much about it yet.




### Setup Rails New



* `$ rails new bog_app -T -d postgresql`
* `$ cd bog_app`
*  NOTE: `rake db:create`
* `$ rails s`

Now our app is up and running, [localhost:3000](localhost:3000/). 

### Drop in Bootstrap

Just put the third party css libraries in `vendor/assets` and for bootstrap just file it under stylesheets.

```
 curl https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css > vendor/assets/stylesheets/bootstrap-3.2.0.min.css
```
### Create A Creature 


In terminal, we create our `Creature` model using a rails generator as follows,

	$ rails g model creature name description
	$ rake db:migrate

#### Verify it works

We go straight into terminal to enter *rails console*.

	$ rails console

	> Creature.create({name: "Yoda", description: "Green little man"}) 
	=> #<Creature ....>

*This will avoid issues later with `index` trying to render planes that aren't there.*

`db/seeds.rb`
	
	 Creature.create({name: "Luke", description: "Jedi"}) 
	 Creature.create({name: "Darth Vader", description: "Father of Luke"}) 



 and then just run `$ rake db:seed` in console. This will now get run every time you `rake db:reset`.
 
#### Seeds

Because when we create an application in development we typically will want some mock data to play with we can just drop this into the `db/seeds.rb` file.



### Routes


Go to `config/routes.rb` and inside the routes block erase all the commented text. It should now look exactly as follows

`config/routes.rb`

	BogApp::Application.routes.draw do

	end




Now we can define all our routes.

Your `routes.rb` will just be telling your app how to connect *HTTP* requests to a **Controller**. Let's get ready for our first route. 

> NOTE
> 
> * The nature of any route goes as follows:
> 
>		request_type '/for/some/path/goes', to: "controller#method"
>
>	e.g. if we had a `PuppiesController` that had a `index` method we could say
>
>		get "/puppies", to: "puppies#index"



#### Creatures Index Route

Using the above routing pattern we'll write our first 
	
	`/config/routes.rb`

		RouteApp::Application.routes.draw do
			root to: 'creautres#index'
			## Also just to keep it RESTful
			get '/creatures', to: "creatures#index"
		end




#### Creatures Controller and Index Method

Let's begin with the following 

	$ rails g controller creatures

which is a generator for creating our controller.

	
We first need to setup our `#index` method in `creatures`

`app/controllers/creatures_controller.rb`

	class CreaturesController < ApplicationController
		
			def index
				@creatures = Creature.all
				render :index
			end
		
		...
		
	end

#### Creatures Index View

If you look at your views the `views/creatures` folder has already be created so we just need to add the file below:

`app/views/creatures/index.html.erb`
	
	<% @creatures.each do |creature| %>
		
		<div>
			Name: <%= creature.name %> <br>
			Description: <%=  creature.description %>
		</div>
	
	<% end %>




### A new route for planes

The *RESTful* convention would be to make a form available at `/creatures/new`. Let's add this route.

`/config/routes.rb`

	BogApp::Application.routes.draw do
		root to: 'creatures#index'
		
		# just to be RESTful
		get '/creatures', to: 'creatures#index'
		get '/creatures/new', to: 'creatures#new'
		
	end

### A new method for planes

The request for `/planes/new` will search for a `planes#new`, so we must create a method to handle this request. This will render the `new.html.erb` in the `app/views/planes` folder.

`app/controllers/creatures_controller.rb`

	class CreaturesController < ApplicationController
		
		...
			def new
				render :new
			end
		
		...
		
	end



### A new view for planes

Let's create the `app/views/planes/new.html.erb` with a form that the user can use to sumbit new planes to the application. Note: the action is `/planes` because it's the collection we are submiting to, and the method is `post` because we want to create.

`app/views/creatures/new.html.erb`

	<%= form_for :creature, url: "/creatures", method: "post" do |f| %>
		
		<%= f.text_field :name %>
		<%= f.text_area :description %>
		<%= f.submit "save creature" %>
		
	<% end %>




### A Create Route

 We have now defined our next `route` in our `new.html.erb` as we are directing all form posts to the following:
	
	post "/creatures", to: "creatures#create"
	
when we said
	
	 url: "/creatures", method: "post"
	

and so we add it to our 

`/config/routes.rb`

	BogApp::Application.routes.draw do
		root to: 'creatures#index'
		
		# just to be RESTful
		get '/creatures', to: 'creatures#index'
		get '/creatures/new', to: 'creatures#new'
		post "/creatures", to: "creatures#create"
	end
	
#### A Create Method

Let's create `creatures#create` method 

`app/controllers/creatures_controller.rb`

	class CreaturesController < ApplicationController
		
		...
			def create
				new_creature = params.require(:creature).permit(:name, :description)
				creature.create(new_creature)
				redirect_to "/creatures"
			end
		
		...
		
	end

#### A smarter new view for planes


Let's update our `creatures#new` method 

`app/controllers/creatures_controller.rb`

	class CreaturesController < ApplicationController
		
		...
			def new
				@creature = Creature.new
				render :new
			end
		
		...
		
	end

This sets `@creature` to a new instance of a `Creature` which we can now share with or `new.html.erb` and thus our `form_helper`
	
`app/views/creatures/index.html.erb`
	
	<%= form_for @creature do |f| %>
		
		<%= f.text_field :name %>
		<%= f.text_area :description %>
		<%= f.submit "save creature" %>
	
	<% end %>




### Show Route

Right now, our app redirects to  `#index` after a create, which isn't helpful for quickly verifying what you just created. To do this we create a `#show`.

Let's add our `show` route.

`/config/routes.rb`

	BogApp::Application.routes.draw do
		root to: 'creatures#index'
		
		# just to be RESTful
		get '/creatures', to: 'creatures#index'
		get '/creatures/new', to: 'creatures#new'
		# rake routes to check this route out
		get '/creatures/:id', to: 'creatures#show'
		post "/creatures", to: "creatures#create"
	end
	


Our `/creatures/:id` path is below our `/creatures/new` path. If we had `creatures/new` below the show route then the pattern matching will cause an error where all requests for `/creaturess/new` get sent to the show.


A controller method  


`app/controllers/creatures_controller.rb`

	class CreaturesController < ApplicationController
		
		...
			def show
				id = params[:id]
				@creature = Creature.find(id)
				render :show
			end
		
		...
		
	end

A view for showing a creature


`app/views/creatures/show.html.erb`

		<div>
			Name: <%= @creature.name %> <br>
			Description: <%=  @creature.description %>
		</div>
	

#### Changing the `#create` redirect

The `#create` method redirects to `#index` (the `/creaures` path), but this isn't very helpful for verrifying that a newly created creature was properly created. The best way to fix this is to have it redirect to `#show`.


`app/controllers/creatures_controller.rb`

	class CreaturesController < ApplicationController
		
		...
			def create
				new_creature = params.require(:creature).permit(:name, :description)
				creature = creature.create(new_creature)
				redirect_to "/creatures/#{creature.id}"
			end
		
		...
		
	end


## Part II: Setup Edit, Update, and Delete

Editing a plane model requires two seperate methods. One to display the model information to be edited by the client, and another to handle updates submitted by the client.

If look back at how we handled the getting of our `new` form we see the following pattern.

* Make a route first
* Define a controller method 	
* render view

The only difference is that now we need to use the `id` of the object to be edited. We get the following battle plan.

* Make a route first
	* Make sure it specifies the `id` of the thing to be edited
* Define a controller method 
	* Retrieve the `id` of the model to be edited from `params`
	* use the `id` to find the model
* render view
	* use model to display in the form 

### Getting to an Edit

We begin with handling the request from a client for an edit page. 

* We can easily define a **RESTful** route to handle getting the edit page as follows

	`/config/routes.rb`
	
		BogApp::Application.routes.draw do
			root to: 'creatures#index'
			
		
			get '/creatures', to: 'creatures#index'
			
			get '/creatures/new', to: 'creatures#new'
			
			get '/creatures/:id', to: 'creatures#show'
				
			get '/creatures/:id/edit', to: 'creatures#show'		
			
			post "/creatures", to: "creatures#create"
		end
		

* Similarly, using our `#show` method as inspiration we write an `#edit` method

	
	`app/controllers/creatures_controller.rb`
	
		class CreaturesController < ApplicationController
			
			...
				def edit
					id = params[:id]
					@creature = Creature.find(id)
					render :edit
				end
			
			...
			
		end


* Let's quickly begin the setup of an `edit` form using our `new.html.erb` from earlier. To see how the form is different we will need to render it and check it out in Chrome console.


	`app/views/creatures/new.html.erb`
	
		<%= form_for @creature do |f| %>
			
			<%= f.text_field :name %>
			<%= f.text_area :description %>
			<%= f.submit "update creature" %>
			
		<% end %>

Going to [creatures/1/edit](localhost:3000/creatures/1/edit) we get the following error:
	
	undefined method `creature_path' for #<#<Class:0x007fc5fc41be68>:0x007fc5fc40ea38>

This is because when we rake routes we notice that there is no `prefix` for the `creature` which rails uses to internal generate methods for you.

`/config/routes.rb`

	BogApp::Application.routes.draw do
		root to: 'creatures#index'
		
		# Add prefixes to routes using `as: "some_prefix"` syntax
		get '/creatures', to: 'creatures#index', as: "creatures"
		
		get '/creatures/new', to: 'creatures#new', as: "new_creature"
		
		get '/creatures/:id', to: 'creatures#show', as: "creature"
			
		get '/creatures/:id/edit', to: 'creatures#show', as: "edit_creature"		
		
		post "/creatures", to: "creatures#create"
	end
		
	


That's pretty much the whole-shebang when comes to getting an edit page. Our previous knowledge has really come to help us understand what we need to do. We'll see this also true for the update that still needs to be handled witht the submission of the form above.


### Putting updated form data 

Looking back at how we handled the submission of our `new` form we see the following pattern.

* Make a route first
* Define a controller method 
* redirect to something

The only difference now is that we will need to use the `id` of the object being update.

* Make a route first
	* Make sure it specifies the `id` of the thing to be **updated**
* Define a controller method 
	* Retrieve the `id` of the model to be **updated** from `params`
	* use the `id` to find the model
	* retrieve the updated info sent from the form in `params`
	* update the model
* redirect to show
	* use `id` to redirect to `#show` 
	
### Putting it into action

* **Make a route** that uses the `id` of the object to be updated

	`/config/routes.rb`
	
		BogApp::Application.routes.draw do
			root to: 'creatures#index'
			
			# Add prefixes to routes using `as: "some_prefix"` syntax
			get '/creatures', to: 'creatures#index', as: "creatures"
			
			get '/creatures/new', to: 'creatures#new', as: "new_creature"
			
			get '/creatures/:id', to: 'creatures#show', as: "creature"
				
			get '/creatures/:id/edit', to: 'creatures#show', as: "edit_creature"		
			
			post "/creatures", to: "creatures#create"
			
			# The update route
			patch "/creatures/:id", to: "creatures#update"
		end
		
	Note the method we now need to create is called `#update`
* In the `PlanesController` we will create the `#update` method mentioned above
	
	`app/controllers/creatures_controller.rb`
	
		class CreaturesController < ApplicationController
			
			...
			
			def update
				creature_id = params[:id]
				creature = Creature.find(plane_id)
				
				# get updated data
				updated_attributes = params.require(:creatue).permit(:name, :description)
				# update the creature
				creature.update_attributes(updated_attributes)
				
				#redirect to show
				redirect_to "/creatures/#{creature_id}"
			end
			
		end

### Destroy


Following a similar pattern to the above we create a route for a destroy that uses the `id` of the model to be deleted.

	`/config/routes.rb`
	
		BogApp::Application.routes.draw do
			root to: 'creatures#index'
			
			# Add prefixes to routes using `as: "some_prefix"` syntax
			get '/creatures', to: 'creatures#index', as: "creatures"
			
			get '/creatures/new', to: 'creatures#new', as: "new_creature"
			
			get '/creatures/:id', to: 'creatures#show', as: "creature"
				
			get '/creatures/:id/edit', to: 'creatures#show', as: "edit_creature"		
			
			post "/creatures", to: "creatures#create"
			
			# The update route
			patch "/creatures/:id", to: "creatures#update"
			
			# the destroy route
			delete "/creatures/:id", to: "creatures#destroy"
		end
		

Next we create a method for it in the `CreaturesController`

`app/controllers/creatures_controller.rb`

	class CreaturesController < ApplicationController
		
		...
		
		def destroy
			id = params[:id]
			creature = Creature.find(id)
			creature.destroy
			redirect_to "/creatures"
		end
		
	end
	
and if you were tempted to use [`Creature.delete`](http://apidock.com/rails/ActiveRecord/Base/delete/class) that would be fine here because there are no associations. However, we need to use `model.destroy` if we want to avoid issues later.

Let's add a delete button to another view. 


`app/views/creatures/index.html.erb`
	
	<% @creatures.each do |creature| %>
      <h2> <%= creature.name %> </h2>
      <p> <%= creature.description %></p>
      <%= button_to "Delete", creature, method: :delete %>
	<% end %>

