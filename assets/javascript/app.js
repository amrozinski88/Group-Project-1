
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
// Click event for search button that runs function created uptop
$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  var temp = $("#search").val().trim()
  getVideo(temp);
})




