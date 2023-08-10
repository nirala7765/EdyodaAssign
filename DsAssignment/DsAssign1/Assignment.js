function findPairsWithSum(arr, targetSum) {
    const pairs = [];
    const seenNumbers = new Set();

    for (let num of arr) {
        const complement = targetSum - num;
        
        if (seenNumbers.has(complement)) {
            pairs.push([num, complement]);
        }

        seenNumbers.add(num);
    }

    return pairs;
}

const array = [2, 4, 3, 5, 6, -2, 8, 7];
const target = 6;

const result = findPairsWithSum(array, target);

if (result.length > 0) {
    console.log(`Pairs with sum ${target}:`);
    result.forEach(pair => {
        console.log(`[${pair[0]}, ${pair[1]}]`);
    });
} else {
    console.log(`No pairs found with sum ${target}`);
}
