import "./App.css";
import { NavMenu } from "./components/Nav-menu/Nav";
import { ValueProvider } from "./contextsample/useme";

function App() {
  return (
    <ValueProvider>
      <div>
        <NavMenu />
      </div>
    </ValueProvider>
  );
}
export default App;
