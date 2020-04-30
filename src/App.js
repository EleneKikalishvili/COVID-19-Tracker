import React from "react";
import CountrySelector from "./components/Selectors/CountrySelector";
import GlobalData from "./components/AllData/GlobalData";
import "./App.module.css";

function App() {
  return (
    <div className="App">
      <CountrySelector />
      <GlobalData />
    </div>
  );
}

export default App;
