export function calculateDuration(time) {
    return (parseInt(time.slice(2, 5) / 60) + "h " + time.slice(2, 5) % 60 + "min");
}

export function parseArrayToString(array) { 
    return  array.join(',')
}
