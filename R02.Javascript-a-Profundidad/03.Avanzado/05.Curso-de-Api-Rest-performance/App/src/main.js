// data
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
  },
});
// Local storage

function likedMovieList() {
  const item = JSON.parse(localStorage.getItem("liked_movies"));
  let movies;
  if (item) {
    movies = item;
  } else {
    movies = {};
  }

  return movies;
}

function liveMovie(movie) {
  const id = movie.id;
  const likedMovies = likedMovieList();
  console.log(likedMovies);
  if (likedMovies[id]) {
    likedMovies[id] = undefined;
  } else {
    likedMovies[id] = movie;
  }
  localStorage.setItem("liked_movies", JSON.stringify(likedMovies));
}

// Utils

function createMovies(
  movies,
  container,
  { lazyLoad = false, clean = true } = {}
) {
  // container.innerHTML = "";
  if (clean) {
    container.innerHTML = "";
  }

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");

    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie.title);
    // lazy loader
    movieImg.setAttribute(
      lazyLoad ? "data-img" : "src",
      "https://image.tmdb.org/t/p/w300" + movie.poster_path
    );
    //
    movieImg.addEventListener("click", () => {
      location.hash = "#movie=" + movie.id;
    });

    const movieBtn = document.createElement("button");
    movieBtn.classList.add("movie-btn");
    likedMovieList()[movie.id] && movieBtn.classList.add("movie-btn--liked");
    movieBtn.addEventListener("click", () => {
      movieBtn.classList.toggle("movie-btn--liked");
      // add movie to local storage
      liveMovie(movie);
      getLikedMovies();
    });

    if (lazyLoad) {
      lazyLoader.observe(movieImg);
    }
    // img not fount not load
    movieImg.addEventListener("error", () => {
      movieImg.setAttribute(
        "src",
        `https://via.placeholder.com/300x450/5c218a/ffffff?text=${movie.title}`
      );
    });

    movieContainer.appendChild(movieImg);
    movieContainer.appendChild(movieBtn);
    container.appendChild(movieContainer);
  });
}

function createCategories(categories, container) {
  container.innerHTML = "";

  categories.forEach((category) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("category-title");
    categoryTitle.setAttribute("id", "id" + category.id);
    categoryTitle.addEventListener("click", () => {
      location.hash = `#category=${category.id}-${category.name}`;
    });
    const categoryTitleText = document.createTextNode(category.name);

    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    container.appendChild(categoryContainer);
  });
}

// Llamados a la API

async function getTrendingMoviesPreview() {
  const { data } = await api("trending/movie/day");
  const movies = data.results;
  console.log(movies);

  createMovies(movies, trendingMoviesPreviewList, true);
}

async function getCategegoriesPreview() {
  const { data } = await api("genre/movie/list");
  const categories = data.genres;

  createCategories(categories, categoriesPreviewList);
}

async function getMoviesByCategory(id) {
  const { data } = await api("discover/movie", {
    params: {
      with_genres: id,
    },
  });
  const movies = data.results;
  maxPage = data.total_pages;

  createMovies(movies, genericSection, { lazyLoad: true });
}

function getPaginatedMoviesByCategory(id) {
  return async function () {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    const isScrollBottom = scrollTop + clientHeight >= scrollHeight - 15;
    const isNotLastPage = page < maxPage;
    console.log(isScrollBottom);
    console.log(isNotLastPage);

    if (isScrollBottom && isNotLastPage) {
      page++;
      const { data } = await api("discover/movie", {
        params: {
          with_genres: id,
          page,
        },
      });
      const movies = data.results;

      createMovies(movies, genericSection, { lazyLoad: true, clean: false });
    }
  };
}

async function getMoviesBySearch(query) {
  const { data } = await api("search/movie", {
    params: {
      query,
    },
  });
  const movies = data.results;
  maxPage = data.total_pages;

  createMovies(movies, genericSection);
}

function getPaginatedMoviesBySearch(query) {
  return async function () {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    const isScrollBottom = scrollTop + clientHeight >= scrollHeight - 15;
    const isNotLastPage = page < maxPage;
    console.log(isScrollBottom);
    console.log(isNotLastPage);

    if (isScrollBottom && isNotLastPage) {
      page++;
      const { data } = await api("search/movie", {
        params: {
          query,
          page,
        },
      });

      const movies = data.results;

      createMovies(movies, genericSection, { lazyLoad: true, clean: false });
    }
  };
}

async function getTrendingMovies() {
  const { data } = await api("trending/movie/day");
  const movies = data.results;

  createMovies(movies, genericSection, { lazyLoad: true, clean: true });
  maxPage = data.total_pages;
}

async function getPaginatedTredingMovies() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  const isScrollBottom = scrollTop + clientHeight >= scrollHeight - 15;
  const isNotLastPage = page < maxPage;
  console.log(isScrollBottom);
  console.log(isNotLastPage);

  if (isScrollBottom && isNotLastPage) {
    page++;
    const { data } = await api("trending/movie/day", {
      params: {
        page: page,
      },
    });
    const movies = data.results;

    createMovies(movies, genericSection, { lazyLoad: true, clean: false });
  }
}

async function getMovieById(id) {
  const { data: movie } = await api("movie/" + id);

  const movieImgUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  console.log(movieImgUrl);
  headerSection.style.background = `
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.35) 19.27%,
      rgba(0, 0, 0, 0) 29.17%
    ),
    url(${movieImgUrl})
  `;

  movieDetailTitle.textContent = movie.title;
  movieDetailDescription.textContent = movie.overview;
  movieDetailScore.textContent = movie.vote_average;

  createCategories(movie.genres, movieDetailCategoriesList);

  getRelatedMoviesId(id);
}

async function getRelatedMoviesId(id) {
  const { data } = await api(`movie/${id}/recommendations`);
  const relatedMovies = data.results;

  createMovies(relatedMovies, relatedMoviesContainer);
}

const lazyLoader = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    //  min : 10:20
    if (element.isIntersecting) {
      const url = element.target.getAttribute("data-img");
      element.target.setAttribute("src", url);
    }
  });
}, null);

function getLikedMovies() {
  const likedmovies = likedMovieList();
  const moviesArray = Object.values(likedmovies);

  createMovies(moviesArray, likedMoviesListArticle, {
    lazyLoad: true,
    clean: true,
  });
}
