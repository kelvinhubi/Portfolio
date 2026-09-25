import "./App.css";
import { NavMenu } from "./components/Nav-menu/Nav";
import { ValueProvider } from "./contextsample/useme";
// 1. Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// 2. Import Bootstrap Bundle JS (needed for dropdowns, modals, and tooltips)
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/main.css";
import "./assets/css/Home.css";
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
