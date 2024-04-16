const Table = () => {
  return (
    <div>
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
