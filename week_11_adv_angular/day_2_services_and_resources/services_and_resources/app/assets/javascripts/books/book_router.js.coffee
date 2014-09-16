BookRouter = angular.module("BookRouter", [
  "ngRoute"
])

class Router
  
  constructor: (@routeProvider, @locationProvider)->
    console.log(arguments)
    console.log("Initialized Router")
    console.log("Setting Up")
    @routeProvider.
      when "/",
        templateUrl: "/book_templates",
        controller: "BooksCtrl as books"

    @locationProvider.html5Mode(true)

BookRouter.config(["$routeProvider", "$locationProvider", Router])
