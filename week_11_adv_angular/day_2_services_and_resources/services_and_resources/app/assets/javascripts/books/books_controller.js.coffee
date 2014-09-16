BookCtrls = angular.module("BookCtrls", [])

class BooksCtrl
  
  constructor: (@scope)->
    @greeting = "hello world!"


BookCtrls.controller("BooksCtrl", ["$scope", BooksCtrl])