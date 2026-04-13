import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./pages/home";
import Shop from "./pages/shop";
import Product from "./pages/Product";
import Sell from "./pages/sell";
import StyleTips from "./pages/styletips";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* ✅ FIXED DYNAMIC ROUTE */}
        <Route path="/product/:id" element={<Product />} />

        <Route path="/sell" element={<Sell />} />
        <Route path="/styling" element={<StyleTips />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;