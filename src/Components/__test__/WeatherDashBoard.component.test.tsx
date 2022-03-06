import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherDashBoard from "../WeatherDashBoard.component";
import { Provider } from "react-redux";
import store from "../../redux/store";
import * as redux from "react-redux";

const dummyWeatherReport = {
  isFetching: false,
  weatherData: {
    coord: {
      lon: -12,
      lat: 20,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n",
      },
    ],
    base: "stations",
    main: {
      temp: 23.34,
      feels_like: 22.04,
      temp_min: 23.34,
      temp_max: 23.34,
      pressure: 1011,
      humidity: 12,
      sea_level: 1011,
      grnd_level: 971,
    },
    visibility: 10000,
    wind: {
      speed: 4.25,
      deg: 33,
      gust: 4.31,
    },
    clouds: {
      all: 0,
    },
    dt: 1646594494,
    sys: {
      country: "MR",
      sunrise: 1646550251,
      sunset: 1646592883,
    },
    timezone: 0,
    id: 2378080,
    name: "Mauritania",
    cod: 200,
  },
  errorMessage: "",
};

describe("<WeatherDashBoard/>", () => {
  it("should render WeatherDashBoard component with out selected country", () => {
    jest.spyOn(redux, "useSelector").mockReturnValue({});

    render(<WeatherDashBoard />);

    const text = screen.getByText("There is no selected country!");

    expect(text).toBeInTheDocument();
  });
  it("should render list of weather reports", () => {
    jest.spyOn(redux, "useSelector").mockReturnValue(dummyWeatherReport);

    const { getByTestId } = render(<WeatherDashBoard />);

    const temperature = getByTestId("temperature-resp");
    const wind = getByTestId("wind-resp");
    const humidity = getByTestId("humidity-resp");
    const pressure = getByTestId("pressure-resp");

    expect(temperature).toBeInTheDocument();
    expect(wind).toBeInTheDocument();
    expect(humidity).toBeInTheDocument();
    expect(pressure).toBeInTheDocument();
  });
});
