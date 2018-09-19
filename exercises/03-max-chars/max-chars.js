/**
 * Find the character that is most commonly used in the string
 * @param {string} string
 * @returns {string} character that occurs most often
 * @example
 * maxChar("aaaabc"); // a
 */

function maxChars(string) {
  var freq = {};
    for (var i=0; i<string.length;i++) {
        var char = string[i];
        if (freq[char]) {
           freq[char]++;
        } else {
           freq[char] = 1;
        }
    }

  return freq;
}

console.log(maxChars("Hello World"));

module.exports = {
  maxChars
};