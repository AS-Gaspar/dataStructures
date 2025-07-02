function addPreviousNumbers(n) {
    let result = 0
    for (let i = n; i >= 1; i--) {
       result += i 
    }
    return result
}

let time1 = performance.now()
addPreviousNumbers(100000000)
let time2 = performance.now()

console.log(time2 - time1 / 1000)

function optaddUpTo(n) {
    return n * (n + 1) / 2
}

let optTime1 = performance.now()
optaddUpTo(100000000)
let optTime2 = performance.now()

console.log(`Optmized: ${(optTime2 - optTime1) / 1000}`)