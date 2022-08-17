import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiConfig } from '../../../Config/API/apiConfig';
import "./dashboard.scss";
import DbCarousel from './ViewDashboard/dbCarousel/DbCarousel';
import DbInBanVe from './ViewDashboard/dbInBanVe/DbInBanVe';
import DbInNhanh from './ViewDashboard/dbInNhanh/DbInNhanh';
import DbInQuangCao from './ViewDashboard/dbInQuangCao/DbInQuangCao';
import DbMain from './ViewDashboard/dbMain/DbMain';

import avatar from "../../../Access/Image/Avatar/avatar.png";
import { useSelector } from 'react-redux';
import { Selector } from '../../../Redux/Selector';
import { MenuDashboard } from '../../../Redux/Store';

function Dashboard(props) {
    const [viewDashboard, setViewDashboard] = useState("");
    const [menuShow, setMenuShow] = useState("");

    const admin = useSelector(Selector.Admin.SelectorAdmin);


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

                <div className='bar'>
                    <div className='bar_user'>
                        <div class="avatar">
                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-circle"
                                alt="Avatar" />
                            <h5 class="mb-2 mt-2"><strong>Huỳnh Sang</strong></h5>
                            <p class="text-muted">Web designer <span class="badge bg-primary">PRO</span></p>
                        </div>
                    </div>

                    {
                        MenuDashboard.map((item, index) => {
                            return (
                                <>
                                    <div key={index} className='bar_item' onClick={() => setMenuShow(`bar_${index}`)}>
                                        <span>
                                            <i class="fa fa-angle-right"></i>
                                            {item.menu}
                                        </span>
                                        <i class={item.icon}></i>
                                    </div>

                                    <div id={`bar_${index}`} className={menuShow === `bar_${index}` ? "bar_children" : "bar_children hide"}>
                                        {
                                            item.item.map((menu, j) => {
                                                return (
                                                    <div className='bar_children_content' key={j}>
                                                        <div className='bar_children_item'>
                                                            <button>{menu}</button>
                                                            <i class="fa fa-angle-right"></i>
                                                        </div>
                                                    </div>
                                                )

                                            })
                                        }
                                    </div>
                                </>

                            )
                        })
                    }

                </div>

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