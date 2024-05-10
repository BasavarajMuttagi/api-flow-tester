import ReactFlow, { Controls, Background } from "reactflow";
import useApiFlowStore from "../store";
import "reactflow/dist/style.css";
import CustomNode from "./CustomNode";
import { useMemo } from "react";
import CustomDeleteEdge from "./CustomDeleteEdge";

function FlowWindow() {
  const nodeTypes = useMemo(
    () => ({
      customSource: CustomNode,
      customTarget: CustomNode,
      customDefault: CustomNode,
    }),
    []
  );

  const edgeTypes = useMemo(
    () => ({
      customDeleteEdge: CustomDeleteEdge,
    }),
    []
  );
  const { nodes, edges, onEdgesChange, onNodesChange, onConnect } =
    useApiFlowStore();
  return (
    <div className="h-[95%] w-full border border-neutral-800">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default FlowWindow;
