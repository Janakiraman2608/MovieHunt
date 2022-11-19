import React, { useState } from "react";

const genre = [
  "Action",
  "Drama",
  "Horror",
  "Comedy",
  "Crime",
  "Adventure",
  "Fantasy",
  "Thriller",
  "Animation",
  "Sci-Fi",
  "Sport",
];

const year = Array(13)
  .fill()
  .map((e, index) => 2022 - index);

function Categories({ choice, update }) {
  console.log(choice);

  return (
    <div>
      <div>
        {genre.map((g) => {
          return (
            <input
              key={g}
              type="button"
              value={g}
              className={`text-cyan-50 rounded hover:bg-blue-400 p-1 m-1 mt-0 ${
                choice?.genre === g ? "bg-slate-600" : null
              }`}
              onClick={(e) => {
                const genre = e.target.value;
                if (choice?.genre === genre)
                  return update({ ...choice, genre: undefined });
                update({ ...choice, genre });
              }}
            />
          );
        })}
      </div>
      <div>
        {year.map((y) => {
          return (
            <input
              key={y}
              type="button"
              value={parseInt(y)}
              className={`text-cyan-50 rounded hover:bg-blue-400 p-1 m-1 mt-0 ${
                choice?.year == y ? "bg-slate-600" : null
              }`}
              onClick={(e) => {
                const yearVal = e.target.value;
                if (choice?.year === yearVal)
                  return update({ ...choice, year: undefined });
                update({ ...choice, year: yearVal });
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
