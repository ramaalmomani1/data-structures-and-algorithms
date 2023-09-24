"use strict";

const nodes = [["a"], ["b"], ["c"], ["d"], ["e"]];

const adjacencyMatrix = [
  [false, true, false, false, true],
  [true, false, true, true, false],
  [false, true, false, true, false],
  [false, true, true, false, true],
  [true, false, false, true, false],
];

function createAdjacencyList(nodes, matrix) {
  const adjList = {};

  for (let i = 0; i < nodes.length; i++) {
    const nodeValue = nodes[i][0];
    const nodeNeighbors = [];

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        nodeNeighbors.push(nodes[j][0]);
      }
    }

    adjList[nodeValue] = nodeNeighbors;
  }

  return adjList;
}

const adjacencyList = createAdjacencyList(nodes, adjacencyMatrix);

for (const nodeValue in adjacencyList) {
  const nodeNeighbors = adjacencyList[nodeValue];
  console.log(`${nodeValue}| -> ${nodeNeighbors.join(" -> ")}`);
}
