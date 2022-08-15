import React from 'react';
import { Link } from 'react-router-dom';
import "./backToHome.scss"

function BackToHome({ currentPage }) {
    return (
        <div className='backToHome bg-black'>
            <div className='container'>
                <div className='backToHome-content'>
                    <Link to={"/"}>
                        <i class="fa fa-home home"></i>
                        <i class="fa fa-angle-double-right right"></i>
                        {currentPage}
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default BackToHome;