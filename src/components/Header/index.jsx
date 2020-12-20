import React from 'react';
import "./header.css";
import logo from '../../assets/pic_ture/logo-header.png';
import flagvn from '../../assets/pic_ture/flag-vn.png';
import flagen from '../../assets/pic_ture/flag-en.png';

import Banner from "../Banner";
import Container from "../Container";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Header() {
  return (
    <Router>
      <header className="header">
        <nav className="header__navbar">
          <ul className="header__navbar-list text-big-cente make-text-center">
            <li className="header__navbar-item header__navbar-item-separate">
              <Link to="" className="header__navbar-itm-link"> <img src={logo} className="size-logo" alt="Logo" /></Link>
            </li>
            <li className="header__navbar-item nav-item-center">
              <div className="box-branch of-box-branch">
                <p className="big-text-center">SỞ GIAO DỊCH <br /> HÀNG HÓA VIỆT NAM</p>
              </div>
            </li>
          </ul>
          <ul className="header__navbar-list nav-ul-right-center">
            <li className="header__navbar-item">
              <input type="text" placeholder="Tìm kiếm..." className="header_search-input" />
              <button type="button" className="header_search-btn">
                <span><i className="fas fa-search search-icon-style" /></span>
              </button>
            </li>
            <li className="header__navbar-item languages-style">
              Ngôn Ngữ:
              <Link to="" className="header__navbar-itm-small "> <img src={flagvn} className="flag-country" alt="vn flag" /></Link>
              <Link to="" className="header__navbar-itm-small"> <img src={flagen} className="flag-country" alt="en flag" /></Link>
            </li>
            <li className="header__navbar-item cursor-poniter">
              <span><i class="fas fa-angle-right style-angle-right"></i></span> Đăng Nhập
            </li>
          </ul>
        </nav>

        <div className="navbar__footer">
          <ul className="navbar__footer-list ml">

            <li className="navbar__footer-item">
              <Link to="" className="homepage-style"><i className="fas fa-home"></i></Link>
            </li>

            {/* <li className="navbar__footer-item">
              <Link to="">SẢN PHẨM<i className=""></i></Link>
              <div className="item-dropdown">
                <ul className="">
                  <li className="">
                    <Link to="">NÔNG SẢN</Link>
                  </li>
                  <li className="">
                    <Link to="">NĂNG LƯỢNG</Link>
                  </li>
                  <li className="">
                    <Link to="">KIM LOẠI</Link>
                  </li>
                  <li className="">
                    <Link to="">NGUYÊN LIỆU NÔNG NGHIỆP</Link>
                  </li>
                </ul>
              </div>
            </li> */}

            <li className="navbar__footer-item">DỊCH VỤ</li>
            <li className="navbar__footer-item">DỮ LIỆU THỊ TRƯỜNG</li>
            <li className="navbar__footer-item">GIAO DỊCH</li>
            <li className="navbar__footer-item">THÀNH VIÊN</li>
            <li className="navbar__footer-item">QUY CHẾ</li>
            <li className="navbar__footer-item">TIN TỨC</li>
            <li className="navbar__footer-item">ĐÀO TẠO</li>
            <li className="navbar__footer-item">THÔNG TIN MXV</li>
          </ul>
        </div>
      </header>
      <Banner />
    </Router>
  )
}

export default Header

