import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import fetchCityInfo from "../../api";
import KeyboardShortcut from "../KeyboardShortcut";

const SearchBox = ({
  dataLimit,
  setCityData,
  setIsDataLoading,
  cityInput,
  setCityInput,
}: {
  dataLimit: string;
  setCityData: Dispatch<SetStateAction<[] | null>>;
  setIsDataLoading: Dispatch<SetStateAction<boolean>>;
  cityInput: string;
  setCityInput: Dispatch<SetStateAction<string>>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.ctrlKey && event.key === "/") {
        event.preventDefault();
        inputRef.current?.focus();
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
        setCityData(cities?.data);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      } finally {
        setIsDataLoading(false);
      }
    }
  };

  const cityInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCityInput(e.target.value);
    if (e.target.value === "") {
      setCityData(null);
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
        onChange={cityInputHandler}
      />
      <KeyboardShortcut>Ctrl &#43; &#47;</KeyboardShortcut>
    </div>
  );
};
export default SearchBox;
