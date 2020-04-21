const numbers = [1, 2, 3, 4, 5]

const some = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            return true
        }
    }
    return false
}
const result = some(numbers)
console.log(result)
console.log(numbers)