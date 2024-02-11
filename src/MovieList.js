import MovieCard from "./MovieCard";

export default function MovieList(props) {
  const { movies, addStars, reduceStars, handleFav, handleCart } = props;
  return (
    <>
      {movies.map((movie, index) => (
        <MovieCard
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
