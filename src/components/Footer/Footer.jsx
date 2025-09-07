import { FaEnvelope } from "react-icons/fa";
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2024 <span className="brand">Astra</span>. All rights reserved</p>
      </div>

      <div className="footer-right">
        <a href="mailto:hello@astra.com" className="email">
          <FaEnvelope className="icon" /> hello@astra.com
        </a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <span className="divider"></span>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
