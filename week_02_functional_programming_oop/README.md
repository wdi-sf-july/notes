#Pre-Reading for Week 2



##Form Events and DOM manipulation

##DOM LEVEL II
* https://developer.mozilla.org/fr/docs/DOM_Levels
* http://www.quirksmode.org/js/contents.html#events

##Intro Testing

##Functional Programming


## Iterators


You've all been working really hard with loops: `for`, `while`, `for ... in `, or even `do ... while`. Luckily the pains of iteratoring through an array or made less painful by helpful built-in methods I encourage you all to use. 

`printing all items in an array: foreach`

```
var friends = ["jack","jade", "jeff", "jesse"];


// iterating through the array
friends.forEach(function(item, index){
  console.log( "friends[" + index + "] returns", item);
});

```

`adding all numbers in an array: reduce`

```
var grades = [ 98, 90, 88, 72 ];

var sumOfGrades = grades.reduce(function(sum, currentVal){
  return sum + currentVal;
});

console.log(sumOfGrades)
```


`multiply each number by 2: map `

```
var nums = [ 1, 2, 3, 4 ];


var doubleNums = nums.map(function(item, index){
  return 2 * item;
});

console.log(doubleNums)
```

`filter items based on a condition: filter`

```

var nums = [ 11, 1, 13, 2 ];

var filteredNums = nums.filter(function(item, index){
  return item < 10;
});

console.log(filteredNums)

```

===============================

##Constructors/Prototypes/Prototypical Inheritance
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
* http://msdn.microsoft.com/en-us/magazine/ff852808.aspx
* http://yehudakatz.com/2011/08/12/understanding-prototypes-in-	JavaScript/
* http://bonsaiden.github.io/JavaScript-Garden/
	
##OO Design
* http://robotlolita.me/2011/10/09/understanding-javascript-oop.html
