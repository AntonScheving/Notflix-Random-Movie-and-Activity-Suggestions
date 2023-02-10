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
//api.themoviedb.org/3/movie/upcoming?api_key=a07046481ae5f3198fbb1019a2af2859&language=en-US&page=1

https: $("#upcoming-movie-button").on(
  "click",
  function movieSearchQuery(movieData) {
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
 const titleDisplay = randomTitle.title
 document.querySelector(".movie-title").textContent=titleDisplay
const plotDisplay =randomTitle.overview
document.querySelector(".movie-description").textContent=plotDisplay

document.querySelector(".movie-url").setAttribute("src", "https://image.tmdb.org/t/p/original" +randomTitle.backdrop_path)
    });
  }
);

// Bored API
// boredQuery = "http://www.boredapi.com/api/activity/";
$("#random-activity-button").on("click", function activitySearchQuery(activityData) {
  const randomActivity = "http://www.boredapi.com/api/activity/";
  console.log(randomActivity);
  $.ajax({
    url: randomActivity,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });

  const activityDisplay = randomActivity.activity
  document.querySelector(".activity-display").textContent=activityDisplay
});




