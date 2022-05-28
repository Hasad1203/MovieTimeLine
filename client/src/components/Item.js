const Item = (props) => {
  const { movie_id, title, release_data, directors, plot_summary, cover_url } =
    props;
  return (
    <div className="item-main">
      <img className="item-image" src={cover_url} />
      <div className="item-header">{title}</div>
      <div className="item-directors">{directors}</div>
      <div className=""></div>
    </div>
  );
};

export default Item;
