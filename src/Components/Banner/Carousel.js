import React from 'react';
import 'animate.css';
import "./carousel.scss";

import slideback from "../../Access/Image/BannerHome/slider-back-1.png";
import slidetop from "../../Access/Image/BannerHome/slider-top-1.png";

function Carousel(props) {
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
                            <div className='slide_text'>
                                <h1>In<span>NHANH<span className='in79'>79</span></span></h1>
                            </div>
                            <div className='slide_text_left'>
                                <p>In BẢN VẼ <br /><span>In NHANH</span> & <br />In QUẢNG CÁO</p>

                                <div className='slide_text_left_over'>
                                    <p className='over_before'></p>
                                    <p className='over_author'>Printography 2017</p>
                                </div>
                            </div>
                            <img src={slidetop} class="slidetop img-fluid w-100" alt="slideTop" />
                            <img src={slideback} class="slideback img-fluid w-100" alt="slideBack" />
                        </div>

                    </div>
                    <div class="carousel-item">
                        <div className='item_1 container'>
                            <div className='slide_text'>
                                <h1>In<span>GIÁ<span className='in79'>TỐT</span></span></h1>
                            </div>
                            <div className='slide_text_left'>
                                <p>In BẢN VẼ <br /><span>In KỸ THUẬT SỐ</span> & <br />In QUẢNG CÁO</p>

                                <div className='slide_text_left_over'>
                                    <p className='over_before'></p>
                                    <p className='over_author'>Printography 2017</p>
                                </div>
                            </div>
                            <img src={slidetop} class="slidetop" alt="slideTop" />
                            <img src={slideback} class="slideback" alt="slideBack" />
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