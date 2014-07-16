require('locus');

var randomGlobalThing = 0;

var Person = function(taco, nachos, age){
  this.firstName = taco;
  this.age = age || 0;
  this.lastName = nachos;
  this.getOlder = function (age) {
    age === undefined ? this.age +=1 : this.age = age ;
  }
  this.fullName = function () {
    return ("Hello " + this.firstName + " " + this.age)
  }
}

var anil = new Person("anil", "bridgpal");
var tim = new Person("tim", "licata", 29)

eval(locus);