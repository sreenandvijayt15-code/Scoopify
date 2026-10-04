import "./ExperienceSection.css";
import experienceImage from "../assets/experience-bakery.png";

function ExperienceSection() {
  return (
    <section className="experience-section">

      {/* Left Image */}
      <div className="experience-image-wrapper">
        <img
          src={experienceImage}
          alt="Scoopify bakery experience"
          className="experience-image"
        />

        <div className="experience-badge">
          <div className="badge-icon">♙</div>

          <div>
            <strong>100% Artisanal</strong>
            <span>Zero artificial stabilizers</span>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="experience-content">

        <span className="experience-label">
          THE SCOOPIFY EXPERIENCE
        </span>

        <h2>
          Something Sweet for Every Moment
        </h2>

        <p className="experience-description">
          From monumental birthday cakes and decadent fudge sundaes to
          crisp cold-pressed juices and creamy milkshakes — discover treats
          made with uncompromised love for every mood and midnight craving.
        </p>

        <div className="experience-points">

          <div className="experience-point">
            <span className="point-check">✓</span>

            <div>
              <h3>Freshly Prepared Daily in Small Batches</h3>
              <p>
                Every treat is crafted each morning to guarantee peak
                flavor and crumbly texture.
              </p>
            </div>
          </div>

          <div className="experience-point">
            <span className="point-check">✓</span>

            <div>
              <h3>100% Premium Belgian Cocoa & Real Dairy</h3>
              <p>
                We never compromise with compound chocolate or powdered
                substitutes.
              </p>
            </div>
          </div>

          <div className="experience-point">
            <span className="point-check">✓</span>

            <div>
              <h3>Personalized Gifting & Custom Messages</h3>
              <p>
                Includes custom handwritten cards, ribbon gift wraps,
                and birthday candles on demand.
              </p>
            </div>
          </div>

        </div>

        <button className="experience-button">
          Explore Desserts <span>→</span>
        </button>

      </div>

    </section>
  );
}

export default ExperienceSection;