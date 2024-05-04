// imporing Modules

import "./Table.css";
import { useTable } from "react-table";
import * as React from "react";
import Data from "./Data.json";

// Table Function

function Table() {
  const data = React.useMemo(() => Data, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Personal",
        accessor: "personal",
      },

      {
        Header: "Business",
        accessor: "business",
      },

      {
        Header: "Company",
        accessor: "company",
      },

      {
        Header: "Help",
        accessor: "help",
      },

      {
        Header: "Transparency",
        accessor: "transparency",
      },
    ],
    []
  );

  const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  // jsx

  return (
    <>
      <div className="card14-table-container">
        <table {...getTableProps()}>
          <div className="card14-table-inner-container">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <td {...column.getHeaderProps()}>
                      <div className="card14-table-head">
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
                        <div className="card14-table-cell">
                          {cell.render("Cell")}
                        </div>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </div>
        </table>
      </div>
    </>
  );
}

export default Table;
