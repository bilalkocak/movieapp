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
    let data;
    try {
        data = require('../../data/' + id + '.json')
    } catch (e) {
        data = false
    }

    return dispatch => {
        dispatch({
            type: GET_MOVIE,
            payload: data
        })
    }
}

