import { useState } from "react";

const DataLimitSlider = () => {
  const [dataLimitValue, setDataLimitValue] = useState("5");
  return (
    <div className="datalimit__slider">
      <h3>Data Limit:</h3>
      <input
        type="range"
        min="1"
        max="10"
        value={dataLimitValue}
        onChange={(e) => setDataLimitValue(e.target.value)}
      />
      <h3>{dataLimitValue}</h3>
    </div>
  );
};
export default DataLimitSlider;
