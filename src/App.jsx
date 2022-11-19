import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DetailPage from "./views/DetailPage";
import Homepage from "./views/Homepage";
import MoviesPage from "./views/MoviesPage";

function App() {
  return (
    <>
      <Header></Header>
      <div className="w-full mt-4 p-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="series" element={<MoviesPage />} />
          <Route path="search/:name" element={<MoviesPage />} />
          <Route path="detail/:id" element={<DetailPage />} />
        </Routes>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
