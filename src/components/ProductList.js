import { useState, useEffect } from "react";
import ProductCard from "./productcard";
import AddProductForm from "./AddProductForm";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const SERVER_URL = "https://vintagevixen-server-2.onrender.com";

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
    <div>
      {/* ✅ FORM CONNECTED */}
      <AddProductForm products={products} setProducts={setProducts} />

      {/* ✅ PRODUCTS */}
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id} // ⭐ REQUIRED
            title={product.title}
            price={product.price}
            image={`${SERVER_URL}${product.image}`}
          />
        ))}
      </div>
    </div>
  );
}