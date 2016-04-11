
var BasicFunctions = function () {
    "use strict";
    return this;
};
/**
 * Reduce combines an array into a single value by repeatedly using a function 
 * that combines an element of the array with a base value.
 *
 * @param {function} combine function specifying how the element values should
 *                           be combined
 * @param {int} base The initial base number to start the accumulation on
 * @param {array} array array containing all values to be accumulated
 * @returns {int} base an accumulation of all previous element's values
 */
function reduce(combine, base, array) {
    "use strict";

    // Iterate each element of the array
    forEach(array, function (element) {

        // Append the new total of the base with the current element value
        base = combine(base, element);

    });

    // Return the base
    return base;
};

/**
 * Return the product of a + b
 *
 * @param {int} a
 * @param {int} b
 * @returns {int} - The product of a + b
 */
function add(a, b) {
    return a + b;
};

/**
 * Takes an array of numbers and returns the sum of them all
 *
 * @param {array} numbers
 * @returns {int} The sum of all numbers passed in
 */
function sum(numbers) {
    return reduce(add, 0 , numbers);
};

// should return 16
console.log(sum([1,4,5,6]));

/**
Write a function countZeroes, which takes an array of numbers as its 
argument and returns the amount of zeroes that occur in it. Use reduce.

Then, write the higher-order function count, which takes an array and a test 
function as arguments, and returns the amount of elements in the array for 
which the test function returned true.
Re-implement countZeroes using this function.
*/

/**
for each number 
check if it is a zero 
if it is 
increment count
return count
 */

/**
 * Takes numbers as a parameter and reduces number to check how many zeros
 * the array contains
 *
 * @param {array} numbers
 * @returns {int} Amount of zeros
 */
function countZeroes(numbers) {
    return reduce(isZero, 0, numbers);
};

/**
 * Checks if b is zero, if it is it returns a incremented by one else it return
 * a unincremented
 *
 * @param {type} a
 * @param {type} b
 * @returns {Number} a + 1 if element is zero, else it just returns a 
 *                   un-incremented
 */
function isZero(a, b) {
    return 0 === b ? a + 1 : a;
};

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
};


// should return 5
console.log(countZeroes([0,0,1,456,0,4242,5,0,24,0]));