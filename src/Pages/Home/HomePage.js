import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../Components/Banner/Carousel';
import image1 from "../../Access/Image/image1.jpg"
import image2 from "../../Access/Image/image2.jpg"
import image3 from "../../Access/Image/image3.jpg";
import menuPrint1 from "../../Access/Image/menuPrint1.png";
import menuPrint2 from "../../Access/Image/menuPrint2.jpg";
import menuPrint3 from "../../Access/Image/menuPrint3.jpg";
import menuPrint4 from "../../Access/Image/menuPrint4.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./homepage.scss";
import Slide_Partners from '../../Components/Slide_Partners/Slide_Partners';

function HomePage(props) {
  

    return (
        <div className='home innhanh_fade'>
            <Carousel />
            <div className='intro'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-7 col-md-12'>

                            <div className='innhanh_title'>
                                <h3>Trung Tâm <span>INNHANH79</span></h3>
                            </div>

                            <div className='intro_text'>
                                <p><Link to={"/"}>In Nhanh</Link> là một lĩnh vực đang rất phát triển tại Việt Nam, đặt biệt là các thành phố lớn, thành phố du lịch, khi sự hội nhập đòi hỏi sự chuyên nghiệp và nhanh chóng chính xác cao cùng với đời sống kinh tế ngày càng đi lên thì quan điểm về quảng cáo, khuyến mãi cũng không ngừng thay đổi. Trong đó, xu hướng chung là mọi Khách Hàng ngày càng khắt khe hơn với những ấn phẩm quảng cáo, những thông điệp mà bất cứ Doanh Nghiệp nào cũng cần phải có, để tiếp cận thị trường, tiếp cận Khách Hàng tiềm năng của mình. Là một Doanh Nghiệp chuyên ngành in ấn giấy, chúng tôi mong muốn được góp một phần công sức của mình vào sự thành công và phát triển của quý vị. </p>
                            </div>
                            <button className='btn btn-innhanh'>XEM THÊM<i class="fa fa-angle-double-right"></i></button>
                        </div>
                        <div className='col-xl-5 col-md-12'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-6 intro_image'>
                                        <img src={image1} className='img-fluid image_animation' alt='image1' />

                                    </div>
                                    <div className='col-6'>
                                        <div className='image2'>
                                            <img src={image2} className='img-fluid image_animation mb-4' alt='image2' />
                                            <img src={image3} className='img-fluid image_animation' alt='image3' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='productions'>
                <div className='container'>
                    <div className='innhanh_title text-center mb-5'>
                        <h3>Sản Phẩm Của <span>INNHANH79</span></h3>
                    </div>
                    <div className='row'>
                        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                            <div className='productions_item'>
                                <div className='productions_hearder'>
                                    <i class="fa fa-envelope-open"></i>
                                    <h4>IN BAO THƯ</h4>
                                </div>
                                <div className='productions_main'>
                                    <ul className='productions_main-link'>
                                        <li>Kích Thước: 12 x 22, 17 x 23, 25 x 35</li>
                                        <li>Định Lượng: 100gsm – 120 gsm</li>
                                        <li>Loại Giấy: Fort</li>
                                        <li>In Nhanh, In Offset</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                            <div className='productions_item'>
                                <div className='productions_hearder'>
                                    <i class="fa fa-layer-group"></i>
                                    <h4>IN NAME CARD</h4>
                                </div>
                                <div className='productions_main'>
                                    <ul className='productions_main-link'>
                                        <li>Kích Thước: 5.3 x 8.8, 5.3 x 9, 5.5 x 9.2</li>
                                        <li>Định Lượng: 250gsm – 350 gsm</li>
                                        <li>Loại Giấy: Fort, Couche, Mỹ Thuật</li>
                                        <li>In Nhanh, In Offset</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                            <div className='productions_item'>
                                <div className='productions_hearder'>
                                    <i class="fa fa-file"></i>
                                    <h4>IN TỜ RƠI</h4>
                                </div>
                                <div className='productions_main'>
                                    <ul className='productions_main-link'>
                                        <li>Kích Thước: A5, A4, A3, SRA3, 13×19</li>
                                        <li>Định Lượng: 120gsm – 350 gsm</li>
                                        <li>Loại Giấy: Fort, Couche, Mỹ Thuật</li>
                                        <li>In Nhanh, In Offset</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                            <div className='productions_item'>
                                <div className='productions_hearder'>
                                    <i class="fab fa-elementor"></i>
                                    <h4>IN MENU</h4>
                                </div>
                                <div className='productions_main'>
                                    <ul className='productions_main-link'>
                                        <li>Kích Thước: A5, A4, A3, SRA3, 13×19</li>
                                        <li>Định Lượng: 120gsm – 350 gsm</li>
                                        <li>Loại Giấy: Couche, Mỹ Thuật, Giấy Nhựa</li>
                                        <li>In Nhanh, In Offset, Bấm Kim, Keo Gáy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                            <div className='productions_item'>
                                <div className='productions_hearder'>
                                    <i class="fa fa-book-open"></i>
                                    <h4>IN CATALOGUE</h4>
                                </div>
                                <div className='productions_main'>
                                    <ul className='productions_main-link'>
                                        <li>Kích Thước: A4 Đứng , A4 Nằm Ngang , A5</li>
                                        <li>Định Lượng: Bìa, Ruột 150 gsm</li>
                                        <li>Loại Giấy: Fort, Couche, Mỹ Thuật</li>
                                        <li>In Nhanh, In Offset, Bấm Kim, Keo Gáy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                            <div className='productions_item'>
                                <div className='productions_hearder'>
                                    <i class="fa fa-folder-open"></i>
                                    <h4>IN FOLDER</h4>
                                </div>
                                <div className='productions_main'>
                                    <ul className='productions_main-link'>
                                        <li>Kích Thước: 22x31x7</li>
                                        <li>Định Lượng: 250 gsm – 300 gsm</li>
                                        <li>Loại Giấy: Fort, Couche, Mỹ Thuật</li>
                                        <li>Màng Bóng, Màng Mờ</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                            <div className='productions_item'>
                                <div className='productions_hearder'>
                                    <i class="fa fa-envelope"></i>
                                    <h4>IN HÓA ĐƠN, BIỂU MẪU</h4>
                                </div>
                                <div className='productions_main'>
                                    <ul className='productions_main-link'>
                                        <li>Kích Thước: 14×20, 20×28</li>
                                        <li>Định Lượng: 52 gsm – 55 gsm</li>
                                        <li>Loại Giấy: Fort, Carbonless</li>
                                        <li>2, 3, 4 liên, bấm kim, keo gáy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                            <div className='productions_item'>
                                <div className='productions_hearder'>
                                    <i class="fa fa-envelope-open-text"></i>
                                    <h4>IN THIỆP CƯỚI HIỆN ĐẠI</h4>
                                </div>
                                <div className='productions_main'>
                                    <ul className='productions_main-link'>
                                        <li>Kích Thước: có sẵn hoặc tùy chọn</li>
                                        <li>Định Lượng: 200 gsm – 350 gsm</li>
                                        <li>Loại Giấy: Fort, Mỹ Thuật, Couche</li>
                                        <li>Cấn bế dán thành phẩm</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                            <div className='productions_item'>
                                <div className='productions_hearder'>
                                    <i class="fa fa-torah"></i>
                                    <h4>IN TEM DECAL, STICKER</h4>
                                </div>
                                <div className='productions_main'>
                                    <ul className='productions_main-link'>
                                        <li>Kích Thước: tùy chọn</li>
                                        <li>Định Lượng: 120 gsm</li>
                                        <li>Loại Giấy Decal : Decal giấy, Nhựa, Trong , Kraft</li>
                                        <li>Cắt bế hình dạng theo yêu cầu</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='menuPrints'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                            <div className='menuPrints_item'>
                                <h4 className='menuPrints_title'><span>In</span> NHANH</h4>
                                <div className='menuPrints_image'>
                                    <img src={menuPrint1} className='img-fluid' alt='imagemenu1' />
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                            <div className='menuPrints_item'>
                                <h4 className='menuPrints_title'><span>In</span> CATALOGUE</h4>
                                <div className='menuPrints_image'>
                                    <img src={menuPrint2} className='img-fluid' alt='imagemenu2' />
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                            <div className='menuPrints_item'>
                                <h4 className='menuPrints_title'><span>In</span> OFFSET</h4>
                                <div className='menuPrints_image'>
                                    <img src={menuPrint3} className='img-fluid' alt='imagemenu3' />
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                            <div className='menuPrints_item'>
                                <h4 className='menuPrints_title'><span>In</span> TỜ RƠI</h4>
                                <div className='menuPrints_image'>
                                    <img src={menuPrint4} className='img-fluid' alt='imagemenu4' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='innhanh_title text-center mt-3'>
                <h3>Đối Tác <span>INNHANH79</span></h3>
            </div>
            <Slide_Partners />


        </div>
    );
}

export default HomePage;