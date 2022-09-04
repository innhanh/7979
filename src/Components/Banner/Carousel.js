import React from 'react';
import 'animate.css';
import "./carousel.scss";

import slideback from "../../Access/Image/BannerHome/slider-back-1.png";
import slidetop from "../../Access/Image/BannerHome/slider-top-1.png";
import bannerHome from "../../Access/SVG/Banner_Home.svg";
import BannerHome from './BannerHome';

function Carousel(props) {
    const GetCarousel = async () => {

    }
    return (
        <div className='container'>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='item_1 container'>
                            <BannerHome />
                            <div className='item_1_text'>
                                <h1>In <span>BẢN VẼ</span></h1>
                                <h1>In <span>NHANH <span>{"&"}</span></span></h1>
                                <h1>In <span>QUẢNG CÁO</span></h1>
                                <div class="svg-wrapper">
                                    <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                                        <rect class="shape" height="60" width="320" />                                       
                                    </svg>
                                    <button className='btn btn_more'>Xem Thêm</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <button class="carousel-control-prev" type="button" data-target="#myCarousel" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#myCarousel" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>
        </div>

    );
}

export default Carousel;