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
        image: "https://cdn.shopify.com/s/files/1/0097/7633/2855/products/71hWYp4YB-L._SL1500.jpg?v=1625089646&width=1445",
      },
      {
        name: "Controle Microsoft Xbox Robot White, Wireless, Preto",
        price: "R$ 389,90à vista",
        image: "https://http2.mlstatic.com/controle-elite-xbox-one-microsoft-original-lacrado-verso-2-D_NQ_NP_644264-MLB40593829134_012020-F.jpg",
      },
      {
        name: "Cooler Para Processador DeepCool High Performance AK400",
        price: "R$ 149,90à vista",
        image: "https://img.terabyteshop.com.br/produto/g/cooler-para-processador-deepcool-ak400-120mm-intel-amd-r-ak400-bknnmn-g-1_144160.jpg",
      },
      {
        name: "Microfone Gamer Fifine Ampligame A6T, RGB, USB",
        price: "R$ R$ 279,90à vista",
        image: "https://img.terabyteshop.com.br/produto/g/microfone-gamer-fifine-ampligame-a6t-rgb-usb-black-com-braco-articulado_169456.jpg",
      },
      {
        name: "Notebook Lenovo Thinkpad Yoga G2 Intel Core i5",
        price: "R$ 3.899,99à vista",
        image: "https://th.bing.com/th/id/R.55920359762726c3f93b9bfdca13ad98?rik=QmFQOIwi2%2f6toA&pid=ImgRaw&r=0",
      },
      {
        name: "Monitor Gamer Duex, 27 Pol, Full HD, IPS, 240Hz",
        price: "R$ 819,90à vista",
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/d/x/dx270ghq-240hz1.jpg",
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
 
