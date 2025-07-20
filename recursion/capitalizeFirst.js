const arr = ["banana", "alho", "uva", "laranja"]

function capitalizeFirst(arr) {
    for (let i = 0; i < arr.length; i++) {
        let upper = arr[i][0].toUpperCase()
        let word = arr[i].slice(1)
        arr[i] = upper + word
    }
    return arr
}

console.log(capitalizeFirst(arr))