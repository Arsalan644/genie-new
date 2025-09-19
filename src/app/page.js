import React from "react";
import HeroSection from "@/components/Hero.jsx";
import Header from "@/components/Header.jsx";
import WhyJoin from "@/components/WhyJoin.jsx";
import Footer from "@/components/Footer.jsx";
import styles from "./page.module.css";
import Image from "@/components/image.jsx";
import HowItWorks from "@/components/HowItWorks.jsx";
import AnimationList from "@/components/AnimationList.jsx";
import { BsEnvelopeOpen } from "react-icons/bs";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials.jsx";
import Comparison from "@/components/comparison.jsx";
import FAQ from "@/components/FAQ.jsx";


function page() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
        <img
          className=" w-[100vw] h-auto "
          // style={{
          //   display: "block",
          //   width: "50%",
          //   height: "30%",
          //   borderRadius: "inherit",
          //   objectPosition: "center",
          //   objectFit: "fill",
          //   boxSizing: "border-box",
          // }}
          src="https://media.discordapp.net/attachments/1417500188565831681/1418194686379560970/mockup_genie_2.png?ex=68cd3c3a&is=68cbeaba&hm=bbe003db6a32f139ad7569c99815042d01f888720e0f1182eb21a25154e13abf&=&format=webp&quality=lossless&width=982&height=552"
          alt="Hero Image"
        />
      <WhyJoin />
      {/* <div className={styles.whyJoinParent}>
        <Image />
      </div> */}
      {/* <HowItWorks />
      <div className="h-20 w-full">

      </div>
      <AnimationList />
      <Achievements />
      <Testimonials />
      <Comparison />
      <FAQ />
      */}
      {/* <Footer />  */}
      <Footer />
    </main>
  );
}

export default page;
