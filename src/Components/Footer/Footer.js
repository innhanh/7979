import React from 'react';
import { Link } from "react-router-dom";
import "./footer.scss";
import logo from "../../Access/Image/logo.png";
import zalo from "../../Access/Image/zalo.png"

function Footer(props) {
    return (
        <div className='footer'>
            <div className='footerMain'>
                <div className='overlay'></div>
                <div className='footer-container'>
                    <div className='row'>
                        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                            <div className='footer_logo'>
                                <img className='img-fluid' src={logo} alt='logo' />
                                {/* <p className='mb-0 first'>CÔNG TY CỔ PHẦN DỊCH VỤ <Link to={"/"}>INNHANH79</Link></p>
                                <div className='footer_information'>
                                    <div className='footer_information_item'>
                                        <p className='mb-0'>MST: 0314306077</p>
                                        <p className='mb-0'>Điện thoại: 0888.229.079</p>
                                        <p className='mb-0'>Website: <Link to={"/"}>innhanh79.vn</Link></p>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
                            <div className='footer_link'>
                                <div className='footer_title'>
                                   
                                </div>
                                <div className='footer_link_item'>
                                    <Link className='d-block' to={"/"}><i class="fa fa-angle-right"></i><p>In Bản Vẽ</p></Link>
                                    <Link className='d-block' to={"/"}><i class="fa fa-angle-right"></i><p>In Quảng Cáo</p></Link>
                                    <Link className='d-block' to={"/"}><i class="fa fa-angle-right"></i><p>In Nhanh</p></Link>
                                    <Link className='d-block' to={"/"}><i class="fa fa-angle-right"></i><p>In Decal</p></Link>
                                    <Link className='d-block' to={"/"}><i class="fa fa-angle-right"></i><p>Phương Thức Thanh Toán</p></Link>
                                    <Link className='d-block' to={"/"}><i class="fa fa-angle-right"></i><p>Thiết Kế - Sáng Tạo</p></Link>
                                    <Link className='d-block' to={"/"}><i class="fa fa-angle-right"></i><p>Liên Hệ</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-5 col-lg-12 col-md-12 col-sm-12'>
                            <div className='footer_contact'>
                                <div className='footer_title'>
                                   
                                </div>
                                <div className='footer_contact_item'>
                                    <div className='row'>
                                        <div className='col-xl-6 col-md-12'>
                                            <h5><Link to={"/"}>CN1</Link></h5>
                                            <div className='footer_contact_information'>
                                                <p><i class="fa fa-map-marker-alt"></i>43D/10 - Hồ Văn Huê - P.9 - Q. Phú Nhuận - Tp.HCM</p>
                                                <p><i class="fab fa-whatsapp"></i><Link to={"#"}>0888.229.079</Link> - <Link to={"#"}>0918.196.699</Link></p>
                                                <p><i class="fa fa-envelope"></i><Link to={"/"}>innhanh7979@gmail.com</Link></p>
                                                <p className='ml-0'>
                                                    <img src={zalo} className="img-fluid zalo" alt='zalo' />
                                                    <Link to={"#"}>0888.229.079</Link>
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-xl-6 col-md-12'>
                                            <h5><Link to={"/"}>CN2</Link></h5>
                                            <div className='footer_contact_information'>
                                                <p><i class="fa fa-map-marker-alt"></i>29Bis Nguyễn Đình Chiểu - P.Đa Kao - Q.1 - TP.HCM</p>
                                                <p><i class="fab fa-whatsapp"></i>
                                                    <Link to={"#"}>028.6674.5666</Link> -
                                                    <Link to={"#"}>0938.006.969  {"Mr.Trung"}</Link>
                                                    <Link to={"#"}>0974.797.796 {"Mr.Linh"}</Link></p>
                                                <p><i class="fa fa-envelope"></i><Link to={"/"}>ingiatot2015@gmail.com</Link></p>
                                                <p className='ml-0'>
                                                    <img src={zalo} className="img-fluid zalo" alt='zalo' />
                                                    <Link to={"#"}>0888.229.079</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerBottom'>
                <div className='container'>
                    <div className='footerBottom_item'>
                        <div className='logo d-flex justify-content-center align-items-center'>
                            <img src={logo} alt='logo' />
                            <p>© Copyright 2022 by innhanh79.vn. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;