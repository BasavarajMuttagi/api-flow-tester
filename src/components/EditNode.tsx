import { NodeType } from "../store";
import NodeForm from "./NodeForm";
import { RefObject } from "react";

function EditNode({
  closeDialog,
  dialogRef,
  currentNode,
}: {
  closeDialog: () => void;
  dialogRef: RefObject<HTMLDialogElement>;
  currentNode: Omit<NodeType, "position">;
}) {
  return (
    <>
      <dialog
        ref={dialogRef}
        className="p-5 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
      >
        <NodeForm closeDialog={closeDialog} currentNode={currentNode} />
      </dialog>
    </>
  );
}

export default EditNode;
