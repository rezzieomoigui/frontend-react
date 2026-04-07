import "../styles/style.css";
import logo from "../images/logovv.png";

function Sell() {
  return (
    <div className="sell-page">


      {/* HERO */}
      <section className="sell-spotlight-full">
        <h1>Sell With Vintage Vixen</h1>
      </section>

      {/* BACKGROUND */}
      <section className="sell-background">

        {/* STEPS */}
        <section className="sell-steps">
          <h2>How It Works</h2>

          <div className="steps-grid">
            <div className="step-card">
              <span>Step 1</span>
              <h3>Apply to Sell Your Items</h3>
              <p>Fill out our seller application and tell us about your pieces.</p>
            </div>

            <div className="step-card">
              <span>Step 2</span>
              <h3>Get Verified</h3>
              <p>We review your application and approve your account.</p>
            </div>

            <div className="step-card">
              <span>Step 3</span>
              <h3>Ship Your Pieces</h3>
              <p>Send your items and watch them go live in our shop!</p>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="sell-form">
          <form>
            <h2>Seller Application</h2>

            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Item Description" />

            <select>
              <option>Condition</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>

            <button className="btn">Submit Application</button>
          </form>
        </section>

      </section>

    </div>
  );
}

export default Sell;

