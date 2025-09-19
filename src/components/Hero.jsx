import React from "react";
import "./Hero.css";
import { ShineBorder } from "./ui/shine-border";
import {eula} from "../app/layout.js";
import {metropolis} from "../app/layout.js";

function HeroSection() {
  return (
    <section className="hero relative">

    <img className="hero-image" src="https://media.discordapp.net/attachments/1417500188565831681/1418125378236715058/genie_2_1.png?ex=68ccfbad&is=68cbaa2d&hm=8a672ad1e684b91249dda5643a6daacf5e9d8826badbe0cba13df67dcc25223d&=&format=webp&quality=lossless" alt="Hero Image" />
      {/* <button
        style={{
          paddingInline: "14px",
          paddingBlock: "3px",
          marginBottom: "60px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          background: "half-transparent",
          marginInline: 'auto',
          fontSize: '11px'
        }}
        className="relative flex items-center gap-2 rounded-full px-8 py-4 mx-auto"
      >
        <ShineBorder
          shineColor={["#d1e32b", "#dbdb2e", "#f0e805", "#f0bb51"]}
        />

        Trusted by Muslims Worldwide
      </button> */}

      <h1 className="hero-title">
        <div>
          <p className={`${eula.className} text-[#1a1814] font-light`} style={{ fontSize: '45px' }}>
            Hi, I'm <span style={{ color: "#ad9437" }}>Genie</span>, the first
            AI-powered <br /> matchmaker for Muslims globally.
          </p>
        </div>
      </h1>

      <p className={`hero-subtext font-light ${metropolis.className}`}>
        The future of matchmaking is here. Genie uses Voice AI in 10 major
        languages, validated psychological frameworks, and advanced algorithmic
        matching to create meaningful values-based connections for Muslims
        globally.
      </p>

      <div className="hero-action font-[Eula]">
        <input className="tracking-widest  font-light  " type="text" placeholder="Enter your email" />
        <button className="button">Join Beta</button>
      </div>

      <div className="trusted">
        <div className="avatars">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user1"
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user2"
          />
          <img
            src="https://randomuser.me/api/portraits/men/50.jpg"
            alt="user3"
          />
        </div>
        <span className="count tracking-widest" style={{ fontFamily: "Eula", opacity: '0.7' }}>Trusted by Muslims Worldwide</span>
      </div>

      {/* <div className="hero-media relative flex justify-center h-100% w-100%"> */}
        {/* <img
          className=" absolute inset-0 h-auto"
          // style={{
          //   display: "block",
          //   width: "50%",
          //   height: "30%",
          //   borderRadius: "inherit",
          //   objectPosition: "center",
          //   objectFit: "fill",
          //   boxSizing: "border-box",
          // }}
          src="https://cdn.discordapp.com/attachments/1417500188565831681/1418176717255868496/mockup_genie.png?ex=68cd2b7d&is=68cbd9fd&hm=121289f8c0679404f573b19254b33e4b85ac52edf3c28df74684a5d77f489ee1&"
          alt="Hero Image"
        /> */}
      {/* </div> */}

    </section>
  );
}

export default HeroSection;
