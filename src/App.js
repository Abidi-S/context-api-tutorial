import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home cart={cart} setCart={setCart} />}
          exact
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
          exact
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
