// const omdbApi = "http://www.omdbapi.com/?apikey=trilogy&"

$("#search-button").on("click", function searchQuery(movieData) {
    // queryURL is the url we'll use to query the API

    // Begin building an object to contain our API call's query parameters
    // Set the API key
    const titleSearchInput = $("#search-input")
      .val()
      .trim();
  
    // queryURL = queryURL + titleSearchInput + omdbApi;
  
console.log(titleSearchInput);
      const omdbApi = "http://www.omdbapi.com/?t=" + titleSearchInput + "&apikey=trilogy"

    console.log(omdbApi)
$.ajax({
    url: omdbApi,
    method: "GET",
  }).then(function (response) {console.log(response)
    const title = response.Title;
    const plot = response.Plot;
    
    console.log(title)
    console.log(plot)})
  
    // const poster = response.Poster;
    const image = $("<img>").attr("src", response.Poster);
    const displayMoviePoster = $("#display-movies");
    displayMoviePoster.append(image);

    // Poster API
//     const poster = "http://img.omdbapi.com/?t=" + titleSearchInput + "&apikey=trilogy";

//     console.log(poster);
//     $.ajax({
//         url: poster,
//         method: "GET",
//   }).then(function (response) {
//     // let posterImg = $("<img>");
//     // posterImg.attr("src", `https`)
//     console.log(response);
// });
});
