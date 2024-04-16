import axios from "axios";

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
  },
});

apiRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error while fetching the API:", error);
    throw error;
  }
);

export default apiRequest;
