import { Edge, Node } from "reactflow";

const sortNodes = (startingNodeId: string, nodes: Node[], edges: Edge[]) => {
  const sortedNodes: Node[] = [];
  const adjacencyList: { [key: string]: string[] } = {};

  edges.forEach((edge) => {
    if (!adjacencyList[edge.source]) {
      adjacencyList[edge.source] = [];
    }
    adjacencyList[edge.source].push(edge.target);
  });

  const dfs = (nodeId: string) => {
    const node = nodes.find((n) => n.id === nodeId);
    if (node) {
      sortedNodes.push(node);
      if (adjacencyList[nodeId]) {
        adjacencyList[nodeId].forEach((neighbor) => {
          dfs(neighbor);
        });
      }
    }
  };

  dfs(startingNodeId);
  return sortedNodes;
};

export default sortNodes;
