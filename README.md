USER STORY
As a user I want to access Notflix homepage and see two functional buttons which I can click to get a movie or get an activity suggestion. I want to be able to save my movie and activity suggestions. When I click the movie button I want to see the suggested movie title, poster of the movie and a brief plot description.

Acceptance Criteria

1. When the page is loaded it will present the Notflix logo in the Navigation section of the page.
2. 2 cards with buttons in the main section of the page, and two sections which will display the saved movies and selected activities.
3. When one button is clicked, a movie suggestion with movie title, poster and brief plot description will be displayed in the card.
4. When the other button is clicked, an activity will be displayed in the card.
5. The colour of the theme changes when any of the button is clicked.
6. Both displays should contain a save option.
7. If a movie or activity is saved, it should be displayed in the corresponding section.
8. We are going to use a movie API to generate different movies.
9. Have them stored in the local storage (create an History)



# Notflix - Random Movie and Activity Suggestions

<br><br>

## **Introduction**

Welcome to Notflix, a web application that aims to provide you with entertainment and activity suggestions. With Notflix, you can easily find suggestions for both upcoming movies shown in theatres and activities you can do. As a user, you will have access to two functional buttons on our homepage, one for upcoming movies and the other for activities.

When you click the "Find me a movie" button, you will be able to view a randomly suggested movie's title, poster, and a brief plot description. Notflix makes it easy for you to save your movie and activity suggestions, ensuring that you can always access them at your convenience.

Clicking on the "Find me an activity" button will prompt a randomly suggested activity to be displayed on tha page.

At Notflix, we believe that everyone deserves a little fun and relaxation in their lives. We hope that our application will make it easier for you to find your next favorite movie or activity.

<br><br>

Deployed website: https://antonscheving.github.io/Notflix-Random-Movie-and-Activity-Suggestions/

<br>

<p align="center">
  <img alt="Notflix - Random Movie and Activity Suggestions" [Screenshot] src="assets/images/"><br>
Notflix - Random Movie and Activity Suggestions Screenshot
</p>

<br>

## **Features**

Notflix is a web application that provides you with random movie and activity suggestions. With a click of a button, you can find suggestions for upcoming movies shown in theaters or random activities you can do. Notflix also saves your last 6 movie titles and activity suggestions automatically, ensuring that you can access them at any time.

the JavaScript code uses jQuery to make an AJAX call to the TMDb API, and then updates the UI with the received data. It also uses Bootstrap and custom CSS for styling, and local storage for storing the movies and activities history.


Notflix is built with HTML, CSS, and JavaScript. The following libraries and tools were used:

* Bootstrap 5.3.0
* jQuery 3.5.1

<br><br>

## **How to Use**

Using Notflix is easy and straightforward. To get started, visit the deployed website at https://antonscheving.github.io/Notflix-Random-Movie-and-Activity-Suggestions/ and click on either the "Find me a movie" or "Find me an activity" button. This will generate a randomly suggested movie along with its title, poster, and a brief plot or description or a randomly suggested activity.

Notflix also saves your last 6 movie titles and activity suggestions automatically, which you can access by viewing "Watch me later" and 
"Try me later" sections on the page. This ensures that you can easily access your favorite movie and activity suggestions at any time.

Whether you're looking for a new movie to watch or an exciting activity to try out, Notflix provides you with the tools you need to find suggestions that will keep you entertained and relaxed. Give it a try today and discover your next favorite movie or activity!

<br><br>

## **Prerequisites**

A web browser is required to run this code.

<br>
<br>

## **Credits**

Front-end web developers: 
* Harry Holder <p><strong><a href="https://github.com/HarryUnderscore13">GitHub</a></strong>
* Anton Scheving <p><strong><a href="https://github.com/AntonScheving">GitHub</a></strong>
* Chido Munyanyi <p><strong><a href="https://github.com/ChidoMunyanyi">GitHub</a></strong>
* Femi Adekunle <p><strong><a href="https://github.com/Phemyx1">GitHub</a></strong>


<br>
## **License**

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---
© 2023 Confidential and Proprietary. All Rights Reserved.