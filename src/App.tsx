import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieDetailPage } from "./components/@pages/movie/DetailPage";
import { MovieIndexPage } from "./components/@pages/movie/IndexPage";
import { MovieNewPage } from "./components/@pages/movie/NewPage";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MovieIndexPage />} />
      <Route path="/movie" element={<MovieIndexPage />}/>
      <Route path="/movie/new" element={<MovieNewPage />}/>
      <Route path="/movie/:id" element={<MovieDetailPage />}/>
    </Routes>
  </BrowserRouter>
);
