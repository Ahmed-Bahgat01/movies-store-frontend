import { movieID, url, imgPath, movieDetailsData, apiKey } from "./Vars.js";


// TODO: move html out
function getMovie(id) {
  let movieUrl = `${url}/movie/${id}?${apiKey}`;
  $.get(movieUrl).done((data) => {
    const {title, poster_path, overview} = data;
    console.log(data);
    const movieElement = $(
      `
      <div class="container">
        <img src="${imgPath + poster_path}" alt="Move" />
        <div>
          <h3 id="moveName">${title}</h3>
          <p>${overview}</p>
        </div>
      </div>
      `
    );
    $(movieDetailsData).append(movieElement);
  });
}
getMovie(movieID);
