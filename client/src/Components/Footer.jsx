import "./Footer.css";
import {
  Camera,
  Globe,
  AtSign,
  PlayCircle,
  Lock,
  CreditCard,
  WalletCards,
  Radio,
  MapPin
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      {/* Footer Main Content */}
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <div className="footer-logo">
            <div className="footer-logo-icon">
              <MapPin size={20} />
            </div>

            <span>Scoopify</span>
          </div>

          <h4>Discover Your Sweet Side</h4>

          <p>
            Your destination for delicious desserts, refreshing drinks and
            sweet moments handcrafted with artisanal perfection.
          </p>

          {/* Social Icons */}
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <Camera size={19} />
            </a>

            <a href="#" aria-label="Website">
              <Globe size={19} />
            </a>

            <a href="#" aria-label="Email">
              <AtSign size={19} />
            </a>

            <a href="#" aria-label="YouTube">
              <PlayCircle size={19} />
            </a>
          </div>

        </div>


        {/* Shop */}
        <div className="footer-column">

          <h3>Shop</h3>

          <a href="#">Menu</a>
          <a href="#">Categories</a>
          <a href="#">Best Sellers</a>
          <a href="#">Offers</a>

        </div>


        {/* Company */}
        <div className="footer-column">

          <h3>Company</h3>

          <a href="#">About Us</a>
          <a href="#">Our Story</a>
          <a href="#">Contact Us</a>

        </div>


        {/* Support */}
        <div className="footer-column">

          <h3>Support</h3>

          <a href="#">Help & Support</a>
          <a href="#">Track Order</a>
          <a href="#">Returns & Refunds</a>
          <a href="#">FAQs</a>

        </div>


        {/* Legal */}
        <div className="footer-column">

          <h3>Legal</h3>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookie Policy</a>

        </div>

      </div>


      {/* Footer Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 Scoopify. All rights reserved.
        </p>


        <div className="footer-payment">

          <span>
            <Lock size={17} />
            Secure 256-Bit Encrypted Payments
          </span>

          <div className="payment-icons">

            <CreditCard size={24} />
            <WalletCards size={24} />
            <Radio size={24} />

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;