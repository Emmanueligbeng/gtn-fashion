// src/components/Categories.jsx
import React from "react";
import "./Categories.css";

const cats = [
  { id: "men", title: "MEN", img: "https://imgs.search.brave.com/acGB6jxVXcg3pBKGIlrNv3Acl_ARlUjanMH46n7kTg8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2xhcmFpdG9zYmxv/Zy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDMvSU1H/XzIwMjAxMjI4XzIw/MjIyN182OTAuanBn", link: "/shop?cat=Men" },
  { id: "women", title: "WOMEN", img: "https://s.alicdn.com/@sc04/kf/He475f9fd8b084966bf875c575f049bc1P.jpg_300x300.jpg" },
  { id: "accessories", title: "CHILDREN", img: "https://cdn.tuko.co.ke/images/1120/2547386b3d9c996b.jpeg?v=1" },
];

export default function Categories() {
  return (
    <section className="categories section">
      <div className="center">
        <h2 style={{color:"#2d2d2d", marginBottom:8}}>EXOLORE OUR STORE</h2>
        <p style={{color:"grey", marginBottom:20}}>Shop By Category, Curated For You.</p>
      </div>

      <div className="cats-grid">
        {cats.map(c => (
          <a key={c.id} href={c.link} className="cat-card">
            <div className="cat-img" style={{ backgroundImage: `url(${c.img})` }} />
            <div className="cat-label">{c.title}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
