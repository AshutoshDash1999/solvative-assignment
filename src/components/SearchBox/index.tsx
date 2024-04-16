import { useEffect, useRef } from "react";
import KeyboardShortcut from "../KeyboardShortcut";

const SearchBox = () => {
  //    const  getCities = () => {
  //     try {
  //       const cities = await fetchCityInfo("IN", "del", "5");
  //       console.log(cities);
  //     } catch (error) {
  //       console.error("Failed to fetch cities:", error);
  //     }
  //   }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.ctrlKey && event.key === "/") {
        event.preventDefault();
        inputRef.current?.focus();

        console.log("key pressed");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const searchCityHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed");
    }
  };

  return (
    <div className="searchbox__container">
      <input
        placeholder="Search places..."
        className="searchbox__input"
        ref={inputRef}
        onKeyDown={searchCityHandler}
      />
      <KeyboardShortcut>Ctrl + /</KeyboardShortcut>
    </div>
  );
};
export default SearchBox;
