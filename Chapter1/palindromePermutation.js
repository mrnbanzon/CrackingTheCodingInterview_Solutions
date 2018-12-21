// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­ drome. A palindrome is a word or phrase that is the same  rwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco eta", etc.)

function palindromePermutation(s) {
  let appearances = {};
  let odds = 0;
  for (let index = 0; index < s.length; index += 1) {
    let chr = s.charAt(index).toLowerCase();
    if (chr.match(/[A-Za-z]/)) {
      appearances[chr] = appearances[chr] + 1 || 1;
      if (appearances[chr] % 2 === 0) odds -= 1;
      else odds += 1;
    }
  }

  return odds <= 1;
}

/* TESTING */
console.log(palindromePermutation('Tact Coa')); //true
console.log(palindromePermutation('race car')); //true
console.log(palindromePermutation('ab ba')); //true
console.log(palindromePermutation('race cat')); //false
