const arr = [1, 2, 3, 4, 4, 5, 10, 10, 12, 12]

function coutingNumber(arr) {
    let counter = 0
    let p1 = 0
    let p2 = 1
    if (arr.length === 0) return 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[p2] !== arr[p1]) counter++
        p1++
        p2++ 
    }
    return counter
}

console.log(coutingNumber(arr))