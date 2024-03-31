import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;