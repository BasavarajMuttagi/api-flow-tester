import {
  Article,
  CheckCircle,
  Trash,
  WarningCircle,
} from "@phosphor-icons/react";
import { Handle, Position, useReactFlow } from "reactflow";
import EditNode from "./EditNode";
import useDialog from "../hooks/custom";
import { NodeType } from "../store";
import { Tooltip } from "react-tooltip";
import ResponseToolTip from "./ResponseToolTip";
import { twMerge } from "tailwind-merge";

function CustomNode(currentNode: Omit<NodeType, "position">) {
  const {
    id,
    data: {
      endpoint,
      handleType,
      label,
      expectedStatusCode,
      response: { data, status },
      method,
    },
  } = currentNode;
  const { closeDialog, dialogRef, openDialog } = useDialog();
  const { deleteElements } = useReactFlow();
  const color =
    method === "post"
      ? "text-[#3b82f6]"
      : method === "put"
      ? "text-[#a855f7]"
      : method === "delete"
      ? "text-[#ef4444]"
      : method === "patch"
      ? "text-[#f97316]"
      : "text-[#22c55e]";

  if (handleType == "source") {
    return (
      <>
        <div
          onDoubleClick={() => openDialog()}
          className="h-20 w-40 rounded  flex flex-col items-center justify-between border border-green-700/50 overflow-x-hidden relative bg-neutral-800"
        >
          <Trash
            size={14}
            weight="fill"
            className="absolute text-red-400 top-2 left-2"
            onClick={() => deleteElements({ nodes: [{ id }] })}
          />
          {status == 200 && (
            <CheckCircle
              size={14}
              weight="fill"
              className="absolute text-green-500 top-2 right-2"
            />
          )}
          {expectedStatusCode != status && status !== -1 && (
            <WarningCircle
              size={14}
              weight="fill"
              className="absolute text-red-500 top-2 right-2"
            />
          )}
          <div className="text-[10px] text-white/90 mt-1">{label}</div>
          <div className="text-[6px] flex justify-between items-center w-full px-2">
            <span
              className={twMerge(
                "font-semibold uppercase  px-1 rounded bg-neutral-700 tracking-widest",
                color
              )}
            >
              {method}
            </span>
            <span className="font-medium text-neutral-400">{endpoint}</span>
          </div>

          <div className="flex flex-row justify-between items-center w-full px-2">
            <div className="font-medium text-neutral-100 text-[6px]  uppercase  px-1 rounded bg-neutral-700 tracking-widest">
              {status == -1 ? "" : status}
            </div>
            <ResponseToolTip id={id}>
              <Article size={18} className="self-end text-neutral-400  w-4" />
            </ResponseToolTip>
          </div>
        </div>
        <Handle type={handleType} position={Position.Right} />
        <EditNode
          closeDialog={closeDialog}
          dialogRef={dialogRef}
          currentNode={currentNode}
        />
        <Tooltip id={id} openOnClick>
          <pre className="w-48 max-h-96 text-wrap rounded  text-yellow-600 text-[6px]">
            {JSON.stringify(data, undefined, 2)}
          </pre>
        </Tooltip>
      </>
    );
  }

  if (handleType == "target") {
    return (
      <>
        <div
          onDoubleClick={() => openDialog()}
          className="h-20 w-40 rounded  flex flex-col items-center justify-between border border-blue-700/50 overflow-x-hidden relative bg-neutral-800"
        >
          <Trash
            size={14}
            weight="fill"
            className="absolute text-red-400 top-2 left-2"
            onClick={() => deleteElements({ nodes: [{ id }] })}
          />
          {status == 200 && (
            <CheckCircle
              size={14}
              weight="fill"
              className="absolute text-green-500 top-2 right-2"
            />
          )}
          {expectedStatusCode != status && status !== -1 && (
            <WarningCircle
              size={14}
              weight="fill"
              className="absolute text-red-500 top-2 right-2"
            />
          )}
          <div className="text-[10px] text-white/90 mt-1">{label}</div>
          <div className="text-[6px] flex justify-between items-center w-full px-2">
            <span
              className={twMerge(
                "font-semibold uppercase  px-1 rounded bg-neutral-700 tracking-widest",
                color
              )}
            >
              {method}
            </span>
            <span className="font-medium text-neutral-400">{endpoint}</span>
          </div>
          <div className="flex flex-row justify-between items-center w-full px-2">
            <div className="font-medium text-neutral-100 text-[6px]  uppercase  px-1 rounded bg-neutral-700 tracking-widest">
              {status == -1 ? "" : status}
            </div>
            <ResponseToolTip id={id}>
              <Article size={18} className="self-end text-neutral-400  w-4" />
            </ResponseToolTip>
          </div>
        </div>
        <Handle type={handleType} position={Position.Left} />
        <EditNode
          closeDialog={closeDialog}
          dialogRef={dialogRef}
          currentNode={currentNode}
        />
        <Tooltip id={id} openOnClick>
          <pre className="w-48 max-h-96 text-wrap rounded  text-yellow-600 text-[6px]">
            {JSON.stringify(data, undefined, 2)}
          </pre>
        </Tooltip>
      </>
    );
  }

  if (handleType == "default") {
    return (
      <>
        <div
          onDoubleClick={() => openDialog()}
          className="h-20 w-40 rounded  flex flex-col items-center justify-between border border-violet-700/50 overflow-x-hidden relative bg-neutral-800"
        >
          <Trash
            size={14}
            weight="fill"
            className="absolute text-red-400 top-2 left-2"
            onClick={() => deleteElements({ nodes: [{ id }] })}
          />
          {status == 200 && (
            <CheckCircle
              size={14}
              weight="fill"
              className="absolute text-green-500 top-2 right-2"
            />
          )}
          {expectedStatusCode != status && status !== -1 && (
            <WarningCircle
              size={14}
              weight="fill"
              className="absolute text-red-500 top-2 right-2"
            />
          )}
          <div className="text-[10px] text-white/90 mt-1">{label}</div>
          <div className="text-[6px] flex justify-between items-center w-full px-2">
            <span
              className={twMerge(
                "font-semibold uppercase  px-1 rounded bg-neutral-700 tracking-widest",
                color
              )}
            >
              {method}
            </span>
            <span className="font-medium text-neutral-400">{endpoint}</span>
          </div>
          <div className="flex flex-row justify-between items-center w-full px-2">
            <div className="font-medium text-neutral-100 text-[6px]  uppercase  px-1 rounded bg-neutral-700 tracking-widest">
              {status == -1 ? "" : status}
            </div>
            <ResponseToolTip id={id}>
              <Article size={18} className="self-end text-neutral-400  w-4" />
            </ResponseToolTip>
          </div>
        </div>
        <Handle type="source" position={Position.Right} />
        <Handle type="target" position={Position.Left} />
        <EditNode
          closeDialog={closeDialog}
          dialogRef={dialogRef}
          currentNode={currentNode}
        />
        <Tooltip
          id={id}
          openOnClick
          className="overflow-y-scroll cursor-pointer overflow-x-hidden"
        >
          <pre className="w-48 max-h-96   text-wrap rounded  text-yellow-600 text-[6px] cursor-pointer">
            {JSON.stringify(data, undefined, 2)}
          </pre>
        </Tooltip>
      </>
    );
  }
}

export default CustomNode;
