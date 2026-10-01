import "../Home.css";

function Home(){
    return(
        <div className="home">

            <section className="hero">
                <div className="hero-content">

                    <div className="hero-badge">
                        ← FRESHLY MADE • SWEETLY DELIVERED
                    </div>

                    <h1>Discover your <span>Sweet Side</span>

                    </h1>

                    <p className="hero-description">
                        Delicious artisanal desserts, velvety ice creams,
                        and vibrant cold-pressed refreshments — handcrafted
                        with pure ingredients and delivered in mint chilled
                        perfection.
                    </p>

                    <div className="hero-buttons">
                        <button className="primary-btn">
                              Explore Menu →
                        </button>

                        <button className="secondary-btn">
                               Order Now
                        </button>

                    </div>

                    <div className="hero-features">

                        <div>
                            ✓ Fresh ingredients
                        </div>

                        <div>
                            ♡ Secure payment
                        </div>

                        <div>
                            ⚡ 30-min fast delivery
                        </div>
                    </div>

                </div>

                <div className="hero-image-container">
                    <img
                       src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
                       alt="Chocolate-cake"
                       className="hero-image"

                    />
                    <div className="sweet-pick-card">

                        <small>
                            TODAY'S SWEET PICK ⭐ 4.9
                        </small>

                        <h3>
                            Belgian Fudge Cake
                        </h3>

                        <p>
                            From ₹299
                        </p>

                        <button>
                        Order
                        </button>

                    </div>

                    

                </div>

            </section>

        </div>
    );
}

export default Home;