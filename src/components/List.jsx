import React from "react";
import Card from "./Card";

function List({ content }) {
  return (
    <div className="m-4 flex justify-evenly gap-4 flex-wrap">
      {content.map((c, i) => (
        <Card key={i} movies={c}></Card>
      ))}
    </div>
  );
}

export default List;
