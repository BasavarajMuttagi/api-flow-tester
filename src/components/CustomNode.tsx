import { CheckCircle, Trash, WarningCircle } from "@phosphor-icons/react";
import { Handle, Position, useReactFlow } from "reactflow";
import EditNode from "./EditNode";
import useDialog from "../hooks/custom";
import { NodeType } from "../store";

function CustomNode(currentNode: Omit<NodeType, "position">) {
  const {
    id,
    data: {
      endpoint,
      handleType,
      label,
      response: { status },
    },
  } = currentNode;
  const { closeDialog, dialogRef, openDialog } = useDialog();
  const { deleteElements } = useReactFlow();
  if (handleType == "source") {
    return (
      <>
        <div
          onDoubleClick={() => openDialog()}
          className="h-20 w-40 rounded  flex flex-col items-center justify-center border-2 border-green-500 overflow-x-hidden relative"
        >
          <Trash
            size={14}
            weight="fill"
            className="absolute text-slate-500 top-1 left-1"
            onClick={() => deleteElements({ nodes: [{ id }] })}
          />
          {status == 200 && (
            <CheckCircle
              size={20}
              weight="fill"
              className="absolute text-green-500 top-0 right-0"
            />
          )}
          {status == 400 && (
            <WarningCircle
              size={20}
              weight="fill"
              className="absolute text-red-500 top-0 right-0"
            />
          )}
          <div>{label}</div>
          <div className="text-zinc-600 font-light text-[8px]">{endpoint}</div>
        </div>
        <Handle type={handleType} position={Position.Right} />
        <EditNode
          closeDialog={closeDialog}
          dialogRef={dialogRef}
          currentNode={currentNode}
        />
      </>
    );
  }

  if (handleType == "target") {
    return (
      <>
        <div
          onDoubleClick={() => openDialog()}
          className="h-20 w-40 rounded flex flex-col items-center justify-center border-2 border-blue-500 overflow-x-hidden relative"
        >
          <Trash
            size={14}
            weight="fill"
            className="absolute text-slate-500 top-1 left-1"
            onClick={() => deleteElements({ nodes: [{ id }] })}
          />
          {status == 200 && (
            <CheckCircle
              size={20}
              weight="fill"
              className="absolute text-green-500 top-0 right-0"
            />
          )}
          {status == 400 && (
            <WarningCircle
              size={20}
              weight="fill"
              className="absolute text-red-500 top-0 right-0"
            />
          )}
          <div>{label}</div>
          <div className="text-zinc-600 font-light text-[8px]">{endpoint}</div>
        </div>
        <Handle type={handleType} position={Position.Left} />
        <EditNode
          closeDialog={closeDialog}
          dialogRef={dialogRef}
          currentNode={currentNode}
        />
      </>
    );
  }

  if (handleType == "default") {
    return (
      <>
        <div
          onDoubleClick={() => openDialog()}
          className="h-20 w-40 rounded flex flex-col items-center justify-center border-2 border-violet-500 overflow-x-hidden relative"
        >
          <Trash
            size={14}
            weight="fill"
            className="absolute text-slate-500 top-1 left-1"
            onClick={() => deleteElements({ nodes: [{ id }] })}
          />
          {status == 200 && (
            <CheckCircle
              size={20}
              weight="fill"
              className="absolute text-green-500 top-0 right-0"
            />
          )}
          {status == 400 && (
            <WarningCircle
              size={20}
              weight="fill"
              className="absolute text-red-500 top-0 right-0"
            />
          )}
          <div>{label}</div>
          <div className="text-zinc-600 font-light text-[8px]">{endpoint}</div>
        </div>
        <Handle type="source" position={Position.Right} />
        <Handle type="target" position={Position.Left} />
        <EditNode
          closeDialog={closeDialog}
          dialogRef={dialogRef}
          currentNode={currentNode}
        />
      </>
    );
  }
}

export default CustomNode;
