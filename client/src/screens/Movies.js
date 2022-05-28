import "./Movies.css";
import Item from "../components/Item";
import Search from "../icons/Search";

const Movies = () => {
  const data = [
    {
      movie_id: "1",
      title: "The Avengers",
      release_data: "05/30/2022",
      directors: ["Joss Whedon"],
      plot_summary:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY150_CR0,0,101,150_.jpg",
    },
    {
      movie_id: "1",
      title: "The Avengers",
      release_data: "05/30/2022",
      directors: ["Joss Whedon"],
      plot_summary:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY150_CR0,0,101,150_.jpg",
    },
    {
      movie_id: "1",
      title: "The Avengers",
      release_data: "05/30/2022",
      directors: ["Joss Whedon"],
      plot_summary:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY150_CR0,0,101,150_.jpg",
    },
    {
      movie_id: "1",
      title: "The Avengers",
      release_data: "05/30/2022",
      directors: ["Joss Whedon"],
      plot_summary:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY150_CR0,0,101,150_.jpg",
    },
    {
      movie_id: "1",
      title: "The Avengers",
      release_data: "05/30/2022",
      directors: ["Joss Whedon"],
      plot_summary:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY150_CR0,0,101,150_.jpg",
    },
    {
      movie_id: "1",
      title: "The Avengers",
      release_data: "05/30/2022",
      directors: ["Joss Whedon"],
      plot_summary:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY150_CR0,0,101,150_.jpg",
    },
    {
      movie_id: "1",
      title: "The Avengers",
      release_data: "05/30/2022",
      directors: ["Joss Whedon"],
      plot_summary:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY150_CR0,0,101,150_.jpg",
    },
    {
      movie_id: "1",
      title: "The Avengers",
      release_data: "05/30/2022",
      directors: ["Joss Whedon"],
      plot_summary:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
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
          placeholder="Add movies"
        />
        <div className="movies-search-button">
          <Search className="movies-search-icon" />
        </div>
      </div>
      <div className="movies-timeline">
        {data.map((item) => {
          return (
            <Item
              movie_id={item.movie_id}
              title={item.title}
              release_data={item.release_data}
              directors={item.directors}
              plot_summary={item.plot_summary}
              cover_url={item.cover_url}
            />
          );
        })}
        <div className="movies-timeline-line" />
      </div>
    </div>
  );
};

export default Movies;
