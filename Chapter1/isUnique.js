/**
 * Implement an algorithm to determine if a string has all unique characters. What is you cannot use additional data structures?
 * 
 */

const isUnique = (string) => {
  if (string.length > 128) false;
  let characters = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (characters[char]) {
      return false;
    }
    characters[char] = true;
  }
  return true;
}

let string = 'helo';
console.log(isUnique(string));