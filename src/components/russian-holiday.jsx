import React, { useEffect, useState } from "react";
import { getRussianHolidays } from "../utility/calendar-service";
import Holiday from "./holiday";
import { Link } from "react-router-dom";
import italian from "../images/italian.png";
import serbian from "../images/serbian.png";
import german from "../images/german.png";
import uk from "../images/uk.png";

const RussianHolidays = () => {
  const [russian, setRussian] = useState([]);

  useEffect(() => {
    getRussianHolidays().then(data => setRussian(data.response.holidays));
  }, []);

  console.log(russian);

  return (
    <>
      <Link to="/">
        <p>Back to main page</p>
      </Link>
      <Link to="/serbian">
        <img
          className="icon"
          style={{ height: "50px", margin: "10px" }}
          src={serbian}
          alt="RU"
        />
      </Link>
      <Link to="/italian">
        <img
          className="icon"
          style={{ height: "50px", margin: "10px" }}
          src={italian}
          alt="RU"
        />
      </Link>
      <Link to="/german">
        <img
          className="icon"
          style={{ height: "50px", margin: "10px" }}
          src={german}
          alt="RU"
        />
      </Link>
      <Link to="/uk">
        <img
          className="icon"
          style={{ height: "50px", margin: "10px" }}
          src={uk}
          alt="RU"
        />
      </Link>
      <p>Russian calendar</p>
      {russian.map(holiday => {
        return <Holiday holiday={holiday} key={Math.random()}></Holiday>;
      })}
    </>
  );
};

export default RussianHolidays;
