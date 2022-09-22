import React from 'react';
import 'animate.css';
import "./carousel.scss";
import banner1 from "../../Access/Image/BannerCarousel/banner1.jpg";
import banner2 from "../../Access/Image/BannerCarousel/banner2.jpg";
import banner3 from "../../Access/Image/BannerCarousel/banner3.jpg";
import banner4 from "../../Access/Image/BannerCarousel/banner4.jpg";
import banner5 from "../../Access/Image/BannerCarousel/banner5.jpg";
import banner6 from "../../Access/Image/BannerCarousel/banner6.jpg";
import { Link } from 'react-router-dom';


function Carousel(props) {

    return (
        <div id='myCarousel' className='container'>
            <div id="innhanhCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#innhanhCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#innhanhCarousel" data-slide-to="1"></li>
                    <li data-target="#innhanhCarousel" data-slide-to="2"></li>
                    <li data-target="#innhanhCarousel" data-slide-to="3"></li>
                    <li data-target="#innhanhCarousel" data-slide-to="4"></li>
                    <li data-target="#innhanhCarousel" data-slide-to="5"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="carousel-item item1 active">
                        <img src={banner1} class="d-block w-100" alt="banner1" />
                        <div className='btn_readmore'>
                            <Link className='btn' to={"/in-tui-giay"}>Xem Thêm</Link>

                        </div>
                    </div>
                    <div class="carousel-item item2">
                        <img src={banner2} class="d-block w-100" alt="banner1" />
                        <div className='btn_readmore'>
                            <Link className='btn' to={"/in-qc-pp"}>Xem Thêm</Link>
                        </div>
                    </div>

                    <div class="carousel-item item3">
                        <img src={banner3} class="d-block w-100" alt="banner1" />
                        <div className='btn_readmore'>
                            <Link className='btn' to={"/-thiet-ke-nhan-dang-thuong-hieu"}>Xem Thêm</Link>
                        </div>
                    </div>
                    <div class="carousel-item item4">
                        <img src={banner4} class="d-block w-100" alt="banner1" />
                        <div className='btn_readmore'>
                            <Link className='btn' to={"/dich-vu-thiet-ke"}>Xem Thêm</Link>
                        </div>
                    </div>
                    <div class="carousel-item item5">
                        <img src={banner5} class="d-block w-100" alt="banner1" />
                        <div className='btn_readmore'>
                            <Link className='btn' to={"/in-ban-ve"}>Xem Thêm</Link>
                        </div>
                    </div>
                    <div class="carousel-item item6">
                        <img src={banner6} class="d-block w-100" alt="banner1" />
                        <div className='btn_readmore'>
                            <Link className='btn' to={"/setup-event"}>Xem Thêm</Link>
                        </div>
                    </div>

                </div>
                <button id='btn_PreviousCarousel' class="carousel-control-prev" type="button" data-target="#innhanhCarousel" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button id='btn_NextCarousel' class="carousel-control-next" type="button" data-target="#innhanhCarousel" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>
        </div>

    );
}

export default Carousel;