import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { createRoot } from "react-dom/client";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import "./MainTable.css";

const MainTable = (props) => {
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: "id", filter: true, sortable: true, checkboxSelection: true },
    { field: "make", filter: true, sortable: true },
    { field: "model", filter: true, sortable: true, floatingFilter: true },
    { field: "price", sortable: true, filter: true, editable: true },
  ]);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
    flex: 1,
  }));

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

  // Example load data from server
  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => {
        let rowData2 = rowData.map((row, index) => {
          row["id"] = index;
          //console.log(row);
          return row;
        });
        setRowData(rowData2);
      });
  }, []);

  // Example using Grid's API
  const buttonListener = useCallback((e) => {
    gridRef.current.api.deselectAll();
  }, []);
  //taking the table and we can export
  let gridApi;
  const onGridReady = (params) => {
    gridApi = params;
    console.log(gridApi);
  };

  const exportTable = () => {
    //using ref we can export the data to csv
    gridRef.current.api.exportDataAsCsv();
    // gridApi.exportDataAsCsv();
    console.log(gridRef);
  };
  return (
    <div className="mainTable">
      {/* Example using Grid's API */}
      <button onClick={exportTable}>Push Me</button>

      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div className="ag-theme-alpine mainTable2">
        <AgGridReact
          ref={gridRef} // Ref for accessing Grid's API
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="multiple" // Options - allows click selection of rows
          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};

export default MainTable;
