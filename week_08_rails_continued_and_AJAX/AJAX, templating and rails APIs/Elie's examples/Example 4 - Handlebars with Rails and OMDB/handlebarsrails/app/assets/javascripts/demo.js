// get the party started
$(document).ready(function(){
	// hide our spinner
	$(".loading").hide()

// remove our success logic from the ajax response - save it for $when, make sure to return the promise object
	function getMovies(search){
			return $.getJSON('http://www.omdbapi.com/?s=' + search, function(){});
		}

	$(".movieSearch").on('submit',function(e){

		e.preventDefault();
		$(".loading").show()
		$('#movieData').html("");

		var search = $('#title').val();

			// use a deferred and promise to get our data and manipulate it later
			$.when(getMovies(search)).done(function(result){

					// erase previous movie data and hide the spinner
					$('#movieData').html("");
					$(".loading").hide()

					// check to see if we have a valid search
					if (typeof result.Search === 'undefined'){
						$('#movieData').html("<h1>Sorry nothing came up!</h1>");
					}

					// otherwise, append our precompiled Handlebars template to a div
					else {
				  	var compiledTemplate = HandlebarsTemplates['demo/index']({result: result});

				  	console.log(result.Search)
		  			$('#movieData').append(compiledTemplate);
	  			}
	  		// regardless, remove the input value for movie search
	  		$('#title').val("");
	    });
	});
});

