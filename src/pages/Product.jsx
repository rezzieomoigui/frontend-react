import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/style.css";

function Product() {
  const { id } = useParams(); // ⭐ get ID from URL
  const SERVER_URL = "https://vintagevixen-server-2.onrender.com";

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${SERVER_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(foundProduct);
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-page">
      <main className="product-wrapper">
        <div className="product-inner">

          {/* LEFT SIDE */}
          <div className="product-left">
            <div className="image-container">
              <img
                className="main-image"
                src={`${SERVER_URL}${product.image}`}
                alt={product.title}
              />
            </div>

            <div className="thumbnail-container">
              <div className="thumb">
                <img src={`${SERVER_URL}${product.image}`} alt="" />
              </div>
              <div className="thumb">
                <img src={`${SERVER_URL}${product.image}`} alt="" />
              </div>
              <div className="thumb">
                <img src={`${SERVER_URL}${product.image}`} alt="" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="product-right">
            <h1>{product.title}</h1>
            <p className="product-price">{product.price}</p>

            <p>{product.description}</p>

            <button className="btn">Add to Cart</button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Product;