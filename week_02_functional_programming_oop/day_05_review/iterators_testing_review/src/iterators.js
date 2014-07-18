
// first the iterator we want to work on
// is our each function

var each = function(list, action) {
  for (var i = 0; i < list.length; i += 1) {
    action(list[i], i);
  }
};

var map = function(list, action) {
  var results = [];
  each(list, function(item) {
    results.push(action(item));
  });
  return results;
};

var reduce = function(list, action) {
  var accumulator = list[0];
  for (var i = 1; i < list.length; i += 1) {
    accumulator = action(accumulator, list[i]);
  }
  return accumulator;
};

module.exports = {
  each: each,
  map: map,
  reduce: reduce
};