import React from "react";
import { CakeSlice, ArrowRight, Truck, Smile } from "lucide-react";
import "./CTASection.css";

function CTASection() {
  return (
    <section className="cta-section">

      {/* Main CTA Card */}
      <div className="cta-card">

        {/* Top Icon */}
        <div className="cta-icon">
          <CakeSlice size={34} strokeWidth={2.5} />
        </div>

        {/* Heading */}
        <h2>Your Next Sweet Craving Is Waiting</h2>

        {/* Description */}
        <p className="cta-description">
          Explore our handcrafted menu of freshly prepared desserts, gelato
          <br />
          sundaes, and chilled refreshments delivered in minutes.
        </p>

        {/* Buttons */}
        <div className="cta-buttons">

          <button className="cta-primary">
            Explore Menu
            <ArrowRight size={20} />
          </button>

          <button className="cta-secondary">
            View Offers
          </button>

        </div>

        {/* Benefits */}
        <div className="cta-benefits">

          <div className="cta-benefit">
            <Truck size={16} />
            <span>Free delivery on orders over ₹499</span>
          </div>

          <div className="cta-benefit">
            <Smile size={16} />
            <span>Guaranteed happiness in every bite</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default CTASection;