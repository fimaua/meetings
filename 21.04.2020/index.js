const numbers = [1, 2, 3, 4, 5]

function some(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            return true
        }
    }
    return false
}