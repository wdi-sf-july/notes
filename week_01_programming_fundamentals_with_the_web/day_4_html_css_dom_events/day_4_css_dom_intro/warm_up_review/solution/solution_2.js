var myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}}, 
        {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
        {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
        {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
        {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
        {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]



/*
 using functions that we learned yesterday
  loops from tuesday 
*/

var calcDist = function(currLoc, loc){
  var distance = Math.abs(currLoc.lat - loc.lat)+ Math.abs(currLoc.long-loc.long);
  return distance;
};


var sortResults = function(currLoc, results){
  results.sort(function(a,b){
    return calcDist(currLoc, a.location) - calcDist(currLoc, b.location);
  }); 

  return results;
}


var myLocation =  myResults[myResults.length - 1].location;
var newResults = sortResults(myLocation, myResults);

for (var i = 0; i < newResults.length; i++) {
  console.log(new Array(50).join("*"));
  console.log("\t", newResults[i], "\n\n");
};