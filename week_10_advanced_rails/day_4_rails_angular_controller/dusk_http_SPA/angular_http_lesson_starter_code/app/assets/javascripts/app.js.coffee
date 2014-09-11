# Define App and dependencies
BookApp = angular.module("BookApp", ["ngRoute"])

# Setup the angular router

# Books Controller
BookApp.controller "BooksCtrl", ["$scope", "$http", ($scope, $http) ->
  $scope.books = []
]

# Define Config for CSRF token
BookApp.config ["$httpProvider", ($httpProvider)->
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
]