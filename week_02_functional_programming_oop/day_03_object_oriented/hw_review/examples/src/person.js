var person = {
  friends: [],
  befriend: function(name){
    person.friends.push(name);
  },
  unfriend: function(name){
    var index = person.friends.indexOf(name);
    
    //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    person.friends.splice(index, 1);
  }
}