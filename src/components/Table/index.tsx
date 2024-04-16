import { FC } from "react";

interface CityDataProps {
  id?: string;
  city?: string;
  country?: string;
  region?: string;
  population?: string;
}

interface TableDataProps {
  cityData: CityDataProps[];
  isDataLoading: boolean;
}

const Table: FC<TableDataProps> = ({ cityData, isDataLoading }) => {
  if (isDataLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div>
      {cityData.length > 0 && !isDataLoading ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>City</th>
              <th>Country</th>
              <th>Region</th>
              <th>Population</th>
            </tr>
          </thead>

          <tbody>
            {cityData.map((item: CityDataProps, index: number) => {
              console.log(item);
              return (
                <tr key={item?.id}>
                  <td>{index + 1}</td>
                  <td>{item?.city}</td>
                  <td>{item?.country}</td>
                  <td>{item?.region}</td>
                  <td>{item?.population}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};
export default Table;
