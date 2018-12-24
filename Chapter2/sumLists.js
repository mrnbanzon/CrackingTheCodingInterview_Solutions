// Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit.The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
// EXAMPLE
// Input:(7-> 1 -> 6) + (5 -> 9 -> 2).Thatis,617 + 295. Output:2 -> 1 -> 9.Thatis,912.
// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem. EXAMPLE
// Input:(6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295. Output:9 -> 1 -> 2.Thatis,912.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function sumLists(a, b) {
  function listToNum(node) {
    let num = 0;
    for (let index = 0; node !== null; index += 1) {
      num += Math.pow(10, index) * node.val;
      node = node.next;
    }
    return num;
  }
  return listToNum(a) + listToNum(b);
}

function sumListsForwardOrder(a, b) {
  function listToNum(node) {
    let num = 0;
    let index = 0;
    while (node !== null) {
      num += (1 / Math.pow(10, index)) * node.val;
      node = node.next;
      index += 1;
    }
    return num * Math.pow(10, index - 1);
  }
  return listToNum(a) + listToNum(b);
}

/* TESTING */
let a = new Node(7);
a.next = new Node(1);
a.next.next = new Node(6);

let b = new Node(5);
b.next = new Node(9);
b.next.next = new Node(2);

console.log(sumLists(a, b));

let c = new Node(6);
c.next = new Node(1);
c.next.next = new Node(7);

let d = new Node(2);
d.next = new Node(9);
d.next.next = new Node(5);

console.log(sumListsForwardOrder(c, d));
