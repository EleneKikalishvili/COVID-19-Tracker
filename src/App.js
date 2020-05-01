import React, { useState } from "react";
import CountrySelector from "./components/Selectors/CountrySelector";
import GlobalData from "./components/AllData/GlobalData";

function App() {
  const [country, setCountry] = useState("");

  function handleCountryChange(countrySlug) {
    console.log(countrySlug);
    setCountry(countrySlug);
  }

  return (
    <div>
      <CountrySelector handleCountryChange={handleCountryChange} />
      <GlobalData countrySlug={country} />
    </div>
  );
}

export default App;
