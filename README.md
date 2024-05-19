# js-for-react-native-11288582


## Student ID
- **Student ID:** 11288582

## Overview
This project contains three primary functions that work together to process arrays of numbers and strings, and then create user profiles based on these processed arrays.

### Task 1: processArray Function
**Function:** `processArray(numbers)`

**Description:** This function takes an array of numbers as an argument and returns a new array where each even number is squared and each odd number is tripled.

**Example:**
- **Input:** `[1, 2, 3, 4, 5]`
- **Output:** `[3, 4, 9, 16, 15]`

### Task 2: formatArrayStrings Function
**Function:** `formatArrayStrings(strings, numbers)`

**Description:** This function takes two arrays as arguments: an array of strings and an array of numbers (processed by `processArray`). It modifies each string based on its corresponding number: capitalizing the entire string if the number is even, and converting the string to lowercase if the number is odd.

**Example:**
- **Strings:** `["I", "still", "love", "my ex"]`
- **Numbers:** `[1, 2, 3, 4]`
- **Processed Numbers:** `[3, 4, 9, 16, 15]`
- **Formatted Strings:** `["I", "STILL", "LOVE", "MY EX"]`

### Task 3: createUserProfiles Function
**Function:** `createUserProfiles(originalNames, modifiedNames)`

**Description:** This function takes two arrays: an array of original names and an array of modified names (from `formatArrayStrings`). It returns an array of objects, each containing `originalName`, `modifiedName`, and an `id` (auto-incremented starting from 1).

**Example:**
- **Original Names:** `["I", "still", "love", "my ex"]`
- **Modified Names:** `["I", "STILL", "LOVE", "MY EX"]`
- **User Profiles Output:**
 ```json
  [
    { "id": 1, "originalName": "I", "modifiedName": "I" },
    { "id": 2, "originalName": "still", "modifiedName": "STILL" },
    { "id": 3, "originalName": "love", "modifiedName": "LOVE" },
    { "id": 4, "originalName": "my ex", "modifiedName": "MY EX" }
  ]
