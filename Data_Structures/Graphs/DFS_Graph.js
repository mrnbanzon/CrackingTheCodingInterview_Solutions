// Implement a basic graph data structure using an adjancency list
// This data structure should be able to add new vertices, edges, and remove a vertex or edge.
// Add a Depth First Search method that takes in a starting vertex to search from

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // Insert new vertex method
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; // Check if vertex already exists
  }
  // Connect vertices with edges
  addEdge(vertex1, vertex2) { // We could add error handling to make sure the keys are valid
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  // Remove edges between two vertices
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }
  // Remove a vertext and all associated edges
  removeVertex(vertex) {
    // Need to not only remove the node, but also all edges associated with that node
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  // Depth Fist Search method
  DFS(start) {
  let result = [];
  let visited = {};
  const adjacencyList = this.adjacencyList;
  const search = vertex => {
    if (!vertex) return null;
    visited[vertex] = true;
    result.push(vertex);
    adjacencyList[vertex].forEach(neighbor => {
      if (!visited[neighbor]) { // If it has not been visited
        return search(neighbor);
      }
    })
  }
  search(start);
  return result;
  }
}

// Example Test
let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
g.DFS("A")

// Visual preview of our graph
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
