import React from 'react';
import "./banner.css";
import banner from "../../assets/pic_ture/banner.png";

function Banner() {
  return (
    <div className="banner-box">
      <div className="hero-image">
        <div className="hero-text">
          <h1 style={{fontSize:"50px"}}>ĐĂNG NHẬP</h1>
        </div>
       
      </div>
      <div className="small-menu">
        <h3 className="small-menu-text-style">TRANG CHỦ / ĐĂNG NHẬP</h3>
      </div>
    </div>
  )
}

export default Banner;

