// Given an image represented by an NxN matrix, where each pixel is 4 bytes
// Write a method to rotate the image by 90 degrees. Do it in place if possible

// O- Rotated matrix by 90 degrees
// I- Matrix of integers
// C- Rotate in place
// E- 

const rotateMatrix = matrix => {
  const N = matrix.length - 1;
  const result = matrix.map((row, i) => {
    return row.map((val, j) => matrix[N- j][i])
  });
  matrix.length = 0;
  matrix.push(...result);
  return matrix;
}

/* TEST */
var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
  ];
  
  console.log('before:');
  console.log(testMatrix[0]);
  console.log(testMatrix[1]);
  console.log(testMatrix[2]);
  console.log(testMatrix[3]);
  
  rotateMatrix(testMatrix);
  console.log('After')
  console.log(testMatrix[0])
  console.log(testMatrix[1])
  console.log(testMatrix[2])
  console.log(testMatrix[3])