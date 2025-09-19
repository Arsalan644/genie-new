import React from 'react'
import "./Comparison.css"

function Comparison() {
  return (
    <section className="comparison">
      <div className="container">
        <h2>What Sets Us Apart</h2>
        <p className="subtitle">
          See why elite tech sales talent choose <span>TalentPluto</span> over the chaos of generic platforms
        </p>

        <div className="comparison-grid">
          {/* Left Side - Other Platforms */}
          <div className="card left">
            <h3>Other Platforms</h3>
            <ul>
              <li>Endless Applications</li>
              <li>Generic Listings</li>
              <li>Cold Outreach</li>
              <li>Slow Feedback</li>
              <li>Overwhelming Options</li>
              <li>Anonymous Recruiters</li>
              <li>Stale Opportunities</li>
              <li>Uncertain Outcomes</li>
            </ul>
          </div>

          {/* Middle VS */}
          <div className="vs">VS</div>

          {/* Right Side - TalentPluto */}
          <div className="card right">
            <img
              src="./Assets/A.png" 
              alt="TalentPluto Logo"
              className="logo h-24"
            />
            <ul>
              <li>One Profile</li>
              <li>Tailored Roles</li>
              <li>Warm Introductions</li>
              <li>Fast Track Interviews</li>
              <li>Curated Matches</li>
              <li>Direct Employer Access</li>
              <li>Growth-Focused Roles</li>
              <li>Proven Track Record</li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center items-center w-full my-4'>
            <a href="#" className="cta">Join in 10 minutes →</a>

        </div>
      </div>
    </section>
  );
}
export default Comparison;