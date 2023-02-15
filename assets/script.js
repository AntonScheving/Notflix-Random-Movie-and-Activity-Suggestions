// TMDB api key:
// a07046481ae5f3198fbb1019a2af2859

// Sample request
// https://api.themoviedb.org/3/movie/550?api_key=a07046481ae5f3198fbb1019a2af2859
// Documentation: https://developers.themoviedb.org/3/getting-started/introduction
// Support forum: https://www.themoviedb.org/talk/category/5047958519c29526b50017d6
// Wrappers & libraries: https://www.themoviedb.org/documentation/api/wrappers-libraries
// Service status: https://status.themoviedb.org

// List of genres:
// https://api.themoviedb.org/3/genre/movie/list?api_key=a07046481ae5f3198fbb1019a2af2859

// get a list of all the movies in theatres for the random movie button
// https://developers.themoviedb.org/3/movies/get-upcoming

// API query:
// https://api.themoviedb.org/3/movie/upcoming?api_key=a07046481ae5f3198fbb1019a2af2859&language=en-US&page=1



let movieHistory = [];
let activityHistory = [];

$("#upcoming-movie-button").on("click", function movieSearchQuery() {
  const upcomingMovieApi =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=a07046481ae5f3198fbb1019a2af2859&language=en-US&page=1";

  console.log(upcomingMovieApi);
  $.ajax({
    url: upcomingMovieApi,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    const titles = response.results;
    const randomMovie = Math.floor(Math.random() * titles.length);
    const randomTitle = titles[randomMovie];
    console.log(randomTitle);
    //displaying movie details

    movieHistory.push(randomTitle.title);

    renderMovieHistoryButtons();


    const titleDisplay = randomTitle.title;
    document.querySelector(".movie-title").textContent = titleDisplay;
    const plotDisplay = randomTitle.overview;
    document.querySelector(".movie-description").textContent = plotDisplay;

    document
      .querySelector(".movie-url")
      .setAttribute(
        "src",
        "https://image.tmdb.org/t/p/original" + randomTitle.backdrop_path
      );

        let movieTitle = $("<h2>");

        movieTitle.titleDisplay(".movie-display")

        // .createElement(randomTitle.title);


    localStorage.setItem("movieData", JSON.stringify(randomTitle));
  });
});


function renderMovieHistoryButtons() {
  // Deleting the search history prior to adding new search buttons
  // (this is necessary otherwise you will have repeat buttons)
  $("#movie-buttons-view").empty();

  // Looping through the array of history
  for (let i = 0; i < movieHistory.length; i++) {
    // Then dynamicaly generating buttons for each search made in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    let a = $("<button>");
    // Adding a class of history-btn to the button
    a.addClass("movie-history-btn");
    // Adding a data-attribute
    a.attr("randomTitle", movieHistory[i]);
    // Providing the initial button text
    a.text(movieHistory[i]);
    // Adding the button to the #search-history div
    $("#movies-list").prepend(a);
    // $("#search-history").append(localStorage.getItem("values"));
    if (movieHistory.length > 6) {
      let movieData = movieHistory.slice(movieData.length - 6);
    }
    return JSON.parse(localStorage.getItem("movieData"));
  }
}

 let storedActivityHistory = JSON.parse(localStorage.getItem("activityData")) || [];

// Bored API
// boredQuery = "http://www.boredapi.com/api/activity/";
$("#random-activity-button").on("click",
  function activitySearchQuery(event) {

    event.preventDefault();

   

    // storedActivityHistory.push(randomActivity);

    const randomActivity = "http://www.boredapi.com/api/activity/";
    console.log(randomActivity);
  
    $.ajax({
      url: randomActivity,
      method: "GET",
    }).then(function (response) {
      console.log(response);


      
      const activityResponse = response.activity;
      // activityHistory.push(activityResponse);
      console.log(activityResponse);
      // console.log(activityHistory);
        localStorage.setItem("activityData", JSON.stringify(activityResponse));

      if (activityResponse.length > 6) {
      activityHistory = activityResponse.slice(activityResponse.length - 6);
      }
      // Displaying Activity
      document.querySelector(".activity-display").textContent =
        response.activity;
        // const randomActivity = response.activity;

    });
    
    renderActivityHistoryButtons();
  }
  
);



function renderActivityHistoryButtons() {
  // Deleting the search history prior to adding new search buttons
  // (this is necessary otherwise you will have repeat buttons)
  $("#activity-list").empty();

 // Check if the activityHistory array exists in local storage
  let storedActivityHistory = JSON.parse(localStorage.getItem("activityData")) || [];

// Concatenate the storedHistory array with the activityHistory array
  // let activityHistory = storedActivityHistory.push("activityData");

// Store the updated activityHistory array in local storage
// localStorage.setItem("activityData", JSON.stringify(activityHistory));

  // Looping through the array of history
  for (let i = 0; i < storedActivityHistory.length; i++) {
    // Then dynamicaly generating buttons for each search made in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    let a = $("<button>");
    // Adding a class of history-btn to the button
    a.addClass("activity-history-btn");
    // Adding a data-attribute
    a.attr("randomActivity", storedActivityHistory[i]);
    // Providing the initial button text
    a.text(storedActivityHistory[i]);
    // Adding the button to the #search-history div
    $("#activity-list").append(a);
    // $("#search-history").append(localStorage.getItem("values"));
    
  }
}

renderActivityHistoryButtons()