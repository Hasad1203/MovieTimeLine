import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./screens/Login";
import Movies from "./screens/Movies";
import Register from "./screens/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
