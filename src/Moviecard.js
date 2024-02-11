import "./MovieCard.css";

export default function MovieCard(props) {
  const { movie: data, addStars, reduceStars, handleFav, handleCart } = props;
  const { title, plot, poster, price, rating, stars, fav, isInCart } = data;

  return (
    <div className="main">
      <div className="movie-card">
        <div className="left">
          <img src={poster} alt="Poster"></img>
        </div>

        <div className="right">
          <div className="title">{title}</div>
          <div className="plot">{plot}</div>
          <div className="price">Rs {price}</div>

          <div className="footer">
            <div className="rating">{rating}</div>
            <div className="star-dis">
              <img
                className="str-btn"
                src="https://cdn-icons-png.flaticon.com/128/10308/10308996.png"
                alt="decrease"
                onClick={() => {
                  reduceStars(data);
                }}
              />
              <img
                className="stars"
                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                alt="star"
              />
              <img
                className="str-btn"
                src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png"
                alt="increase"
                onClick={() => {
                  addStars(data);
                }}
              />
              <span> {stars}</span>
            </div>

            <button
              className={fav ? "unfavourite-btn" : "favourite-btn"}
              onClick={() => {
                handleFav(data);
              }}
            >
              {fav ? "Unavourite" : "Favourite"}
            </button>

            <button
              className={isInCart ? "unfavourite-btn" : "cart-btn"}
              onClick={() => {
                handleCart(data);
              }}
            >
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
