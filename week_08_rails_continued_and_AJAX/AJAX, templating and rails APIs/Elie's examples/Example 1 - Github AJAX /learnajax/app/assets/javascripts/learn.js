$(document).ready(function(){
	$(".getInfo").on("submit", function(e){
		e.preventDefault()
		var repo = $(".repoName").val()
		$.getJSON("https://api.github.com/users/" + repo, function(data){
			$(".userData").html("<img src = " + data.avatar_url+ ">")
			// $(".userData").append(data)
		})
	})
})