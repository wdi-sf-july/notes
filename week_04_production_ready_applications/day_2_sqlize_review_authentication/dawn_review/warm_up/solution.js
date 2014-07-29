var bSearch = function(arr, target, leftIndex, rightIndex) {
  var midIndex;
  // initialize values if not already
  leftIndex = leftIndex || 0;
  rightIndex = rightIndex || arr.length - 1;
  midIndex = Math.floor((leftIndex + rightIndex)/2);

  if ( leftIndex > rightIndex) {
    return false;
  } else if (arr[midIndex] === target) {
    return true;
  } else {
    if(arr[midIndex] > target) {
      return bSearch(arr, target, leftIndex, midIndex - 1);
    } else {
      return bSearch(arr, target, midIndex + 1, rightIndex);
    }
  }
}

console.log( bSearch([1,4,5,6,8,9,12,42,55],12) )