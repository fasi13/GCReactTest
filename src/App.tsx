import React from "react";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="grid grid-cols-6 gap-4 py-44">
      <div className="col-start-2 col-span-4">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
