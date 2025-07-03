const arr = [1, 4, 2, 5, 8, 10, 2, 1, 8, 5, 2];
const num = 2;

function maxSubArraySum(arr, num) {
  if (arr.length < num)
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
    let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (i < num - 1) {
        sum += arr[i]
    } else {
        
    }
  }
}

console.log();
