import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/homePageContent";

const DetailPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  console.log(id);
  useEffect(() => {
    getMovieDetails(id).then((res) => setDetails(res));
  }, []);
  console.log(details);
  return (
    <>
      {details && (
        <div className="flex">
          <div className="flex-1 p-3">
            <h2 className="p-2">{details.name}</h2>
            <hr></hr>
            <div className="p-2">
              <span className="pr-3">{`${details.runtime.hour}hr - ${details.runtime.min}minutes`}</span>{" "}
              |<span className="pr-3 pl-3">{details.year}</span>|
              <span className="pl-3">{details.rating}</span>
            </div>
            <div className="p-2 mb-4">
              {details.genre.map((g,i) => (
                <span key={i} className="bg-blue-500 rounded p-1 mr-3 text-center">
                  {g}
                </span>
              ))}
            </div>
            <i>{details.plot}</i>
            <div className="m-2 flex gap-3 flex-wrap justify-between mb-4 mt-4">
              {details.characters.map((c,i) => {
                return (
                  <div key={i} className="flex w-30 p-2 ">
                    <div className="w-20 h-20 overflow-hidden rounded-full">
                      {" "}
                      <img src={c.photo} alt="" />
                    </div>
                    <div className="text-center ml-3 text-sm self-center">
                      <p>{c.actorName}</p> <h4>as</h4> <p>{c.charName}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            { details.director && <h4 className="inline">Director: {details.director}</h4>}
          </div>
          <div className="flex-1 text-center">
            <iframe
              title="you"
              className="w-full h-full"
              src={details.trailer}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
