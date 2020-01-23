import React, { useState, useEffect } from "react";
import { getAllHolidays } from "../utility/calendar-service";
import Holiday from "./holiday";
import { Link } from "react-router-dom";
import russian from "../images/russian.png";
import italian from "../images/italian.png";
import german from "../images/german.png";
import uk from "../images/uk.png";

const HolidayList = () => {
  const [holidays, setHoldidays] = useState([]);

  useEffect(() => {
    getAllHolidays().then(data => setHoldidays(data.response.holidays));
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
      <Link to="/german">
        <img
          className="icon"
          style={{ height: "50px", margin: "10px" }}
          src={german}
          alt="DE"
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
      <p>Serbian calendar</p>
      {holidays.map(holiday => {
        return <Holiday holiday={holiday} key={Math.random()}></Holiday>;
      })}
    </>
  );
};

export default HolidayList;
