import "./App.css";
import DataLimitSlider from "./components/DataLimitSlider";
import SearchBox from "./components/SearchBox";
import Table from "./components/Table";

function App() {
  return (
    <>
      <div>
        <SearchBox />
        <DataLimitSlider />

        <Table />
      </div>
    </>
  );
}

export default App;
