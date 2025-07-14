const arr = [1, 2, 3, 3, 4, 4, 5]

function findAllDuplicates(arr) {
    let countingNums = {}
    let arrDuplicates = []
    
    for (let i = 0; i < arr.length; i++) {
        if (!countingNums[arr[i]]) {
            countingNums[arr[i]] = 1
        } else if (countingNums[arr[i]] === 1) {
            ++countingNums[arr[i]]
            arrDuplicates.push(arr[i])
        } else {
            ++countingNums
        }
    }
    return arrDuplicates
}

console.log(findAllDuplicates(arr))