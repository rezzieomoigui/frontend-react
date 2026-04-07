import { useState, useEffect } from "react";
import ProductCard from "./productcard";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace this with your Render server URL
  const SERVER_URL = "https://vintagevixen-server.onrender.com";

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

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="product-list">
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
  );
}
