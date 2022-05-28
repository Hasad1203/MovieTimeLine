import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./screens/Login";
import Movies from "./screens/Movies";
import Movie from "./screens/Movie";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
