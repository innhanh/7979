import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import carousel1 from "../../../../../Access/Image/carousel/carousel1.jpg";
import { ApiConfig } from '../../../../../Config/API/apiConfig';
import { imageCarouselSuccess } from '../../../../../Redux/Slice/AdminSlice';

import "./dbCarousel.scss";

function DbCarousel(props) {
    const dispath = useDispatch();

    const [photo, setPhoto] = useState("");

    useEffect(() => {
        const getImageCarousel = async () => {
            await ApiConfig.Admin.Image.GetListImage("carousel", dispath, imageCarouselSuccess);

        };
        getImageCarousel();
    }, [])

    const handleChangImage = () => {

    };
    const handleDeleteImage = () => {

    };
    const handlePostImage = async () => {
        await ApiConfig.Admin.Image.UploadImage("carousel", "carouse1", photo)
    };

    return (
        <div className='dbCarousel innhanh_fade'>
            <div className='dbCarousel_container'>
                <div className='dbCarousel_content'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='dbCarousel_item'>
                                <img src={carousel1} alt='carousel1' className='img-fluid' />
                                <div className='overlay'></div>
                                <div className='dbCarousel_info d-flex'>
                                    <div className='dbCarousel_info-left'>
                                        <p className='status'>Status</p>
                                        <p className='url'>http://12312323</p>
                                    </div>
                                    <div className='dbCarousel_info-right'>
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <input onChange={(e) => setPhoto(e.target.files[0])} type="file" className="btn btn-primary" />
                                            <button onClick={() => handlePostImage()} type="button" class="btn btn-primary">Change</button>
                                            <button onClick={() => handleDeleteImage()} type="button" class="btn btn-danger">Delete</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DbCarousel;