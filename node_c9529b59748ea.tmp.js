function addPreviousNumbers(n) {
    let result = 0
    for (let i = n; i >= 1; i++) {
       result += i 
    }
    return result
}

console.log(addPreviousNumbers(6))