import AddNewNode from "./AddNewNode";
import ClearResponse from "./ClearResponse";
import RunFlow from "./RunFlow";

function ToolBar() {
  return (
    <div className="flex items-center flex-wrap space-x-5 h-10">
      <AddNewNode />
      <div className="border-r-2 h-full border-slate-300" />
      <RunFlow />
      <div className="border-r-2 h-full border-slate-300" />
      <ClearResponse />
    </div>
  );
}

export default ToolBar;
