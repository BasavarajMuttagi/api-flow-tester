import "./App.css";
import FlowWindow from "./components/FlowWindow";
import ToolBar from "./components/ToolBar";
import { ReactFlowProvider } from "reactflow";

function App() {
  return (
    <div className="h-screen space-y-2 p-5 w-full bg-neutral-900">
      <ReactFlowProvider>
        <ToolBar />
        <FlowWindow />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
