import React from "react";
import TemperatureIcon from "../Components/icons/TemperatureIcon";
import WindIcon from "../Components/icons/WindIcon";
import HumidityIcon from "./icons/HumidityIcon";
import PressureIcon from "../Components/icons/PressureIcon";
import { useSelector } from "react-redux";
import { WeatherState } from "../redux/Weather/Weather.types";
import { convertToKmPerHr, toTextualDescription } from "../utils/weather.utils";

const WeatherDashBoard = () => {
  const data: WeatherState = useSelector((state: any) => state.getWeather);

  if (!data?.weatherData)
    return <div className="font-semibold">There is no selected country!</div>;

  return (
    <>
      <div
        className="my-4 flex flex-row tracking-wide text-6xl"
        data-testid="temperature-resp"
      >
        <div className="mt-4 pt-5">
          <TemperatureIcon />
        </div>
        <span className="mt-6 font-light text-gray-500 dark:text-white md:mt-10">
          <div>
            <span>{Math.round(data?.weatherData?.main.temp_max)}</span>
            <span className="text-xl">ºC</span>
          </div>
          <span className="mt-1 flex flex-col text-base font-normal tracking-wide text-gray-500 dark:text-gray-400">
            Temperature
          </span>{" "}
        </span>
      </div>
      <div className="border-2 mt-6" />
      <div
        className="my-4 flex flex-row tracking-wide text-6xl"
        data-testid="wind-resp"
      >
        <div className="mt-4 pt-5">
          <div style={{ width: "100px" }}>
            <WindIcon />
          </div>
        </div>
        <span className="mt-6 font-light text-gray-500 dark:text-white md:mt-10 pl-3">
          <div className="flex gap-2">
            <div>
              <span>{convertToKmPerHr(data?.weatherData?.wind.speed)}</span>
              <span className="text-4xl">km/hr </span>
            </div>
            /{" "}
            <span className="text-sm">
              {toTextualDescription(data?.weatherData?.wind.deg)}
            </span>
          </div>
          <span className="mt-1 flex flex-col text-base font-normal tracking-wide text-gray-500 dark:text-gray-400">
            Wind
          </span>
        </span>
      </div>
      <div className="border-2 mt-6" />
      <div
        className="my-4 flex flex-row tracking-wide text-6xl"
        data-testid="humidity-resp"
      >
        <div className="mt-4 first-letter:dark:text-white  pt-5">
          <div>
            <HumidityIcon />
          </div>
        </div>
        <span className="mt-6 font-light text-gray-500 dark:text-white md:mt-10 pl-3">
          <div>
            <span>{data?.weatherData?.main.humidity}</span>
            <span className="text-4xl">% </span>
          </div>

          <span className="mt-1 flex flex-col text-base font-normal tracking-wide text-gray-500 dark:text-gray-400">
            Humidity
          </span>
        </span>
      </div>
      <div className="border-2 mt-6" />
      <div
        className="my-4 flex flex-row tracking-wide text-6xl"
        data-testid="pressure-resp"
      >
        <div className="mt-4 pt-5 px-4">
          <div style={{ width: "100px" }}>
            <PressureIcon />
          </div>
        </div>
        <span className="mt-6 font-light text-gray-500 dark:text-white md:mt-10">
          <div>
            <span>{data?.weatherData?.main.pressure}</span>
            <span className="text-4xl">hPa</span>
          </div>

          <span className="mt-1 flex flex-col text-base font-normal tracking-wide text-gray-500 dark:text-gray-400">
            Pressure
          </span>
        </span>
      </div>
      <div className="border-2 mt-6" />
    </>
  );
};

export default WeatherDashBoard;
