import { Dispatch, SetStateAction } from "react";

const DataLimitSlider = ({
  dataLimit,
  setDataLimit,
}: {
  dataLimit: string;
  setDataLimit: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="datalimit__slider">
      <h3>Data Limit:</h3>
      <input
        type="range"
        min="1"
        max="10"
        value={dataLimit}
        onChange={(e) => setDataLimit(e.target.value)}
      />
      <h3>{dataLimit}</h3>
    </div>
  );
};
export default DataLimitSlider;
