
function searchBandsInTown(artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";


   // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        console.log(response);


    })}
