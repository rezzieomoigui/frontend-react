import ProductCard from "../components/productcard";
import "../styles/style.css";

function Shop() {
  return (
    <div className="shop-page">
      <h1>Shop Vintage</h1>

      <div className="product-grid">

        <ProductCard
          name="Pink Kitten Heels"
          price="45"
          image="/images/heels.png"
        />

        <ProductCard
          name="Y2K Mini Skirt"
          price="35"
          image="/images/skirt.jpg"
        />

        <ProductCard
          name="Fur Coat"
          price="120"
          image="/images/furcoat.jpg"
        />

      </div>
    </div>
  );
}

export default Shop;