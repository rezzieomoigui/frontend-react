import { Link } from "react-router-dom";

function ProductCard({ id, title, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="price">{price}</p>

      {/* Dynamic link to product detail page */}
      <Link to={`/product/${id}`}>
        <button className="btn">View Item</button>
      </Link>
    </div>
  );
}

export default ProductCard;

