import NodeForm from "./NodeForm";
import { Plus } from "@phosphor-icons/react";
import useDialog from "../hooks/custom";

function AddNewNode() {
  const { closeDialog, openDialog, dialogRef } = useDialog();

  return (
    <div>
      <button
        onClick={openDialog}
        className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded flex space-x-3 items-center"
      >
        <Plus size={24} /> <span>Node</span>
      </button>

      <dialog
        ref={dialogRef}
        className="p-5 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
      >
        <NodeForm closeDialog={closeDialog} />
      </dialog>
    </div>
  );
}

export default AddNewNode;
