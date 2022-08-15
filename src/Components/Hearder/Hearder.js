import React, { useEffect, useState } from 'react';
import "./hearder.scss";
import { Link } from "react-router-dom";
import logo from "../../Access/Image/logo.png";

const listMenu = [
    {
        name: "IN BẢN VẼ",
        link: "in-ban-ve",
        menu: []
    },
    {
        name: "IN QUẢNG CÁO",
        menu: [
            { title: "IN PP", linkTitle: "in-qc-pp" },
            { title: "IN DECAL KHỔ LỚN", linkTitle: "in-decal-kho-lon" },          
        ]
    },
    {
        name: "IN NHANH",
        menu: [
            { title: "IN TÚI GIẤY", linkTitle: "in-tui-giay" },
            { title: "IN FOLDER", linkTitle: "in-folder" },
            { title: "IN NAME CARD", linkTitle: "in-namecard" },
            { title: "IN CATALOGUE", linkTitle: "in-catalogue" },
            { title: "IN PHOTOBOOK", linkTitle: "in-photobook" },
            { title: "IN BAO THƯ", linkTitle: "in-bao-thu" },
            { title: "IN MENU", linkTitle: "in-menu" },
            { title: "IN GIẤY TIÊU ĐỀ", linkTitle: "in-giay-tieu-de" },
            { title: "IN HÓA ĐƠN", linkTitle: "in-hoa-don" },
            { title: "IN TỜ RƠI", linkTitle: "in-to-roi" },
            { title: "IN OFFSET", linkTitle: "in-offset" },
            { title: "IN NOTEBOOK", linkTitle: "in-notebook" },
            { title: "IN BỘ NHẬN DIỆN THƯƠNG HIỆU THEO YC", linkTitle: "in-nhan-dang-thuong-hieu" },
        ]
    },
    {
        name: "TEM NHÃN DECAL",
        link: "in-tem-nhan-decal",
        menu: []
    },
    {
        name: "THIẾT KẾ - SÁNG TẠO",
        link: "thiet-ke-sang-tao",
        menu: []
    },
]

function Hearder(props) {
    const [menu, setMenu] = useState("");
    const [scrollY, setScrollY] = useState();    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const ScrollBar = () => {
            const hearderTop = window.document.getElementById("hearder_top");
            const hearderCenter = window.document.getElementById("hearder_center");
            const hearderBottom = window.document.getElementById("hearder_bottom");
            const buttonScrollToTop = window.document.getElementById("scrollToTop");

            if (scrollY > 173) {
                hearderTop.classList.add("hide");
                hearderCenter.classList.add("hide");
                hearderBottom.classList.add("scr_bar");
              
                buttonScrollToTop.classList.remove("hide");
                buttonScrollToTop.classList.add("show");
            } else {
                hearderTop.classList.remove("hide");
                hearderCenter.classList.remove("hide");
                hearderBottom.classList.remove("scr_bar");
              
                buttonScrollToTop.classList.remove("show");
                buttonScrollToTop.classList.add("hide");
            }
        };

        ScrollBar();
    }, [scrollY]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className='hearder'>

            <div className='hearder-top' id='hearder_top'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light">

                        <div className="collapse navbar-collapse" id="nav-top">

                            <div className='hearder-left mr-auto'>
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link to={"/in-nhanh-gia-re"} className='nav-link'><i className="fa fa-angle-right"></i>GIỚI THIỆU</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/thanh-toan"} className='nav-link'><i className="fa fa-angle-right"></i>THANH TOÁN</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/thoa-thuan-chinh-sach"} className='nav-link'><i className="fa fa-angle-right"></i>THỎA THUẬN & CHÍNH SÁCH</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/lien-he"} className='nav-link'><i className="fa fa-angle-right"></i>LIÊN HỆ</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='hearder-right ml-auto'>
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a href='https://www.facebook.com/InNhanh79' target={"_blank"} rel="noopener noreferrer" className='nav-link'><i className="facebook fab fa-facebook-f"></i></a>
                                        {/* <Link to={"#https://www.facebook.com/InNhanh79"} target={"_blank"} className='nav-link'><i className="facebook fab fa-facebook-f"></i></Link> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/"} className='nav-link'><i className="youtube fab fa-youtube"></i></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/"} className='nav-link'><i className="linkin fab fa-linkedin-in"></i></Link>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </nav>

                </div>
            </div>

            <div className='hearder-center' id='hearder_center'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light">

                        <div className="collapse navbar-collapse  d-flex justify-content-between align-items-center" id="nav-center">

                            <div className='timeworlk d-flex align-items-center'>
                                <i className='far fa-clock mr-3'></i>
                                <div className='time_worlk_item'>
                                    <p className='mb-0 pb-0'>Làm việc từ Thứ 2 - Thứ 7 <br />
                                        Sáng: 08:00 - 12:00<br />
                                        Chiều: 14:00 - 18:00</p>
                                </div>
                            </div>

                            <div className='text-center logo'>
                                <img src={logo} className='img-fluid' alt='logo' />
                            </div>

                            <div className='hotline d-flex justify-content-start align-items-center'>
                                <p>Hotline: 0943 83 07 07</p>
                                <i className='fab fa-whatsapp'></i>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>

            <div className='hearder-bottom border-top' id='hearder_bottom'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light pt-0">

                        <Link to={"/"} className='navbar-brand d-block d-lg-none'>Navbar w/ text</Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-align-justify"></i>
                        </button>

                        <div className="collapse navbar-collapse justify-content-center" id="navbarText">
                            <ul className="navbar-nav">
                                {
                                    listMenu.map((item, index) => {
                                        return (
                                            <li key={index} className="nav-item border-right" onMouseEnter={() => setMenu(item.name)} onMouseLeave={() => setMenu("")}>
                                                <Link to={item.menu.length > 0 ? `#` : `/${item.link}`} className="nav-link" >
                                                    {item.name}
                                                    {item.menu.length > 0 &&
                                                        <i className="fa fa-angle-down ml-2"></i>
                                                    }
                                                </Link>
                                                {
                                                    item.menu.length > 0 &&
                                                    <div className={menu === item.name ? "show listMenu" : "listMenu hide"}>
                                                        {
                                                            item.menu.map((title, j) => {
                                                                return (
                                                                    <Link key={j} to={`/${title.linkTitle}`} className='dropdown-item'>{title.title}</Link>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                }
                                            </li>


                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>
            <button id='scrollToTop' onClick={() => scrollToTop()} className='ScrollToTop'><i class="fa fa-angle-up"></i></button>

        </div>

    );
}

export default Hearder;