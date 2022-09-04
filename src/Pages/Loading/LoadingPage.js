import React from 'react';
import "./loadingPage.scss";
import logo from "../../Access/Image/logo.png"

function LoadingPage(props) {
    return (
        <div id='loadingPage' className='innhanh_fade'>
            <div className='loading_item'>
                <h1 className='site-title'>InNhanh79</h1>
                <img className='' src={logo} alt='logo1' />
                <div>
                    <div class="spinner-grow text-light mr-1 ml-1" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-light mr-1 ml-1" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-light mr-1 ml-1" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoadingPage;