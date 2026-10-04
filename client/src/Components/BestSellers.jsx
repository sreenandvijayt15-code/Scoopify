import "./BestSellers.css"

function BestSellers(){
    const products = [
        {
            category: "Cakes & Desserts",
            name: "Belgian Chocolate Cake",
            rating: "4.8",
            reviews: "342",
            price: "₹720",
            oldPrice: "₹800",
            image: "/src/assets/BelgianChocolateCake.png"
        },
        {
            category: "Cakes & Desserts",
            name: "Strawberry Cheesecake",
            rating: "4.7",
            reviews: "215",
            price: "₹650",
            image: "/src/assets/Strawberry-Cheesecake.png"
        },
        {
            category: "Ice Creams",
            name: "Dark Chocolate Scoop",
            rating: "4.9",
            reviews: "512",
            price: "₹180",
            image: "/src/assets/Dark-Chocolate-Scoop.png"
        },
        {
            category: "Fresh Juices",
            name: "Mango Fresh Juice",
            rating: "4.6",
            reviews: "180",
            price: "₹140",
            image: "/src/assets/Mango-fresh-juice.png"
        },
        {
            category: "Milkshakes",
            name: "Classic Vanilla Shake",
            rating: "4.8",
            reviews: "290",
            price: "₹220",
            image: "/src/assets/Classic-vanilla-shake.png"
        }
    ];

    return(
        <section className="best-sellers">

            <div className="best-sellers-header">
                <div>
                    <p className="best-sellers-label">
                        COMMUNITY FAVOURITES

                    </p>

                    <h2>
                         Sweetest Best Sellers
                    </h2>
                    <p className="best-sellers-description">
                        Award-winning delicacies our customers order time and time again.

                    </p>
                </div>
                <button className="view-menu-btn">
                    View All Menu →

                </button>

            </div>

            <div className="products-container">
                {products.map((product,index) => (
                    <div className="product-card" key={index}>
                        <div className="product-image-container">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />

                            <button className="wishlist-btn">
                                ♡

                            </button>

                        </div>

                        <div className="product-info">
                            <p className="product-category">
                                {product.category}
                            </p>

                            <h3 className="product-name">
                                {product.name}
                            </h3>


                            <div className="product-rating">
                                <span className="star">★</span>
                                <span>{product.rating}</span>
                                <span className="reviews">
                                    ({product.reviews})
                                </span>
                            </div>

                            <div className="product-bottom">
                                <div className="product-container">
                                    <span className="product-price">
                                        {product.price}

                                    </span>

                                    {product.oldPrice && (
                                        <span className="old-price">
                                            {product.oldPrice}

                                        </span>
                                    )}

                                </div>
                                <button className="add-btn">
                                    + Add
                                </button>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default BestSellers;