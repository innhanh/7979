import React, { useState } from 'react';
import "./slideShow.scss";

function SlideShow({ ArrImage }) {
    const [show, setShow] = useState(ArrImage[0]);

    return (
        <div id='slide_show'>
            <div className='innhanh_90'>
                <div className='slide_banner'>
                    <div className='banner_Show'>
                        <img src={show} alt={show} />
                    </div>
                    <div className='banner_item d-flex align-items-center'>
                        {
                            ArrImage.map((item, index) => {
                                return (
                                    <img key={index} className='w-100 img-fluid' src={item} alt={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideShow;