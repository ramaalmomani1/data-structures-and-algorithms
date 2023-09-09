const Graph = require("./Graph.js");
const Vertex = require("./Vertex");

describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it("should add a vertex to the graph", () => {
    const vertex = new Vertex(1);
    graph.addVertex(vertex);
    expect(graph.getVertices()).toContain(vertex);
  });

  it("should add an edge to the graph", () => {
    const v1 = new Vertex(1);
    const v2 = new Vertex(2);
    graph.addVertex(v1);
    graph.addVertex(v2);
    graph.addEdge(v1, v2, 5);
    const neighbors = graph.getNeighbors(v1);
    expect(neighbors).toContainEqual({ vertex: v2, weight: 5 });
  });

  it("should retrieve all vertices from the graph", () => {
    const vertices = [new Vertex(1), new Vertex(2), new Vertex(3)];
    vertices.forEach((vertex) => graph.addVertex(vertex));
    const allVertices = graph.getVertices();
    expect(allVertices).toEqual(expect.arrayContaining(vertices));
  });

  it("should retrieve appropriate neighbors with weights", () => {
    const v1 = new Vertex(1);
    const v2 = new Vertex(2);
    graph.addVertex(v1);
    graph.addVertex(v2);
    graph.addEdge(v1, v2, 5);
    const neighbors = graph.getNeighbors(v1);
    expect(neighbors).toContainEqual({ vertex: v2, weight: 5 });
  });

  it("should return the proper size of the graph", () => {
    const vertices = [new Vertex(1), new Vertex(2), new Vertex(3)];
    vertices.forEach((vertex) => graph.addVertex(vertex));
    expect(graph.size()).toBe(vertices.length);
  });

  it("should work with a graph with one vertex and one edge", () => {
    const v1 = new Vertex(1);
    graph.addVertex(v1);
    graph.addEdge(v1, v1, 5);

    const allVertices = graph.getVertices();
    const neighbors = graph.getNeighbors(v1);
    const numberOfVertices = graph.size();

    expect(allVertices).toEqual([v1]);
    expect(neighbors).toContainEqual({ vertex: v1, weight: 5 });
    expect(numberOfVertices).toBe(1);
  });
});
