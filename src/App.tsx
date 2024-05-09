import "./App.css";
import FlowWindow from "./components/FlowWindow";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <div className="h-screen w-full p-4">
      <ToolBar />
      <FlowWindow />
    </div>
  );
}

export default App;
