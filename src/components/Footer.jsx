import React from "react";
import "./Footer.css"; // import external CSS file
import Image from 'next/image';

// --- Footer Component ---
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <p className="footer-text">
        Available on Android and iOS starting 2026.
      </p>
      <div className="store-buttons">
        <Image
          src="/Assets/playStore.png"
          alt="Google Play Store"
          width={190}
          height={50}
        />
          <Image
          src="/Assets/apple.png"
          alt="Google Play Store"
          width={150}
          height={50}
        />
      </div>
    </div>
  </footer>
);

export default Footer;
