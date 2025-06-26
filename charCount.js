function charCount(str) {
  let obj = {}
  for (let char of str) {
    if (char !== " ") {
      char = char.toLowerCase()
      obj[char] = ++obj[char] || 1
    }
  }
  return obj
}

console.log(charCount("Hello there, i'm Gaspar!"))
