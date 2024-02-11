import React from "react";
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import Student from "./Student";
import { movies } from "./movieData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  handleIncStars = (movie) => {
    const { movies } = this.state;
    const movieIndex = movies.indexOf(movie);

    if (movies[movieIndex].stars < 5) {
      movies[movieIndex].stars += 0.5;
    }

    this.setState({
      movies,
    });
  };

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const movieIndex = movies.indexOf(movie);

    if (movies[movieIndex].stars > 0) {
      movies[movieIndex].stars -= 0.5;
    }

    this.setState({
      movies: movies,
    });
  };

  handleFav = (movie) => {
    const { movies } = this.state;
    const movieIndex = movies.indexOf(movie);

    movies[movieIndex].fav = !movies[movieIndex].fav;

    this.setState({
      movies: movies,
    });
  };

  handleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const movieIndex = movies.indexOf(movie);

    movies[movieIndex].isInCart = !movies[movieIndex].isInCart;

    if (movies[movieIndex].isInCart) cartCount++;
    else cartCount--;

    this.setState({
      movies: movies,
      cartCount,
    });
  };

  render() {
    const { movies, cartCount } = this.state;

    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          addStars={this.handleIncStars}
          reduceStars={this.handleDecStars}
          handleFav={this.handleFav}
          handleCart={this.handleCart}
        />
        {/* <Student name="Alexa" marks={80} />
        <Student name="Siri" marks={70} />
        <Student name="Google" marks={89} />
        <Student /> */}
      </>
    );
  }
}

Student.defaultProps = {
  name: "Student",
  marks: "N.A.",
};

export default App;
