"use strict";

const Edge = require("./Edge");
const Vertext = require("./Vertex");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) && !this.adjacencyList.has(end)) {
      console.log("We cannot have an edge without staring and ending Vertex!!");
      return;
    }

    const startVertex = this.adjacencyList.get(start);
    const edge = new Edge(end, weight);
    startVertex.push(edge);
  }
  getVertices() {
    return Array.from(this.adjacencyList.keys());
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      return [];
    }

    const edges = this.adjacencyList.get(vertex);

    const neighbors = edges.map((edge) => ({
      vertex: edge.vertex,
      weight: edge.weight,
    }));

    return neighbors;
  }

  size() {
    return this.adjacencyList.size;
  }
  
  breadthFirst(startNode) {
    if (!this.adjacencyList.has(startNode)) {
      return [];
    }

    const visited = new Set();
    const result = [];
    const queue = [startNode];

    visited.add(startNode);

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      result.push(currentVertex);

      const neighbors = this.getNeighbors(currentVertex);

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor.vertex)) {
          visited.add(neighbor.vertex);
          queue.push(neighbor.vertex);
        }
      }
    }

    return result;
  }
}

module.exports = Graph;
const graph = new Graph();

const one = new Vertext(1);
const two = new Vertext(2);
const three = new Vertext(3);
const four = new Vertext(4);
const five = new Vertext(5);
const six = new Vertext(6);
graph.addVertex(one);
graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(four);
graph.addVertex(five);
graph.addVertex(six);

graph.addEdge(one, two);
graph.addEdge(one, three, 5);
graph.addEdge(two, four);
graph.addEdge(two, five);
graph.addEdge(four, three);
graph.addEdge(five, six);

// console.log(graph.adjacencyList.entries())



for (const [k, v] of graph.adjacencyList.entries()) {
  console.log("Key =>", k, "V =>", v);
  // for(let i = 0; i < v.length; i++) {
  //   console.log(v[i])
  // }
}

////////////////

console.log("Vertices", graph.getVertices());

const neighbors = graph.getNeighbors(one);
console.log("Neighbors", neighbors);

console.log("Size ", graph.size());
console.log('Breadth-First Traversal:', graph.breadthFirst(one));
