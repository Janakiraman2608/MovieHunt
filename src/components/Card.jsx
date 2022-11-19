import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const { id, imageUrl, name, year } = { ...props.movies };
  const navigate = useNavigate();
  return (
    <div
      id={id}
      className="cursor-pointer rounded flex flex-col min-h-[18rem] w-[14rem] border-2 border-solid border-stone-400"
      onClick={(e) => navigate(`../detail/${id}`)}
    >
      <img src={imageUrl} alt="" className="min-h-[80%]" />
      <h4 className="flex flex-col justify-evenly items-center min-h-[20%]">
        <b>{name}</b>
        <b>{year}</b>
      </h4>
    </div>
  );
}

export default Card;
