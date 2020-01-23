import React, { useState, useEffect } from "react";
import { getItalianHolidays } from "../utility/calendar-service";
import Holiday from "./holiday";
import { Link } from "react-router-dom";
import russian from "../images/russian.png";
import serbian from "../images/serbian.png";
import german from "../images/german.png";
import uk from "../images/uk.png";

const ItalianHoliday = () => {
  const [italian, setItalian] = useState([]);

  useEffect(() => {
    getItalianHolidays().then(data => setItalian(data.response.holidays));
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
      <Link to="/uk">
        <img
          className="icon"
          style={{ height: "50px", margin: "10px" }}
          src={uk}
          alt="UK"
        />
      </Link>
      <p>Italian calendar</p>
      {italian.map(holiday => {
        return <Holiday holiday={holiday} key={Math.random()}></Holiday>;
      })}
    </>
  );
};

export default ItalianHoliday;
