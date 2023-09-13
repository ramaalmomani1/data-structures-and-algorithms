const Graph = require('../Graph');
const Vertex = require('../Vertex');

const graph = new Graph();
const vertex1 = new Vertex(1);
const vertex2 = new Vertex(2);
const vertex3 = new Vertex(3);
const vertex4 = new Vertex(4);

graph.addVertex(vertex1);
graph.addVertex(vertex2);
graph.addVertex(vertex3);
graph.addVertex(vertex4);
graph.addEdge(vertex1, vertex2);
graph.addEdge(vertex1, vertex3);
graph.addEdge(vertex2, vertex4);

describe('Graph breadthFirst method', () => {
  it('should return an empty array if the startNode is not in the graph', () => {
    const result = graph.breadthFirst(new Vertex(5)); 
    expect(result).toEqual([]);
  });

  it('should perform a breadth-first traversal and return nodes in the correct order', () => {
    const result = graph.breadthFirst(vertex1);
    expect(result).toEqual([vertex1, vertex2, vertex3, vertex4]);
  });

  it('should return all nodes when the startNode is the only node in the graph', () => {
    const singleNodeGraph = new Graph();
    const singleVertex = new Vertex(1);
    singleNodeGraph.addVertex(singleVertex);

    const result = singleNodeGraph.breadthFirst(singleVertex);
    expect(result).toEqual([singleVertex]);
  });
});
