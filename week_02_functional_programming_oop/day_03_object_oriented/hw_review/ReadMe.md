# HW Review




| Questions:  Go over... |
| :---- |
| ... "the each part." |
| ... "Creating tests" |
| ... "Difference between forEach and each" |
| ... "Testing iterators" |


## Definitions

* `higher-order function` 
	* > A higher-order function is a function that operates on other functions. This can be done by taking in a function as a parameter, creating a function or returning a function--all within a function.
	* > "Higher order functions, at a basic level, are functions that either take a function as an argument or return a function as a value. In a more abstract sense, Higher Order functions allow you simple repetitive and potentially bug prone code to be expressed in a much more simple way: They allow you to say what you 'mean' to do instead of all of the details of actually doing it"
	* > are functions that operate on other functions, this can be through taking them as arguments or returning them.An example of this, is using foreach, where we can pass our action as a function value.

* `max`
	* > In JS, it is Math.max function that provideds the largest number provided in the arguments. If none provided, it will output `-Infinite` to be used to compare with future declarations. Or NaN if compared with other types. 
	* Example: 
	
	
		```		
		example:
		
		Math.max(10, 5, 100, 2, 1000);
		
		// returns
		=> 1000
		
		```
* `min`
	* > returns the min number in an array of numbers 
	* `Math.min(5,10); //5`
* `map`
	* > // Creates a 1-to-1 mapped array after manipulating 'action' to each items in numList array 
	*  example:
	
			//example: return the square of each number in an array
			
			var nums = [1, 2, 3, 4];
			
			var squaredNums = nums.map(function(item, index){
			  item * item;
			});
			
			// returns
			[1, 4, 9, 16]
* `filter`
	* >  A method that creates a new array with all elements that pass the test implemented by the provided function. 
	* Example:
	
			var filterNum = function(element) { return element < 2; }
			
			var num = [1,2,3,4].filter(filterNum);
			
			//[1]
* `reduce`
	*  >  will reduce all numbers to a single number
	* Example
	
			 var y = [1,2,3].reduce(function(aggregate, current) {
			 	return aggregate + current
			 }) y = 6
			
	* Example
		
		
			var flattened = [[1,3], [5,7], [9,11]].reduce(function(a,b){
			 	return a.concat(b);
			 });
			// [1, 3, 5, 7, 9, 11]
* `reject`
	*  > runs a function against an array and returns the numbers laying outside the condition specified
	* Example
	
		example: returns numbers in the array NOT less than 100

			var nums = [10, 5, 100, 2, 1000];
			
			var rejectedNums = nums.reject(function(num){
			  return num < 100;
			});
			
			// returns
			[100, 1000]