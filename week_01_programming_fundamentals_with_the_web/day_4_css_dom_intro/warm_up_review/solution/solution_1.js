var myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}}, 
        {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
        {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
        {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
        {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
        {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]


// looping


currLoc = myResults[0].location;

// find distance
for (var i = 0, result, loc; i < myResults.length; i++) {
  result = myResults[i];
  loc = result.location;
  result.distance = Math.abs(currLoc.lat - loc.lat)+ Math.abs(currLoc.long-loc.long);
};

console.log("The results are in ")

// print results
for (var i = 0; i < myResults.length; i++) {
  console.log(new Array(50).join("*"));
  console.log("\t", myResults[i], "\n\n");
};
