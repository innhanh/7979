import React from 'react';

import partener1 from "../../Access/Image/partents/bca.png";
import partener2 from "../../Access/Image/partents/CMN.png";
import partener3 from "../../Access/Image/partents/hnam.png";
import partener4 from "../../Access/Image/partents/hp.png";
import partener5 from "../../Access/Image/partents/nagecco.png";
import partener6 from "../../Access/Image/partents/thecliff.png";
import partener7 from "../../Access/Image/partents/thefine.jpg";
import partener8 from "../../Access/Image/partents/vinhome.png";
import "./slide_Partners.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlidePartners(props) {

    const settingsPartners = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <div className='partners'>
            <div className='container'>
                <Slider {...settingsPartners}>
                    <div className='partners_item'>
                        <img className='img-fluid' src={partener1} alt='partener1' />
                    </div>
                    <div className='partners_item'>
                        <img className='img-fluid' src={partener2} alt='partener2' />
                    </div>
                    <div className='partners_item'>
                        <img className='img-fluid' src={partener3} alt='partener3' />
                    </div>
                    <div className='partners_item'>
                        <img className='img-fluid' src={partener4} alt='partener4' />
                    </div>
                    <div className='partners_item'>
                        <img className='img-fluid' src={partener5} alt='partener5' />
                    </div>
                    <div className='partners_item'>
                        <img className='img-fluid' src={partener6} alt='partener6' />
                    </div>
                    <div className='partners_item'>
                        <img className='img-fluid' src={partener7} alt='partener7' />
                    </div>
                    <div className='partners_item'>
                        <img className='img-fluid' src={partener8} alt='partener8' />
                    </div>
                </Slider>
            </div>

        </div>
    );
}

export default SlidePartners;