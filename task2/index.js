const getTotalPrice = arr => {
    const sum = arr.reduce((acc, num) => {
        return acc + num
    }, 0)

    return '$' + Math.floor(sum * 100) / 100
}