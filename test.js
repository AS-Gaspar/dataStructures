const strs = ["flower","flow","flight"]

function comparePrefix(strs) {
    const obj = {}
    for (let i = 0; i < strs[0].length; i++) {
        obj[i] = (obj[i] || 0) + 1
    }
    console.log(obj)
    for (let i = 0; i < strs.length; i++) {
        let tmp = []
        tmp = strs[0].split()
        let substring = []
        for (let j = 0; j < obj.length; i++) {
        }
    }
}

comparePrefix(strs)
