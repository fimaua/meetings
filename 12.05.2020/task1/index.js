function makeCounter() {
    let counter = 0;
    return function count() {
        counter++
        return counter;
    }
}