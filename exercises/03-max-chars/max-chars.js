/**
 * Find the character that is most commonly used in the string
 * @param {string} string
 * @returns {string} character that occurs most often
 * @example
 * maxChar("aaaabc"); // a
 */

function maxChars(string) {
  var obj = {};
  var array = string.split("");

  for (var i = 0, j = string.length; i < j; i++) {
    var letter = array[i];

    if (obj[letter]) {
      obj[letter] = obj[letter] + 1;
    } else obj[letter] = 1;
  }

  var maxLetter = "";
  var maxOccurences = 0;
  for (var letter in obj) {
    if (obj[letter] > maxOccurences) {
      maxOccurences = obj[letter];
      maxLetter = letter;
    }
  }

  return maxLetter;
}

console.log(maxChars("Hello World"));

module.exports = {
  maxChars
};