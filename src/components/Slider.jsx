import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

function Slider(props) {
  const { heading, movies } = { ...props };
  const navigate = useNavigate();

  return (
    <div className="rounded bg-gray-600 p-2 m-6">
      <div className="flex justify-between p-3 pb-4">
        <h2 className="text-3xl">
          <b>{heading}</b>
        </h2>
        <p className="cursor-pointer"
          onClick={(e) =>
            navigate(heading.toLowerCase().includes("series") ? "/series" : "/movies")
          }
        >
          View all
        </p>
      </div>
      <div className="flex justify-around">
        {movies &&
          movies.length > 0 &&
          movies.map((e, i) => <Card key={i} movies={e} />)}
      </div>
    </div>
  );
}

export default Slider;
