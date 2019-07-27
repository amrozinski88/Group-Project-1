function searchBandsInTown(artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";
   // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
   $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        console.log(response);
       var artistName = $("<h1>").text(response.name);
       var artistUrl = $("<a>").attr("href", response.url).append(artistName);
       var artistImage = $("<img>").attr("src", response.thumb_url);
       var trackerCount = $("<h2>").text(response.tracker_count + "fans tracking this artist!");
       var upcomingEvents = $("<a>").attr("href", response.upcoming_event_count + "upcoming events");
       

    });
    
    
      };

      $("#select-artist").on("click", function(event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();
        // Storing the artist name
        var inputArtist = $("#artist-input").val().trim();
    
        // Running the searchBandsInTown function(passing in the artist as an argument)
        searchBandsInTown(inputArtist);
      })
