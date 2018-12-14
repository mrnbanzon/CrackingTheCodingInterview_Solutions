// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
// EXAMPLE
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bake -> false

function oneWay(a, b) {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1) return false;

  if (a.length === b.length) {
    let replaceCnt = 0;
    for (let index = 0; index < a.length; index += 1) {
      if (a[index] !== b[index]) replaceCnt += 1;
      if (replaceCnt > 1) return false;
    }
    return true;
  } else {
    let longest = a.length > b.length ? a : b;
    let shortest = a === longest ? b : a;

    let lIndex = 0;
    let sIndex = 0;

    while (lIndex < longest.length && sIndex < shortest.length) {
      if (longest[lIndex] !== shortest[sIndex]) {
        lIndex += 1;
        if (lIndex - sIndex > 1) return false;
      }
      lIndex += 1;
      sIndex += 1;
    }
    return true;
  }
}

/* TESTING */
console.log(oneWay('pale', 'ple')); //true
console.log(oneWay('pales', 'pale')); //true
console.log(oneWay('pale', 'bale')); //true
console.log(oneWay('pale', 'bake')); //false
console.log(oneWay('paa', 'pa')); //true
