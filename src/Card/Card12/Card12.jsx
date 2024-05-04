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
      <section className="card3-container card12-container">
        <div className="upper-card">
          <div className="int">
            <h1>Choose the freedom you need.</h1>
          </div>
          <div className="body">
            <div className="card12-head">
              <h1 className="hd card12-heads">Other Banks</h1>
              <img
                src={kudaImg}
                alt="kuda.image"
                className="card12-kuda-image card12-heads"
              />
            </div>

            <div className="data-container">
              <table {...getTableProps()} className="table-class">
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);

                    return (
                      <tr {...row.getRowProps()} className="row">
                        {row.cells.map((cell) => (
                          <td {...cell.getCellProps()} className="row">
                            <div className="cell">{cell.render("Cell")}</div>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card12;
