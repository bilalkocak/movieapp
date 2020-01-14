export function calculateDuration(time) {
    return time && (parseInt(time.slice(2, 5) / 60) + "h " + time.slice(2, 5) % 60 + "min");
}

export function parseArrayToString(array) {
    return array && array.join(',');
}

export function addFilmToWatchList(id) {
    let watchList = localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [];
    !watchList.includes(id) && watchList.push(id);
    localStorage.setItem('watchList', JSON.stringify(watchList))
}

export function deleteFilmFromWatchList(id) {
    let watchList = localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [];
    watchList.includes(id) && watchList.splice(watchList.findIndex(movieId => movieId === id), 1);
    localStorage.setItem('watchList', JSON.stringify(watchList))
}

export function isOnWatchList(id) {
    let watchList = localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [];
    return watchList.includes(id)
}
