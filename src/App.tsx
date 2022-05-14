import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieDetailPage } from "./components/@pages/movie/DetailPage";
import { MovieIndexPage } from "./components/@pages/movie/IndexPage";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MovieIndexPage />} />
      <Route path="/movie" element={<MovieIndexPage />}/>
      <Route path="/movie/:id" element={<MovieDetailPage />}/>
    </Routes>
  </BrowserRouter>
);
