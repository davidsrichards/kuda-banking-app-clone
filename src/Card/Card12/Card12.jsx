// importing Modules
import "./Card12.css";
import kudaImg from "../../assets/ImageFolder/img1.svg";
import Data from "./Data";
import * as React from "react";
import { useTable } from "react-table";

// card 12 function

function Card12() {
  const data = React.useMemo(() => Data, []);
  const columns = React.useMemo(
    () => [
      {
        accessor: "first",
      },
      {
        accessor: "second",
      },
      {
        accessor: "third",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <>
      <section className="card3-container card12-container flex items-center justify-center mt-12 mx-auto">
        <div className="upper-card flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl text-indigo-900 pb-8">
            Choose the freedom you need.
          </h1>

          <div className="data-container flex flex-col items-center  p-4 divide-y shadow-md border-t-2 mt-10">
            <div className="flex items-center ml-10 justify-center">
              <h1 className="hd card12-heads font-bold text-2xl text-indigo-900">
                Other Banks
              </h1>
              <img
                src={kudaImg}
                alt="kuda.image"
                className="card12-kuda-image card12-heads w-24 relative left-8 top-1"
              />
            </div>
            <table {...getTableProps()} className="table-class">
              <tbody {...getTableBodyProps()} className="divide-y">
                {rows.map((row) => {
                  prepareRow(row);

                  return (
                    <tr {...row.getRowProps()} className="row">
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="row p-2 text-2xl font-sans"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card12;
