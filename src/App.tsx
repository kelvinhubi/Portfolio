import "./App.css";
import { Button } from "./components/Button";
import { NavMenu } from "./components/Nav-menu/Nav";
import { ValueProvider } from "./contextsample/useme";

function App() {
  const name: string = "Hello";
  return (
    <ValueProvider>
      <div>
        <NavMenu>
          <Button>Print</Button>
          <Button>AnotherOne</Button>
        </NavMenu>
      </div>
    </ValueProvider>
  );
}
export default App;
