import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import fetchCityInfo from "../../api";
import KeyboardShortcut from "../KeyboardShortcut";

const SearchBox = ({
  dataLimit,
  setCityData,
  setIsDataLoading,
}: {
  dataLimit: string;
  setCityData: Dispatch<SetStateAction<[]>>;
  setIsDataLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  const [cityInput, setCityInput] = useState<string>("");

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

  const searchCityHandler = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      try {
        setIsDataLoading(true);
        const cities = await fetchCityInfo("IN", cityInput, dataLimit);
        console.log("cities?.data", cities?.data);
        setCityData(cities?.data);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      } finally {
        setIsDataLoading(false);
      }
    }
  };

  return (
    <div className="searchbox__container">
      <input
        placeholder="Search places..."
        className="searchbox__input"
        ref={inputRef}
        onKeyDown={searchCityHandler}
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
      />
      <KeyboardShortcut>Ctrl &#43; &#47;</KeyboardShortcut>
    </div>
  );
};
export default SearchBox;
