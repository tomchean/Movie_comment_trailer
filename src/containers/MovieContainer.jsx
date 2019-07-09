import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "./../components/Movie/Movie";
import {
    showLoadingSpinner,
    clearMovie,
    getMovie,
    setMovieState,
} from "./../actions";

class MovieContainer extends Component {
    componentDidMount() {
        const { movieId } = this.props.match.params;
        this.getMovie(movieId);
        /*if (localStorage.getItem(`${movieId}`)) {
            const movie = JSON.parse(localStorage.getItem(`${movieId}`));
            this.props.setMovieState(movie);
        } else {
            this.props.getMovie(movieId);
        }*/
    }

    componentDidUpdate() {
        /*
        const { movieId } = this.props.match.params;
        const { movie, actors, directors,videos } = this.props;
        
        if (movie) {
            const movieState = { movie, actors, directors,videos };
            localStorage.setItem(`${movieId}`, JSON.stringify(movieState));
        }*/
    }

    getMovie = movieId => {
        this.props.clearMovie();
        this.props.showLoadingSpinner();
        this.props.getMovie(movieId);
    };

    render() {
        const { movieId } = this.props.match.params;
        return (
            <React.Fragment>
                <Movie
                    movie={this.props.movie}
                    directors={this.props.directors}
                    actors={this.props.actors}
                    loading={this.props.loading}
                    videos={this.props.videos}
                    movieId={movieId}
                    movieSimilar={this.props.movieSimilar}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return state.movie;
};
const mapDispatchToProps = {
    getMovie,
    showLoadingSpinner,
    clearMovie,
    setMovieState,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieContainer);
