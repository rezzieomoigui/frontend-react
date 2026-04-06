import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./pages/Home";
import Shop from "./pages/shop";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

