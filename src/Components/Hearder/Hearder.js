import React, { useEffect, useState } from 'react';
import "./hearder.scss";
import { Link } from "react-router-dom";
import logo from "../../Access/Image/logo.png";


const innhanh = [
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


function Hearder(props) {
    const [light, setLight] = useState(true);
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
            const hearderMain = window.document.getElementById("hearder_main");
            const btnScroll = window.document.getElementById("btn_scroll");

            if (scrollY > 173) {
                hearderTop.classList.add("hide");
                hearderMain.classList.add("scroll-to-top");
                btnScroll.classList.add("btnShow");
            } else {
                hearderTop.classList.remove("hide");
                hearderMain.classList.remove("scroll-to-top");
                btnScroll.classList.remove("btnShow");
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

    useEffect(() => {
        const ChangeTheme = () => {
            const body = document.getElementsByTagName("body")[0];
            switch (light) {
                case true:
                    body.classList.remove("dark");
                    break;

                default:
                    body.classList.add("dark");
                    break;
            }
        };
        ChangeTheme();
    }, [light])

    return (
        <div className='hearder'>

            <div className='hearder_Top' id='hearder_top'>
                <div className='container'>
                    <nav className='hearder_Top_nav navbar'>
                        <ul className='navbar-nav mr-auto hearder_Top_Left'>
                            <li className='nav-item'>
                                <Link className='nav-link' to={"/in-nhanh-gia-re"}>
                                    <i className="fa fa-angle-right"></i>
                                    Giới Thiệu
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to={"/thanh-toan"}>
                                    <i className="fa fa-angle-right"></i>
                                    Thanh Toán
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to={"/thoa-thuan-chinh-sach"}>
                                    <i className="fa fa-angle-right"></i>
                                    Thỏa Thuận {"&"} Chính Sách
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to={"/lien-he"}>
                                    <i className="fa fa-angle-right"></i>
                                    Liên Hệ
                                </Link>
                            </li>
                        </ul>

                        <ul className='navbar-nav ml-auto align-items-center'>
                            <li className='nav-item'>
                                <a href='tel:0888229079' className='nav-link hotline'>
                                    <i className="fa fa-phone-volume"></i>
                                    0888.229.079
                                </a>
                                {/* <Link className='nav-link hotline' to={""}>
                                    <i className="fa fa-phone-volume"></i>
                                    0888.229.079
                                </Link> */}
                            </li>
                            <li className='nav-item'>
                                <div className='btn_theme' onClick={() => setLight(!light)}>
                                    <p>{light ? "Light" : "Dark"}</p>
                                    <div className='cicrle'></div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className='hearder_Main' id='hearder_main'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg">

                        <Link to={"/"} className='navbar-brand logo'>
                            <img src={logo} className='img-fluid' alt='logo' />
                        </Link>

                        <button className="navbar-toggler btn_responsive" type="button" data-toggle="collapse" data-target="#hearder_Main_Nav" aria-controls="hearder_Main_Nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <i className="fa fa-align-justify"></i>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="hearder_Main_Nav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link to={"/in-ban-ve"} className='nav-link'>IN BẢN VẼ</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={"#"} role="button" className='nav-link dropdown-toggle' data-toggle="dropdown" aria-expanded="false">IN QUẢNG CÁO</Link>

                                    <div className="dropdown-menu">
                                        <Link to={"/in-qc-pp"} className='dropdown-item'>IN PP</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to={"/in-decal-kho-lon"} className='dropdown-item'>IN DECAL</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={"#"} role="button" className='nav-link dropdown-toggle' data-toggle="dropdown" aria-expanded="false">IN NHANH</Link>

                                    <div className="dropdown-menu">
                                        {
                                            innhanh.map((item, index) => {
                                                return (

                                                    <Link key={index} to={`/${item.linkTitle}`} className='dropdown-item'>{item.title}</Link>


                                                )
                                            })
                                        }

                                    </div>
                                </li>
                                <li className="nav-item active">
                                    <Link to={"/"} className='nav-link'>THIẾT KẾ - SÁNG TẠO</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to={"/"} className='nav-link'>SETUP ENVENT</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>

            <button className='backToTop innhanh_fade' id='btn_scroll' onClick={() => scrollToTop()}>
                <i class="fa fa-arrow-up"></i>
            </button>
        </div>

    );
}

export default Hearder;