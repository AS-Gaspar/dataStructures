function resultArr(arr, pars = 0, impars = 0) {
    if (arr.length === 0) {
        return [
            {"Números pares:": pars}, 
            {"Números Impares:": impars}
        ];
    }
    const num = arr.pop();
    if (num % 2 === 0) {
        pars++;
    } else {
        impars++;
    }
    return resultArr(arr, pars, impars);
}

console.log(resultArr([10, 11, 13, 14, 16, 14, 12, 10]));

console.log(resultArr([10, 11, 13, 14, 16, 14, 12, 10]))

