import "../styles/style.css";

function Product() {
  return (
    <div className="product-page">
      <main className="product-wrapper">
        <div className="product-inner">

          <div className="product-left">
            <div className="image-container">
              <img
                className="main-image"
                src="/images/heels.png"
                alt="Pink Kitten Heels"
              />
            </div>

            <div className="thumbnail-container">
              <div className="thumb"><img src="/images/heels.png" alt="" /></div>
              <div className="thumb"><img src="/images/heels.png" alt="" /></div>
              <div className="thumb"><img src="/images/heels.png" alt="" /></div>
            </div>
          </div>

          <div className="product-right">
            <h1>Kitten Heels</h1>
            <p className="product-price">$45</p>

            <p>
              A glossy satin kitten heel made for main-character entrances.
            </p>

            <button className="btn">Add to Cart</button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Product;