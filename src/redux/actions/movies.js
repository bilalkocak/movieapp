export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE = "GET_MOVIE";

export function getMovies() {
    const data = require('../../data/movielist.json');

    return dispatch => {
        dispatch({
            type: GET_MOVIES,
            payload: data
        })
    }
}

export function getMovie(id) {
    const data = require('../../data/' + id + '.json');

    return dispatch => {
        dispatch({
            type: GET_MOVIE,
            payload: data
        })
    }
}

