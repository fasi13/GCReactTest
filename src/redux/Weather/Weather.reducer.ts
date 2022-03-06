import {
  WeatherFetchAction,
  WeatherTypes,
  WeatherState,
} from "./Weather.types";

const initState: WeatherState = {
  isFetching: false,
  weatherData: null,
  errorMessage: "",
};

const getWeatherReducer = (state = initState, action: any): WeatherState => {
  switch (action.type) {
    case WeatherTypes.FETCH_WEATHER_START:
      return {
        ...state,
        isFetching: true,
      };
    case WeatherTypes.FETCH_WEATHER_SUCCESS:
      const payload = (action as WeatherFetchAction).payload;
      return {
        ...state,
        isFetching: false,
        weatherData: payload,
      };

    case WeatherTypes.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: "Error Message",
      };

    default:
      return state;
  }
};

export default getWeatherReducer;
