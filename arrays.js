const arr1 = [9, 4, 2, 6, 6, 6, 1]
const arr2 = [4, 16, 36, 36, 36, 81, 1]

/*
function compareArrs(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  const obj = {}
  for (let index of arr1) {
    obj[index] = Math.sqrt(index)
  }
  for (let sqrt of arr2) {
    if (!obj.hasOwnProperty(sqrt * sqrt)) return false
  }
  return true
}
*/


function compareArrs(arr1, arr2) {
    if (arr1.length !== arr2.length) return false

    const obj1 = {}
    const obj2 = {}

    for (let num of arr1) {
        obj1[num] = (obj1[num] || 0) + 1
    }
    for (let num of arr2) {
        obj2[num] = (obj2[num] || 0) + 1
    }

    for (let obj in obj1) {
        if (!(obj ** 2 in obj2)) return false
        if (obj2[obj ** 2] !== obj1[obj]) return false
    }
    return true
}

console.log(compareArrs(arr1, arr2))