import React, { useState } from 'react';
import "./slideShow.scss";

function SlideShow({ ArrImage }) {
    const [show, setShow] = useState(ArrImage[0]);

    return (
        <div id='slide_show'>
            <div className='innhanh_90'>
                <div className='row'>
                    <div className='col-12'>
                        <img className='img-fluid image_main' src={show} alt={show} />
                    </div>
                </div>
                <div className='row'>
                    <div className='show_items d-flex justify-content-center align-items-center'>
                        {
                            ArrImage.map((item, index) => {
                                return (
                                    <div key={index} className='show_item' onClick={() => setShow(item)}>
                                        <image src={item} className={`item_${index} item_show`} alt={`item_${index}`} />
                                    </div>
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