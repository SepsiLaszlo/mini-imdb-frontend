import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MovieIndexPage } from "./components/@pages/movie/IndexPage"

export const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<MovieIndexPage />}/>
    <Route path="/movie" element={<MovieIndexPage />}/>
      {/* <Route path="teams" element={<Teams />}>
        <Route path=":teamId" element={<Team />} />
        <Route path="new" element={<NewTeamForm />} />
        <Route index element={<LeagueStandings />} />
      </Route>  */}
  </Routes>
</BrowserRouter>

)
