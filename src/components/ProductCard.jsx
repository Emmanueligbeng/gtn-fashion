// src/components/ProductCard.jsx
import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const placeholder =
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=1200&q=80";

  const isVideo = product.video && product.video.endsWith(".mp4");

  return (
    <article className="pcard">
      <div className="pcard-image">
        {isVideo ? (
          <video
            src={product.video}
            controls
            muted
            autoPlay
            loop
            className="product-video"
          />
        ) : (
          <img
            src={product.image || placeholder}
            alt={product.name || "Product image"}
          />
        )}
      </div>

      <div className="pcard-body">
        <h3 className="pcard-title">{product.name || "Untitled"}</h3>
        <div className="pcard-meta">
          <div className="pcard-price">
            {product?.price !== undefined ? `SEK ${product.price}` : "—"}
          </div>
          <a
            href="https://wa.me/46764482943"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="pcard-add">Purchase</button>
          </a>
        </div>
      </div>
    </article>
  );
}
