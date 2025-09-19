import React from "react";
import HeroSection from "@/components/Hero.jsx";
import Header from "@/components/Header.jsx";
import WhyJoin from "@/components/WhyJoin.jsx";
import Footer from "@/components/Footer.jsx";
import styles from "./page.module.css";
// import HowItWorks from "@/components/HowItWorks.jsx";
// import AnimationList from "@/components/AnimationList.jsx";
// import Achievements from "@/components/Achievements";
// import Testimonials from "@/components/Testimonials.jsx";
// import Comparison from "@/components/comparison.jsx";
// import FAQ from "@/components/FAQ.jsx";
import Image from 'next/image'

function page() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
        <Image
          className=" w-[100vw] h-auto "
          src="/Assets/mockup-genie.svg"
          alt="Hero Image"
          width={827}
        height={465}
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
      <Footer />
    </main>
  );
}

export default page;
