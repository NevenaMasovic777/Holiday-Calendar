import React from "react";
import { Link } from "react-router-dom";
import russian from "../images/russian.png";
import serbian from "../images/serbian.png";
import german from "../images/german.png";
import italian from "../images/italian.png";
import uk from "../images/uk.png";

const MainPage = () => {
  return (
    <div className="main">
      <div className="intro">
        <p>Have you ever wondered about festivities in other countries?</p>
        <p>
          Here you can check important dates and holidays of the countries
          listed below.
        </p>
      </div>

      <div className="links">
        <Link to="/serbian">
          <img
            className="icon"
            style={{ height: "50px", width: "50px", margin: "10px" }}
            src={serbian}
            alt="RS"
          />
        </Link>
        <Link to="/russian">
          <img
            className="icon"
            style={{ height: "50px", width: "50px", margin: "10px" }}
            src={russian}
            alt="RU"
          />
        </Link>
        <Link to="/italian">
          <img
            className="icon"
            style={{ height: "50px", width: "50px", margin: "10px" }}
            src={italian}
            alt="IT"
          />
        </Link>
        <Link to="/german">
          <img
            className="icon"
            style={{ height: "50px", width: "50px", margin: "10px" }}
            src={german}
            alt="DE"
          />
        </Link>
        <Link to="/uk">
          <img
            className="icon"
            style={{ height: "50px", width: "50px", margin: "10px" }}
            src={uk}
            alt="UK"
          />
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
