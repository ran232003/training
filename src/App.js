import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./NavigationBar";
import { Navigate, Route, Routes } from "react-router-dom";
import MainTable from "./pages/ag-grid/MainTable";
import MainForm from "./pages/form/MainForm";
import ApiAssignment from "./pages/apiAssignment/ApiAssignment";
import NestedDropDown from "./pages/nestedDropDown/NestedDropDown";
import HomePage from "./pages/weather/HomePage";
import Favorites from "./pages/weather/Favorites";
import { useDispatch } from "react-redux";
import { weatherAction } from "./store/weatherSlice";
import { getFavoritesWeather } from "./pages/weather/urls";
import { apiCall } from "./pages/weather/weatherAip";
import { useEffect } from "react";
import Auth from "./pages/auth/Auth";
import AuthHomePage from "./pages/auth/AuthHomePage";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  const dispatch = useDispatch();
  const getFavorites = async () => {
    let url = getFavoritesWeather;
    const data = await apiCall("GET", null, url);
    console.log("data", data);
    if (data.status === "ok") {
      dispatch(weatherAction.setFavorites(data.favorites));
    }
  };
  useEffect(() => {
    getFavorites();
  }, []);
  return (
    <div className="app">
      <NavigationBar />
      <Routes>
        <Route path="/table" element={<MainTable />} />
        <Route path="/form" element={<MainForm />} />
        <Route path="/apiAssignment" element={<ApiAssignment />} />
        <Route path="/NestedDropDown" element={<NestedDropDown />} />
        <Route path="/weatherHome" element={<HomePage />} />
        <Route path="/weatherFavorites" element={<Favorites />} />
        <Route path="/auth" element={<Auth />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/authHomePage" element={<AuthHomePage />} />
        </Route>

        <Route path="/" element={<Navigate to="/table" />} />
      </Routes>
    </div>
  );
}

export default App;
