import AddNewNode from "./AddNewNode";
import RunFlow from "./RunFlow";

function ToolBar() {
  return (
    <div className="flex items-center flex-wrap space-x-3">
      <AddNewNode />
      <RunFlow />
    </div>
  );
}

export default ToolBar;
