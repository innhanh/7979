import React, { useEffect, useState } from 'react';
import "./loadingPage.scss";
import logo from "../../Access/Image/logo.png"

function LoadingPage(props) {

    return (
        <div id='loadingPage' className='innhanh_fade'>
            <div className='loading_item'>

                <img className='' src={logo} alt='logo1' />

            </div>
        </div>
    );
}

export default LoadingPage;