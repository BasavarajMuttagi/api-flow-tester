import { twMerge } from "tailwind-merge";
import useApiFlowStore from "../store";

function ClearResponse() {
  const { nodes, setNodes } = useApiFlowStore();
  const clearResponse = () => {
    const updatedNodes = nodes.map((eachNode) => {
      return {
        ...eachNode,
        data: {
          ...eachNode.data,
          response: {
            data: {},
            status: -1,
          },
        },
      };
    });

    setNodes(updatedNodes);
  };
  return (
    <button
      onClick={() => {
        clearResponse();
      }}
      className={twMerge(
        "bg-violet-500 hover:bg-violet-700 text-white font-medium py-2 px-4 rounded flex space-x-3 items-center",
        false ? "bg-violet-300" : ""
      )}
      disabled={false}
    >
      Clear Response
    </button>
  );
}

export default ClearResponse;
