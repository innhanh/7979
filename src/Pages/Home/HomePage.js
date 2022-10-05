import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../Components/Banner/Carousel';
import image1 from "../../Access/Image/image1.jpg"
import image2 from "../../Access/Image/image2.jpg"
import image3 from "../../Access/Image/image3.jpg";
import menuPrint1 from "../../Access/Image/menuPrint1.png";
import menuPrint2 from "../../Access/Image/menuPrint2.jpg";
import menuPrint3 from "../../Access/Image/menuPrint3.jpg";
import menuPrint4 from "../../Access/Image/menuPrint4.jpg";
import inbaothu from "../../Access/Image/ProducImage/in-bao-thu.jpg";
import innamecard from "../../Access/Image/ProducImage/in-name-card.jpg";
import intoroi from "../../Access/Image/ProducImage/in-to-roi.jpg";
import inmenu from "../../Access/Image/ProducImage/in-menu.png";
import incatalogue from "../../Access/Image/ProducImage/in-catalogue-dep.jpg";
import infolder from "../../Access/Image/ProducImage/in-foler.jpg";
import inhoadon from "../../Access/Image/ProducImage/in-hoa-don.jpg";
import inticker from "../../Access/Image/ProducImage/in-decal-ticker.jpg";

import "./homepage.scss";
import SlidePartners from '../../Components/SlidePartners/SlidePartners';

import NameCard from '../../Config/icon/NameCard';
import TickerIcon from '../../Config/icon/TickerIcon';
import EvenlopeIcon from '../../Config/icon/EvenlopeIcon';
import FlyerIcon from '../../Config/icon/FlyerIcon';
import SlideShow from '../../Components/SlideShow/SlideShow';
import MenuIcon from '../../Config/icon/MenuIcon';
import CatalogueIcon from '../../Config/icon/CatalogueIcon';
import FolderIcon from '../../Config/icon/FolderIcon';
import BillIcon from '../../Config/icon/BillIcon';

const ArrImage = [image1, image2, image3];

const ProducInNhanh = [
    {
        name: "IN BAO THƯ",
        infor:
        {
            size: "12 x 22, 17 x 23, 25 x 35",
            quantitative: "100gsm - 120 gsm",
            paper: "Fort",
            tag: "In Nhanh, In Offset"
        }
        ,
        icon: <EvenlopeIcon />,
        image: inbaothu
    },
    {
        name: "IN NAMECARD",
        infor:
        {
            size: "5.3 x 8.8, 5.3 x 9, 5.5 x 9.2",
            quantitative: "250gsm - 350 gsm",
            paper: "Fort, Couche, Mỹ Thuật",
            tag: "In Nhanh, In Offset"
        }
        ,
        icon: <NameCard />,
        image: innamecard
    },
    {
        name: "IN TỜ RƠI",
        infor:
        {
            size: "A5, A4, A3, SRA3, 13x19",
            quantitative: "120gsm - 350 gsm",
            paper: "Fort, Couche, Mỹ Thuật",
            tag: "In Nhanh, In Offset"
        }
        ,
        icon: <FlyerIcon />,
        image: intoroi
    },
    {
        name: "IN MENU",
        infor:
        {
            size: "A5, A4, A3, SRA3, 13x19",
            quantitative: "120gsm - 350 gsm",
            paper: "Couche, Mỹ Thuật, Giấy Nhựa",
            tag: "In Nhanh, In Offset"
        }
        ,
        icon: <MenuIcon />,
        image: inmenu
    },
    {
        name: "IN CATALOGUE",
        infor:
        {
            size: "A4 Đứng, A4 Ngang, A5",
            quantitative: "Bìa, Ruột 150 gsm",
            paper: "Fort, Couche, Mỹ Thuật",
            tag: "In Nhanh, In Offset, Bấm Kim, Keo Gáy"
        }
        ,
        icon: <CatalogueIcon />,
        image: incatalogue
    },
    {
        name: "IN FOLDER",
        infor:
        {
            size: "22x31x7",
            quantitative: "250 gsm - 300 gsm",
            paper: "Fort, Couche, Mỹ Thuật",
            tag: "Màng Bóng, Màng Mờ"
        }
        ,
        icon: <FolderIcon />,
        image: infolder
    },
    {
        name: "IN HÓA ĐƠN, BIỂU MẪU",
        infor:
        {
            size: "14x20, 20x28",
            quantitative: "52 gsm - 55 gsm",
            paper: "Fort, Carbonless",
            tag: "2, 3, 4 liên, bấm kim, keo gáy"
        }
        ,
        icon: <BillIcon />,
        image: inhoadon
    },
    {
        name: "IN TEM DECAL, STICKER",
        infor:
        {
            size: "Tùy Chọn",
            quantitative: "120 gsm",
            paper: "Decal giấy, Nhựa, Trong , Kraft",
            tag: "Cắt bế hình dạng theo yêu cầu"
        }
        ,
        icon: <TickerIcon />,
        image: inticker
    },
];

function HomePage(props) {

    return (
        <div className='innhanh_fade' id='homePage'>
            <Carousel />
            <div className='intro'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-7 col-md-12'>

                            <div className='innhanh_title'>
                                <h3>Trung Tâm <span>INNHANH79</span></h3>
                            </div>

                            <div className='intro_text'>
                                <p><Link to={"/"}>In Nhanh</Link> là một lĩnh vực đang rất phát triển tại Việt Nam, đặt biệt là các thành phố lớn, thành phố du lịch, khi sự hội nhập đòi hỏi sự chuyên nghiệp và nhanh chóng chính xác cao cùng với đời sống kinh tế ngày càng đi lên thì quan điểm về quảng cáo, khuyến mãi cũng không ngừng thay đổi. Trong đó, xu hướng chung là mọi Khách Hàng ngày càng khắt khe hơn với những ấn phẩm quảng cáo, những thông điệp mà bất cứ Doanh Nghiệp nào cũng cần phải có, để tiếp cận thị trường, tiếp cận Khách Hàng tiềm năng của mình. Là một Doanh Nghiệp chuyên ngành in ấn giấy, chúng tôi mong muốn được góp một phần công sức của mình vào sự thành công và phát triển của quý vị. </p>
                            </div>
                            <Link className='btn btn-innhanh' to={"/in-nhanh-gia-re"}>XEM THÊM<i class="fa fa-angle-double-right"></i></Link>

                        </div>
                        <div className='col-xl-5 col-md-12'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <SlideShow
                                            ArrImage={ArrImage}
                                        />

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='productions'>
                <div className='container'>
                    <div className='innhanh_title text-center mb-5'>
                        <h3>Sản Phẩm Của <span>INNHANH79</span></h3>
                    </div>
                    <div className='row'>
                        {
                            ProducInNhanh.map((item, index) => {
                                return (
                                    <div key={index} className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                                        <div className='productions_item'>
                                            <div className='produc_image'>
                                                <div className='productions_hearder'>
                                                    <div className='produc_icon'>
                                                        {item.icon}
                                                    </div>
                                                    <h4>{item.name}</h4>
                                                </div>
                                                <img src={item.image} className='img-fluid' alt={item.name} />
                                            </div>
                                            <div className='produc_infor'>
                                                <div className='produc_intro'>
                                                    <ul className='productions_main-link'>
                                                        <li>Kích Thước: {item.infor.size}</li>
                                                        <li>Định Lượng: {item.infor.quantitative}</li>
                                                        <li>Loại Giấy: {item.infor.paper}</li>
                                                        <li>{item.infor.tag}</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className='menuPrints'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                            <div className='menuPrints_item'>
                                <h4 className='menuPrints_title'><span>In</span> NHANH</h4>
                                <div className='menuPrints_image'>
                                    <img src={menuPrint1} className='img-fluid' alt='imagemenu1' />
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                            <div className='menuPrints_item'>
                                <h4 className='menuPrints_title'><span>In</span> CATALOGUE</h4>
                                <div className='menuPrints_image'>
                                    <img src={menuPrint2} className='img-fluid' alt='imagemenu2' />
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                            <div className='menuPrints_item'>
                                <h4 className='menuPrints_title'><span>In</span> OFFSET</h4>
                                <div className='menuPrints_image'>
                                    <img src={menuPrint3} className='img-fluid' alt='imagemenu3' />
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                            <div className='menuPrints_item'>
                                <h4 className='menuPrints_title'><span>In</span> TỜ RƠI</h4>
                                <div className='menuPrints_image'>
                                    <img src={menuPrint4} className='img-fluid' alt='imagemenu4' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='innhanh_title text-center mt-3'>
                <h3>Đối Tác <span>INNHANH79</span></h3>
            </div>
            <SlidePartners />


        </div>
    );
}

export default HomePage;