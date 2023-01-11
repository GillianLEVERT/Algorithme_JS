function hasTwoNumbersWithSumK(list, k) {
    let i = 0;
    while (i < list.length) {
        let j = i + 1;
        while (j < list.length) {
            if (list[i] + list[j] === k) {
                return true;
            }
            j++;
        }
        i++;
    }
    return false;
}

let result1 = hasTwoNumbersWithSumK([10, 5, 3, 7],17);
console.log("List : [10, 5, 3, 7] - k = 17 => " + result1);

let result2 = hasTwoNumbersWithSumK([10, 5, 3, 7],14);
console.log("List : [10, 5, 3, 7] - k = 17 => " + result2);
