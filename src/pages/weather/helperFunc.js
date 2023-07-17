import { MockLocation, currentWeather, fiveDays } from "./mockData";
import { currentWeatherApi, fiveDaysApi, locationApi } from "./urls";
import { apiCall, getCurrentAndFive } from "./weatherAip";

export const apiHelpFunction = async (weatherMain, position, mock) => {
  try {
    if (mock) {
      let key;
      let dataWeather;
      if (!weatherMain) {
        let url =
          locationApi +
          position.coords.latitude +
          "," +
          position.coords.longitude;
        //const dataWeather = await apiCall("GET", null, url);
        dataWeather = MockLocation;
        //  setDataWeather(dataWeather);
        key = dataWeather.Key;
      } else {
        key = weatherMain.Key;
        dataWeather = weatherMain;
        // setDataWeather(weatherMain);
      }
      let currentWeatherUrl = currentWeatherApi.replace("locationKey", key);
      let fiveDaysUrl = fiveDaysApi.replace("locationKey", key);
      const results = [currentWeather, fiveDays, dataWeather];

      //   let results = await getCurrentAndFive("GET", null, [
      //     currentWeatherUrl,
      //     fiveDaysUrl,
      //   ]);
      // console.log("res", results);
      //const fiveDaysData = await apiCall("GET", null, url);
      return results;
    } else {
      let key;
      let dataWeather;
      if (!weatherMain) {
        let url =
          locationApi +
          position.coords.latitude +
          "," +
          position.coords.longitude;
        dataWeather = await apiCall("GET", null, url);

        key = dataWeather.Key;
      } else {
        key = weatherMain.Key;
        dataWeather = weatherMain;
      }
      let currentWeatherUrl = currentWeatherApi.replace("locationKey", key);
      let fiveDaysUrl = fiveDaysApi.replace("locationKey", key);

      let results = await getCurrentAndFive("GET", null, [
        currentWeatherUrl,
        fiveDaysUrl,
      ]);
      results.push(dataWeather);
      return results;
    }
  } catch (e) {
    return null;
  }
};
