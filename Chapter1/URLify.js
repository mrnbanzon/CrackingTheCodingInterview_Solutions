/**
 * Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string.
 * Example
 * Input: 'Mr John Smith             ', 13
 * Output: 'Mr%20John%20Smith'
 */

// =============== Solution with Array methods ======================
// const URLify = ( string, len ) => {
//   const newStr = string.slice(0, len).split(' ').join('%20');
//   return newStr;
// };

// =============== Solution without Native methods ==================
const URLify = ( string, len ) => {
  let output = '';
  for ( var j = 0; j < len; j++ ) {
    if ( string[j] === ' ' ) {
      output += '%20';
    } else {
      output += string[j];
    }
  }
  return output;
}

const result = URLify( 'Mr John Smith             ', 13 );
console.log(result);