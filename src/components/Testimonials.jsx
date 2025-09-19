import React from 'react'
import "./Testimonials.css"

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="grid">
          <div className="card">
            <p className="quote">
              "This team helped us achieve record-breaking sales in just 3
              months. Truly professional and results-driven!"
            </p>
            <div className="author">
              <img src="https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg" alt="client" />
              <div>
                <h4>Ali Khan</h4>
                <span>CEO, TechCorp</span>
              </div>
            </div>
          </div>

          <div className="card">
            <p className="quote">
              "Amazing experience! They understand customer needs and provide
              the best strategies for growth."
            </p>
            <div className="author">
              <img src="https://diviultimate.com/wp-content/uploads/2017/01/client-2.jpg" alt="client" />
              <div>
                <h4>Sara Ahmed</h4>
                <span>Marketing Head, Bright Solutions</span>
              </div>
            </div>
          </div>

          <div className="card">
            <p className="quote">
              "Working with them increased our sales pipeline by 200%. Highly
              recommended for any business."
            </p>
            <div className="author">
              <img
                src="https://diviultimate.com/wp-content/uploads/2017/01/client-1.jpg"
                alt="client"
              />
              <div>
                <h4>Usman Malik</h4>
                <span>Founder, GrowthHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;    
