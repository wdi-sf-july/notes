var iterators = {
  each: function(list, action){
    for (var i = 0; i < list.length; i++) {
      action(list[i], i);
    };
  }
}

module.exports = iterators;