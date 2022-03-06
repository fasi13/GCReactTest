import { combineReducers } from "redux";

import getCountryListReducer from "./CountryList/CountryList.reducer";
import getWeatherReducer from "./Weather/Weather.reducer";

const rootReducer = combineReducers({
  getCountryList: getCountryListReducer,
  getWeather: getWeatherReducer,
});

export default rootReducer;
