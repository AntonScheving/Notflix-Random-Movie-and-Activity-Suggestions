// const omdbApi = "http://www.omdbapi.com/?apikey=trilogy&"

$("#search-button").on("click", function searchQuery(movieData) {
    // queryURL is the url we'll use to query the API
    const omdbApi = "http://www.omdbapi.com/?t=" + titleSearchInput + "&apikey=trilogy"
  
    // Begin building an object to contain our API call's query parameters
    // Set the API key
    const titleSearchInput = $("#search-input")
      .val()
      .trim();
  
    // queryURL = queryURL + titleSearchInput + omdbApi;
  
console.log(titleSearchInput);

    // console.log("---------------\nURL: " + queryURL + "\n---------------");
    
$.ajax({
    url: omdbApi,
    method: "GET"
  }).then(response);
  console.log(response)
    
  })

  
//   .then(updatePage)
