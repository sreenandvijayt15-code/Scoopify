import "./OfferBanner.css";
import promotionalBanner from "../assets/promotainal-banner.png";

function OfferBanner() {
  return (
    <section className="offer-banner">

      <div className="offer-content">

        <span className="offer-label">
          LIMITED TIME OFFER
        </span>

        <h2>Make Every Craving Sweeter</h2>

        <p>
          Enjoy special seasonal savings and cashback rewards on your
          favorite treats. Unlock 20% OFF on your first order with our
          sweet welcome code.
        </p>

        <div className="offer-actions">

          <div className="offer-code">
            <span>CODE: SWEET20</span>
            <span className="copy-icon">▣</span>
          </div>

          <button className="offer-button">
            Shop Offers <span>→</span>
          </button>

        </div>

      </div>

      <div className="offer-image">
        <img
          src={promotionalBanner}
          alt="Special dessert offer"
        />
      </div>

    </section>
  );
}

export default OfferBanner;