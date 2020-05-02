import React, { useState, useEffect } from "react";
import DetailedCard from "../Cards/DetailedCard";
import axios from "axios";

function CountryData({ countrySlug }) {
  const [CountryData, setCountryData] = useState(null);
  const [count, setCount] = useState(20);
  useEffect(() => {
    if (countrySlug)
      axios
        .get(`https://api.covid19api.com/total/dayone/country/${countrySlug}`)
        .then((response) => {
          if (response["data"] && response.data.length) {
            console.log(response.data.slice(0, count));
            setCountryData(response.data.slice(0, count));
          }
        })
        .catch((err) => {
          console.error("[CountryData.js]", err.message);
        });
  }, [count, countrySlug]);

  let content = null;
  if (CountryData && countrySlug !== "Global") {
    content = CountryData.map((ob, i) => {
      return (
        <DetailedCard
          key={ob.Date}
          confirmed={ob.Confirmed}
          deaths={ob.Deaths}
          recovered={ob.Recovered}
          active={ob.Active}
          date={ob.Date}
          day={i + 1}
        />
      );
    });
  } else {
    content = (
      <h3 className=" bg-light-gray tc br1 pa3 tc dib">No Data To Show</h3>
    );
  }

  return (
    <div className="tc ma4 ">
      <p className="mid-gray">20 days will be displayed by default</p>
      <div className="flex justify-center">
        <button onClick={() => setCount(count + 4)}>Display More</button>
        <p className="ma2">{count}</p>
      </div>
      <h2>{countrySlug.toUpperCase()}</h2>
      {content}
    </div>
  );
}

export default CountryData;
