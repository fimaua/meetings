const numbersList = [4.78, 6.9, 3.6646]

const gettotalPrice = arr => {
    const sum = arr.reduce((acc, num) => {
        return acc + num
    }, 0)
    console.log(sum)

    return '$' + Math.floor(sum * 100) / 100
}
console.log(gettotalPrice(numbersList))