var topics = ["wu-tang", "space", "guitar", "jackie chan", "rocket", "funny", "rocket league", "csgo", "spotify", "boeing", "airbus", "Piper", "Space Shuttle", "Baron", "Cessna", "Lockheed Martin", "Raytheon", "Northrop Grumman", "A380", "747", "787", "777", "C130", "SR71", "Stealth Bomber", "Stealth Fighter", "F35", "A10"];

 $(document).ready(function() {

 	// function to render buttons
      function renderButtons() {
      	$("#buttonPlace").empty();
        for (var i = 0; i < topics.length; i++) {
          var a = $("<button class='btn btn-default'>");
          a.text(topics[i]);
          a.addClass("gifButton");
          a.attr("data-name", topics[i]);
          $("#buttonPlace").append(a);
          console.log("render button function")
        }
      };

      renderButtons();
      displayGifs();

// function to add whatever you type in field
    $("#addButton").click(function() {
    	console.log("clicked")
        event.preventDefault();
        var userAdd = $("#search-input").val().trim();
        topics.push(userAdd);
        console.log("button clicked array updated")
        renderButtons();
        displayGifs();
      });

// click on gifs to start/stop
    $("body").on("click", ".images-returned", function(event) {
      console.log("WHATHWARWHA");
     var state = $(this).attr("data-state");
     var stillImg = $(this).attr("data-still");
     var animateImg = $(this).attr("data-animate");
     if (state === "still") {
          $(this).attr("src", animateImg);
          $(this).attr("data-state", 'animate');
     }
     if (state !== "still") {
          $(this).attr("src", stillImg);
          $(this).attr("data-state", "still");
     }
});  
  



// function to search whatever button you click
function displayGifs() {
		$(".gifButton").click(function() {
		var search = $(this).attr("data-name");
		console.log(search);

        var apiKey = "pdENotnHGub1ILrqJOg9w99ZiX9p0Pjp";
        var queryURL = "https:api.giphy.com/v1/gifs/search?api_key="+ apiKey + "&q=" + search + "&limit=10&offset=0&rating=PG-13&lang=en";


        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);
          var results = response.data;
          $("#resultsPlace").empty();
          for (var i = 0; i < results.length; i++) {
           $('#resultsPlace').append("<div class='row outer-container'><p class='title text-center'>Rating: "+ response.data[i].rating.toUpperCase() +"</p><div class='image-container'><img class='images-returned img-responsive center-block'" + "data-still='" + results[i].images.downsized_still.url + "'" + "data-animate='" + results[i].images.downsized.url + "'" + "data-state='still'" + "src='" + results[i].images.downsized_still.url + "'></div></div>");
        }

    
        });
		});
      }
    });
      