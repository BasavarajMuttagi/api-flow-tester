import { X } from "@phosphor-icons/react";
import {
  BezierEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
  useReactFlow,
} from "reactflow";

function CustomDeleteEdge(data: EdgeProps) {
  const { setEdges } = useReactFlow();

  const { sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } =
    data;

  const [_, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });
  return (
    <>
      <BezierEdge {...data} />
      <EdgeLabelRenderer>
        <X
          size={14}
          className="text-red-500 nodrag nopan cursor-pointer"
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: "all",
          }}
          onClick={() =>
            setEdges((prev) => prev.filter((e) => e.id !== data.id))
          }
        />
      </EdgeLabelRenderer>
    </>
  );
}

export default CustomDeleteEdge;
