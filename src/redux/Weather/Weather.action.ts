import { openNotificationWithIcon } from "../../utils/weather.utils";
import { getWeather } from "../services/WeatherService";
import { WeatherTypes } from "./Weather.types";

export const fetchWeatherStart = () => ({
  type: WeatherTypes.FETCH_WEATHER_START,
});

export const fetchWeatherSuccess = (data: any) => ({
  type: WeatherTypes.FETCH_WEATHER_SUCCESS,
  payload: data,
});

export const fetchWeatherFailure = (errorMessage: string) => ({
  type: WeatherTypes.FETCH_WEATHER_FAILURE,
  payload: errorMessage,
});

export const fetchWeatherStartAsync = (country: string) => {
  return (dispatch: any) => {
    const weather = getWeather(country);
    dispatch(fetchWeatherStart());
    weather
      .then((data) => {
        dispatch(fetchWeatherSuccess(data));
      })
      .catch((error) => {
        openNotificationWithIcon("error", "Error", error.response.data.message);
        dispatch(fetchWeatherFailure(error.message));
      });
  };
};
