// importing Modules

import "./Card17Table.css";
import { useTable } from "react-table";
import * as React from "react";
import Card17Data from "./Card17Data";
import { useMemo } from "react";

// card17 function

function Card17Table() {
  const data = useMemo(() => Card17Data, []);
  const columns = useMemo(
    () => [
      {
        Header: "Lagos",
        accessor: "first",
      },

      {
        Header: "London",
        accessor: "second",
      },

      {
        Header: "Cape Town",
        accessor: "third",
      },

      {
        Header: "Canada",
        accessor: "fourth",
      },
    ],
    []
  );

  const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <div className="Card17Table-container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <td {...column.getHeaderProps()}>
                    <div className="table17-heads">
                      {column.render("Header")}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>
                      <div className="table17-cell">{cell.render("Cell")}</div>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Card17Table;
