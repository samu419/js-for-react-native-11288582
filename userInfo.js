
function processArray(numbers) {
    return numbers.map(number => number % 2 === 0 ? number * number : number * 3);
}


function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error("The lengths of the two arrays must be the same.");
    }

    return strings.map((str, index) => {
        return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}


function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error("The lengths of the two arrays must be the same.");
    }

    return originalNames.map((originalName, index) => ({
        id: index + 1,
        originalName: originalName,
        modifiedName: modifiedNames[index]
    }));
}


const originalNames = ["I", "still", "love", "my ex"];
const numbers = [1, 2, 3, 4];
const processedNumbers = processArray(numbers);
const modifiedNames = formatArrayStrings(originalNames, processedNumbers);
const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);

