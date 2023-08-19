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
import Loading from "./components/LoadingSpinners";
import NotFound from "./pages/NotFound";
import PrivateAuth from "./components/PrivateAuth";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import ToastMessage from "./components/ToastMessage";
import Download from "./pages/files/Download";
import Upload from "./pages/files/Upload";

function App() {
  const dispatch = useDispatch();
  const getFavorites = async () => {
    try {
      let url = getFavoritesWeather;
      const data = await apiCall("GET", null, url);
      console.log("data", data);
      if (data.status === "ok") {
        dispatch(weatherAction.setFavorites(data.favorites));
      }
    } catch (error) {}
  };
  useEffect(() => {
    //getFavorites();
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
        <Route path="/download" element={<Download />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/reset/:userToken" element={<ResetPassword />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route element={<PrivateAuth />}>
          <Route path="/auth/:status" element={<Auth />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/authHomePage" element={<AuthHomePage />} />
        </Route>

        <Route path="/" element={<Navigate to="/table" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Loading />
      <ToastMessage />
    </div>
  );
}

export default App;
