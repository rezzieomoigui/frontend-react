import { Link } from "react-router-dom";
import "../styles/style.css";

function Navbar() {
  return (
    <header className="nav-wrapper">

      <div className="nav-top">
        <div className="logo">
          <img src="/images/logovv.png" alt="Vintage Vixen logo" />
        </div>
      </div>

      <div className="nav-bottom">
        <nav className="links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/sell">Sell</Link></li>
            <li><Link to="/styling">Style Tips</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>

    </header>
  );
}

export default Navbar;
