import axios from "axios";

interface FetchCityInfoProps {
  countryId: string;
  namePrefix: string;
  limit: number | string;
}

const fetchCityInfo = async (
  countryId: string,
  namePrefix: string,
  limit: string
) => {
  const options = {
    method: "GET",
    url: import.meta.env.VITE_API_URL,
    params: {
      countryIds: countryId,
      namePrefix: namePrefix,
      limit: limit,
    },
    headers: {
      "x-rapidapi-host": import.meta.env.VITE_API_HOST,
      "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error while fetching cities:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

export default fetchCityInfo;
