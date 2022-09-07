import React from 'react';
import 'animate.css';
import "./carousel.scss";
import BannerHome from './BannerHome';

function Carousel(props) {
   
    return (
        <div className='container'>
            <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
                <ol id='btn_indicators' class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='item_1 container'>
                            <BannerHome />
                            <div className='item_1_text'>
                                <h1 className='text_inBanVe'>In <span>BẢN VẼ</span></h1>
                                <h1 className='text_innhanh'>In <span>NHANH <span>{"&"}</span></span></h1>
                                <h1 className='text_inQuangCao'>In <span>QUẢNG CÁO</span></h1>
                                <button className='btn btn_more'>Xem Thêm</button>
                            </div>
                        </div>

                    </div>
                    
                    <div class="carousel-item ">
                        <div className='item_1 container'>
                            <BannerHome />
                            <div className='item_1_text'>
                                <h1 className='text_inBanVe'>In <span>BẢN VẼ</span></h1>
                                <h1 className='text_innhanh'>In <span>NHANH <span>{"&"}</span></span></h1>
                                <h1 className='text_inQuangCao'>In <span>QUẢNG CÁO</span></h1>
                                <button className='btn btn_more'>Xem Thêm</button>
                            </div>
                        </div>

                    </div>
                </div>

                <button id='btn_PreviousCarousel' class="carousel-control-prev" type="button" data-target="#myCarousel" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button id='btn_NextCarousel' class="carousel-control-next" type="button" data-target="#myCarousel" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>
        </div>

    );
}

export default Carousel;