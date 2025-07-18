function fib(n){
    if (n === 1) return 1

    let t = 2
    let first = 0
    let second = 1
    let result = first + second
    function helper(num, target) {
        if (target === num) return
        first = second
        second = result
        result = second + first
        helper(num, target + 1)
    }
    
    helper(n, t)
    
    return result
}

console.log(fib(2))