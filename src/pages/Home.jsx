// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import PromoBanner from "../components/PromoBanner";
import AboutPreview from "../components/AboutPreview";
import NewsletterCTA from "../components/NewsletterCTA";
import ContactPreview from "../components/ContactPreview";
import "./Home.css";

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <PromoBanner />
      <Categories />
      <FeaturedProducts />
      <AboutPreview />
      <ContactPreview />
      <NewsletterCTA />
    </main>
  );
}
