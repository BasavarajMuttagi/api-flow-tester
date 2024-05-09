import { useRef } from "react";
import NodeForm from "./NodeForm";
import { Plus } from "@phosphor-icons/react";

function AddNewNode() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Function to open the dialog
  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  // Function to close the dialog
  const closeDialog = () => {
    dialogRef.current?.close();
  };

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
