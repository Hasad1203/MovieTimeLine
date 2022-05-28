import Countdown from "react-countdown";

const Item = (props) => {
  const { movie_id, title, release_date, directors, cover_url } = props;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <span>
        {days.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {hours.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {minutes.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {seconds.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </span>
    );
  };

  return (
    <div className="item-main">
      <img className="item-image" src={cover_url} />
      <div className="item-header">{title}</div>
      {directors.map((director) => (
        <div className="item-directors">{director}</div>
      ))}
      <div className="item-countdown">
        <Countdown
          className="item-countdown-inner"
          date={Date.parse(release_date)}
          renderer={renderer}
        />
      </div>
    </div>
  );
};

export default Item;
