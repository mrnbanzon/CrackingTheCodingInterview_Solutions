/**
 * Given two strings, write a method to decide if one is a permutation of the other.
 * 
 * =========== Questions to ask interviewer ===========================
 * 1. case sensitive? 'God' permutation of 'dog'?
 *    |_ comparison is case sensitive, meaning 'God' is not a permutation of 'dog'
 * 2. significance of white space ?
 *    |_ white spaces are significance, meaning 'god    ' is different from 'dog'.
 */

function checkPermutation( strA, strB ) {
  const chars = {};
  // if two strings have different lengths, return false
  if (strA.length !== strB.length) return false;
  // iterate over 2 strings
  for ( let i = 0; i < strA.length; i++ ) {
    let firstCurr = strA[i];
    let secondCurr = strB[i];
    // make a hash table containing char as key and counts as value
    chars[firstCurr] = ++chars[firstCurr] || 1;
    chars[secondCurr] = ++chars[secondCurr] || 1;
  }
  // iterate over the hash table
  for (let key in chars) {
    // if not even values -> return false
    if ( chars[key] % 2 !== 0) return false;
  }
  return true
}

let string1 = 'god';
let string2 = 'dog';

console.log( 'checkPermutation', checkPermutation( string1, string2 ) );

// =============== different approach
function sort(string) {
  return string.split('').sort().join('');
}

function anotherPermutationChecker( str1, str2 ) {
  if ( str1.length !== str2.length ) return false;
  str1 = sort(str1);
  str2 = sort(str2);
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) return false;
  }
  return true;
}

console.log( 'anotherPermutation', anotherPermutationChecker( string1, string2 ) );