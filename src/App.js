import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./NavigationBar";
import { Navigate, Route, Routes } from "react-router-dom";
import MainTable from "./pages/ag-grid/MainTable";
import MainForm from "./pages/form/MainForm";
import ApiAssignment from "./pages/apiAssignment/ApiAssignment";
import NestedDropDown from "./pages/nestedDropDown/NestedDropDown";
import HomePage from "./pages/weather/HomePage";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Routes>
        <Route path="/table" element={<MainTable />} />
        <Route path="/form" element={<MainForm />} />
        <Route path="/apiAssignment" element={<ApiAssignment />} />
        <Route path="/NestedDropDown" element={<NestedDropDown />} />
        <Route path="/weatherHome" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/table" />} />
      </Routes>
    </div>
  );
}

export default App;
