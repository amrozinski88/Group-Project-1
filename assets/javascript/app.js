$(document).ready(function(){


console.log("we good")
function searchBandsInTown(artist) {
console.log(artist)
var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events/?app_id=codingbootcamp";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      console.log(response);

      var artistName = $("<p>").text(response.name);
      var artistURL = $("<a>").attr("href", response.url).append(artistName);
      var artistImage = $("<img>").attr("src", response.thumb_url);
      var trackerCount = $("<p>").text(response.tracker_count + " fans tracking this artist");
      var upcomingEvents = $("<p>").text(response.upcoming_event_count + " upcoming events");
      varZ
      $(".artistInfo").empty();
      $(".artistInfo").append(artistURL, artistImage, trackerCount, upcomingEvents);
    });
  }
  // button
  $("#searchBtn").on("click", function(event) {
    console.log("click")
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // textbox
    var inputArtist = $("#search").val().trim();
$(".card-text").empty();
    // Running the searchBandsInTown function(passing in the artist as an argument)
    searchBandsInTown(inputArtist);
  });
}) 
