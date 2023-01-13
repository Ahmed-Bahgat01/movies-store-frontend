import { apiUrl, imgPath, main } from "./Vars.js";

// JQuery Code
$.get(apiUrl).done((data) => {
  showMovie(data.results);
});


// TODO: remove html from here
function showMovie(data) {
  $(main).html('');
  data.forEach((movie) => {
    const { title, poster_path, id } = movie;
    const movieElement = $("<div></div>");
    movieElement.addClass("movie");
    movieElement.html(`
    <a href="./DetailsPage.html?id=${id}">
    <img src="${imgPath + poster_path}" alt="Move" />
        <h4 id="moveName">${title}</h4>
    </a>`
    );
    $(main).append(movieElement);
  });
}
