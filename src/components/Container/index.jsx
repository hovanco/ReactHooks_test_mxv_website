import React, { useState, useEffect } from 'react';
import "./container.css";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Container() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <Router>
      <div className="container">
        <div className="container__item-left">
          <div className="register-user">
            <form onSubmit={handleSubmit(onSubmit)} className="form-style">
              <h1 style={{ fontSize: "24px" }}>ĐĂNG NHẬP</h1>
              <input
                name="userName"
                placeholder="Tài khoản (*)"
                ref={register({
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/,
                })}
              />
              {_.get("userName.type", errors) === "required" && (
                <p className="message-required">Đăng nhập tài khoản</p>
              )}

              <input
                name="password"
                type="password"
                placeholder="Mật khẩu (*)"
                ref={register({
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/,
                })}
              />
              {_.get("password.type", errors) === "required" && (
                <p className="message-required">Đăng nhập mật khẩu</p>
              )}

              <div className="box-click">
                <Link to="" className="forgot-password">Quên mật khẩu?</Link>
                <button
                  type="submit"
                  defaultValue="Submit"
                  className="btn-submit"
                >
                  ĐĂNG NHẬP
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="container__item-right">
          <div className="box-text-right">
            <p className="style-text-right">MXV luôn song hành cùng các Công ty Thành viên
             để phát triển, mở rộng thị trường giao dịch hàng hóa tại Việt Nam.</p>
          </div>
          <div className="box-text-right-menu">
            <div className="small-div-left">
              <i class="fas fa-angle-right style-fas"></i><Link to="" className="style-link">DANH SÁCH THÀNH VIÊN</Link><br/>
              <i class="fas fa-angle-right style-fas"></i><Link to="" className="style-link">THỦ TỤC ĐĂNG KÝ</Link><br/>
              <i class="fas fa-angle-right style-fas"></i><Link to="" className="style-link">TIN TỨC THÀNH VIÊN</Link>
            </div>
            <div className="small-div-right">
              <i class="fas fa-angle-right style-fas"></i><Link to="" className="style-link">ĐIỀU KIỆN ĐĂNG KÝ</Link><br/>
              <i class="fas fa-angle-right style-fas"></i><Link to="" className="style-link">BẢNG PHÍ THÀNH VIÊN</Link>
             </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Container
