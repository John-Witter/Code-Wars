var uniqueInOrder = function (iterable) {
    if (!iterable.length) return []
    //your code here - remember iterable can be a string or an array
    let rtnArr = [iterable[0]]
    let initEl = iterable[0]
    for (let i = 1; i < iterable.length; i++) {
        let currEl = iterable[i]
        if (currEl === initEl) {
            if (iterable[i + 1] && currEl === iterable[i + 1])
                continue
        }
        else {
            rtnArr.push(currEl)
            initEl = currEl
        }
    }

    //   console.log(rtnArr)  
    return rtnArr
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))
console.log(uniqueInOrder([]))
console.log(uniqueInOrder(''))


// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3]
// uniqueInOrder([1, 2, 2, 3, 3]) == []
// uniqueInOrder([]) == []
// uniqueInOrder('') == []
