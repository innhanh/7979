import React from 'react';
import BackToHome from '../../Components/BackToHome/BackToHome';
import contact from "../../Access/Image/contact.jpg"
import { Link } from 'react-router-dom';
import "./contact.scss";

function Contact(props) {
    return (
        <div className='Contact innhanh_fade'>
            <BackToHome
                currentPage={"Liên Hệ"}
            />
            <div className='container'>
                <div className='contact-content'>
                    <div className='innhanh_title'>
                        <h3 className='mb-3 mt-3'>Liên Hệ <span>INNHANH79</span></h3>
                    </div>
                    <div className='contact_item'>
                        <img className='w-100 img-fluid' src={contact} alt='contact'/>
                        <div >
                            <p>Trong trường hợp số lượng trang in của bạn lớn hơn báo giá hiện có của <Link to={"/"}>Innhanh79.vn</Link>, sản phẩm in ấn có yêu cầu đặc biệt: in có UV định hình, UV toàn phần, in ấn bế theo shape ( bế cắt theo hình )…. <br />Hãy liên hệ với chúng tôi qua số Hotline : 0888.229.079 – 0918.196.699 để được giải đáp nhanh chóng nhất.</p>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                <div>
                                    <h4 className='text-bold text-color-green'>InNhanh79</h4>
                                    <p><span className='text-bold'>Địa chỉ</span>: 43D/10 Hồ Văn Huê P.9 Q. Phú Nhuận – Tp.HCM</p>
                                    <p><span className='text-bold'>Hotline</span>: 0888.229.079 – 0918.196.699</p>
                                    <p><span className='text-bold'>Email</span>: innhanh7979@gmail.com</p>
                                    <p><span className='text-bold'>Zalo</span>: 0888.229.079 ( InNhanh )</p>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div>
                                    <h4 className='text-bold text-color-green'>InGiaTot</h4>
                                    <p><span className='text-bold'>Địa chỉ</span>: 29bis Nguyễn Đình Chiểu, P.Đa Kao, Q.Phú Nhuận, Tp.HCM</p>
                                    <p><span className='text-bold'>Hotline</span>: (028)6674.5666 – 0938.006.969</p>
                                    <p><span className='text-bold'>Email</span>: innhanh7979@gmail.com</p>
                                    <p><span className='text-bold'>Zalo</span>: 0888.229.079 ( InNhanh )</p>
                                </div>
                            </div>
                        </div>

                        <div className='contact_form mb-5 mt-3'>
                            <div className='innhanh_title'>
                                <h3 className='mb-3 mt-5'>Sản Phẩm <span>BÁO GIÁ</span></h3>
                            </div>
                            
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Options</label>
                                </div>
                                <select class="custom-select" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;