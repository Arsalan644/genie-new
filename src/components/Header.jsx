
import React from "react";
import "./header.css";
import { mainlux, metropolis, eula } from "../app/layout.js";
import { museoModerno } from "@/app/layout"; 
import Image from 'next/image'

const Header = () => {
  return (
    <header className={eula.className}>
      <a href="/" className="logo">
        <Image
            src='/Assets/logo.png'
            width={100}
            height={100}
            alt="Genie Logo"
        />
      </a>
      <nav className="navigation">
        <ul className={`nav-links text-lg `}>
          <li>
            <a className="text-shadow-md" href="/">Why</a>
          </li>
          <li>
            <a className="text-shadow-md" href="/Comparisons">Comparisons</a>
          </li>
          <li>
            <a className="text-shadow-md" href="/Testimonials">Testimonials</a>
          </li>
          <li>
            <a className="text-shadow-md" href="/Blog">Blogs</a>
          </li>
        </ul>
      </nav>
      <div className="buttons">
        <button className="start-hiring shadow-sm duration-200">Start hiring</button>
        <button className="join-10-mins shadow-sm duration-200">Join in 10 mins</button>
      </div>
    </header>
  );
};

export default Header;
