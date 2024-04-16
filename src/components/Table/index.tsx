const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <th>
            <td>#</td>
            <td>City</td>
            <td>Country</td>
            <td>Region</td>
            <td>Population</td>
          </th>
        </thead>
        <tbody>
          {/* {data.map((item, index)=>{
                return (<tr>
                    <td>{index+1}</td>
                    <td>{item?.city}</td>
                    <td>{item?.country}</td>
                    <td>{item?.region}</td>
                    <td>{item?.population}</td>
                </tr>)
            })} */}
        </tbody>
      </table>

      <div className="loader"></div>
    </div>
  );
};
export default Table;
