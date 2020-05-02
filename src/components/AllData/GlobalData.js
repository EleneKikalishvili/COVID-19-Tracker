import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Cards/Card";

function GlobalData({ countrySlug }) {
  const [loading, setLoading] = useState(true);
  const [GlobalData, setGlobalData] = useState([]);
  const [CountryLatestData, setCountryLatestData] = useState(null);
  const [date, setCurrentDate] = useState("");

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((response) => {
        setGlobalData(response.data.Global);
        setCurrentDate(response.data.Date);
        const countryObj = response.data.Countries.filter((obj) => {
          return obj.Slug === countrySlug;
        });
        setLoading(false);
        if (countrySlug && countrySlug !== "Global") {
          setCountryLatestData(countryObj);
        }
      })
      .catch((err) => {
        console.error("[GlobalData.js]", err.message);
      });
  }, [countrySlug]);

  return (
    <div className="tc">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Card
          selected={countrySlug}
          date={date}
          GlobalData={GlobalData}
          CountryLatestData={CountryLatestData}
        />
      )}
    </div>
  );
}

export default GlobalData;
