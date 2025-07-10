const arr = [1, 4, 2, 5, 8, 10, 2, 1, 8, 5, 2, 20]
const num = 2

function maxSubArraySum(arr, num) {
  if (arr.length === 0) return null
  if (arr.length < num)
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )

  let max = 0;
  let j = 0;

  while (j < num) {
    max += arr[j]
    j++
  }

  let tempSum = max

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    max = Math.max(max, tempSum)
  }
  return max
}

console.log(maxSubArraySum(arr, num))
