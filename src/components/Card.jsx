import React from "react";
import { Link } from "react-router-dom";

export default function Card({ shows }) {
  console.log(shows);
  return (
    <div className="show-container">
      {shows.map((elem) => {
        return (
          <div className="show-card" key={elem._id}>
            <img
              src={elem.image}
              alt="show profile"
              // style={{ width: "150px" }}
              className="show-img"
            />
            <Link to={`/shows/${elem._id}`} className="show-title-link">
              {elem.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
