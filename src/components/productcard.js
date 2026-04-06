import { Link } from "react-router-dom";

function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">${price}</p>

      <Link to="/product">
        <button className="btn">View Item</button>
      </Link>
    </div>
  );
}

export default ProductCard;
