import "./PromiseSection.css";
import { Apple, Clock3, ShieldCheck, Tag } from "lucide-react";

function PromiseSection() {
  return (
    <section className="promise-section">

      <div className="promise-header">
        <span className="promise-label">
          THE SCOOPIFY PROMISE
        </span>

        <h2>Why You'll Love Scoopify</h2>

        <p>
          Handcrafted with passion, delivered with cold-insulated
          precision and care.
        </p>
      </div>

      <div className="promise-cards">

       
        <div className="promise-card">
          <div className="promise-icon">
            <Apple size={27} strokeWidth={2} />
          </div>

          <h3>Fresh & Quality</h3>

          <p>
            Made with organic local dairy, single-origin Belgian cocoa,
            and farm-picked seasonal fruits.
          </p>
        </div>

       
        <div className="promise-card">
          <div className="promise-icon">
            <Clock3 size={27} strokeWidth={2} />
          </div>

          <h3>30-Min Fast Delivery</h3>

          <p>
            Temperature-controlled thermal dispatches ensure ice creams
            stay solid and sponge cakes remain intact.
          </p>
        </div>

      
        <div className="promise-card">
          <div className="promise-icon">
           <ShieldCheck size={27} strokeWidth={2} />
          </div>

          <h3>Secure Payments</h3>

          <p>
            End-to-end encrypted checkout supporting UPI, credit cards,
            and digital wallets with instant refunds.
          </p>
        </div>

       
        <div className="promise-card">
          <div className="promise-icon">
            <Tag size={27} strokeWidth={2} />
          </div>

          <h3>Sweet Rewards</h3>

          <p>
            Earn 10% cashback points on every order to redeem on your
            favorite mid-week celebrations.
          </p>
        </div>

      </div>

    </section>
  );
}

export default PromiseSection;