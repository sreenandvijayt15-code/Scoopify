import { Star, BadgeCheck } from "lucide-react";
import "./TestimonialsSection.css";

function TestimonialsSection() {
  const testimonials = [
    {
      review:
        "Absolutely loved the Belgian Chocolate Cake. Fresh, rich, and arrived in insulated packaging within 25 minutes! It was the star of our anniversary dinner.",
      name: "Priya Sharma",
      ordered: "Belgian Chocolate Cake",
    },
    {
      review:
        "The Pistachio Gelato and Mango Fresh Juice are completely unmatched. You can taste the genuine fruit and real dairy — none of that syrupy sweetness.",
      name: "Rohan Mehta",
      ordered: "Ice Cream & Juices",
    },
    {
      review:
        "Ordered Strawberry Cheesecake for my sister's birthday party. It arrived in pristine condition without a smudge. Scoopify is now our family's official dessert spot.",
      name: "Ananya Iyer",
      ordered: "Custom Dessert Box",
    },
  ];

  return (
    <section className="testimonials-section">

      {/* Section Header */}
      <div className="testimonials-header">

        <span className="testimonials-label">
          REAL SWEET STORIES
        </span>

        <h2>What Our Customers Say</h2>

        <p>
          Over 25,000+ sweet moments and celebrations delivered across the city.
        </p>

      </div>

      {/* Testimonials */}
      <div className="testimonials-container">

        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>

            
            
       <div className="testimonial-rating">
         {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={18}
              fill="currentColor"
             strokeWidth={1.5}
           />
          ))}
        </div>

            {/* Review */}
            <p className="testimonial-review">
              “{testimonial.review}”
            </p>

            {/* Customer Information */}
            <div className="testimonial-footer">

              <div>
                <h3>{testimonial.name}</h3>

                <p>
                  Ordered: {testimonial.ordered}
                </p>
              </div>

              <div className="verified-badge">
                <BadgeCheck
                 size={23}
                 strokeWidth={2}
                 className="verified-icon"
                />
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default TestimonialsSection;