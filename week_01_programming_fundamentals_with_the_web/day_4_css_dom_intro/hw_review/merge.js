var merge = function(arrOne, arrTwo){
  var indexOne = 0,
    indexTwo = 0,
    newArr = [];

  while ( indexOne < arrOne.length ) {
    while( indexTwo < arrTwo.length && arrOne[indexOne] > arrTwo[indexTwo] ) {
      newArr.push(arrTwo[indexTwo]);
      indexTwo += 1;
    }
    newArr.push(arrOne[indexOne]);
    indexOne += 1;
  }

  return newArr;
}

console.log(merge([1,4,8], [2,5,6]));