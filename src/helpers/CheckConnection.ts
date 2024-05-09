import { getIncomers, getOutgoers, Node } from "reactflow";
import useApiFlowStore from "../store";

const getNodesOfType = (nodes: Node[], type: string) => {
  return nodes.filter((element) => element.type === type);
};

const checkFlowConnection = () => {
  const nodes = useApiFlowStore.getState().nodes;
  const edges = useApiFlowStore.getState().edges;

  const sourceNode = getNodesOfType(nodes, "customSource");
  const targetNode = getNodesOfType(nodes, "customTarget");

  if (sourceNode.length !== 1) {
    return false;
  }

  if (getOutgoers(sourceNode[0], nodes, edges).length !== 1) {
    return false;
  }

  if (targetNode.length !== 1) {
    return false;
  }

  if (getIncomers(targetNode[0], nodes, edges).length !== 1) {
    return false;
  }

  if (nodes.length - 1 !== edges.length) {
    return false;
  }

  return true;
};

export { checkFlowConnection, getNodesOfType };
