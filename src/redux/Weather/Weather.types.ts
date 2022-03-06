export enum WeatherTypes {
  FETCH_WEATHER_START = "FETCH_WEATHER_START",
  FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS",
  FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE",
}

export interface WeatherState {
  isFetching?: boolean;
  weatherData: Weather | null;
  errorMessage?: string;
}
export interface Wind {
  speed: number;
  gust: number;
  deg: number;
}
export interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_min: number;
  temp_max: number;
}
export interface Weather {
  main: Main;
  wind: Wind;
}

export interface WeatherFetchAction {
  type: string;
  payload: Weather;
}
