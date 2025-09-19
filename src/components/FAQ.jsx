"use client";
import React from "react";
import { useState } from "react";
import "./FAQ.css";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does TalentPluto work?",
      answer:
        "TalentPluto connects top sales talent with curated opportunities. You create one profile, and we match you with tailored roles."
    },
    {
      question: "Is there any cost to join?",
      answer:
        "No, creating a profile and applying for roles on TalentPluto is completely free for candidates."
    },
    {
      question: "How long does it take to get matched?",
      answer:
        "Once your profile is complete, you can start getting matches within a few days depending on employer needs."
    },
    {
      question: "Who can see my profile?",
      answer:
        "Only verified employers and hiring managers can access your profile. We ensure your privacy and professional security."
    },
    {
      question: "How fast is the hiring process?",
      answer:
        "We focus on fast-track interviews, so most candidates move from profile approval to interviews within 1-2 weeks."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
