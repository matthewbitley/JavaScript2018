/**
 * Check to see if two provided strings are anagrams.
 *
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Ignore special characters and spaces; do not
 * count them.
 *
 * @example
 *   anagrams('rail safety', 'fairy tales') // true
 *   anagrams('RAIL! SAFETY', 'fairy tales') // true
 *   anagrams('Hi there', 'Bye there') // false
 *
 * @param {string} string1 first string to compare
 * @param {string} string2 second string to compare
 * @returns {boolean} whether or not the strings are anagrams
 */
function anagrams(string1, string2) {
	var tallies = [];
	var isAnagram = true;

	[string1, string2].forEach(function(string, i) {
		var obj = {};
		string.split("").forEach(function(letter) {
			if (letter.match(/\W/)) return;
			var letter = letter.toLowerCase();
			if (!obj[letter]) obj[letter] = 1;
			else obj[letter] = obj[letter] + 1;
	});
		tallies.push(obj);
	});

	if (tallies[0].length !== tallies[1].length) return false;

	for (var letter in tallies[0]) {
		if (!tallies[0][letter] || tallies[0][letter] !== tallies[1][letter]) {
			isAnagram = false;
			break;
		}
	}

	return isAnagram;
}

console.log(anagrams("Hi There", "Bye There"));

module.exports = {
  anagrams
};
