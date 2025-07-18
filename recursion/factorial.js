function factorialValue(num) {
    if (num === 1) return 1
    return num * factorialValue(num-1)
}

console.log(factorialValue(10))