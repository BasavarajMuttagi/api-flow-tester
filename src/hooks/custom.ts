import { useRef } from "react";

function useDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Function to open the dialog
  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  // Function to close the dialog
  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return { openDialog, closeDialog, dialogRef };
}

export default useDialog;
