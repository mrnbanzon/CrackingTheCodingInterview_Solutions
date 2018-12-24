// Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
// EXAMPLE
// Input:the node c from the linked lista->b->c->d->e->f
// Result: nothing is returned, but the new linked list looks likea->b->d->e- >f

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function deleteMiddleNode(middleNode) {
  let next = middleNode.next;
  middleNode.val = next.val;
  middleNode.next = next.next;
}

/* TESTING */
let a = new Node('a');
let b = new Node('b');
a.next = b;
let c = new Node('c');
b.next = c;
let d = new Node('d');
c.next = d;
let e = new Node('e');
d.next = e;
let f = new Node('f');
e.next = f;

function printList(node) {
  let list = [];
  while (node !== null) {
    list.push(node.val);
    node = node.next;
  }
  console.log(list.join('->'));
}

printList(a);
deleteMiddleNode(c);
printList(a);
