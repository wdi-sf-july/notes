var expect = require('chai').expect;

var iterators = require('../src/iterators.js');
var each = iterators.each;
var map = iterators.map;
var reduce = iterators.reduce;


describe("iterators", function(){

  describe('each', function() {
    it('can copy an array into a log', function() {
      var log = [];
      each([1,3,4], function(item) {
        log.push(item);
      });
      expect(log).to.eql([1,3,4]);
    });

    it('can sum the items in an array', function() {
      var total = 0;
      each([1,2,3], function(num){
        total += num;
      });
      expect(total).to.eql(6);
    });

    it('supplies the index of the item it is iterating over', function () {
      var indices = [];
      each([4,5,6], function(item, index) {
        indices.push(index);
      });
      expect(indices).to.eql([0,1,2]);
    });
  });

  describe('map', function() {
    it('can double numbers in an array', function() {
      var double = function(x) { return 2*x; };
      var result = map([1,2,3,4], double);
      expect(result).to.eql([2,4,6,8]);
    });
    it('can square numbers in an array', function() {
      var square = function(x) { return x*x; };
      var result = map([2,3], square);
      expect(result).to.eql([4,9]);
    });
  });

  describe('reduce', function() {
    it('can sum up the items in the array using add', function() {
      var add = function(x, y) { return x + y; };
      var result = reduce([2,3,4], add);
      expect(result).to.eql(9);
    });
  });





})