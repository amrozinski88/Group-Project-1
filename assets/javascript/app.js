$(document).ready(function () {


  console.log("we good")
  // Function used to get video and append to videoSection div on search
  function getVideo(query) {
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=id&maxResults=1&q=" + query + "&type=video&key=AIzaSyCzq7GrG1jBxY4R6yJF828EGxv8uHZVTnc";
    var videoURL = "";
    // Calling ajax 
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var videoId = response.items[0].id.videoId
      videoURL = "https://www.youtube.com/embed/" + videoId;
      // creating iframe element to fill with searched video
      var videoIframe = $("<iframe>");
      videoIframe.attr("src", videoURL);
      videoIframe.attr("height", "316");
      videoIframe.attr("width", "560");
      videoIframe.attr("frameborder", "0");
      videoIframe.attr("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
      videoIframe.attr("allowfullscreen");
      $("#videoSection").html(videoIframe);
    })
  }


  function searchBandsInTown(artist) {
    console.log(artist)
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      console.log(response);

      var artistName = $("<p>").text(response.name);
      var artistURL = $("<a>").attr("href", response.url).append(artistName);
      var artistImage = $("<img>").attr("src", response.thumb_url);
      var trackerCount = $("<p>").text(response.tracker_count + " fans tracking this artist");
      var upcomingEvents = $("<p>").text(response.upcoming_event_count + " upcoming events");

      $(".artistInfo").empty();
      $(".artistInfo").append(artistURL, artistImage, trackerCount, upcomingEvents);
    });
     
    queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      for (let i = 0; i < response.length; i++) {
     console.log(response[i]);
     
     var venueInfo = $("<p>").text(response[i].venue.name);
     var dateTime = $("<p>").text(response[i].datetime);
     var longitude = (response[i].venue.longitude);
     var latitude = (response[i].venue.latitude);
     $(".venueInfo").empty();
     $(".venueInfo").append(venueInfo, dateTime);
     $(".venueInfo").attr("latValue", latitude);
     $(".venueInfo").attr("longValue", longitude);
    
    }
    
  });}
  // button
  $("#searchBtn").on("click", function (event) {
    console.log("click")
    // empty place holders
    $(".card-text").empty();
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // textbox
    var inputArtist = $("#search").val().trim();
    getVideo(inputArtist);
    // Running the searchBandsInTown function(passing in the artist as an argument)
    searchBandsInTown(inputArtist);

  });
  })
