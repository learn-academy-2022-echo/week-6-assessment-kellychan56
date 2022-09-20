// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

/*  PSEUDO CODE:
      - describe a test for a function called capitalizeAndSentence
      - it takes in an array of objects and returns an array with a sentence about each person with their name capitalized
      - create expect statements using the given variables
*/

describe("capitalizeAndSentence", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(capitalizeAndSentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// FAIL  ./code-challenges.test.js
// capitalizeAndSentence
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)

// ● capitalizeAndSentence › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

//   ReferenceError: capitalizeAndSentence is not defined



// b) Create the function that makes the test pass.

/*  PSEUDO CODE:
      - declare a function named capitalizeAndSentence
      - takes in an array of objects with name and occupation keys
      - iterate over the array with the map method to access each object
        - iterate through the key value pairs in the object to access the values
          - for the first name key:
            - convert the string into separate name arrays; each name is it's own array
              - split each name array into separate string values of its characters
              - capitalize the 0 index string
              - join all the arrays back into one string
          -use string interpolation to create a sentence with the object key values
      - returns an array with a sentence about each object
*/

const capitalizeAndSentence = (array) => {
  return array.map(object =>
    object.name.split(" ")
    .map(nameValue => nameValue[0].toUpperCase() + nameValue.slice(1))
    .join(" ")
    + ` is ${object.occupation}.`
  )
}

// PASS  ./code-challenges.test.js
// capitalizeAndSentence
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

/*  PSEUDO CODE:
      - describe a test for a function called numRemainders
      - it takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
      - create expect statements using the given variables
*/

describe("numRemainders", () =>{
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(numRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(numRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// FAIL  ./code-challenges.test.js
// capitalizeAndSentence
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)
// numRemainders
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

// ● numRemainders › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

//   ReferenceError: numRemainders is not defined



// b) Create the function that makes the test pass.

/*  PSEUDO CODE:
      - declare a function named numRemainders
      - takes in a mixed data array
      - iterate through the array to filter out the numbers
      - iterate through the new array to manipulate the numbers
        - find the remainders of the numbers when divided by 3
      - returns an array of only the REMAINDERS of the numbers when divided by 3
*/

const numRemainders = (mixedArr) => {
  return mixedArr.filter(value => typeof value === "number").map(value => value % 3)
}

// PASS  ./code-challenges.test.js
// capitalizeAndSentence
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)
// numRemainders
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

/*  PSEUDO CODE:
      - describe a test for a function called sumOfCubed
      - it takes in an array of numbers and returns the sum of all the numbers cubed
      - create expect statements using the given variables
*/

describe("sumOfCubed", () =>{
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(sumOfCubed(cubeAndSum1)).toEqual(99)
    expect(sumOfCubed(cubeAndSum2)).toEqual(1125)
  })
})

// FAIL  ./code-challenges.test.js
// capitalizeAndSentence
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)
// numRemainders
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
// sumOfCubed
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)

// ● sumOfCubed › takes in an array of numbers and returns the sum of all the numbers cubed

//   ReferenceError: sumOfCubed is not defined


// b) Create the function that makes the test pass.
 /* PSEUDO CODE:
      - declare a function named sumOfCubed
      - takes in an array of numbers
      - iterate through the array and cube all of the numbers
        - add the cubed numbers together
      - returns the sum of all the numbers cubed
 */

const sumOfCubed = (numberArr) => {
  let totalCubed = 0
  numberArr.forEach(value => totalCubed += value ** 3 )
  return totalCubed
}

// PASS  ./code-challenges.test.js
// capitalizeAndSentence
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (4 ms)
// numRemainders
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
// sumOfCubed
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)
