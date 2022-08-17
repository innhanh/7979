import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApiConfig } from '../../../../../Config/API/apiConfig';
import { Selector } from '../../../../../Redux/Selector';
import { imageCarouselSuccess } from '../../../../../Redux/Slice/AdminSlice';

import "./dbCarousel.scss";

function DbCarousel(props) {
    const dispatch = useDispatch();

    const [photo, setPhoto] = useState("");

    useEffect(() => {
        const getImageCarousel = async () => {
            await ApiConfig.Admin.Image.GetListImage(dispatch, imageCarouselSuccess, "carousel");

        };
        getImageCarousel();
    }, []);

    const imageCarousel = useSelector(Selector.Admin.SelectorImageCarousel);

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
                        {
                            imageCarousel.map((carouse, index) => {
                                return (
                                    <div key={index} className='col-6'>
                                        <div className='dbCarousel_item'>
                                            <div className='dbCarousel_item_title'>
                                                <div className='dbCarousel_info-left d-flex'>
                                                    <p className='type mr-2'>Type: {carouse.type}</p>
                                                    <p className='name ml-2'>Name: {carouse.name}</p>
                                                </div>
                                            </div>
                                            <img src={carouse.url} alt={carouse.name} className='img-fluid' />
                                            <div className='overlay'></div>
                                            <div className='dbCarousel_item_controll'>
                                                <div class="btn-group" role="group">
                                                    {/* <input onChange={(e) => setPhoto(e.target.files[0])} type="file" className="btn btn-primary w-100" /> */}
                                                    <button onClick={() => handleChangImage(carouse.id)} type="button" class="btn btn-primary">Change</button>
                                                    <button onClick={() => handleDeleteImage()} type="button" class="btn btn-danger">Delete</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='row'>
                        <div class="btn-group mt-3" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-secondary">Thêm</button>
                            <button type="button" class="btn btn-secondary">Xóa</button>
                            <button type="button" class="btn btn-secondary">Sữa</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DbCarousel;