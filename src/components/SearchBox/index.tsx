import fetchCityInfo from "../../api";
import KeyboardShortcut from "../KeyboardShortcut";

const SearchBox = (props) => {
  async function getCities() {
    try {
      const cities = await fetchCityInfo("IN", "del", "5");
      console.log(cities);
    } catch (error) {
      console.error("Failed to fetch cities:", error);
    }
  }
  return (
    <div className="searchbox__container">
      <input placeholder="Search places" />
      <KeyboardShortcut>Ctrl + /</KeyboardShortcut>
    </div>
  );
};
export default SearchBox;
