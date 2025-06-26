const arr1 = [4, 16, 36, 81]
const arr2 = [9, 4, 2, 6]

function compareArrs(arr1, arr2) {
    if (arr1.length !== arr2.length) return false
    const obj = {}
    for (let index of arr1) {
        obj[index] = Math.sqrt(index) 
    }

    for (let sqrt of arr2) {
        if (!obj.hasOwnProperty(sqrt*sqrt)) return false
    }

    return true
}

console.log(compareArrs(arr1, arr2))