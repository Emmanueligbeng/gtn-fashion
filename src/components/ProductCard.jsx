// src/components/ProductCard.jsx
import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  // fallback placeholder if image missing (replace with your own placeholder)
  const placeholder = "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=1200&q=80";

  return (
    <article className="pcard">
      <div className="pcard-image">
        <img src={product.img || placeholder} alt={product.name || "Product image"} />
      </div>

      <div className="pcard-body">
        <h3 className="pcard-title">{product.name || "Untitled"}</h3>
        <div className="pcard-meta">
          <div className="pcard-price">{product.price ? `₦${product.price}` : "—"}</div>
          <button
            className="pcard-add"
            onClick={() => window.alert(`${product.name || "Product"} added to cart (demo)`)}
          >
            Purchase
          </button>
        </div>
      </div>
    </article>
  );
}
