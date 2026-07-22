import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGlobeAsia
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <div className="footer-logo">
            <FaGlobeAsia />
          </div>

          <div>
            <h2>Export Automation</h2>
            <p>
              Find Buyers • Extract Emails • Send Catalogues
            </p>
          </div>

        </div>

        <div className="footer-links">

          <a href="#">
            Home
          </a>

          <a href="#">
            Buyers
          </a>

          <a href="#">
            Campaigns
          </a>

          <a href="#">
            Contact
          </a>

        </div>

        <div className="footer-social">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Export Automation System. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;