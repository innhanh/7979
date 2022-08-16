import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiConfig } from '../../../Config/API/apiConfig';
import "./dashboard.scss";
import DbCarousel from './ViewDashboard/dbCarousel/DbCarousel';
import DbInBanVe from './ViewDashboard/dbInBanVe/DbInBanVe';
import DbInNhanh from './ViewDashboard/dbInNhanh/DbInNhanh';
import DbInQuangCao from './ViewDashboard/dbInQuangCao/DbInQuangCao';
import DbMain from './ViewDashboard/dbMain/DbMain';

function Dashboard(props) {
    const [viewDashboard, setViewDashboard] = useState("");

    const handleShow = (id) => {
        const element = window.document.getElementById(id);
        element.classList.toggle("hide");
    };

    const handleShowImageCarousel = async (type) => {
        await ApiConfig.Admin.Image.GetListImage(type);
        setViewDashboard(type);
    }
    return (
        <div className='dashboard innhanh_fade'>

            <div className='d-flex'>
                <nav className='navbar ml-0'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to={"/admin/dashboard"}>
                                <span><i class="fa fa-angle-right"></i></span>
                                <span>Dashboard <i class="fa fa-home"></i></span>
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link className='nav-link' to={"/admin/dashboard"} onClick={() => handleShow("item1")}>
                                <span><i class="fa fa-angle-right"></i></span>
                                <span>Kho Ảnh<i class="fa fa-images"></i></span>
                            </Link>

                            <div className='item hide' id='item1'>
                                <button onClick={() => handleShowImageCarousel("carousel")} className='w-100 btn btn-primary d-block'>Carousel<i class="fa fa-angle-right"></i></button>
                                <button onClick={() => handleShowImageCarousel("innhanh")} className='w-100 btn btn-primary d-block'>In Nhanh<i class="fa fa-angle-right"></i></button>
                                <button onClick={() => handleShowImageCarousel("inquangcao")} className='w-100 btn btn-primary d-block'>In Quảng Cáo<i class="fa fa-angle-right"></i></button>
                                <button onClick={() => handleShowImageCarousel("inbanve")} className='w-100 btn btn-primary d-block'>In Bản Vẽ<i class="fa fa-angle-right"></i></button>
                            </div>
                        </li>

                        <li className='nav-item'>
                            <Link className='nav-link' to={"/admin/dashboard"} onClick={() => handleShow("item2")}>
                                <span><i class="fa fa-angle-right"></i></span>
                                <span>Bài Đăng<i class="fa fa-images"></i></span>
                            </Link>

                            <div className='item hide' id='item2'>
                                <button className='btn btn-primary d-block'>In Nhanh<i class="fa fa-angle-right"></i></button>
                                <button className='btn btn-primary d-block'>In Quảng Cáo<i class="fa fa-angle-right"></i></button>
                                <button className='btn btn-primary d-block'>In Bản Vẽ<i class="fa fa-angle-right"></i></button>
                            </div>
                        </li>

                    </ul>
                </nav>
                <div className='dashboard-main mr-0'>
                    <div className='container'>
                        {
                            viewDashboard === "carousel" ? <DbCarousel /> : viewDashboard === "inbanve" ? <DbInBanVe /> : viewDashboard === "innhanh" ? <DbInNhanh /> : viewDashboard === "inquangcao" ? <DbInQuangCao /> : <DbMain />
                        }
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Dashboard;