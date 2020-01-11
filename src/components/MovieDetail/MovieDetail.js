import React, {Component} from 'react';

import './MovieDetail.sass'

const data = [
    {
        "id": "0001",
        "year": "1994",
        "genres": ["Crime", "Drama"],
        "duration": "PT142M",
        "originalTitle": "The Shawshank Redemption",
        "imdbRating": 9.3,
        "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        "writers": ["Stephen King"],
        "directors": ["Frank Darabont"],
        "storyline": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
        "posterurl": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    }
];

class MovieDetail extends Component {
    render() {
        const {history} = this.props;
        const movie = data[0];
        return (
            <div className={"movieDetailContainer"}>
                <div className={"movieDetail"}>
                        <div className={"movieImg"}>
                            <img src={movie.posterurl} alt=""/>
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
                                {movie.year} &middot; {movie.genres} &middot; {movie.duration}
                            </div>
                            <div className="movieStoryline">
                                {movie.storyline}
                            </div>
                            <div className="divider"></div>
                            <div className={"movieCrew"}>
                                <div><div className={"crewTitle"}>Director:</div> <div className={"crewName"}>{movie.directors}</div></div>
                                <div><div className={"crewTitle"}>Writers:</div> <div className={"crewName"}>{movie.writers}</div></div>
                                <div><div className={"crewTitle"}>Stars:</div> <div className={"crewName"}>{movie.actors}</div></div>
                            </div>
                        </div>

                        <div className={"movieDetailButton"}
                             onClick={() => history.push('/movie-detail/' + movie.id)}>+ ADD TO WATCHLIST
                        </div>
                </div>

            </div>
        );
    }
}

export default MovieDetail;
