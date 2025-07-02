function findSumToZero(arr) {
    let p1 = 0
    let p2 = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[p1] + arr[p2] === 0) {
            const res = [arr[p1], arr[p2]]
            return res
        } else {
            if (arr[p1] + arr[p2] < 0) {
                p1++
            } else {
                p2--
            }
        }
    }
    return false
}

const arr = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8]

console.log(findSumToZero(arr))