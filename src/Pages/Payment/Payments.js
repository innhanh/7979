import React from 'react';
import BackToHome from '../../Components/BackToHome/BackToHome';
import "./payments.scss";

import payments from "../../Access/Image/payment.jpg";

function Payments(props) {
    return (
        <div className='payments innhanh_fade'>
            <BackToHome
                currentPage={"Phương Thức Thanh Toán"}
            />
            <div className='container'>
                <div className='payments-content'>
                    <div className='innhanh_title'>
                        <h3 className='mb-3 mt-5'>Phương Thức <span>THANH TOÁN</span></h3>
                    </div>
                    <div className='payments_item'>
                        <p>Hiện nay, công ty chúng tôi hỗ trợ các hình thức thanh toán sau:</p>
                        <img className='w-100 img-fluid mt-4 mb-4' src={payments}  alt='payments'/>
                        <div className='payment_list mb-4'>
                            <div className='row'>
                                <div className='col-6'>
                                    <div class="list-group">

                                        <div class="list-group-item list-group-item-action active">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Thanh toán bằng tiền mặt</h5>
                                            </div>
                                        </div>

                                        <div class="list-group-item list-group-item-action">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">INNHANH79</h5>
                                            </div>
                                            <p class="mb-1">Khách hàng vui lòng đến trực tiếp tại văn phòng kinh doanh của chúng tôi</p>
                                            <p class="mb-1">Địa chỉ: 43D/10 Hồ Văn Huê - P.9 - Q.Phú Nhuận - TP.HCM.</p>
                                           
                                        </div>
                                    </div>
                                </div>

                                <div className='col-6'>
                                    <div class="list-group">

                                        <div class="list-group-item list-group-item-action active">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Thanh toán bằng chuyển khoản</h5>
                                            </div>
                                        </div>

                                        <div class="list-group-item list-group-item-action">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Thanh toán qua Công Ty</h5>
                                            </div>
                                            <p class="mb-1">Ngân hàng Á Châu – ACB – CN : Hồ Chí Minh</p>
                                            <p class="mb-1">Tên TK: Công Ty Cổ Phần Dịch Vụ In Nhanh 79</p>
                                            <p class="mb-1">Số TK: 2363.522.49</p>
                                        </div>

                                        <div class="list-group-item list-group-item-action">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Thanh toán cá nhân</h5>
                                            </div>
                                            <p class="mb-1">Tên TK: Phạm Lê Thanh Thủy</p>
                                            <p class="mb-1">Số TK: 072.1000.539.581 – Ngân Hàng VCB – CN Kỳ Đồng</p>
                                            <p class="mb-1">Số TK: 0918.19.66.99 – Ngân Hàng Quân Đội – MB Bank – CN Tân Sơn Nhất</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Payments;