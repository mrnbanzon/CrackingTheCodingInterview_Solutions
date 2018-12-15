/*
Design an algorithm to perform basic string compression using the counts
of repeated characters. Example: The string "aabcccccaaa" would become
"a2b1c5a3".
If the compressed string would not become smaller than the original string
your method should just return the original string.
*/

// I- String
// O- Compressed string or original if smaller
// C- Assume the string has only upper and lower case letters
// E- empy string? spaces?

// We will loop through string and keep a counter for each char
  // Increment the counter
  // If the current char is not equal to the next one
  // Add the char plus the char count
  // Reset count to 0 for next iteration!
// If the compressed string is longer than the original 
  // return original
  // Else
  // return the compressed string


const stringCompress = str => {
  if (str.length === 0) return null;
  let output = '';
  let count = 0;
  for (let i = 0; i < str.length; ++i) {
     count++;
     if (str[i] !== str[i + 1]) {
       output += str[i] + count;
       count = 0;
     }
  }
  if (output.length > str.length) {
    return str;
  } else {
    return output;
  }
}

console.log(stringCompress("aabcccccaaa"))
console.log(stringCompress("aaaa"))