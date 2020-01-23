import React from "react";

const Holiday = ({ holiday }) => {
  let {
    name,
    description,
    date: {
      datetime: { year, month, day }
    }
  } = holiday;

  return (
    <div className="holiday-container">
      <div className="holiday">
        <p>
          <b style={{ color: "red" }}>{`Date: ${day} / ${month} / ${year}`}</b>
        </p>
        <p>{name}</p>
        <p>Description: </p>
        <p>{description == null ? `No description` : description}</p>
      </div>
    </div>
  );
};

export default Holiday;
