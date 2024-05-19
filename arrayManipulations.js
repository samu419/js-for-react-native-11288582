function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number;
        } else {
            return number * 3; 
        }
    });
}

const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray); 


function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number; 
        } else {
            return number * 3; 
        }
    });
}


function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error("The lengths of the two arrays must be the same.");
    }

    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); 
        } else {
            return str.toLowerCase(); 
        }
    });
}


const strings =  ["I", "still", "love", "my ex"];
const numbers = [1, 2, 3, 4];
const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);

console.log(formattedStrings); 
