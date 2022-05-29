import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Movies.css";
import Item from "../components/Item";
import Plus from "../icons/Plus";
import Axios from "axios";

const Movies = () => {
  const [movie, setMovie] = useState("");

  let navigate = useNavigate();
  const data = [
    {
      movie_id: "1",
      title: "THOR: LOVE AND THUNDER",
      release_date: "05/31/2022",
      directors: ["Joss Whedon", "Jamed Webb", "Danseeee"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@.jpg",
    },
  ];

  useEffect(() => {
    const getData = async () => {
      Axios.get("http://127.0.0.1:5000/display").then(
        (res) => (data = res.data)
      );
    };
    getData();
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
        />
        <div
          onClick={async () => {
            await Axios.post("http://127.0.0.1:5000/add", { movie }).then(
              (res) => {
                if (res.data === "1") {
                } else {
                  navigate("/movies");
                }
              }
            );
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
            />
          );
        })}
        <div className="movies-timeline-line" />
      </div>
      <div
        onClick={async () => {
          await Axios.post("http://127.0.0.1:5000/logout").then((res) => {
            if (res.data === "0") navigate("/");
          });
        }}
        className="movies-logout"
      >
        Logout (musaasad2020)
      </div>
    </div>
  );
};

export default Movies;
