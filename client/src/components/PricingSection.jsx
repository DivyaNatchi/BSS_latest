import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "../assets/styles/components/pricingSection.css"; // Custom CSS for Pricing Section

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Free Plan",
      price: 0,
      period: "month",
      features: [
        { feature: "Quam adipiscing vitae proin", available: true },
        { feature: "Nec feugiat nisl pretium", available: true },
        { feature: "Nulla at volutpat diam uteera", available: true },
        { feature: "Pharetra massa massa ultricies", available: false },
        { feature: "Massa ultricies mi quis hendrerit", available: false },
      ],
      delay: 100,
    },
    {
      name: "Business Plan",
      price: 29,
      period: "month",
      features: [
        { feature: "Quam adipiscing vitae proin", available: true },
        { feature: "Nec feugiat nisl pretium", available: true },
        { feature: "Nulla at volutpat diam uteera", available: true },
        { feature: "Pharetra massa massa ultricies", available: true },
        { feature: "Massa ultricies mi quis hendrerit", available: true },
      ],
      delay: 200,
      isFeatured: true,
    },
    {
      name: "Developer Plan",
      price: 49,
      period: "month",
      features: [
        { feature: "Quam adipiscing vitae proin", available: true },
        { feature: "Nec feugiat nisl pretium", available: true },
        { feature: "Nulla at volutpat diam uteera", available: true },
        { feature: "Pharetra massa massa ultricies", available: true },
        { feature: "Massa ultricies mi quis hendrerit", available: true },
      ],
      delay: 300,
    },
  ];

  return (
    <section id="pricing" className="pricing section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {pricingPlans.map((plan, index) => (
            <div
              className="col-lg-4"
              data-aos="zoom-in"
              data-aos-delay={plan.delay}
              key={index}
            >
              <div
                className={`pricing-item ${plan.isFeatured ? "featured" : ""}`}
              >
                <h3>{plan.name}</h3>
                <h4>
                  <sup>$</sup>
                  {plan.price}
                  <span> / {plan.period}</span>
                </h4>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={feature.available ? "" : "na"}>
                      <i
                        className={`bi ${feature.available ? "bi-check" : "bi-x"}`}
                      ></i>{" "}
                      <span>{feature.feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
