/**
 * Recreate the map function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * @param {array} arr
 * @param {function} callback
 * @returns {array} new array
 */

var arr = [1,2,3];
function map(arr, callback) {
  newArr = [];
  arr.forEach(function(item, index, array) {
    //newArr.push(item, index, array);
    newArr.push(item);
    //callback(item, index, array);
  });
  return newArr;
}

console.log(map(arr, function(item, index, array){
     return item * 2;
}));

/**
 * Multiplies each value in an array by two
 * @param {array} arr
 * @returns {array} new array, with each value doubled
 */
function doubleValues(arr) {}

/**
 * Given an array nested with objects
 * and give the name of a shared key that is in all the nested objectss,
 * extract the values from the object that have the given key
 * and returns the extracted values in an array
 * @param {array} arr
 * @param {string} key what, from the object you want to return in your new array
 * @returns {array} new array
 *
 * @example
 * var arrayOfNames = [
 *  {name: 'Ellie', age: 20},
 *  {name: 'Tim', age: 35},
 *  {name: 'Matt', age: 18},
 *  {name: 'Colt', age: 47}
 * ];
 * extractKey(arrayOfNames, 'name'); // ['Ellie', 'Tim', 'Matt', 'Colt']
 */
function extractKey(arr, key) {}

module.exports = {
  map,
  doubleValues,
  extractKey
};
