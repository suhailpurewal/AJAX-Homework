var topics = ["wu-tang", "space", "guitar", "jackie chan", "rocket", "funny"];
// var apiKey = "pdENotnHGub1ILrqJOg9w99ZiX9p0Pjp";
// var search = "jackie+chan"
// var queryURL = "https://api.giphy.com/v1/gifs/search?api_key="+ apiKey + "&q=" + search + "&limit=10&offset=0&rating=PG-13&lang=en";
        

     	// $.ajax({
      //     url: queryURL,
      //     method: "GET"
      //   }).done(function(response) {
      //     console.log(response);
      //     });

      
 	// function to render buttons
      function renderButtons() {
      	$("#buttonPlace").empty();
        for (var i = 0; i < topics.length; i++) {
          var a = $("<button>");
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
      });


// function to search whatever button you click
function displayGifs() {
		$(".gifButton").click(function() {
		var search = $(this).attr("data-name");
		console.log(search);


        // var search = $(this).attr("data-name");
        var apiKey = "pdENotnHGub1ILrqJOg9w99ZiX9p0Pjp";
        var queryURL = "https:api.giphy.com/v1/gifs/search?api_key="+ apiKey + "&q=" + search + "&limit=10&offset=0&rating=PG-13&lang=en";

        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);
          $("#resultsPlace").empty();
          for (var i = 0; i < 10; i++); {
          $("#resultsPlace").append("<img src='" + response.data[0].images.fixed_height.url + "'>");
        }

          // Creates a div to hold the movie
          
        });
		});
      }
      