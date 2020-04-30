import React, { useState, useEffect } from "react";
import axios from "axios";

function CountrySelector() {
  const [data, setdata] = useState([]);
  const [slug, setSlug] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/countries")
      .then((response) => {
        const slugs = response.data.map((obj) => {
          return obj.Slug;
        });
        setdata(response.data);
        setSlug(slugs);
      })
      .catch((err) => {
        console.error("[CountrySelector.jsx]", err.message);
      });
  }, []);

  const countries = data.map((obj) => {
    return <option key={obj.ISO2}>{obj.Country}</option>;
  });

  return (
    <div className="tc ma5 ">
      <select>
        <option value="Global">Global</option>
        {countries}
      </select>
    </div>
  );
}

export default CountrySelector;
