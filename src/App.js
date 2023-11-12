import "./App.css";
import RoutesPath from "./components/RoutesPath";
import Navbar_const from "./components/navbar/Navbar_const";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Navbar_const />
      <RoutesPath />
    </div>
  );
}

export default App;
