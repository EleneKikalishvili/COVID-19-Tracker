import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Cards/Card";

function GlobalData(props) {
  const [GlobalData, setGlobalData] = useState([]);
  const [date, setCurrentDate] = useState("");

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((response) => {
        console.log(response.data.Global);
        console.log(response.data.Date);
        setGlobalData(response.data.Global);
        setCurrentDate(response.data.Date);
      })
      .catch((err) => {
        console.error("[GlobalData.jsx]", err.message);
      });
  }, []);

  return (
    <div>
      <Card GlobalData={GlobalData} date={date} />
    </div>
  );
}

export default GlobalData;
