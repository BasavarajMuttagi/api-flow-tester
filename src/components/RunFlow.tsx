import { CircleNotch, Play } from "@phosphor-icons/react";

import {
  checkFlowConnection,
  getNodesOfType,
} from "../helpers/CheckConnection";

import sortNodes from "../helpers/SortNodes";
import apiClient from "../helpers/apiClient";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import useApiFlowStore, { NodeType } from "../store";

function RunFlow() {
  const nodes = useApiFlowStore((state) => state.nodes);
  const edges = useApiFlowStore((state) => state.edges);
  const setNodes = useApiFlowStore((state) => state.setNodes);

  const [running, setRunning] = useState(false);

  const InitFlowExecution = () => {
    setRunning(true);
    if (!checkFlowConnection()) {
      console.log("check failed");
      setRunning(false);
      return;
    }

    const sourceNode = getNodesOfType(nodes, "customSource");
    const sortedNodes = sortNodes(sourceNode[0].id, nodes, edges);

    const executeNextApi = async (index: number, nodes: NodeType[]) => {
      if (index >= sortedNodes.length) {
        setRunning(false);
        return;
      }

      const element = sortedNodes[index];
      const client = apiClient({
        baseURL: element.data.endpoint,
        method: element.data.method,
        data: element.data.body,
        url: `/`,
      });

      await client
        .request({})
        .then((response) => {
          const { data, status } = response;

          const updatedNodes = nodes.map((eachNode) => {
            if (element.id === eachNode.id) {
              return {
                ...eachNode,
                data: {
                  ...eachNode.data,
                  response: {
                    data: data,
                    status: status,
                  },
                },
              };
            }
            return eachNode;
          });

          setNodes(updatedNodes);
          executeNextApi(index + 1, updatedNodes);
        })
        .catch(() => {
          const updatedNodes = nodes.map((eachNode) => {
            if (element.id === eachNode.id) {
              return {
                ...eachNode,
                data: {
                  ...eachNode.data,
                  response: {
                    status: 400,
                  },
                },
              };
            }
            return eachNode;
          });

          setNodes(updatedNodes);
          setRunning(false);
        })
        .finally(() => {
          setRunning(false);
        });
    };
    executeNextApi(0, nodes);
  };

  return (
    <button
      onClick={() => {
        InitFlowExecution();
      }}
      className={twMerge(
        "bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded flex space-x-3 items-center",
        running ? "bg-green-300" : ""
      )}
      disabled={running}
    >
      {running ? (
        <CircleNotch size={24} className="animate-spin" />
      ) : (
        <Play size={24} />
      )}
    </button>
  );
}

export default RunFlow;
