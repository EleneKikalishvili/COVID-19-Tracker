import React, { useState, useEffect } from "react";
import axios from "axios";

function CountrySelector({ handleCountryChange }) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/countries")
      .then((response) => {
        setdata(response.data);
      })
      .catch((err) => {
        console.error("[CountrySelector.jsx]", err.message);
      });
  }, [setdata]);

  const countries = data.map((obj) => {
    return (
      <option key={obj.ISO2} value={obj.Slug}>
        {obj.Country}
      </option>
    );
  });

  return (
    <div className="tc mt5 ">
      <select
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="Global">Global</option>
        {countries}
      </select>
      <p className="mid-gray tc mt4">For detailed data choose country</p>
      <p className="mid-gray tc">
        Some countries may not have detailed information
      </p>
    </div>
  );
}

export default CountrySelector;
