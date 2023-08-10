console.log("***************************Question1**************************************************************************************")
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



console.log("***************************Question2**************************************************************************************")


function reverseArrayInPlace(arr) {
    const length = arr.length;
    const halfLength = Math.floor(length / 2);

    for (let i = 0; i < halfLength; i++) {
        const temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
}

const array1 = [1, 2, 3, 4, 5];
console.log("Original array:", array1);

reverseArrayInPlace(array1);
console.log("Reversed array:", array1);


console.log("***************************Question3**************************************************************************************")
function areRotations(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const concatenatedStr = str1 + str1;

    return concatenatedStr.includes(str2);
}

const string1 = "abcdef";
const string2 = "defabc";

if (areRotations(string1, string2)) {
    console.log(`${string1} and ${string2} are rotations of each other.`);
} else {
    console.log(`${string1} and ${string2} are not rotations of each other.`);
}




console.log("***************************Question4**************************************************************************************")

function firstNonRepeatedCharacter(str) {
    const charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

const inputString = "programming";
const result1 = firstNonRepeatedCharacter(inputString);

if (result1 !== null) {
    console.log(`The first non-repeated character in "${inputString}" is: ${result}`);
} else {
    console.log(`No non-repeated characters found in "${inputString}"`);
}







console.log("***************************Question5**************************************************************************************")

function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }

    towerOfHanoi(n - 1, source, destination, auxiliary);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, auxiliary, source, destination);
}

const numDisks = 3;
const sourcePeg = 'A';
const auxiliaryPeg = 'B';
const destinationPeg = 'C';

towerOfHanoi(numDisks, sourcePeg, auxiliaryPeg, destinationPeg);




