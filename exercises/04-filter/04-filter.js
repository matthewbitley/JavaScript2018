/**
 * Recreate the filter function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * @param {array} arr
 * @param {function} callback
 * @returns {array} new array
 */
function filter(arr, callback) {
  var filtered = [];
  arr.map(function(number, index) {
    
  });
}

/**
 * Find and return only the even numbers in an array
 * @param {array} arr
 * @returns {array} a new array that only includes the even numbers
 * @example
 *   onlyEvenValues([1,2,3]) // [2]
 *   onlyEvenValues([5,1,2,3,10]) // [2,10]
 */

var arr = [1,2,3];

function onlyEvenValues(arr) {
var evenNumbers = arr.filter(function(number) {  
    return number % 2 === 0;
  });
  return evenNumbers;
}

console.log(onlyEvenValues(arr));

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/
/**
 * Remove all vowels from within a string
 * @param {string} str
 * @returns {string} string with the vowels removed
 * @example
 *  removeVowels('Elie') // ('l')
 *  removeVowels('TIM') // ('tm')
 *  removeVowels('ZZZZZZ') // ('zzzzzz')
 */
var str = "";

function removeVowels(str) {
   var vowels = ['a', 'e', 'i', 'o', 'u'];
  lowerStr = str.toLowerCase().split('');
  var noVowel = lowerStr.filter(function(letter) { 
    return letter.replace(/[aeiou]/, '');
  });
  return noVowel.join('');
}


console.log(removeVowels("Matt"));

module.exports = {
  filter,
  onlyEvenValues,
  removeVowels
};
