let arr = [0, 1, 2, 3, 4]

function countingNumbers(arr) {
  let p1 = 0
  if (arr.length === 0) return 0
  for (let p2 = 1; p2 < arr.length; p2++) {
    if (arr[p2] !== arr[p1]) {
      p1++
      arr.splice(p1, 1, arr[p2])
    } 
  }
  return p1 + 1
}

console.log(countingNumbers(arr))   
