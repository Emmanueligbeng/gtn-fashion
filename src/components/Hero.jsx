import React, { useEffect, useState } from "react";
import "./Hero.css";

const images = [
  "https://imgs.search.brave.com/vhlESTvGiyjjzNlRxph9ulw75kWiPvK9oqnHGRXT-mQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/NTEwNTgxNy9waG90/by95b3VuZy1mZW1h/bGUtY3VzdG9tZXIt/c2hvcHBpbmctaW4t/Y2xvdGhpbmctc3Rv/cmUtcmV0YWlsLXNh/bGVzLWFzc29jaWF0/ZS1oZWxwcy13aXRo/LWFkdmljZS53ZWJw/P2E9MSZiPTEmcz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VEoyUXZF/VmFlRV8tZGpZc1VW/Tk1MaE42YzF0QTg2/djdVOWpic0lON0N0/cz0",
  "https://imgs.search.brave.com/5MC9YdKwnjs7fYL7Hza1blSox0WTApb0ye6miwioKTc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/YXNoaW9uLWNsb3Ro/aW5nLWhhbmdlcnMt/c2hvd18xMTUzLTYy/OTguanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw",
  "https://imgs.search.brave.com/1zILANN30Sz4G6ezRyNlpsw9YPlX3BpoaW5ymWFJWIQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIw/NzAyNzMyMy9waG90/by90cmVuZHktY2xv/dGhlcy1pbi1hLXN0/b3JlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1YcHBIa1NW/R1dYdTZmNVBaeWR3/UFhlNlFJT2x4NFBv/R1J3eFQyRHhGSUow/PQ",
  "https://imgs.search.brave.com/lwCyjRdIbITREWZdwrRHF2Z4gAXiMDnx10u7ywy7HMc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE1/MTg1NTk3Ny9waG90/by9yb3ctb2YtamVh/bnMtb24tdGhlLWhh/bmdlci1pbi10aGUt/c2hvcC1zZWxlY3Rp/dmUtZm9jdXMtY29u/Y2VwdC1vZi1idXkt/c2FsZS1hbmQtZGVu/aW0tZmFzaGlvbi53/ZWJwP2E9MSZiPTEm/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9RWFa/ZG5iZkR3V3NTdVRi/c2hBMzVwUm9oNUxh/R2hOdUo3eUtxYmpr/dHVycz0",
  "https://imgs.search.brave.com/JeWxtytFY3ZsLuyGY7v_LmSWTinquK_KGDlqWTJO0EA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODMx/NjU5NDE2L3Bob3Rv/L2x1eHVyeS1jbG90/aGluZy1zaG9wLWZv/ci1tZW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPW9qUlgz/OHp4bDJXeUFmWkJW/NE5sckJBUXZqbExu/dldla1R1RjJaTHpO/SUE9",
  "https://imgs.search.brave.com/NPXKKcbvFcceOPg51pJUKZw-RyUnsFIgt7mMc3zL0a8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzIwLzM2Lzg0/LzM2MF9GXzEyMDM2/ODQ1OF9qTTFyU2Mx/TzVrNThXNktNNGFh/ZXhKblZwVGFENzY4/Zy5qcGc",
  "https://imgs.search.brave.com/4vNWhKQUYY1NoVu1w2HZ3A6oByL7aW163Ac6RQ0ewRU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODU3/MzIzNDk4L3Bob3Rv/L21lbnMtY2xvdGhp/bmctYW5kLXBlcnNv/bmFsLWFjY2Vzc29y/aWVzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1rZnlkczJv/QXpDazlpSjE2dmtJ/YTN0d1l1SHowcUFE/eENrN01HZlpxN0Nv/PQ"
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds

    return () => clearInterval(slide);
  }, []);

  return (
    <section className="hero-slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className="hero-overlay">
        <h1>GTN COURTURE & FASHION</h1>
        {/* <h1>SHOP ADIRE</h1> */}

        <p>"Every Piece Is One of A Kind, Just Like You"</p>
        <a href="/shop"><button className="hero-btn">Shop Now</button></a>
      </div>
    </section>
  );
};

export default Hero;
