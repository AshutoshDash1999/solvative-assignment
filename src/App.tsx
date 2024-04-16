import { useState } from "react";
import "./App.css";
import DataLimitSlider from "./components/DataLimitSlider";
import SearchBox from "./components/SearchBox";
import Table from "./components/Table";

function App() {
  const [dataLimit, setDataLimit] = useState("5");
  const [cityData, setCityData] = useState<[]>([]);
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);
  return (
    <>
      <div>
        <SearchBox
          dataLimit={dataLimit}
          setCityData={setCityData}
          setIsDataLoading={setIsDataLoading}
        />
        <DataLimitSlider dataLimit={dataLimit} setDataLimit={setDataLimit} />

        <Table cityData={cityData} isDataLoading={isDataLoading} />
      </div>
    </>
  );
}

export default App;
