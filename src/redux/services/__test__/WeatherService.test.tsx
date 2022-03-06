import React from "react";
import axios from "axios";
import { getCountryList } from "../CountryListService";
import { waitFor } from "@testing-library/dom";
import { getWeather } from "../WeatherService";

const dummyWeatherReport = {
  coord: {
    lon: 42.5,
    lat: 11.5,
  },
  weather: [
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02n",
    },
  ],
  base: "stations",
  main: {
    temp: 22.05,
    feels_like: 21.98,
    temp_min: 22.05,
    temp_max: 22.05,
    pressure: 1013,
    humidity: 64,
    sea_level: 1013,
    grnd_level: 944,
  },
  visibility: 10000,
  wind: {
    speed: 6.63,
    deg: 82,
    gust: 9.52,
  },
  clouds: {
    all: 23,
  },
  dt: 1646589537,
  sys: {
    country: "DJ",
    sunrise: 1646536965,
    sunset: 1646580012,
  },
  timezone: 10800,
  id: 223816,
  name: "Djibouti",
  cod: 200,
};
describe("WeatherServices", () => {

  beforeAll(() => {
    jest.spyOn(axios, "request").mockResolvedValue(dummyWeatherReport);
  });
  it('should return weather response  "', async () => {
    const resp = await getWeather("Republic of Djibouti");
    waitFor(() => {
      expect(resp).toBeCalledWith(dummyWeatherReport);
    });
  });
});
