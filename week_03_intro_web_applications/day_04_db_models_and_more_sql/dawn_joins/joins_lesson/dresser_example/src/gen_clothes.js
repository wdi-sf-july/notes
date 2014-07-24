var db = require('./db');



var colorsOne = ["IndianRed","LightCoral","Salmon","DarkSalmon","LightSalmon","Crimson","Red","FireBrick","DarkRed","Pink","LightPink","HotPink","DeepPink","MediumVioletRed","PaleVioletRed","LightSalmon","Coral","Tomato","OrangeRed","DarkOrange","Orange","Gold","Yellow","LightYellow","LemonChiffon","LightGoldenrodYellow","PapayaWhip","Moccasin","PeachPuff","PaleGoldenrod","Khaki","DarkKhaki","Lavender","Thistle","Plum","Violet","Orchid","Fuchsia","Magenta","MediumOrchid","MediumPurple","Amethyst","BlueViolet","DarkViolet","DarkOrchid","DarkMagenta","Purple","Indigo","SlateBlue","DarkSlateBlue","MediumSlateBlue","SeaGreen","ForestGreen","Green","DarkGreen","YellowGreen","OliveDrab","Olive","DarkOliveGreen","MediumAquamarine","DarkSeaGreen","LightSeaGreen","DarkCyan","Teal","Aqua","Cyan","LightCyan","PaleTurquoise","Aquamarine","Turquoise","MediumTurquoise","DarkTurquoise","CadetBlue","SteelBlue","LightSteelBlue","PowderBlue","LightBlue","SkyBlue","LightSkyBlue","DeepSkyBlue","DodgerBlue","CornflowerBlue","MediumSlateBlue","RoyalBlue","Blue","MediumBlue","DarkBlue","Navy","MidnightBlue","Cornsilk","BlanchedAlmond","Bisque","NavajoWhite","Wheat","BurlyWood","Tan","RosyBrown","SandyBrown","Goldenrod","DarkGoldenrod","Peru","Chocolate","SaddleBrown","Sienna","Brown","Maroon","White","Snow","Honeydew","MintCream","Azure","AliceBlue","GhostWhite","WhiteSmoke","Seashell","Beige","OldLace","FloralWhite","Ivory","AntiqueWhite","Linen","LavenderBlush","MistyRose","Gainsboro","LightGrey","Silver","DarkGray","Gray","DimGray","LightSlateGray","SlateGray","DarkSlateGray","Black"];
var colorsTwo = ["IndianRed","LightCoral","Salmon","LightSalmon","Crimson","Red","FireBrick","DarkRed","MediumVioletRed","Coral","Tomato","OrangeRed","DarkOrange","Orange","Gold","Yellow","LightYellow","LemonChiffon","LightGoldenrodYellow","PapayaWhip","Moccasin","PeachPuff","PaleGoldenrod","Khaki","DarkKhaki","Lavender","Thistle","Plum","Violet","Orchid","Fuchsia","Magenta","MediumOrchid","MediumPurple","Amethyst","BlueViolet","DarkViolet","DarkOrchid","DarkMagenta","Purple","Indigo","SlateBlue","DarkSlateBlue","MediumSlateBlue","GreenYellow","Chartreuse","LawnGreen","Lime","LimeGreen","PaleGreen","LightGreen","MediumSpringGreen","SpringGreen","MediumSeaGreen","SeaGreen","ForestGreen","Green","DarkGreen","YellowGreen","OliveDrab","Olive","DarkOliveGreen","MediumAquamarine","DarkSeaGreen","LightSeaGreen","DarkCyan","Teal","Aqua","Cyan","LightCyan","PaleTurquoise","Aquamarine","Turquoise","MediumTurquoise","DarkTurquoise","CadetBlue","SteelBlue","LightSteelBlue","PowderBlue","LightBlue","SkyBlue","LightSkyBlue","DeepSkyBlue","DodgerBlue","CornflowerBlue","MediumSlateBlue","RoyalBlue","Blue","MediumBlue","DarkBlue","Navy","MidnightBlue","Cornsilk","BlanchedAlmond","Bisque","NavajoWhite","Wheat","BurlyWood","Tan","RosyBrown","SandyBrown","Goldenrod","DarkGoldenrod","Peru","Chocolate","SaddleBrown","Sienna","Brown","Maroon","White","Snow","Honeydew","MintCream","Azure","AliceBlue","GhostWhite","WhiteSmoke","Seashell","Beige","OldLace","FloralWhite","Ivory","AntiqueWhite","Linen","LavenderBlush","MistyRose","Gainsboro","LightGrey","Silver","DarkGray","Gray","DimGray","LightSlateGray","SlateGray","DarkSlateGray","Black"];


var randomColor = function(colors){
   var randIndex = Math.floor(Math.random()*colors.length);
  return colors[randIndex];
};
var randomPant = function(){
  var pants = ["Shorts", "Trousers",  "Bell-bottoms", "Bermuda shorts",  "Boardshorts", "Breeches",  "Capri pants", "Cargo pants",  "Chino cloth", "Cycling shorts", "Daisy Dukes", "Disco pants",  "Hip-huggers", "Jean shorts", "Jeans", "Knickerbockers", "Leather shorts", "Low-rise jeans",   "Overall",   "Parachute pants", "Pedal pushers",  "Phat pants", "Plus fours", "Rain pants",  "Running shorts", "Sagging (fashion)", "Sampot", "Sirwal", "Skort", "Slim Jeans", "Slim-fit pants", "Snowboarding pants",  "Sweatpants", "Tactical pants",   "Three quarter pants",  "Walk shorts", "Yoga pants" ];
  var randIndex = Math.floor(Math.random()*pants.length);
  return pants[randIndex];
};

var randomShirt = function(){
  var shirts = ["Tall-Spread Collar","Cutaway Collar","Point Collar","Button-Down Collar","Club Collar","Deep Cutaway Collar","Semi-Spread Collar","Camp shirt","Dress shirt","Dinner shirt","black tie","white tie","Guayabera","Poet shirt","T-shirt","Long-sleeved T-shirt","Ringer T-shirt","Halfshirt","Sleeveless shirt","A-shirt","British English","wife beater","Camisole","bra","Polo shirt","Rugby shirt","Henley shirt","jersey","Sweatshirt","hood","Tunic","Shirtwaist","Nightshirt","sleeping","Sleeveless shirt","Halter top","apron","Top shirt","Heavy shirt","onesie","infants","sweaters","jackets","coats","tube top"];  
  var randIndex = Math.floor(Math.random()*shirts.length);
  return shirts[randIndex];
}


var count = 1000;
var createPants = function(next){
  if(count > 0) {
    db.query('INSERT INTO pants (name, color) VALUES ($1, $2) RETURNING *', [randomPant(), randomColor(colorsOne)], function(err, res){
      if(err){
        console.error(err);
      }
      console.log("CREATED", res.rows[0]);
      count -= 1;
      createPants(next);
    });

  } else {
   count = 1000;
   next();
  }
}


var createShirts = function(){
  if(count > 0) {
    db.query('INSERT INTO shirts (name, color) VALUES ($1, $2) RETURNING *', [randomShirt(), randomColor(colorsTwo)], function(err, res){
      if(err){
        console.error(err);
      }
      console.log("CREATED", res.rows[0]);
      count -= 1;
      createShirts();
    });

  } else {
   db.end();
  }
}
createPants(createShirts);