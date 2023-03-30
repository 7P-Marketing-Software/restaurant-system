export default function TopItems() {


  return (
    <>
      <p className="mb-3 ml-3 mt-4 text-2xl">Top items</p>

      <div className="mx-2 overflow-x-auto capitalize">
        <table className="table-zebra table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>chicken picatta</td>
              <td>4</td>
            </tr>
            <tr>
              <td>fish and chips</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Tajine</td>
              <td>3</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Shrimp toast</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}