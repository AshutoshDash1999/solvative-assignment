import { useState } from "react";
import "./App.css";
import DataLimitSlider from "./components/DataLimitSlider";
import SearchBox from "./components/SearchBox";
import Table from "./components/Table";

function App() {
  const [dataLimit, setDataLimit] = useState("5");
  const [cityData, setCityData] = useState<[] | null>(null);
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);
  const [cityInput, setCityInput] = useState<string>("");

  return (
    <>
      <div>
        <SearchBox
          dataLimit={dataLimit}
          setCityData={setCityData}
          setIsDataLoading={setIsDataLoading}
          cityInput={cityInput}
          setCityInput={setCityInput}
        />
        <DataLimitSlider dataLimit={dataLimit} setDataLimit={setDataLimit} />

        <Table
          cityData={cityData}
          isDataLoading={isDataLoading}
          cityInput={cityInput}
        />
      </div>
    </>
  );
}

export default App;
