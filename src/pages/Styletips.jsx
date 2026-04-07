import "../styles/style.css";
import logo from "../images/logovv.png";

import denim1 from "../images/denim1.png";
import denim2 from "../images/denim2.png";
import denim3 from "../images/denim3.png";

import look1 from "../images/look1.png";
import look2 from "../images/look2.png";
import look3 from "../images/look3.png";

function StyleTips() {
  return (
    <div className="styling-page">


      {/* STYLE GUIDE */}
      <section className="style-guide">

        <div className="style-guide-top">

          <div className="style-guide-text">
            <h1>Y2K Denim</h1>
            <h2>Style Guide</h2>

            <p>
              Y2K jeans are all about embracing a bold, nostalgic silhouette while
              keeping the look balanced and modern. Low-rise or baggy denim works
              best when paired with a fitted or cropped top to highlight proportions
              and create contrast.
            </p>

            <p>
              For a modern twist, mixing vintage denim with contemporary footwear
              such as platform sneakers or sleek boots keeps the look fresh and
              wearable. The key to styling Y2K jeans is confidence.
            </p>
          </div>

          <div className="style-guide-images">
            <img src={denim2} alt="" />
            <img src={denim1} alt="" />
            <img src={denim3} alt="" />
          </div>

        </div>

      </section>

      {/* SHOP BANNER */}
      <section className="shop-banner">
        <div className="shop-banner-text">
          <h3>SHOP THE DENIM COLLECTION</h3>
          <p>Get the latest Y2K denim looks for your wardrobe.</p>
        </div>

        <a href="/shop" className="btn shop-banner-btn">
          SHOP DENIM
        </a>
      </section>

      {/* CREATE LOOK */}
      <section className="create-look">

        <h2>CREATE THE LOOK</h2>

        <div className="look-grid">

          <div className="look-card">
            <img src={look1} alt="" />
            <h3>Pair Carefully</h3>
            <p>
              Balance baggy or low rise jeans with fitted or cropped tops
              to create flattering proportions.
            </p>
          </div>

          <div className="look-card">
            <img src={look2} alt="" />
            <h3>Accessorize Boldly</h3>
            <p>
              Elevate your denim look with rhinestone belts, mini bags,
              layered jewelry, and statement details.
            </p>
          </div>

          <div className="look-card">
            <img src={look3} alt="" />
            <h3>Keep It Y2K</h3>
            <p>
              Finish the look with platform sneakers, boots, or tinted
              sunglasses to capture the iconic aesthetic.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default StyleTips;
