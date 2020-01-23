import React, { useEffect, useState } from "react";
import { getGermanHolidays } from "../utility/calendar-service";
import Holiday from "./holiday";
import { Link } from "react-router-dom";
import russian from "../images/russian.png";
import italian from "../images/italian.png";
import serbian from "../images/serbian.png";
import uk from "../images/uk.png";

const GermanHoliday = () => {
  const [german, setGerman] = useState([]);

  useEffect(() => {
    getGermanHolidays().then(data => setGerman(data.response.holidays));
  }, []);

  return (
    <>
      <Link to="/">
        <p>Back to main page</p>
      </Link>
      <Link to="/russian">
        <img
          className="icon"
          style={{ height: "50px", margin: "10px" }}
          src={russian}
          alt="RU"
        />
      </Link>
      <Link to="/italian">
        <img
          className="icon"
          style={{ height: "50px", margin: "10px" }}
          src={italian}
          alt="IT"
        />
      </Link>
      <Link to="/serbian">
        <img
          className="icon"
          style={{ height: "50px", margin: "10px" }}
          src={serbian}
          alt="RS"
        />
      </Link>
      <Link to="/uk">
        <img
          className="icon"
          style={{ height: "50px", margin: "10px" }}
          src={uk}
          alt="UK"
        />
      </Link>
      <p>German calendar</p>
      {german.map(holiday => {
        return <Holiday holiday={holiday} key={Math.random()}></Holiday>;
      })}
    </>
  );
};

export default GermanHoliday;
