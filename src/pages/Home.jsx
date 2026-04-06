import "../styles/home.css";

function Home() {
  const setMood = (mood) => {
    const text = document.getElementById("mood-text");
    const section = document.querySelector(".mood-section");

    if (mood === "glam") {
      text.innerText =
        "Full glam energy. Think satin, heels, and main character entrances.";
      section.style.background =
        "linear-gradient(to right, #ffd6ec, #ffeaea)";
    }

    if (mood === "soft") {
      text.innerText =
        "Soft angelic vibes. Baby tees, glossed lips, and pastel dreams.";
      section.style.background =
        "linear-gradient(to right, #fff0f5, #ffe4ec)";
    }

    if (mood === "boss") {
      text.innerText =
        "Confident and unstoppable. Structured silhouettes and power walks only.";
      section.style.background =
        "linear-gradient(to right, #fce4ff, #ffeaea)";
    }
  };

  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <img src="/images/homepic.png" alt="Vintage fashion" />
        <div className="hero-overlay">
          <h1>BUY FOR YOUR CLOSET AND SELL FROM YOUR CLOSET</h1>
          <p>ALL CLASSICS</p>
          <button>SHOP NOW</button>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="collections">
        <h2>FEATURED COLLECTIONS</h2>

        <div className="collection-grid">
          <div className="collection-card">
            <img src="/images/y2kcollection.webp" alt="" />
            <h3>Y2K Madness Flash Sale</h3>
            <span>Explore the Collection →</span>
          </div>

          <div className="collection-card">
            <img src="/images/bedazzledtees.jpg" alt="" />
            <h3>Bedazzled Tops</h3>
            <span>Explore the Collection →</span>
          </div>

          <div className="collection-card">
            <img src="/images/furcoat.jpg" alt="" />
            <h3>Trimmed Fur Coats</h3>
            <span>Explore the Collection →</span>
          </div>
        </div>
      </section>

      {/* SELL */}
      <section className="sell">
        <h2>SELL YOUR VINTAGE & Y2K FASHION</h2>
        <p className="sell-sub">$ TURN YOUR CLOSET INTO CASH $</p>

        <div className="sell-grid">
          <div className="sell-box">
            <img src="/images/sellingimg1.png" alt="" />
            <h3>LIST YOUR ITEMS</h3>
            <p>Upload your pre-loved fashion pieces in minutes.</p>
          </div>

          <div className="sell-box">
            <img src="/images/sellingimg2.jpg" alt="" />
            <h3>MAKE MONEY</h3>
            <p>Sell fast & get paid quickly and securely.</p>
          </div>

          <div className="sell-box">
            <img src="/images/sellingimg3.jpg" alt="" />
            <h3>SHOP & SAVE</h3>
            <p>Find the best vintage & Y2K styles for less.</p>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="runway-video">
        <h2>Vintage Runway Inspiration</h2>

        <iframe
          src="https://www.youtube.com/embed/aZ2V1nNG6D0"
          title="Vintage Fashion Runway"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>

      {/* MOOD SECTION */}
      <section className="mood-section">
        <h2>Choose Your Vixen Mood 💋</h2>

        <div className="mood-buttons">
          <button onClick={() => setMood("glam")}>✨ Glam</button>
          <button onClick={() => setMood("soft")}>🎀 Soft Girl</button>
          <button onClick={() => setMood("boss")}>💎 Boss Babe</button>
        </div>

        <div className="mood-display">
          <p id="mood-text">
            Select your vibe to unlock your styling energy.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>VINTAGE VIXEN</h3>
            <p>Curated vintage & Y2K fashion for the modern vixen.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Vintage Vixen. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default Home;