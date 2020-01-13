import React, {Component} from 'react';
import {connect} from 'react-redux';

import Button from "../Common/Button/Button";

import {calculateDuration, parseArrayToString} from "../../helper/helper";

import './MovieDetail.sass'
import {getMovie} from "../../redux/actions/movies";
import ClipLoader from "react-spinners/ClipLoader";


class MovieDetail extends Component {
    state = {
        isLoading: true
    };

    componentDidMount() {
        this.getMovie();
    }

    getMovie = () => {
        new Promise((resolve, reject) => {
            this.props.getMovie(this.props.match.params.id);
            resolve();
        }).then(() => {
            setTimeout(() => {
                this.setState({
                    isLoading: false
                });
            }, 1000)
        })
    };


    render() {
        const {history, movies} = this.props;
        const {isLoading} = this.state;
        const movie = movies.movie;
        return (
            <div className={"movieDetailContainer"}>
                {
                    isLoading ? <ClipLoader
                        size={150}
                        color={"#ff6600"}
                        css={
                            `margin: auto`
                        }
                    /> : <div className={"movieDetail"}>
                        <div className={"movieImg"}>
                            <img src={movie.posterurl} alt=""/>
                            <div className="movieImgButton">+</div>
                        </div>
                        <div className={"movieInfoContainer"}>
                            <div className={"movieDetailInfoTopSide"}>
                                <div className="movieName">
                                    {movie.originalTitle}
                                </div>
                                <div className={"movieDetailRating"}>{movie.imdbRating}</div>
                                <div className={"movieRatingBar"}>
                                    <div style={{width: (movie.imdbRating * 10 + "%")}}></div>
                                </div>
                            </div>
                            <div className="movieOtherInfo">
                                {movie.year} &middot; {parseArrayToString(movie.genres)} &middot; {calculateDuration(movie.duration)}
                            </div>
                            <div className="movieStoryline">
                                {movie.storyline}
                            </div>
                            <div className="divider"/>
                            <div className={"movieCrew"}>
                                <div>
                                    <div className={"crewTitle"}>Director:</div>
                                    <div className={"crewName"}>{movie.directors.map((item, index) => {
                                        return <span key={index}><a
                                            href="">{item}</a>{movie.directors.length - 1 !== index && ", "}</span>
                                    })}</div>
                                </div>
                                <div>
                                    <div className={"crewTitle"}>Writers:</div>
                                    <div className={"crewName"}>{movie.writers.map((item, index) => {
                                        return <span key={index}><a
                                            href="">{item}</a>{movie.writers.length - 1 !== index && ", "}</span>
                                    })}</div>
                                </div>
                                <div>
                                    <div className={"crewTitle"}>Stars:</div>
                                    <div className={"crewName"}>{movie.actors.map((item, index) => {
                                        return <span key={index}><a
                                            href="">{item}</a>{movie.actors.length - 1 !== index && ", "} </span>
                                    })}</div>
                                </div>
                            </div>
                        </div>

                        <Button text={"+ ADD TO WATCHLIST"}
                                onClick={() => history.push('/movie-detail/' + movie.id)}/>
                    </div>
                }

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
    getMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
