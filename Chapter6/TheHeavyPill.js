// You have 20 bottles of pills. 19 bottles have 1.0 gram pills, but one has pills of weight 1.1 grams. Given a scale that provides an exact measurement, how would you find the heavy bottle? You can only use the scale once.

// My solution:
// NOTE: I had to use 3 hints to solve this problem

/*
1) Take a number of pills from each bottle that represents that bottle respectively
- ex) bottle 1 : 1 pill bottle 2: 2 pills etc....
2) When you put them on the scale, if all the pill weighed the same, then the total weight should be 210 grams = the sum of 1 to 20.
3) because there is one group of pills that should weigh differently, the total will be off by the added amount of weight. You can find which bottle was heavier with the equation: (total weight - 210) * 10. Here's the possible outcomes:

outcomes = {
  1: 210.1,
  2: 210.2,
  3: 210.3,
  4: 210.4,
  5: 210.5,
  6: 210.6,
  7: 210.7,
  8: 210.8,
  9: 210.9,
  10: 211.0
  11: 211.1,
  12: 211.2,
  13: 211.3,
  14: 211.4,
  15: 211.5,
  16: 211.6,
  17: 211.7,
  18: 211.8,
  19: 211.9,
  20: 212.0
}



*/
