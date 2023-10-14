import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
//DirectionsRenderer to make the marks of the directions
//MarkerF show spot on the map
import { useDispatch } from "react-redux";
import { loadingAction } from "../../store/loadingData";

// api: AIzaSyA8MsOO8Q03SFkqydwlQKpUTteyM_-EBOk
//AIzaSyDhijn0VNxcobZCN7Rt7-EOWqS_xBU32lg
const GoogleMapPage = () => {
  const [directions, setDirections] = useState(null);

  const [location, setLocation] = useState(null);
  ///**@type google.maps.Map * give us option to use type in js
  const [map, setMap] = useState(/**@type google.maps.Map */ (null));

  const dispatch = useDispatch();

  //Marker to see on the map your location
  //useJsApiLoader => if the map was loaded
  //libraries:["places"] adding libery to the google map component
  //places: we will use for autoComplete
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDhijn0VNxcobZCN7Rt7-EOWqS_xBU32lg",
    libraries: ["places"],
  });
  const handleCenter = () => {
    map.panTo(location);
  };
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lng: position.coords.longitude,
        lat: position.coords.latitude,
      });
    });
  };
  useEffect(() => {
    getLocation();
  }, []);
  if (!isLoaded || !location) {
    dispatch(loadingAction.toggleLoading(true));
    return (
      <div>
        <h1>page is loading</h1>
      </div>
    );
  } else {
    dispatch(loadingAction.toggleLoading(false));
    const containerStyle = {
      width: "100vw",
      height: "100vh",
    };

    const center = {
      lat: 31.15,
      lng: 34.47,
    };
    console.log("in father", directions);
    return (
      <div>
        <Menu setDirections={setDirections} handleCenter={handleCenter} />
        <div className="mainMaps">
          <div className="maps">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={location}
              zoom={10}
              onLoad={(map) => {
                setMap(map);
              }}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <MarkerF position={location} />
              {directions ? (
                <DirectionsRenderer directions={directions} />
              ) : null}
            </GoogleMap>
          </div>
        </div>
      </div>
    );
  }
};

export default GoogleMapPage;
