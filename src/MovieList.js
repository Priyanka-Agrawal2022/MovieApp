import Moviecard from "./Moviecard";

export default function MovieList(props) {
  const { movies, addStars, reduceStars, handleFav, handleCart } = props;
  return (
    <>
      {movies.map((movie, index) => (
        <Moviecard
          key={index}
          movie={movie}
          addStars={addStars}
          reduceStars={reduceStars}
          handleFav={handleFav}
          handleCart={handleCart}
        />
      ))}
    </>
  );
}
