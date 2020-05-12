export function makeCounter() {
    let counter = -1;
    return function count() {
        counter++
        return counter;
    }
}