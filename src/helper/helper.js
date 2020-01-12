export function calculateDuration(time) {
    return (parseInt(time.slice(2, 5) / 60) + "h " + time.slice(2, 5) % 60 + "min");
}

export function parseArrayToString(array) {
    let result = "";

    for (let i = 0; i < array.length ; i++) {
        result += array[i]+", "
    }

    return  result.slice(0, -2);
}
