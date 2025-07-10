const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 30, 40, 50, 60]
const val = 65

function findingValue(arr, val) {
    let min = 0
    let max = arr.length - 1

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)

        if (arr[middle] < val) {
            min = middle + 1
        } else if (arr[middle] > val) {
            max = middle - 1
        } else {
            return middle
        }
    }
    return -1
}

console.log(findingValue(arr, val))