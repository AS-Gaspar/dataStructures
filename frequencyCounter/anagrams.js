const str1 = "carlos"
const str2 = "carlos"

function VerifyAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false
    let anagram1 = {}
    let anagram2 = {}
    for (let str of str1) {
        anagram1[str] = (anagram1[str] || 0) + 1
    }
    for (let str of str2) {
        anagram2[str] = (anagram2[str] || 0) + 1
    }
    for (let key in anagram1) {
        if (!(key in anagram2)) {
            return false
        }
        if (anagram2[key] !== anagram1[key]) {
            return false
        }
    }
    return true
}

console.log(VerifyAnagrams(str1, str2)) 
