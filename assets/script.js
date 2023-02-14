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

// to stop same movie/activity from being displayed in watch me later
let movieHistory = JSON.parse(localStorage.getItem("movieData")) ||[];
let activityHistory = JSON.parse(localStorage.getItem("activityHistory")) ||[];

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

    
    const card = document.createElement("div")
    card.setAttribute("class", " card movie-display")
    card.setAttribute("style", "width: 18rem;")
    const img = document.createElement("img")
    img.setAttribute("class", "card-img-top")
    img.setAttribute("src", "https://image.tmdb.org/t/p/original" + randomTitle.poster_path
    );
    const cardBody = document.createElement("div")
    cardBody.setAttribute("class", "card-body")
    const title = document.createElement("h5")
    title.setAttribute("class", "card-title")
    title.textContent= randomTitle.title
    const plot = document.createElement("p")
    plot.setAttribute("class", "card-text")
    plot.textContent=randomTitle.overview

cardBody.append(title, plot)
card.append(img, cardBody)

    
    document.querySelector(".movies").innerHTML=""
    document.querySelector(".movies").append(card);
  

    

    localStorage.setItem("movieData", JSON.stringify(movieHistory));
  });
});

function renderMovieHistoryButtons() {
  // Deleting the search history prior to adding new search buttons
  // (this is necessary otherwise you will have repeat buttons)

  // changed movie-view to movie list, the correct html location
  $("#movies-list").empty();

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

    //not needed for the time being
    // return JSON.parse(localStorage.getItem("movieData"));
 }
}

// Bored API
// boredQuery = "http://www.boredapi.com/api/activity/";
$("#random-activity-button").on("click", function activitySearchQuery() {
  const randomActivity = "http://www.boredapi.com/api/activity/";
  console.log(randomActivity);
  $.ajax({
    url: randomActivity,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    const activityResponse = response.activity;
    activityHistory.push(response.activity);

    renderActivityHistoryButtons();

    // Displaying Activity
  
    document.querySelector(".activity-display").textContent = response.activity;
    const randomActivity = response.activity;

    localStorage.setItem("activityData", JSON.stringify(randomActivity));
  });
});

function renderActivityHistoryButtons() {
  // Deleting the search history prior to adding new search buttons
  // (this is necessary otherwise you will have repeat buttons)

  //renamed to correct location
  $("#activity-display").empty();

  // Check if the activityHistory array exists in local storage
  let storedHistory = JSON.parse(localStorage.getItem("activityHistory")) || [];

  // Concatenate the storedHistory array with the activityHistory array
  activityHistory = storedHistory.concat(activityHistory);

  // Store the updated activityHistory array in local storage
  localStorage.setItem("activityHistory", JSON.stringify(activityHistory));

  if (activityHistory.length > 6) {
    activityHistory = activityHistory.slice(activityHistory.length - 6);
  }

  // Looping through the array of history
  for (let i = 0; i < activityHistory.length; i++) {
    // Then dynamicaly generating buttons for each search made in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    let a = $("<button>");
    // Adding a class of history-btn to the button
    a.addClass("activity-history-btn");
    // Adding a data-attribute
    a.attr("randomActivity", activityHistory[i]);
    // Providing the initial button text
    a.text(activityHistory[i]);
    // Adding the button to the #search-history div
    $("#activity-list").prepend(a);
    // $("#search-history").append(localStorage.getItem("values"));
  }
}

renderActivityHistoryButtons()



// Change theme function --------
// I have added it here but it could be merged with the on(click) function for fetching the API to make it more tidy

$("#upcoming-movie-button").on("click", function () {

  let elements = ["body", "div", "h1", "h2", "h3", "h4", "h5", "h6", "nav", "button"];
// console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    console.log($([i]));
    if ($(elements[i]).hasClass("light-theme")) {
      $(elements[i]).removeClass("light-theme");
      $(elements[i]).addClass("dark-theme");
    } else ($(elements[i]).addClass("dark-theme"));  
  }
  });

  $("#random-activity-button").on("click", function () {

    let elements = ["body", "div", "h1", "h2", "h3", "h4", "h5", "h6", "nav", "button"];
  // console.log(elements);
    for (let i = 0; i < elements.length; i++) {
      console.log($([i]));
      if ($(elements[i]).hasClass("dark-theme")) {
        $(elements[i]).removeClass("dark-theme");
        $(elements[i]).addClass("light-theme");
      } else ($(elements[i]).addClass("light-theme"));  
    }
    });

