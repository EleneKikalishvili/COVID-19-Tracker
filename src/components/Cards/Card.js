import React from "react";

function Card({ date, GlobalData, CountryLatestData, selected }) {
  let data = null;

  if (CountryLatestData && selected !== "Global") {
    data = CountryLatestData[0];
  } else {
    data = GlobalData;
  }

  return (
    <div className="tc">
      <div className="bg-light-blue ma1 pa3 shadow-hover br2 dib w-20 tc">
        <h1>Infected</h1>
        <p> {date}</p>
        <p> New Confirmed Cases: {data.NewConfirmed}</p>
        <p>Total Confirmed Cases: {data.TotalConfirmed}</p>
      </div>
      <div className="bg-light-green ma1 pa3 shadow-hover br2 dib w-20 tc">
        <h1>Recovered</h1>
        <p> {date}</p>
        <p> New Recovered Cases: {data.NewRecovered}</p>
        <p>Total Recovered Cases: {data.TotalRecovered}</p>
      </div>
      <div className="bg-light-pink ma1 pa3 shadow-hover br2 dib w-20 tc">
        <h1>Deaths</h1>
        <p> {date}</p>
        <p> New Death Cases: {data.NewDeaths}</p>
        <p>Total Death Cases: {data.TotalDeaths}</p>
      </div>
    </div>
  );
}

export default Card;
