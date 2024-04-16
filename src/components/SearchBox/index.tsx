import fetchCityInfo from "../../api";

const SearchBox = (props) => {
  async function getCities() {
    try {
      const cities = await fetchCityInfo("IN", "del", "5");
      console.log(cities);
    } catch (error) {
      console.error("Failed to fetch cities:", error);
    }
  }
  return <div>SearchBox</div>;
};
export default SearchBox;
