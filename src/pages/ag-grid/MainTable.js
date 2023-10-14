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
import { Button } from "react-bootstrap";
import { apiCall } from "../auth/apiCall";
import { fetchAllCarsURL, saveToDbURL } from "../weather/urls";
import { useDispatch } from "react-redux";
import { loadingAction } from "../../store/loadingData";

const MainTable = (props) => {
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
  const dispatch = useDispatch();
  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: "id", filter: true, sortable: true, checkboxSelection: true },
    { field: "make", filter: true, sortable: true },
    { field: "model", filter: true, sortable: true, floatingFilter: true },
    {
      field: "price",
      sortable: true,
      filter: "agNumberColumnFilter",
      editable: true,
      // cellStyle: (params) => {
      //   const price = params.value;
      //   if (price > 32000) {
      //     return { backgroundColor: "green", color: "white" };
      //   } else if (price <= 32000) {
      //     return { backgroundColor: "red", color: "white" };
      //   }
      //   return {}; // No additional styles
      // },
    },
  ]);
  const getRowStyle = (params) => {
    const price = params.data.price;
    if (price > 32000) {
      return { background: "green", color: "white" };
    } else if (price <= 320000) {
      return { background: "red", color: "white" };
    }
    return {}; // No additional styles
  };
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
  // useEffect(() => {
  //   fetch("https://www.ag-grid.com/example-assets/row-data.json")
  //     .then((result) => result.json())
  //     .then((rowData) => {
  //       let rowData2 = rowData.map((row, index) => {
  //         row["id"] = index;
  //         //console.log(row);
  //         return row;
  //       });
  //       setRowData(rowData2);
  //     });
  // }, []);
  const fetchCars = async () => {
    dispatch(loadingAction.toggleLoading(true));
    const data = await apiCall("GET", fetchAllCarsURL);
    if (data.status === "ok") {
      setRowData(data.cars);
    }
    dispatch(loadingAction.toggleLoading(false));
  };
  useEffect(() => {
    fetchCars();
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
  const handleGetSelectedData = async () => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedRows = selectedNodes.map((node) => node.data);
    console.log(selectedRows);
    try {
      const data = await apiCall("POST", saveToDbURL, selectedRows);
    } catch (error) {}
    //setSelectedData(selectedRows);
  };
  return (
    <div className="mainTable">
      {/* Example using Grid's API */}
      <button onClick={exportTable}>Create CSV</button>
      <Button onClick={handleGetSelectedData}>Get Selected Data</Button>
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
          onGridReady={(params) => (gridApi = params.api)}
          getRowStyle={getRowStyle}
        />
      </div>
    </div>
  );
};

export default MainTable;
