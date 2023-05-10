let API_ENDPOINT = "https://pet-adoption-ohad-project.herokuapp.com";

if (process.env.NODE_ENV === "development") {
  API_ENDPOINT = "http://localhost:3001";
}

export default API_ENDPOINT;