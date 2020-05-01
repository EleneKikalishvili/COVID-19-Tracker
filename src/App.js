import React, { useState } from "react";
import CountrySelector from "./components/Selectors/CountrySelector";
import GlobalData from "./components/AllData/GlobalData";
import CountryData from "./components/AllData/CountryData";
function App() {
  const [country, setCountry] = useState("");

  function handleCountryChange(countrySlug) {
    console.log(countrySlug);
    setCountry(countrySlug);
  }

  return (
    <div>
      <h1 className="tc ma5">COVID-19 Tracker</h1>
      <CountrySelector handleCountryChange={handleCountryChange} />
      <h3 className="dark-gray tc">Latest Data</h3>
      <GlobalData countrySlug={country} />
      <CountryData countrySlug={country} />
    </div>
  );
}

export default App;
