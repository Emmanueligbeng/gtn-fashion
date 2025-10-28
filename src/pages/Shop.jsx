// src/pages/Shop.jsx
import React, { useMemo, useState } from "react";
import productsData from "../data/productsData"; // your product list
import ProductCard from "../components/ProductCard";
import "./Shop.css";

export default function Shop() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("latest"); // latest | price-asc | price-desc

  // derive categories from data
  const categories = useMemo(() => {
    const cats = new Set(productsData.map((p) => p.category || "Uncategorized"));
    return ["All", ...Array.from(cats)];
  }, []);

  const filtered = useMemo(() => {
    let arr = productsData.slice();

    // search
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      arr = arr.filter(
        (p) =>
          (p.name || "").toLowerCase().includes(q) ||
          (p.desc || "").toLowerCase().includes(q)
      );
    }

    // category
    if (category !== "All") {
      arr = arr.filter((p) => (p.category || "Uncategorized") === category);
    }

    // sort
    if (sort === "price-asc") arr.sort((a, b) => (a.price || 0) - (b.price || 0));
    else if (sort === "price-desc") arr.sort((a, b) => (b.price || 0) - (a.price || 0));
    else arr = arr.sort((a, b) => (b.id || 0) - (a.id || 0)); // newest first (assumes id increases)

    return arr;
  }, [query, category, sort]);

  return (
    <main className="shop-page">
      <header className="shop-header">
        <div className="shop-title">
          <h1>Shop</h1>
          <p>Discover the GTN collection — timeless pieces, refined details.</p>
        </div>

        <div className="shop-controls">
          <input
            className="search"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search products"
          />

          <select
            className="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Filter by category"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            className="select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort products"
          >
            <option value="latest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </header>

      <section className="product-grid">
        {filtered.length ? (
          filtered.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <div className="no-results">No products found.</div>
        )}
      </section>
    </main>
  );
}
