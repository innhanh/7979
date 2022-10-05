import React, { useEffect } from 'react';
import 'animate.css';
import "./carousel.scss";
import { Link } from 'react-router-dom';
import BannerHome from './BannerHome';
import { useDispatch, useSelector } from 'react-redux';
import { ApiConfig } from '../../Config/API/apiConfig';
import { CarouselSuccess } from '../../Redux/Slice/ImageSlice';
import { Selector } from '../../Redux/Selector';



function Carousel(props) {
    
    const dispatch = useDispatch();

    useEffect(() => {
        const GetImageCarousel = async () => {
            await ApiConfig.Images.GetImageCarousel(4, dispatch, CarouselSuccess);
        };
        GetImageCarousel();
    }, []);

    const ListImageCarousel = useSelector(Selector.Images.SelectorImageCarousel);

    return (
        <div id='myCarousel' className='container'>
            <div id="innhanhCarousel" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item item1 active">
                        <BannerHome />
                        <div className='innhanh_text'>
                            <div className='carousel-link text-1'>
                                <Link to={"/in-ban-ve"}>In <span>Bản Vẽ</span></Link>
                            </div>

                            <div className='carousel-link text-2'>
                                <Link to={"/in-tui-giay"}>In <span className='text_orange'>Nhanh <span>{"&"}</span></span></Link>
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
                    {
                        ListImageCarousel?.map((carousel, index) => {
                            return (
                                <div key={index} className="carousel-item">
                                    <img className='w-100 img-fluid' src={carousel.url} alt={carousel.name} />
                                </div>

                            )
                        })
                    }

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