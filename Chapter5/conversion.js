// Write a function to determine the number of bits you would need
// to flip to convert integer A to integer B.
// Ex) conversion(29, 15) = 2

function conversion(A, B) {
  let diffBits = A ^ B;
  let cnt = 0;
  while (diffBits !== 0) {
    if (diffBits % 2 !== 0) cnt += 1;
    diffBits >>>= 1;
  }
  return cnt;
}

/* TEST */
console.log(conversion(29, 15));

/* BOOK SOLUTION */
function solution(A, B) {
  let count = 0;
  for (let c = A ^ B; c !== 0; c >>>= 1) {
    count += c & 1;
  }
  return count;
}
