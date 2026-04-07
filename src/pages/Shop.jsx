import { useState, useEffect } from "react";
import ProductCard from "../components/productcard";
import "../styles/style.css";

const SERVER_URL = "https://vintagevixen-server.onrender.com"; // replace with your Render URL

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${SERVER_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="shop-page">
      <h1>Shop Vintage</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={`${SERVER_URL}${product.image}`} // full URL for images
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
