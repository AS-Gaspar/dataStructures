const arr = ["alisson", "mario", 1, 2, 3, "lindoso"]

function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i
    }
    return -1
}

console.log(search(arr, "lindoso"))