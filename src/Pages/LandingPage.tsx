import React from "react";
import CountryList from "../Components/CountryList.component";
import WeatherDashBoard from "../Components/WeatherDashBoard.component";

const LandingPage = () => {
  return (
    <>
      <div className="pb-5 flex justify-center align-middle text-4xl font-semibold">
        GCReactTest
      </div>
      <div className="pb-5 flex justify-center align-middle">
        <CountryList />
      </div>
      <div className="flex justify-center gap-16">
        <WeatherDashBoard />
      </div>
    </>
  );
};

export default LandingPage;
