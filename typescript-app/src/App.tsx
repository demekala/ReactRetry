import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Components/Nav/Sidebar";

function App() {
  return (
    <div className="flex bg-bodyBg h-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
