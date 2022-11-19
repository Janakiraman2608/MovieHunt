import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import {
  fetchBoxOfficeMovies,
  fetchContent,
  fetchPopularMovies,
  fetchPopularSeries,
  fetchTopRatedMovies,
  fetchTopRatedSeries,
  filterData,
} from "../services/homePageContent";

const homeCategories = [
  "Most Popular Movies",
  "Top Box Office",
  "Top Rated Movies",
  "Most Popular Series",
  "Top Rated Series",
];

function Homepage() {
  const [homeContent, setHomeContent] = useState([]);

  useEffect(() => {
    const fetchHomePageContent = () => {
      let content = [
        fetchContent({
          list: "most_pop_movies",
          limit: 5,
        }),
        fetchContent({
          list: "top_boxoffice_200",
          limit: 5,
        }),
        fetchContent({
          list: "top_rated_250",
          limit: 5,
        }),
        fetchContent({
          list: "most_pop_series",
          limit: 5,
        }),
        fetchContent({
          list: "top_rated_series_250",
          limit: 5,
        }),
      ];

      let data = [];
      Promise.allSettled(content).then((results) => {
        results.forEach((result) => {
          data.push(filterData(result.value.data.results));
        });
        setHomeContent(data);
      });
    };

    fetchHomePageContent();
  }, []);

  return (
    <>
      {homeCategories.map((h, i) => {
        return <Slider key={h} heading={h} movies={homeContent[i]}></Slider>;
      })}
    </>
  );
}

export default Homepage;
