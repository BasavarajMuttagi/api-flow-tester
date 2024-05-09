import { Play } from "@phosphor-icons/react";

import {
  checkFlowConnection,
  getNodesOfType,
} from "../helpers/CheckConnection";
import useApiFlowStore from "../store";
import sortNodes from "../helpers/SortNodes";
import apiClient from "../helpers/apiClient";
function RunFlow() {
  const nodes = useApiFlowStore((state) => state.nodes);
  const edges = useApiFlowStore((state) => state.edges);

  const InitFlowExecution = () => {
    if (!checkFlowConnection()) {
      return;
    }

    const sourceNode = getNodesOfType(nodes, "customSource");
    const sortedNodes = sortNodes(sourceNode[0].id, nodes, edges);

    sortedNodes.forEach(async (element, index) => {
      const client = apiClient({
        baseURL: element.data.endpoint,
        method: element.data.method,
        data: element.data.body,
        url: `/`,
      });

      const response = await client.request({});
      console.log(response);
    });
  };
  return (
    <button
      onClick={() => InitFlowExecution()}
      className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded flex space-x-3 items-center"
    >
      <Play size={24} />
    </button>
  );
}

export default RunFlow;
