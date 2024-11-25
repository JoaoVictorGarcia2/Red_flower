import React from 'react';
import './Home.css';
import logo from './img/logo.jpg';
import banner from './img/banner2.png';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
 
export default function Home() {
  return (
    <div>
   
      <header className="header">
  <div className="logo-container">
    <img src={logo} alt="Logo" className="logo" />
    <h3 className="titulo">red-flower</h3>
  </div>
  <nav>
    <ul className="nav-links">
      <li><HiOutlineShoppingBag className="icon" /></li>
      <li><FaRegHeart className="icon" /></li>
    </ul>
  </nav>
</header>
 
   
      <section className="banner">
        <img
          src={banner}
          alt="Banner"
          className="banner-img"
        />
        <div className="banner-text">
          <h2>Bem-vindo ao Nosso Site!</h2>
          <p>Explore nossos produtos e serviços.</p>
        </div>
      </section>
 
 
      <section className="links">
  <div className="container">
    <div className="link-buttons">
      <a href="#promoção" className="btn">promoção</a>
      <a href="#Hardwere" className="btn">Hardwere</a>
      <a href="#notebooks" className="btn">notebooks</a>
      <a href="#atendimento" className="btn">atendimento</a>
    </div>
    <hr className="divider" />
  </div>
</section>
<section className="product-cards">
  <div className="cards-container">
    {[
      {
        name: "Memória DDR4 XPG Gammix D10, 16GB (2x8GB) 3200Mhz, Black",
        price: "R$ 288,90à vista",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Controle Microsoft Xbox Robot White, Wireless, Branco",
        price: "R$ 389,90à vista",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Cooler Para Processador DeepCool High Performance AK400",
        price: "R$ 149,90à vista",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Microfone Gamer Fifine Ampligame A6T, RGB, USB",
        price: "R$ R$ 279,90à vista",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Notebook Lenovo Thinkpad Yoga G2 Intel Core i5",
        price: "R$ 3.899,99à vista",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Monitor Gamer Duex, 27 Pol, Full HD, IPS, 240Hz",
        price: "R$ 819,90à vista",
        image: "https://via.placeholder.com/150",
      },
    ].map((product, index) => (
      <div key={index} className="card">
        <img src={product.image} alt={product.name} className="card-img" />
        <h4 className="card-title">{product.name}</h4>
        <p className="card-price">{product.price}</p>
      </div>
    ))}
  </div>
</section>
 
 
    </div>
  );
}
 
