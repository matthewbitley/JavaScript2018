/**
 * Compare two arrays and return a new array with only the values found in one of the arrays
 * @param {array} arr1
 * @param {array} arr2
 * @returns {array} new array of unique values
 */
function diffArray(arr1, arr2) {
  var comboArray = [];
  arr1.forEach(function(a1) {
    arr2.forEach(function(a2) {
    if (a1 === a2) {
      comboArray.push(a);
        }
      });
    });
  return comboArray;
}
console.log(diffArray([1,2,3,4,5], [1,2,3,4,77]));

module.exports = {
  diffArray
};
