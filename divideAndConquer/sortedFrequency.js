function findFirst(arr, val) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === val) {
        result = mid; 
        high = mid - 1; 
      } else if (arr[mid] < val) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return result;
  }
  
  function findLast(arr, val) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === val) {
        result = mid; 
        low = mid + 1; 
      } else if (arr[mid] < val) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return result;
  }
  
  function sortedFrequency(arr, val) {
    const firstIndex = findFirst(arr, val);
  
    if (firstIndex === -1) {
      return -1;
    }
  
    const lastIndex = findLast(arr, val);
  
    return lastIndex - firstIndex + 1;
  }
  
  console.log(sortedFrequency([2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4], 4));