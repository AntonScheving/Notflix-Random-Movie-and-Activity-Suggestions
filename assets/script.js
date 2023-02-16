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
let movieHistory = JSON.parse(localStorage.getItem("movieData")) || [];
// let activityHistory = JSON.parse(localStorage.getItem("activityHistory")) ||[];

$("#upcoming-movie-button").on("click", function movieSearchQuery(search) {
  const upcomingMovieApi =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=a07046481ae5f3198fbb1019a2af2859&language=en-US&page=1";

  // const searchQuery = "https://api.themoviedb.org/3/search/movie?api_key=a07046481ae5f3198fbb1019a2af2859&language=en-US&page=1&include_adult=false&query=" + movieTitle;

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

    const newMovie = {
      title: randomTitle.title,
      poster: randomTitle.poster_path,
      plot: randomTitle.overview,
    };

    console.log(newMovie);
    //displaying movie details
    movieHistory.unshift(newMovie.title);

    renderMovieHistoryButtons();

    const card = document.createElement("div");
    card.setAttribute("class", " card movie-display");
    card.setAttribute("style", "width: 18rem;");
    const img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/original" + randomTitle.poster_path
    );
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    const title = document.createElement("h5");
    title.setAttribute("class", "card-title");
    title.textContent = randomTitle.title;
    const plot = document.createElement("p");
    plot.setAttribute("class", "card-text");
    plot.textContent = randomTitle.overview;

    cardBody.append(title, plot);
    card.append(img, cardBody);

    document.querySelector(".movies").innerHTML = "";
    document.querySelector(".movies").append(card);

    if (movieHistory.length > 6) {
      movieHistory.splice(6);
    }

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
    $("#movies-list").append(a);
    // $("#search-history").append(localStorage.getItem("values"));

    //not needed for the time being
    // JSON.parse(localStorage.getItem("movieData"));
  }
}

renderMovieHistoryButtons();

$("#movies-list").on("click", ".movie-history-btn", historyClick); // When search button is clicked run the above function

function historyClick(event) {
  console.log("movie history button was clicked");
  // function for displaying data for previously searched places
  if (!event.target.matches(".movie-history-btn")) {
    // If target of click is not a button with class history-btn end function
    return;
  }
  let btn = event.target;
  let search = btn.getAttribute("randomTitle"); // Get the data-search value from button

  // function displayMovieHistory(search) {
  //   if ()

  // } // Run fetchAPI with the place name taken from data-search
}

// searchHistoryContainer.on("click", historyClick); // if a previous place button is clicked, run above function

// Bored API
// boredQuery = "http://www.boredapi.com/api/activity/";
$("#random-activity-button").on("click", function activitySearchQuery() {
  const randomActivity = "https://www.boredapi.com/api/activity/";
  console.log(randomActivity);
  $.ajax({
    url: randomActivity,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    let storedHistory =
      JSON.parse(localStorage.getItem("activityHistory")) || [];

    const activityResponse = response.activity;
    storedHistory.unshift(activityResponse);

    // Displaying Activity

    document.querySelector(".activity-display").textContent = response.activity;
    const randomActivity = response.activity;

    if (storedHistory.length > 6) {
      storedHistory.splice(6);
    }
    console.log(storedHistory);
    localStorage.setItem("activityHistory", JSON.stringify(storedHistory));

    renderActivityHistoryButtons();

    // localStorage.setItem("activityData", JSON.stringify(randomActivity));
  });
});

function renderActivityHistoryButtons() {
  // Deleting the search history prior to adding new search buttons
  // (this is necessary otherwise you will have repeat buttons)

  //renamed to correct location
  $("#activity-list").empty();

  // Check if the activityHistory array exists in local storage
  let storedHistory = JSON.parse(localStorage.getItem("activityHistory")) || [];

  // Concatenate the storedHistory array with the activityHistory array
  // activityHistory = storedHistory.push(activityHistory);

  // Store the updated activityHistory array in local storage

  // Looping through the array of history
  for (let i = 0; i < storedHistory.length; i++) {
    // Then dynamicaly generating buttons for each search made in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    let a = $("<button>");
    // Adding a class of history-btn to the button
    a.addClass("activity-history-btn");
    // Adding a data-attribute
    a.attr("randomActivity", storedHistory[i]);
    // Providing the initial button text
    a.text(storedHistory[i]);
    // Adding the button to the #search-history div
    $("#activity-list").append(a);
    // $("#search-history").append(localStorage.getItem("values"));
  }
}

renderActivityHistoryButtons();

// Change theme function --------
// I have added it here but it could be merged with the on(click) function for fetching the API to make it more tidy

$("#upcoming-movie-button").on("click", function () {
  let elements = [
    "body",
    "div",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "nav",
    "button",
    "span",
  ];
  // console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    console.log($([i]));
    if ($(elements[i]).hasClass("light-theme")) {
      $(elements[i]).removeClass("light-theme");
      $(elements[i]).addClass("dark-theme");
    } else $(elements[i]).addClass("dark-theme");
  }
});

$("#random-activity-button").on("click", function () {
  let elements = [
    "body",
    "div",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "nav",
    "button",
    "span",
  ];
  // console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    console.log($([i]));
    if ($(elements[i]).hasClass("dark-theme")) {
      $(elements[i]).removeClass("dark-theme");
      $(elements[i]).addClass("light-theme");
    } else $(elements[i]).addClass("light-theme");
  }
});
