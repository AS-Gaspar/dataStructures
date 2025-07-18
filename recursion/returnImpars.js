function manager(arr) {
    let impars = []

    function worker(arr) {
        if (arr.length === 0) return 
        let last = arr[arr.length - 1]
        if (last % 2 !== 0) impars.push(arr[arr.length - 1])
        worker(arr.slice(0, -1))
    }

    worker(arr)
    return impars
}

console.log(manager([1, 3, 5, 7, 9, 10, 13]))