import React from "react";

function Card({
  date,
  GlobalData: {
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  },
}) {
  return (
    <div className="tc">
      <div className="bg-light-blue ma1 pa3 shadow-hover br2 dib w-20 tc">
        <h1>Infected</h1>
        <p> {date}</p>
        <p> New Confirmed Cases: {NewConfirmed}</p>
        <p>Total Confirmed Cases: {TotalConfirmed}</p>
      </div>
      <div className="bg-light-green ma1 pa3 shadow-hover br2 dib w-20 tc">
        <h1>Recovered</h1>
        <p> {date}</p>
        <p> New Recovered Cases: {NewRecovered}</p>
        <p>Total Recovered Cases: {TotalRecovered}</p>
      </div>
      <div className="bg-light-pink ma1 pa3 shadow-hover br2 dib w-20 tc">
        <h1>Deaths</h1>
        <p> {date}</p>
        <p> New Death Cases: {NewDeaths}</p>
        <p>Total Death Cases: {TotalDeaths}</p>
      </div>
    </div>
  );
}

export default Card;
