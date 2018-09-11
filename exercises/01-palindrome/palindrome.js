/**
 * A palindrom is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 * Checks to see if a string is a palindrome. You must remove special characters.
 * @param  {[string]}  string
 * @return {Boolean}
 */

eye = true;
racecar = true;
dog = false;

function isPalindrome(str) {
  
  str.split('').reverse().join('') === str
  // Stack Overflow Answer
  /*var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;*/
}

isPalindrome("eye");

module.exports = {
  isPalindrome
};
