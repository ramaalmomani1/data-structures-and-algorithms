"use strict";

const Edge = require("./Edge");
// const Vertex = require("./Vertex");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.log(
        "We cannot have an edge without starting and ending Vertex!!"
      );
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

  businessTrip(graph, cities) {
    if (cities.length < 2) {
      return null;
    }

    let totalCost = 0;
    for (let i = 0; i < cities.length - 1; i++) {
      const startCity = cities[i];
      const endCity = cities[i + 1];

      const startVertex = graph
        .getVertices()
        .find((vertex) => vertex.value === startCity);

      if (!startVertex) {
        return null;
      }

      const neighbors = graph.getNeighbors(startVertex);

      const directFlight = neighbors.find(
        (neighbor) => neighbor.vertex.value === endCity
      );

      if (!directFlight) {
        return null;
      }

      totalCost = totalCost + directFlight.weight;
    }

    return totalCost;
  }
  depthFirst(node) {
    const visitedNode = new Set();
    const result = [];

    const travers = (current) => {
      visitedNode.add(current);
      result.push(current);

      const neighbors = this.getNeighbors(current);
      for (const neighbor of neighbors) {
        if (!visitedNode.has(neighbor.vertex)) {
          travers(neighbor.vertex);
        }
      }
    };

    travers(node);

    return result.join(",");
  }
}

module.exports = Graph;

// const graph = new Graph();

// const seattle = new Vertex("Seattle");
// const sanFrancisco = new Vertex("San Francisco");
// const losAngeles = new Vertex("Los Angeles");
// const lasVegas = new Vertex("Las Vegas");
// const newYork = new Vertex("New York");
// const chicago = new Vertex("Chicago");

// graph.addVertex(seattle);
// graph.addVertex(sanFrancisco);
// graph.addVertex(losAngeles);
// graph.addVertex(lasVegas);
// graph.addVertex(newYork);
// graph.addVertex(chicago);

// graph.addEdge(seattle, sanFrancisco, 200);
// graph.addEdge(seattle, losAngeles, 150);
// graph.addEdge(sanFrancisco, losAngeles, 100);
// graph.addEdge(sanFrancisco, lasVegas, 300);
// graph.addEdge(losAngeles, lasVegas, 50);
// graph.addEdge(newYork, chicago, 200);

// const cost1 = graph.businessTrip(graph, [
//   "Seattle",
//   "San Francisco",
//   "Los Angeles",
// ]);
// console.log("trip 1", cost1);

// const cost2 = graph.businessTrip(graph, [
//   "Seattle",
//   "San Francisco",
//   "Las Vegas",
// ]);
// console.log("trip 2", cost2);

// const cost3 = graph.businessTrip(graph, ["New York", "Chicago"]);
// console.log("trip 3", cost3);

// const cost4 = graph.businessTrip(graph, ["San Francisco", "New York"]);
// console.log("trip 4", cost4);
