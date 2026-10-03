import "./CategorySection.css";

function CategorySection(){
     const categories = [
    {
      name: "Cakes & Bakes",
      treats: 24,
      image: "/src/assets/cakes&bakes.png",
    },
    {
      name: "Ice Creams",
      treats: 28,
      image: "/src/assets/ice-creams.png",
    },
    {
      name: "Pastries & Bakery",
      treats: 18,
      image: "/src/assets/pastries&bakeries.png",
    },
    {
      name: "Fresh Juices",
      treats: 12,
      image: "/src/assets/juices.png",
    },
    {
      name: "Smoothies",
      treats: 14,
      image: "/src/assets/smoothies .png",
    },
    {
      name: "Milkshakes",
      treats: 15,
      image: "/src/assets/Milkshakes.png",
    },
    {
      name: "Sundaes",
      treats: 9,
      image: "/src/assets/Sundaes.png",
    },
    {
      name: "Special Treats",
      treats: 8,
      image: "/src/assets/Specialtreats.png",
    },
  ];

  return(
    <section className="category-section">

        <div className="category-header">
            <div>
                <p className="category-label">CURATED SELECTIONS</p>

                <h2>Explore Our Sweet World</h2>

                <p className="category-description">
                    Find something delicious for every craving, celebration,
                    and midnight indulgence.
                </p>
            </div>

            <button className="all-categories-btn">
                All Categories →
            </button>

        </div>

        <div className="category-grid">
            {categories.map((category,index)=> (
                <div className="category-card" key={index}>
                    <img
                      src={category.image}
                      alt={category.name}
                      className="category-image"
                    />

                    <div className="category-info">
                       <h3>{category.name}</h3>

                    <span className="treat-badge">
                       {category.treats} treats
                    </span>
                </div>

                </div>
            ))}

        </div>


    </section>
  )
}

export default CategorySection;