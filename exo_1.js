function hasTwoNumbersWithSumK(list, k) {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] + list[j] === k) {
                return true;
            }
        }
    }
    return false;
}

let result1 = hasTwoNumbersWithSumK([10, 5, 3, 7],17);
console.log("List : [10, 5, 3, 7] - k = 17 => " + result1);

let result2 = hasTwoNumbersWithSumK([10, 5, 3, 7],14);
console.log("List : [10, 5, 3, 7] - k = 17 => " + result2);
