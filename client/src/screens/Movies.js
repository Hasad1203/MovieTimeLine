import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./Movies.css";
import Item from "../components/Item";
import Plus from "../icons/Plus";
import Axios from "axios";

const Movies = () => {
  const [movie, setMovie] = useState("");
  const [data, setData] = useState([]);

  let navigate = useNavigate();
  let location = useLocation();
  let username = location.state ? location.state.metadata : null;

  useEffect(() => {
    const getData = async () => {
      Axios.get("/display").then((res) =>
        res.data !== "1" ? setData(res.data) : null
      );
    };
    getData();

    if (!username) navigate("/");
  }, []);

  return (
    <div className="movies-main">
      <div className="movies-search">
        <input
          onChange={(e) => {
            setMovie(e.target.value);
          }}
          className="movies-search-input"
          type="text"
          placeholder="movie name"
          value={movie}
        />
        <div
          onClick={async () => {
            await Axios.post("/add", { movie }).then((res) => {
              if (res.data === "1") {
              } else {
                setMovie("");
                setData(res.data);
              }
            });
          }}
          className="movies-search-button"
        >
          <Plus className="movies-search-icon" />
        </div>
      </div>
      <div className="movies-title">your movie list:</div>
      <div className="movies-timeline">
        {data.map((item) => {
          return (
            <Item
              movie_id={item.movie_id}
              title={item.title}
              release_date={item.release_date}
              directors={item.directors}
              cover_url={item.cover_url}
              onClick={async () => {
                await Axios.post("/delete", { movie_id: item.movie_id }).then(
                  (res) => {
                    return res.data === "1" ? setData([]) : setData(res.data);
                  }
                );
              }}
            />
          );
        })}
        <div className="movies-timeline-line" />
      </div>
      <div
        onClick={async () => {
          await Axios.post("/logout").then((res) => {
            if (res.data === "0") navigate("/");
          });
        }}
        className="movies-logout"
      >
        Logout ({username})
      </div>
    </div>
  );
};

export default Movies;
