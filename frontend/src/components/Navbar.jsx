import "./Navbar.css";
import {
  FaGlobeAsia,
  FaSearch,
  FaEnvelope,
  FaFilePdf
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">

        <div className="logo-circle">
          <FaGlobeAsia />
        </div>

        <div className="logo-text">
          <h2>Export Automation</h2>
          <p>Buyer Discovery & Email Automation</p>
        </div>

      </div>

      <ul className="nav-links">

        <li>
          <FaSearch />
          Search
        </li>

        <li>
          <FaEnvelope />
          Emails
        </li>

        <li>
          <FaFilePdf />
          Campaign
        </li>

      </ul>

    </header>
  );
}

export default Navbar;