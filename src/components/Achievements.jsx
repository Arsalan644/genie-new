import React from 'react'
import "./Achievement.css"

function Achievements() {
  return (
    <section className="achievements">
      <div className="container">
        <h2>Our Achievements</h2>
        <div className="grid">
          <div className="card">
            <h3>500+</h3>
            <p className="title">Clients Served</p>
            <p className="desc">Built trust with satisfied customers worldwide.</p>
          </div>
          <div className="card">
            <h3>1M+</h3>
            <p className="title">Sales Generated</p>
            <p className="desc">Achieved record-breaking sales growth for our partners.</p>
          </div>
          <div className="card">
            <h3>150+</h3>
            <p className="title">Business Partners</p>
            <p className="desc">Collaborated with top companies across multiple industries.</p>
          </div>
          <div className="card">
            <h3>10+</h3>
            <p className="title">Years of Experience</p>
            <p className="desc">Proven track record in sales and customer success.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
