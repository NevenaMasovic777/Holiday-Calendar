import React, { useState, useEffect } from "react";
import { getEnglishHolidays } from "../utility/calendar-service";
import Holiday from "./holiday";
import { Link } from "react-router-dom";
import russian from "../images/russian.png";
import serbian from "../images/serbian.png";
import german from "../images/german.png";
import italian from "../images/italian.png";

const EnglishHoliday = () => {
  const [english, setEnglish] = useState([]);

  useEffect(() => {
    getEnglishHolidays().then(data => setEnglish(data.response.holidays));
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
      <Link to="/german">
        <img
          className="icon"
          style={{ height: "50px", margin: "10px" }}
          src={german}
          alt="DE"
        />
      </Link>
      <p>English calendar</p>
      {english.map(holiday => {
        return <Holiday holiday={holiday} key={Math.random()}></Holiday>;
      })}
    </>
  );
};

export default EnglishHoliday;
