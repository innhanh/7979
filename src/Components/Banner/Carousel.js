import React from 'react';
import 'animate.css';
import "./carousel.scss";
import bannerInNhanh from "../../Access/Carousel/bannerInNhanh.jpg";
import bannerQuangCao from "../../Access/Carousel/bannerQuangCao.jpg";
import bannerInBanVe from "../../Access/Carousel/inBanVe.jpg";
import dvThietKe from "../../Access/Carousel/dvThietKe.jpg";
import thietkeBNDTH from "../../Access/Carousel/thietKeBNDTH.jpg";
import setupEvent from "../../Access/Carousel/setupEvent.jpg";
import { Link } from 'react-router-dom';
import BannerHome from './BannerHome';



function Carousel(props) {

    return (
        <div id='myCarousel' className='container'>
            <div id="innhanhCarousel" className="carousel slide" data-ride="carousel">
                {/* <ol className="carousel-indicators">
                    <li data-target="#innhanhCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#innhanhCarousel" data-slide-to="1"></li>
                    <li data-target="#innhanhCarousel" data-slide-to="2"></li>
                    <li data-target="#innhanhCarousel" data-slide-to="3"></li>
                    <li data-target="#innhanhCarousel" data-slide-to="4"></li>
                    <li data-target="#innhanhCarousel" data-slide-to="5"></li>
                </ol> */}

                <div className="carousel-inner">
                    <div className="carousel-item item1 active">
                        <BannerHome />
                        <div className='innhanh_text'>
                            <div className='carousel-link text-1'>
                                <Link to={"/in-ban-ve"}>In <span>Bản Vẽ</span></Link>
                            </div>

                            <div className='carousel-link text-2'>
                                <Link to={"/in-tui-giay"}>In <span>Nhanh <span>{"&"}</span></span></Link>
                            </div>

                            <div className='carousel-link text-3'>
                                <Link to={"/in-qc-pp"}>In <span>Quảng Cáo</span></Link>
                            </div>
                            <div className='carousel-contact text-4'>
                                <a href='tel:0888229079' className='hotline text_orange'>
                                    0888.229.079
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className='w-100 img-fluid' src={bannerInNhanh} alt='banner In Nhanh' />
                        <Link className='btn btn_readmore' to={"/in-tui-giay"}>Xem thêm</Link>
                    </div>

                    <div className="carousel-item">
                        <img className='w-100 img-fluid' src={bannerQuangCao} alt='banner In Quảng Cáo' />
                        <Link className='btn btn_readmore' to={"/in-tui-giay"}>Xem thêm</Link>
                    </div>

                    <div className="carousel-item">
                        <img className='w-100 img-fluid' src={bannerInBanVe} alt='banner In Bản Vẽ' />
                        <Link className='btn btn_readmore' to={"/in-ban-ve"}>Xem thêm</Link>
                    </div>

                    <div className="carousel-item">
                        <img className='w-100 img-fluid' src={dvThietKe} alt='banner Dịch Vụ Thiết Kế' />
                        <Link className='btn btn_readmore' to={"/in-ban-ve"}>Xem thêm</Link>
                    </div>

                    <div className="carousel-item">
                        <img className='w-100 img-fluid' src={thietkeBNDTH} alt='banner Thiết Kế BNDTH' />
                        <Link className='btn btn_readmore' to={"/in-ban-ve"}>Xem thêm</Link>
                    </div>

                    <div className="carousel-item">
                        <img className='w-100 img-fluid' src={setupEvent} alt='banner Setup Event' />
                        <Link className='btn btn_readmore' to={"/in-ban-ve"}>Xem thêm</Link>
                    </div>

                </div>

                <button id='btn_PreviousCarousel' className="carousel-control-prev" type="button" data-target="#innhanhCarousel" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button id='btn_NextCarousel' className="carousel-control-next" type="button" data-target="#innhanhCarousel" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </div>

    );
}

export default Carousel;