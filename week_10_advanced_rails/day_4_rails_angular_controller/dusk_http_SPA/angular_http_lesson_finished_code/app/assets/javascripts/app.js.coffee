# Define App and dependencies
BookApp = angular.module("BookApp", ["ngRoute", "templates"])

# Setup the angular router
BookApp.config ["$routeProvider", "$locationProvider", ($routeProvider, $locationProvider) ->
	$routeProvider
	 .when '/',
      templateUrl: "index.html",
      controller: "BooksCtrl"
   .when '/books',
      templateUrl: "test.html",
      controller: "BooksCtrl"
	.otherwise
			redirectTo: "/"

	$locationProvider.html5Mode(true).hashPrefix("#")

]

# Books Controller
BookApp.controller "BooksCtrl", ["$scope", "$http", ($scope, $http) ->

  $scope.books = []
  $scope.name = "elie"
  $scope.age = 25

  $scope.getBooks = ->
  # make a GET request to /books.json
    $http.get("/books.json").success (data) ->
      $scope.books = data

  $scope.getBooks()

  # CREATE
  $scope.addBook = ->
    $http.post("/books.json", $scope.newBook).success (data) ->
      #cleared the form
      $scope.newBook = {}
      #add this book to my books array
      $scope.books.push(data)

  # DELETE
  $scope.deleteBook = (book) ->
    conf = confirm "Are you sure?"
    if conf
      $http.delete("/books/#{book.id}.json").success (data) ->
        console.log(data)
        $scope.books.splice($scope.books.indexOf(book),1)

  $scope.editBook = (book) ->
    this.checked = false
    $http.put("/books/#{this.book.id}.json", book).success (data) ->

]

# Define Config for CSRF token
BookApp.config ["$httpProvider", ($httpProvider)->
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
]