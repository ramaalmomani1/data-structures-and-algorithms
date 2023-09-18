const Graph = require("../Graph");

test("Valid trip with direct flights", () => {
  const graph = new Graph();

  const seattle = "Seattle";
  const sanFrancisco = "San Francisco";
  const losAngeles = "Los Angeles";

  graph.addVertex(seattle);
  graph.addVertex(sanFrancisco);
  graph.addVertex(losAngeles);

  graph.addEdge(seattle, sanFrancisco, 200);
  graph.addEdge(seattle, losAngeles, 150);

  const cost = graph.businessTrip(graph, [seattle, sanFrancisco, losAngeles]);

  expect(cost).toBeNull();
});

test("Trip not possible due to missing city", () => {
  const graph = new Graph();

  const seattle = "Seattle";

  graph.addVertex(seattle);

  graph.addEdge(seattle, "Los Angeles", 200);

  const cost = graph.businessTrip(graph, [seattle, "San Francisco"]);

  expect(cost).toBeNull();
});
