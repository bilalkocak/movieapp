import React, {Component} from 'react';
import Button from "../Common/Button/Button";

import {calculateDuration, parseArrayToString} from "../../helper/helper";

import './MovieList.sass'

const data = [
    {
        "id": "0001",
        "year": "1994",
        "genres": ["Crime", "Drama"],
        "duration": "PT142M",
        "originalTitle": "The Shawshank Redemption",
        "imdbRating": 7,
        "posterurl": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
        "id": "0002",
        "year": "1972",
        "genres": ["Crime", "Drama"],
        "duration": "PT175M",
        "originalTitle": "The Godfather",
        "imdbRating": 8.4,
        "posterurl": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg"
    },
    {
        "id": "0003",
        "year": "2008",
        "genres": ["Action", "Crime", "Drama"],
        "duration": "PT152M",
        "originalTitle": "The Dark Knight",
        "imdbRating": 5.0,
        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg"
    }
]

class MovieList extends Component {
    render() {
        const {history} = this.props;
        return (
            <div className={"movieList"}>
                {data.map(movie =>
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
                                <div className={"movieRatingBar"}>
                                    <div style={{width: (movie.imdbRating * 10 + "%")}}></div>
                                </div>
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

export default MovieList;
