// // src/components/FeaturedProducts.jsx
// import React from "react";
// import products from "../data/productsData";
// import ProductCard from "./ProductCard";
// import "./FeaturedProducts.css";

// export default function FeaturedProducts() {
//   // take first 8 products (or less)
//   const list = products.slice(0, 8);
//   return (
//     <section className="featured section">
//       <div className="section" style={{paddingTop:0, paddingBottom:0}}>
//         <div className="center">
//           <h2 style={{color:"#2d2d2d"}}>FEATURED PRODUCTS</h2>
//           <p style={{color:"grey"}}>Selected pieces from the latest drop.</p>
//         </div>

//         <div className="featured-grid">
//           {list.map(p => <ProductCard key={p.id} product={p} />)}
//         </div>
//       </div>
//     </section>
//   );
// }


// src/components/FeaturedProducts.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/productsData";
import ProductCard from "./ProductCard";
import "./FeaturedProducts.css";

export default function FeaturedProducts() {
  const navigate = useNavigate();

  // Show only the first 3 products
  const list = products.slice(0, 3);

  return (
    <section className="featured section">
      <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="center">
          <h2 style={{ color: "#2d2d2d" }}>FEATURED PRODUCTS</h2>
          <p style={{ color: "grey" }}>Selected pieces from the latest drop.</p>
        </div>

        <div className="featured-grid">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* View More Button */}
        <div className="view-more-container">
          <button className="view-more-btn" onClick={() => navigate("/shop")}>
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
