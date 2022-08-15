import React from 'react';
import { Link } from 'react-router-dom';
import "./intro.scss";

import banner_intro from "../../Access/Image/banner_intro.png";
import banner_intro2 from "../../Access/Image/banner_intro2.jpg";
import Slide_Partners from '../../Components/Slide_Partners/Slide_Partners';
import BackToHome from '../../Components/BackToHome/BackToHome';

function IntroPage(props) {

    return (
        <div className='introPage innhanh_fade'>
          <BackToHome
          currentPage={"Giới Thiệu"}
          />
            <div className='intro_banner container'>
                <img className='img-fluid w-100 mt-3 mb-5' src={banner_intro} />
            </div>

            <div className='intro_About'>
                <div className='container'>
                    <div className='innhanh_title'>
                        <h3 className='mb-3'>Về <span>CHÚNG TÔI</span></h3>
                    </div>
                    <div className='intro_About-container'>
                        <div className='intro_About-content d-flex justify-content-between'>
                            <div className='intro_About_item mr-4'>
                                <p>
                                    Công ty Cổ Phần  Dịch Vụ <Link to={"/"}>In Nhanh 79</Link><br />
                                    <br />
                                    In nhanh là một lĩnh vực đang rất phát triển tại Việt Nam, đặt biệt là các thành phố lớn, thành phố du lịch, khi sự hội nhập đòi hỏi sự chuyên nghiệp và nhanh chóng chính xác cao cùng với đời sống kinh tế ngày càng đi lên thì quan điểm về quảng cáo, khuyến mãi cũng không ngừng thay đổi.<br />
                                    <br />
                                    Trong đó, xu hướng chung là mọi Khách Hàng ngày càng khắt khe hơn với những ấn phẩm quảng cáo, những thông điệp mà bất cứ Doanh Nghiệp nào cũng cần phải có, để tiếp cận thị trường, tiếp cận Khách Hàng tiềm năng của mình.
                                    <br />
                                    <br />
                                    Là một Doanh Nghiệp chuyên ngành in ấn giấy, chúng tôi mong muốn được góp một phần công sức của mình vào sự thành công và phát triển của quý vị.
                                </p>
                                <ul>
                                    <li><Link to={"/"}>InNhanh79</Link> cung cấp các dịch vụ in ấn sáng tạo chuyên nghiệp tại Việt Nam.</li>
                                    <li><Link to={"/"}>InNhanh79</Link> giúp khách hàng đưa ra những sản phẩm hình ảnh về thương hiệu nhất quán từ màu sắc đến chất lượng thành phẩm.</li>
                                    <li><Link to={"/"}>InNhanh79</Link> sử dụng các công nghệ in ấn và hệ thống máy móc tiên tiến nhất tại Việt Nam để cho ra sản phẩm chất lượng cao.</li>
                                </ul>
                            </div>
                            <div className='intro_About_item ml-4'>
                                <p>TẦM NHÌN</p>
                                <p>
                                    In nhanh, in kỹ thuật số là một xu hướng mới, hiện đại, đáp ứng nhu cầu , sự biến đổi đa dạng và năng động của ngành in nói riêng và xã hội nói chung. In nhanh, in Kỹ thuật số không thay in offset, mà chúng tôi đem lại giá trị cao hơn, tốt hơn và nhanh hơn cho quý khách của chúng tôi.
                                    <br />
                                    <br />
                                    Dữ liệu thay đổi, nội dung đa dạng là thế mạnh của in nhanh, in kỹ thuật số, và là định hướng mà in nhanh Doanh Nghiệp Việt ( Trung Tâm In Nhanh ) theo đuổi hơn 10 năm qua.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className='intro_Qualification mb-5'>
                <div className='container'>
                    <div className='innhanh_title'>
                        <h3 className='mb-3'>Năng Lực <span>SẢN XUẤT</span></h3>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <img className='img-fluid w-100' src={banner_intro2} />
                        </div>
                        <div className='col-8'>
                            <div className=''>
                                <p>HỆ THÔNG MÁY IN NHANH</p>
                                <div>
                                    <ul>
                                        <li className='mb-3'>Hệ thống máy in chính hãng của Nhật – Dòng máy Konica Miltona hiện đại đáp ứng được toàn bộ yêu cầu của khách hàng.</li>
                                        <li className='mb-3'> Với hệ thống thành phẩm hiện đại :máy cắt card tự động, máy cán màng, máy khoan, máy bấm kim, máy vào bìa keo gáy…Bên cạnh đó chúng tôi trang bị thêm máy ép kim. Máy bế hộp, bao thư, máy bế cắt tem nhãn. Máy dán tự động. Máy bế bao bì tự động…</li>
                                        <li className='mb-3'> Với mong muốn đem đến sản phẩm tốt nhất cho khách hàng, chúng tôi đang từng bước hoàn thiện và nâng cấp máy móc cũng như con người.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='intro_Partner'>
                <div className='container'>
                    <div className='innhanh_title text-center mb-5'>
                        <h3>Đối Tác <span>INNHANH79</span></h3>
                    </div>
                    <div className='innhanh_intro'>
                        <p>Khách hàng của <Link to={"/"}>InNhanh79</Link> là các công ty, tập đoàn từ Nhật Bản, Hàn Quốc, Thái Lan, Singapore, Việt Nam… Các cá nhân, các nhóm kinh doanh từ online, shop nhỏ cho đến người tiêu dùng cuối. Với mong muốn thông qua marketing online chúng tôi kỳ vọng mở rộng đối tượng khách hàng dùng cuối ra khắp các tỉnh thành Việt Nam, và các đối tác mới trong khu vực.</p>
                    </div>
                    <div className='intro_Partner_main'>
                        <Slide_Partners />
                    </div>
                </div>
            </div>
            <div className='intro_Commit'></div>
        </div>
    );
}

export default IntroPage;