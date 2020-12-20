import React from 'react';
import "./footer.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo_footer from "../../assets/pic_ture/logo-footer.png"


function Footer() {
  return (
    <Router>
      <div className="footer">
        <div className="footer-top">
          <div className="div-logo">
            <Link to="" className=""> <img src={logo_footer} className="logo_footer" alt="Logo fooer" /></Link>
          </div>

          <div className="div-text ">
            <p className="big-title-text">TRỤ SỞ CHÍNH TẠI HÀ NỘI:</p>
            <p className="small-title-text">Tầng 16, Tòa tháp Văn phòng Hòa Bình, Số 106, Đường Hoàng Quốc Việt,
              Phường Nghĩa Đô, Quận Cầu Giấy, TP. Hà Nội, Việt Nam  <br />
              Phone : 84 (024) - 3396 3939 <br />
              Email : info@mxv.vn
            </p>
          </div>

          <div className="div-text-right">
            <p className="big-title-text">VĂN PHÒNG ĐẠI DIỆN TẠI TP. HCM:</p>
            <p className="small-title-text">Tầng M, Tòa Empire Tower, Số 26-28 Hàm Nghi, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh. <br />
              Phone : 84 (028) - 3535 6363 <br />
              Email : info@mxv.vn
            </p>
          </div>

          <div className="div-logo">
            <p className="big-title-text ml">LIÊN KẾT:</p>
            <ul className="footer-menu-item">
              <li><Link to="" className=""><i className="fab fa-facebook-f style-icon"></i> </Link></li>
              <li><Link to="" className="ml-mr"><i class="fab fa-youtube style-icon"></i></Link></li>
              <li><Link to="" className=""><i class="fab fa-linkedin-in style-icon"></i></Link></li>
            </ul>
          </div>
        </div>



        <div className="footer-bottom">
          <p className="footer-bottom-text">
            © Copyright 2017 - Mercantile Exchange of Vietnam - All rights reserved. <br/>
            Xin ghi rõ nguồn MXV khi phát hành lại những tin/bài được thực hiện từ kênh thông tin này.
          </p>
      </div>
      </div>
    </Router>
  )
}

export default Footer
