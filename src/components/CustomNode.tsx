import { CheckCircle, Trash } from "@phosphor-icons/react";
import { Handle, NodeProps, Position, useReactFlow } from "reactflow";

function CustomNode({ id, data: { label, handleType, endpoint } }: NodeProps) {
  const { deleteElements } = useReactFlow();
  if (handleType == "source") {
    return (
      <>
        <div className="h-20 w-40 rounded  flex flex-col items-center justify-center border-2 border-green-500 overflow-x-hidden relative">
          <Trash
            size={14}
            weight="fill"
            className="absolute text-slate-500 top-1 left-1"
            onClick={() => deleteElements({ nodes: [{ id }] })}
          />
          <CheckCircle
            size={20}
            weight="fill"
            className="absolute text-green-500 top-0 right-0"
          />
          <div>{label}</div>
          <div className="text-zinc-600 font-light text-[8px]">{endpoint}</div>
        </div>
        <Handle type={handleType} position={Position.Right} />
      </>
    );
  }

  if (handleType == "target") {
    return (
      <>
        <div className="h-20 w-40 rounded flex flex-col items-center justify-center border-2 border-blue-500 overflow-x-hidden relative">
          <Trash
            size={14}
            weight="fill"
            className="absolute text-slate-500 top-1 left-1"
            onClick={() => deleteElements({ nodes: [{ id }] })}
          />
          <CheckCircle
            size={20}
            weight="fill"
            className="absolute text-green-500 top-0 right-0"
          />
          <div>{label}</div>
          <div className="text-zinc-600 font-light text-[8px]">{endpoint}</div>
        </div>
        <Handle type={handleType} position={Position.Left} />
      </>
    );
  }

  if (handleType == "default") {
    return (
      <>
        <div className="h-20 w-40 rounded flex flex-col items-center justify-center border-2 border-violet-500 overflow-x-hidden relative">
          <Trash
            size={14}
            weight="fill"
            className="absolute text-slate-500 top-1 left-1"
            onClick={() => deleteElements({ nodes: [{ id }] })}
          />
          <CheckCircle
            size={20}
            weight="fill"
            className="absolute text-green-500 top-0 right-0"
          />
          <div>{label}</div>
          <div className="text-zinc-600 font-light text-[8px]">{endpoint}</div>
        </div>
        <Handle type="source" position={Position.Right} />
        <Handle type="target" position={Position.Left} />
      </>
    );
  }
}

export default CustomNode;
