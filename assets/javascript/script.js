// const omdbApi = "http://www.omdbapi.com/?apikey=trilogy&"

$("#search-button").on("click", function searchQuery(movieData) {
  const titleSearchInput = $("#search-input")
    // queryURL is the url we'll use to query the API
    const omdbApi = "http://www.omdbapi.com/?t=" + titleSearchInput + "&apikey=trilogy"
  
    // Begin building an object to contain our API call's query parameters
    // Set the API key
      
  
    // queryURL = queryURL + titleSearchInput + omdbApi;
  
console.log(titleSearchInput);

    // console.log("---------------\nURL: " + queryURL + "\n---------------");
    
$.ajax({
    url: omdbApi,
    method: "GET"
  }).then(response);
  console.log(response)
    
  for (let i = 0; i < response; i++) {
    const element = array[i];
    
  }

  })

  
//   .then(updatePage)
