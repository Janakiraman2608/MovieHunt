import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let searchTimeout = null;

  const getList = (e) => {
    if (searchTimeout) return;
    searchTimeout = setTimeout(() => {
      navigate(`/search/${e.target.value}`);
      clearTimeout(searchTimeout);
    }, 1500);
  };

  useEffect(() => {
    if (!location.pathname.includes("search")) {
      document.getElementById("search").value = "";
    }
  }, [location]);

  return (
    <div className="flex-1">
      <input
        id="search"
        type="text"
        className="p-2 rounded"
        placeholder="Search..."
        onChange={(e) => getList(e)}
      ></input>
    </div>
  );
};

export default Search;
