window.PersonCtrl = ($scope) ->
  $scope.people = []

  $scope.handleSubmit = ->
    console.log(@person)
    @people.push(@person)
    # person set to empty object
    @person = {}


