require('locus');


var Rectangle = function(side1, side2) {
  this.side1 = side1;
  this.side2 = side2 || side1;
  this.area = function () {
    return(this.side1 * this.side2)
  };
  this.perimeter = function() {
    return(2 * (this.side1 + this.side2))
  }
}

var rect1 = new Rectangle(3, 4);
var square = new Rectangle(5);

eval(locus);