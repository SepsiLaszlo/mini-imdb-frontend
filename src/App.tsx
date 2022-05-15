import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CategoryDetailPage } from "./components/@pages/categories/DetailPage";
import { CategoryIndexPage } from "./components/@pages/categories/IndexPage";
import { CategoryNewPage } from "./components/@pages/categories/NewPage";
import { MovieDetailPage } from "./components/@pages/movie/DetailPage";
import { MovieIndexPage } from "./components/@pages/movie/IndexPage";
import { MovieNewPage } from "./components/@pages/movie/NewPage";
import { LoginPage } from "./components/@pages/user/LoginPage";
import { ProfilePage } from "./components/@pages/user/ProfilePage";
import { RegistrationPage } from "./components/@pages/user/RegistrationPage";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MovieIndexPage />} />
      <Route path="/movie" element={<MovieIndexPage />}/>
      <Route path="/movie/new" element={<MovieNewPage />}/>
      <Route path="/movie/:id" element={<MovieDetailPage />}/>
      <Route path="/category/" element={<CategoryIndexPage />}/>
      <Route path="/category/new" element={<CategoryNewPage />}/>
      <Route path="/category/:id" element={<CategoryDetailPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/registration" element={<RegistrationPage />}/>
      <Route path="/profile" element={<ProfilePage />}/>
    </Routes>
  </BrowserRouter>
);
