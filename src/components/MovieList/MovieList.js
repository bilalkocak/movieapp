import React, {Component} from 'react';
import {connect} from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

import Button from "../Common/Button/Button";
import RatingBar from "../Common/RatingBar/RatingBar";

import {calculateDuration, parseArrayToString} from "../../helper/helper";
import {getMovies} from "../../redux/actions/movies";

import './MovieList.sass'


class MovieList extends Component {
    state = {
        isLoading: true
    };

    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        new Promise((resolve, reject) => {
            this.props.getMovies();
            resolve();
        }).then(() => {
            setTimeout(() => {
                this.setState({
                    isLoading: false
                });
            }, 1000);
        });
    };

    render() {
        const {history, movies} = this.props;
        const {isLoading} = this.state;
        return (
            <div className={"movieList"}>
                {isLoading ? <ClipLoader
                        size={150}
                        color={"#ff6600"}
                        css={
                            `margin: auto`
                        }
                    /> :
                    movies.movies.map(movie =>
                        <div key={movie.id} className={"movieCard"}>
                            <div>
                                <div className={"movieImg"}>
                                    <img src={movie.posterurl} alt=""/>
                                </div>
                                <div className={"movieInfoContainer"}>
                                    <div className="movieName">
                                        {movie.originalTitle}
                                    </div>
                                    <div className="movieOtherInfo">
                                        {movie.year} &middot; {parseArrayToString(movie.genres)} &middot; {calculateDuration(movie.duration)}
                                    </div>
                                    <div className="movieRating">
                                        <span className="movieRate">{movie.imdbRating}</span>/10
                                    </div>
                                    <RatingBar rate={movie.imdbRating} width={'78vw'}/>
                                </div>

                                <Button text={"MOVIE DETAILS"}
                                        onClick={() => history.push('/movie-detail/' + movie.id)}/>
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
};

const mapDispatchToProps = {
    getMovies
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
