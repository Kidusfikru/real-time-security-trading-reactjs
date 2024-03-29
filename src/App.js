import StockOrder from "./components/StockOrder";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App" id="light">
      <StockOrder />
      <ToastContainer />
    </div>
  );
}

export default App;
