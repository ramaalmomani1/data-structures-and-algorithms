const Graph = require("../Graph");

describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it("should perform depth-first traversal for a simple graph", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addEdge("A", "B", 1);
    graph.addEdge("B", "C", 2);

    const traversalResult = graph.depthFirst("A");
    expect(traversalResult).toBe("A,B,C");
  });

  it("should perform depth-first traversal for a disconnected graph", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addEdge("A", "B", 1);
    graph.addEdge("C", "D", 2);

    const traversalResult = graph.depthFirst("A");
    expect(traversalResult).toBe("A,B");
  });

  it("should handle depth-first traversal for a single-node graph", () => {
    graph.addVertex("A");

    const traversalResult = graph.depthFirst("A");
    expect(traversalResult).toBe("A");
  });
});
