import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Categories from "../components/Categories";
import List from "../components/List";
import {
  fetchContent,
  filterData,
  searchContent,
} from "../services/homePageContent";

function MoviesPage() {
  const [movieContent, setMovieContent] = useState([]);
  const [choice, setChoice] = useState(null);
  let location = useLocation();
  const param = useParams();

  useEffect(() => {
    const pageName = location.pathname.includes("movies")
      ? "most_pop_movies"
      : "most_pop_series";

    if (!location.pathname.includes("search")) {
      fetchContent({
        list: pageName,
        limit: 20,
        year: choice?.year,
        genre: choice?.genre,
      }).then((result) => {
        console.log(result);
        setMovieContent(filterData(result.data.results));
      });
    } else {
      searchContent(param.name, {
        limit: 20,
        year: choice?.year,
        genre: choice?.genre,
      }).then((result) => {
        console.log(result);
        setMovieContent(filterData(result.data.results));
      });
    }
  }, [location, choice, param.name]);

  return (
    <div>
      <Categories choice={choice} update={setChoice}></Categories>
      <List content={movieContent}></List>
    </div>
  );
}

export default MoviesPage;
