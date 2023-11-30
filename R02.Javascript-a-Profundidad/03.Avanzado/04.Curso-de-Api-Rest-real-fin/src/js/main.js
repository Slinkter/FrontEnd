// <--- navitation.js (pageCategory)
async function getMoviesByCategory(id) {
  console.group("getMoviesByCategory(id)");
  try {
    // params
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}`;
    const authAPI =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWI3MTYzMjk1NzE0NmVlNGI3ZjNkZWFlMWRjMzM1NSIsInN1YiI6IjY1MTQzY2RmZWE4NGM3MDEwYzEwZTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Mq4jS2yqZX6vbG28UgpsCJujgEYbb66Vrz07_2VwlY";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: authAPI,
      },
    };
    // call api
    const res = await fetch(url, options);
    const data = await res.json();
    const movies = data.results;
    // html
    genericSection.innerHTML = "";
    //
    movies.forEach((movie) => {
      const movieContainer = document.createElement("div");
      const movieImg = document.createElement("img");
      const url = "https://image.tmdb.org/t/p/w300/" + movie.poster_path;
      const title = movie.title;
      //
      movieImg.classList.add("movie-img");
      movieImg.setAttribute("src", url);
      movieImg.setAttribute("alt", title);
      movieContainer.classList.add("movie-container");
      movieContainer.addEventListener("click", () => {
        location.bash = "#movie=" + movie.id;
      });
      /*  */
      movieContainer.appendChild(movieImg);
      genericSection.appendChild(movieContainer);
    });
    console.log("res: ", res);
    console.log("data: ", data);
    console.log("results: ", movies);
  } catch (error) {
    console.error("error", error);
  } finally {
    console.log("finally : getMoviesByCategory(id)");
  }

  console.groupEnd("");
}
async function getMoviesBySearch(query) {
  console.group(" async function getMoviesBySearch(query)");
  try {
    // params
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
    const authAPI =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWI3MTYzMjk1NzE0NmVlNGI3ZjNkZWFlMWRjMzM1NSIsInN1YiI6IjY1MTQzY2RmZWE4NGM3MDEwYzEwZTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Mq4jS2yqZX6vbG28UgpsCJujgEYbb66Vrz07_2VwlY";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: authAPI,
      },
    };
    // call api
    const res = await fetch(url, options);
    const data = await res.json();
    const movies = data.results;
    //
    genericSection.innerHTML = "";
    //
    movies.forEach((movie) => {
      const movieContainer = document.createElement("div");
      const movieImg = document.createElement("img");
      const url = "https://image.tmdb.org/t/p/w300/" + movie.poster_path;
      const title = movie.title;
      //
      movieImg.classList.add("movie-img");
      movieImg.setAttribute("src", url);
      movieImg.setAttribute("alt", title);
      //
      movieContainer.classList.add("movie-container");
      movieContainer.addEventListener("click", () => {
        location.bash = "#movie=" + movie.id;
      });
      //
      movieContainer.appendChild(movieImg);
      genericSection.appendChild(movieContainer);
    });
    console.log("res : ", res);
    console.log("data : ", data);
    console.log("movies : ", movies);
  } catch (error) {
    console.error("error : ", error);
  } finally {
    console.log("finally : getMoviesBySearch(query)");
  }
  console.groupEnd("");
}

async function getMovieBySearch(movieId) {
  // TODO :
  try {
    // params
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieId}`;
    const authAPI =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWI3MTYzMjk1NzE0NmVlNGI3ZjNkZWFlMWRjMzM1NSIsInN1YiI6IjY1MTQzY2RmZWE4NGM3MDEwYzEwZTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Mq4jS2yqZX6vbG28UgpsCJujgEYbb66Vrz07_2VwlY";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: authAPI,
      },
    };
    // call api
    const res = await fetch(url, options);
    const data = await res.json();
    const movies = data.results;

    console.log("res: ", res);
    console.log("data: ", data);
    console.log("results: ", movies);
  } catch (error) {
    console.error("error : ", error);
  } finally {
    console.log("finally : getMoviesBySearch(query)");
  }
}

async function getMovieByMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWI3MTYzMjk1NzE0NmVlNGI3ZjNkZWFlMWRjMzM1NSIsInN1YiI6IjY1MTQzY2RmZWE4NGM3MDEwYzEwZTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Mq4jS2yqZX6vbG28UgpsCJujgEYbb66Vrz07_2VwlY",
    },
  };
  // get data from api
  const res = await fetch(url, options);
  const data = await res.json();
  const movie = data;
  const movieImgUrl = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
  // get category
  const categories = [...movie.genres];
  //
  console.log(movie);
  console.log("movie.genres : \n ", movie.genres);
  //
  headerSection.style.background = ` url(${movieImgUrl}) ,linear-gradient(180deg,rgba(0, 0, 0, 0.35) 19.27%,rgba(0, 0, 0, 0) 29.17%)`;
  //
  movieDetailTitle.textContent = movie.title;
  movieDetailDescription.textContent = movie.overview;
  movieDetailScore.textContent = movie.vote_average;
  movieDetailCategoriesList.innerHTML = "";
  //
  categories.forEach((category) => {
    /* Create Element */
    const categoryContainer = document.createElement("div");
    const categoryTitle = document.createElement("h3");
    const categoryTitleText = document.createTextNode(category.name);
    const idvalue = "id" + category.id;
    /* Add style */
    categoryContainer.classList.add("category-container");
    //
    categoryTitle.classList.add("category-title");
    categoryTitle.setAttribute("id", idvalue);
    categoryTitle.addEventListener("click", () => {
      location.hash = "#category=" + category.id + "-" + category.name;
      console.log(location.hash);
    });
    /* Add html  */
    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    movieDetailCategoriesList.appendChild(categoryContainer);
  });

  // peliculas similares
  getRelatedMoviesId(id);
}

async function getRelatedMoviesId(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWI3MTYzMjk1NzE0NmVlNGI3ZjNkZWFlMWRjMzM1NSIsInN1YiI6IjY1MTQzY2RmZWE4NGM3MDEwYzEwZTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Mq4jS2yqZX6vbG28UgpsCJujgEYbb66Vrz07_2VwlY",
    },
  };
  //
  const res = await fetch(url, options);
  const data = await res.json();
  const relatedMovies = [...data.results];
  console.log("getRelatedMoviesId data : ", data);
  console.log(relatedMovies);
  //
  relatedMoviesContainer.innerHTML = "";
  //
  relatedMovies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    const movieImg = document.createElement("img");
    const url = "https://image.tmdb.org/t/p/w300/" + movie.poster_path;
    const title = movie.title;
    //
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("src", url);
    movieImg.setAttribute("alt", title);
    //
    movieContainer.classList.add("movie-container");
    movieContainer.addEventListener("click", () => {
      location.bash = "#movie=" + movie.id;
    });
    //
    movieContainer.appendChild(movieImg);
    relatedMoviesContainer.appendChild(movieContainer);
  });
}
async function getTrendingMovies() {
  try {
    // params
    const url = `https://api.themoviedb.org/3/trending/movie/day`;
    const authAPI =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWI3MTYzMjk1NzE0NmVlNGI3ZjNkZWFlMWRjMzM1NSIsInN1YiI6IjY1MTQzY2RmZWE4NGM3MDEwYzEwZTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Mq4jS2yqZX6vbG28UgpsCJujgEYbb66Vrz07_2VwlY";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: authAPI,
      },
    };
    // call api
    const res = await fetch(url, options);
    const data = await res.json();
    const movies = data.results;
    // Add HTML
    genericSection.innerHTML = "";
    //
    movies.map((movie) => {
      //
      const movieContainer = document.createElement("div");
      const movieImg = document.createElement("img");
      const url = "https://image.tmdb.org/t/p/w300/" + movie.poster_path;
      const title = movie.title;
      //
      movieImg.classList.add("movie-img");
      movieImg.setAttribute("src", url);
      movieImg.setAttribute("alt", title);
      //
      movieContainer.classList.add("movie-container");
      movieContainer.addEventListener("click", () => {
        location.bash = "#movie=" + movie.id;
      });
      //
      movieContainer.appendChild(movieImg);
      genericSection.appendChild(movieContainer);
    });
  } catch (error) {
    console.error("error", error);
  } finally {
    console.log("finally : getTrendingMoviesPreview()");
  }
}

async function getTrendingMoviesPreview() {
  try {
    // params
    const url = `https://api.themoviedb.org/3/trending/movie/day`;
    const authAPI =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWI3MTYzMjk1NzE0NmVlNGI3ZjNkZWFlMWRjMzM1NSIsInN1YiI6IjY1MTQzY2RmZWE4NGM3MDEwYzEwZTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Mq4jS2yqZX6vbG28UgpsCJujgEYbb66Vrz07_2VwlY";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: authAPI,
      },
    };
    // call api
    const res = await fetch(url, options);
    const data = await res.json();
    const movies = data.results;
    // Add HTML
    movies.map((movie) => {
      /* create elements*/
      const movieContainer = document.createElement("div");
      const movieImg = document.createElement("img");
      const url = "https://image.tmdb.org/t/p/w300/" + movie.poster_path;
      const title = movie.title;
      /* Add style */
      movieContainer.classList.add("movie-container");

      movieContainer.addEventListener("click", () => {
        location.hash = "#movie=" + movie.id;
      });
      movieImg.classList.add("movie-img");
      /* Add url img */
      movieImg.setAttribute("src", url);
      movieImg.setAttribute("alt", title);
      /* Add html */
      movieContainer.appendChild(movieImg);
      trendingMoviesPreviewList.appendChild(movieContainer);
    });
  } catch (error) {
    console.error("error", error);
  } finally {
    console.log("finally : getTrendingMoviesPreview()");
  }
}
async function getCategoriesPreview() {
  try {
    //params
    const url = `https://api.themoviedb.org/3/genre/movie/list`;
    const authAPI =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWI3MTYzMjk1NzE0NmVlNGI3ZjNkZWFlMWRjMzM1NSIsInN1YiI6IjY1MTQzY2RmZWE4NGM3MDEwYzEwZTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Mq4jS2yqZX6vbG28UgpsCJujgEYbb66Vrz07_2VwlY";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: authAPI,
      },
    };
    // call api
    const res = await fetch(url, options);
    const data = await res.json();
    const categories = data.genres;
    // Add html
    categoriesPreviewList.innerHTML = "";
    /* array from server */
    categories.forEach((category) => {
      /* Create Element */
      const categoryId = category.id;
      const categoryName = category.name;
      /*  */
      const categoryContainer = document.createElement("div");
      const categoryTitle = document.createElement("h3");
      const categoryTitleText = document.createTextNode(categoryName);
      /* Add style */
      categoryContainer.classList.add("category-container");
      categoryTitle.classList.add("category-title");
      categoryTitle.setAttribute("id", "id" + categoryId);
      /* Add html  */
      categoryTitle.appendChild(categoryTitleText);
      categoryContainer.appendChild(categoryTitle);
      categoriesPreviewList.appendChild(categoryContainer);
      /* cuando hace click se actualiza el URL*/
      categoryTitle.addEventListener("click", () => {
        location.hash = "#category=" + categoryId + "-" + categoryName;
      });
    });
  } catch (error) {
    console.error("error : ", error);
  } finally {
    console.log("finally : async getCategoriesPreview()");
  }
}

getTrendingMoviesPreview();
getCategoriesPreview();
