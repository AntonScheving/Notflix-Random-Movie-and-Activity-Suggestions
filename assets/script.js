// Additional information for the TMDB API:
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

// Retrieves the data stored in local storage with the key "movieData". If the retrieved value is null or undefined., an empty array is assigned to the movieHistory variable. The JSON.parse() method is used to convert the retrieved string to a JavaScript object.
let movieHistory = JSON.parse(localStorage.getItem("movieData")) || [];

//  Click event to a button with an ID of upcoming-movie-button. When the button is clicked, an AJAX request is made to retrieve upcoming movie data from a movie database API. Once the API response is received, the code selects a random movie title, creates a newMovie object, and displays the details of the selected movie on the webpage.
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

    const newMovie = {
      title: randomTitle.title,
      poster: randomTitle.poster_path,
      plot: randomTitle.overview,
    };

    console.log(newMovie);

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

    // check if the movieHistory array has more than six movie titles and removes the oldest title from the array.
    if (movieHistory.length > 6) {
      movieHistory.splice(6);
    }
    // The movieHistory array is then saved to local storage with the key "movieData".
    localStorage.setItem("movieData", JSON.stringify(movieHistory));
  });
});

function renderMovieHistoryButtons() {
  // jQuery to clear the content of the div with the id "movies-list".
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
}

// // Additional information for the Bored API
// No need for a API key.
// API query URL: http://www.boredapi.com/api/activity/

// click event listener for a button with an ID of random-activity-button. When the button is clicked, it triggers a function that performs an AJAX request to the Bored API to get a random activity.
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

    // defines a constant variable activityResponse and sets it to the value of the activity property in the response object. It then adds activityResponse to the beginning of the storedHistory array using the unshift() method.
    const activityResponse = response.activity;
    storedHistory.unshift(activityResponse);

    // Displaying Activity

    document.querySelector(".activity-display").textContent = response.activity;

    // checks the length of storedHistory. If it is greater than 6, it removes the oldest item(s) from the array using the splice() method so that it contains only the 6 most recent activities.
    if (storedHistory.length > 6) {
      storedHistory.splice(6);
    }
    console.log(storedHistory);
    localStorage.setItem("activityHistory", JSON.stringify(storedHistory));

    // Calls the function renderActivityHistoryButtons() to display the history of activities.
    renderActivityHistoryButtons();
  });
});

function renderActivityHistoryButtons() {
  // Deleting the search history prior to adding new search buttons
  // (this is necessary otherwise you will have repeat buttons)
  $("#activity-list").empty();

  // declares a variable called storedHistory and sets its value to the activityHistory array stored in local storage. If the array doesn't exist in local storage, an empty array is assigned instead.
  let storedHistory = JSON.parse(localStorage.getItem("activityHistory")) || [];

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
// I have added it here but it could be merged with the on(click) function for fetching the API to make it more tidy.

$("#upcoming-movie-button").on("click", function () {
  let elements = [
    "body",
    "div",
    "span",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "nav",
    "<p>",
    "button",
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
    "span",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "nav",
    "p",
    "button",
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
