import "./Movies.css";
import Item from "../components/Item";
import Plus from "../icons/Plus";

const Movies = () => {
  const data = [
    {
      movie_id: "1",
      title: "THOR: LOVE AND THUNDER",
      release_date: "05/31/2022",
      directors: ["Joss Whedon", "Jamed Webb", "Danseeee"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY150_CR0,0,101,150_.jpg",
    },
    {
      movie_id: "1",
      title: "The Avengers",
      release_date: "05/31/2022",
      directors: ["Joss Whedon"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY150_CR0,0,101,150_.jpg",
    },
    {
      movie_id: "1",
      title: "The Avengers",
      release_date: "05/31/2022",
      directors: ["Joss Whedon"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY150_CR0,0,101,150_.jpg",
    },
  ];

  return (
    <div className="movies-main">
      <div className="movies-search">
        <input
          className="movies-search-input"
          type="text"
          placeholder="movie name"
        />
        <div className="movies-search-button">
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
      <div className="movies-logout">Logout (musaasad2020)</div>
    </div>
  );
};

export default Movies;
