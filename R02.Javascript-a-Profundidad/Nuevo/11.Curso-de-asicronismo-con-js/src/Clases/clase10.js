/* Fetch */

const BASE_API = "https://api.escuelajs.co/api/v1";
const API_PRODUCTS = `${BASE_API}/products`;

const fetchData = (urlAPI) => {
  return fetch(urlAPI);
};

fetchData(API_PRODUCTS)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .then(() => console.log("hola"))
  .then(() => console.log("mundo"))
  .catch((error) => console.log(error))
  .finally("final");
