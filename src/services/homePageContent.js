import axios from "axios";

const getContent = (url, params) => {
  const options = {
    params: {
      info: "mini_info",
      sort: "pos.incr",
      list: params?.list,
      limit: params.limit,
      genre: params?.genre,
      year: params?.year,
    },
  };
  return axios.get(url, {
    ...options,
    headers: {
      "X-RapidAPI-Key": "2afc90ffc3msh804dee9144e3a61p1cf9d4jsn8c3743b5825c",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  });
};

export const filterData = (data) => {
  return data.map((m) => {
    return {
      id: m.id,
      imageUrl: m.primaryImage?.url,
      name: m.titleText?.text,
      year: m.releaseDate?.year,
    };
  });
};

export const fetchContent = (params) => {
  return getContent("https://moviesdatabase.p.rapidapi.com/titles", params);
};

export const searchContent = (searchVaue, params) => {
  return getContent(
    `https://moviesdatabase.p.rapidapi.com/titles/search/title/${searchVaue}`,
    params
  );
};

export const getMovieDetails = async (id) => {
  const options = {
    params: {
      info: "custom_info",
    },
  };
  const result = await axios.get(
    `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
    {
      ...options,
      headers: {
        "X-RapidAPI-Key": "2afc90ffc3msh804dee9144e3a61p1cf9d4jsn8c3743b5825c",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    }
  );

  const details = {
    name: result.data.results.titleText.text,
    runtime: toTime(result.data.results.runtime.seconds),
    year: result.data.results.releaseYear.year,
    rating: result.data.results.ratingsSummary.aggregateRating,
    genre: result.data.results.genres.genres.map((g) => g.text),
    plot: result.data.results.plot.plotText.plainText,
    characters: result.data.results.principalCast[0].credits.map((c) => {
      return {
        actorName: c.name.nameText.text,
        charName: c.characters[0].name,
        photo: c.name.primaryImage.url,
      };
    }),
    trailer: result.data.results.trailer,
    director: result.data.results?.directors[0]?.credits[0].name.nameText.text,
  };

  return details;
};

const toTime = (seconds) => {
  var date = new Date(null);
  date.setSeconds(seconds);
  return {
    hour: date.toISOString().substr(11, 2),
    min: date.toISOString().substr(14, 2),
  };
};
