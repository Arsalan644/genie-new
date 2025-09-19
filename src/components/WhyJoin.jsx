// import React from "react";
// import "./WhyJoin.module.css";
// import { SiN8N } from "react-icons/si";
// import { CgProfile } from "react-icons/cg";
// import { HiMiniBellAlert } from "react-icons/hi2";
// import { FaRegStar } from "react-icons/fa";


// function WhyJoin() {
//   return (
//     <section className={styles.whyJoin}>
//       <div className={styles.container}>
//         <h2 className={styles.title}>
//           Why Join <span>TalentPluto</span>
//         </h2>

//         <div className={styles.grid}>
//           <div className={styles.card + " " + styles.profile}>
//             <div className={styles.icon}><SiN8N /></div>
//             <div>
//               <h3>One Profile for Hundreds of Jobs</h3>
//               <p>
//                 Create one profile and get access to hundreds of exclusive job
//                 opportunities
//               </p>
//             </div>
//           </div>

//           <div className={styles.card}>
//             <div className={styles.icon}><FaRegStar /></div>
//             <div>
//               <h3>Fast Track to the Interview</h3>
//               <p>
//                 Gain prioritized interview access with high-growth startups
//                 eager to hire you
//               </p>
//             </div>
//           </div>

//           <div className={styles.card + " " + styles.link}>
//             <div className={styles.icon}><CgProfile /></div>
//             <div>
//               <h3>VIP Access</h3>
//               <p>
//                 Get first dibs on job opportunities exclusively for the best in
//                 tech sales before they're posted
//               </p>
//             </div>
//           </div>

//           <div className={styles.card}>
//             <div className={styles.icon}><HiMiniBellAlert /></div>
//             <div>
//               <h3>Passive Browsing</h3>
//               <p>
//                 Even if you're employed, Pluto anonymously connects you with top
//                 companies actively hiring
//               </p>
//             </div>
//           </div>
//         </div>
//     </div>
// </section>
//   );
// }

// export default WhyJoin;

import React from "react";
import "./WhyJoin.css";
import { libre_baskerville, eula, metropolis, mainlux } from "../app/layout.js";

function WhyJoin() {
  return (
    <section className={`why-join relative ${metropolis.className}`}>

      <h2 className={`section-title ${eula.className} text-[#1a1814] font-light`}>Why Join <span className="text-[#ad9437]">Genie?</span></h2>
      <p className="section-subtitle">
        A values-based matchmaking platform built for Muslims worldwide.
      </p>

      <div className="reasons">
        <div className="reason-card">
          <h3 className="text-shadow-sm">Faith-Centered</h3>
          <p className="">
            Connect with like-minded Muslims who share your values and beliefs,
            ensuring relationships rooted in faith.
          </p>
        </div>

        <div className="reason-card">
          <h3 className="text-shadow-sm">AI-Powered</h3>
          <p>
            Genie uses Voice AI, psychological frameworks, and smart algorithms
            to create meaningful, long-term matches.
          </p>
        </div>

        <div className="reason-card">
          <h3 className="text-shadow-sm">Global Community</h3>
          <p>
            Access a trusted worldwide Muslim network with support for 10 major
            languages, making connections easier than ever.
          </p>
        </div>

        <div className="reason-card">
          <h3 className="text-shadow-sm">Privacy First</h3>
          <p>
            Your data and conversations are kept secure with advanced encryption
            and privacy protection at every step.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyJoin;
