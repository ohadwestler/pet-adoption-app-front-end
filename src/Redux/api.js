let API_ENDPOINT = "https://example.com/api";

if (process.env.NODE_ENV === "development") {
  API_ENDPOINT = "http://localhost:3001";
}

export default API_ENDPOINT;