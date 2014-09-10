#Designing an API Controller

As we move into more single page architecture, we need to redefine how our controllers work.

Previously our controllers, used instance variables to work 

##Setup
The first thing we want to do is setup up a new rails project.

`rails new json_test`
`
###Create Models
We'll make a `thing` model to interact with for this demo

### Create Controller
Lets create some controller to interact with things
`rails g controller things index create show update destroy`

##Ways to render Json

### render :json
```
render json: Thing.all
```
### respond_to block
```
 respond_to do |format|
    format.html  
    format.json  { render :json => @posts }
  end
  ```
In this example, the format.html allows us to use the default view with this action.

The format.json we can specify instructions to pass to a json render

We can reach the .json rendering by .json
  

### respond_to :json, :html
We can use the respond_to block to allow both html and json.

```
    respond_to do |format|
       format.html
       format.json  { render :json => @things}
     end
```

If this was part of a create, you can even pass redirects as part of the format.html porition

`format.html { redirect_to @thing }`

###setup private methods
There is still a bit of redundant code on your controller to be an api.

```
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_thing
      @thing = Thing.find(params[:id])
    end
```
    

###setup strong params
We can also place this in our private section

```
def thing_params
      params.require(:thing).permit(:name, :desc)
    end
```

### before_action :set_book, only: [:show, :update, :destroy]

We only need  set_thing on certain actions

```
  before_action :set_book, only: [:show, :update, :destroy]
```

