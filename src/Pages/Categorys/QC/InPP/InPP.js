import React from 'react';
import BackToHome from '../../../../Components/BackToHome/BackToHome';

import pp1 from "../../../../Access/Image/QC/pp1.jpg";
import pp2 from "../../../../Access/Image/QC/pp2.jpg";

import fomex from "../../../../Access/Image/QC/fomex.jpg";
import { Link } from 'react-router-dom';

import "./inPP.scss"

function InPP(props) {
    return (
        <div className='inQCPP innhanh_fade'>
            <BackToHome
                currentPage={"In PP"}
            />

            <div className='inQCPP_hearder'>
                <div className='container'>
                    <div className='innhanh_title'>
                        <h3 className='mb-3 mt-5'>In PP tại <span>INNHANH79</span></h3>
                    </div>
                </div>

            </div>

            <div className='inQCPP_body'>
                <div className='container'>

                    <div className='inQCPP_body_item'>
                        <p>In pp giá rẻ ✅ In pp trong nhà ✅ In pp ngoài trời ✅ In pp cán bóng, cán mờ tại xưởng in <Link className='text-bold' to={"/"}>INNHANH79</Link>, giá chỉ 60.000đ/m2, bán kèm chân standee chữ X, chân standee cuốn ⭐ Hỗ trợ giao tận nhà TPHCM nếu đặt in số lượng nhiểu ⭐ Hỗ trợ giao ra nhà xe chành đi tỉnh.
                            <br /><br />
                            Các dịch vụ in pp phổ biến mà <Link className='text-bold' to={"/"}>INNHANH79</Link> đang cung cấp:</p>
                        <ul>
                            <li >PP trong nhà</li>
                            <li >PP ngoài trời</li>
                            <li >PP có keo</li>
                            <li >PP không keo</li>
                            <li >In pp standee chữ X, standee cuốn</li>
                            <li>In pp bồi formex làm bảng trao giải thưởng, bảng cưới, bảng kế hoạch</li>
                        </ul>
                    </div>

                    <div className='inQCPP_body_item'>
                        <h4>In pp là gì ?</h4>
                        <p><span className='text-bold'>PP</span> là viết tắt của <span className='text-bold'>Polypropylen</span> trong tiếng Anh, đây là loại giấy in thường dùng trong nghành in kỹ thuật số. Chúng được tạo thành từ phản ứng trùng hợp Propylen. PP có bề mặt màu trắng, có khả năng đàn hồi tốt và chất lượng mực in đẹp. Sản phẩm in trên chất liệu pp hiện nay thường dùng làm poster quảng cáo, in standee quảng cáo.</p>
                        <div className='produc_image'>
                            <img className='img-fluid' src={pp1} alt='pp1' />
                            <span className='d-block'>Máy in pp khổ lớn đang hoạt động</span>
                        </div>
                        <p>Khác với tiền Việt Nam Đồng đang lưu hành là polymer, pp được làm trên dạng khác của phản ứng trùng hợp polymer. Với chất lượng in tốt cùng mức giá phải chăng, in pp giá rẻ tại HCM hiện đang là phương pháp quảng cáo được nhiều khách hàng ưa chuộng.
                            <br /><br />
                            Đặc điểm của chất liệu pp:</p>
                        <ul>
                            <li>Độ bền cơ học cao, khó bị xé đứt.</li>
                            <li>Khả năng bám mực in tốt, chất lượng in đẹp.</li>
                            <li>Mực in pp và vật liệu an toàn với người sử dụng.</li>
                        </ul>
                    </div>

                    <div className='inQCPP_body_item'>
                        <h4>Ưu điểm, nhược điểm của in pp giá rẻ</h4>
                        <div className='advantages'>
                            <h5>Ưu Điểm</h5>
                            <ul>
                                <li>Có chi phí in ấn rẻ.</li>
                                <li>Hình ảnh in đẹp, chất lượng, tạo ấn tượng tốt với khách hàng và đem lại hiệu ứng tích cực cho kế hoach54 quảng cáo.</li>
                                <li>Sử dụng trong nhiều nhu cầu, bối cảnh khác nhau.</li>
                                <li>Không độc hại với môi trường, an toàn cho người sử dụng</li>
                                <li>Độ bền tốt, sử dụng được khoảng 6 - 12 tháng</li>
                                <li>Tốc độ in nhanh, có thể lấy ngay trong ngày, không cần đợi lâu.</li>
                            </ul>
                        </div>
                        <div className='defect'>
                            <h5>Nhược Điểm</h5>
                            <ul>
                                <li>Dễ rách nếu không cán màng.</li>
                                <li>PP trong nhà dễ hư hỏng khi gặp nước.</li>
                                <li>Khi dán trên kính hoặc trên tường lâu ngày sẽ để lại lớp keo, phải vệ sinh lại.</li>
                                <li>Các loại pp trong nhà không nên sử dụng ngoài trời, sẽ mau phai màu.</li>
                            </ul>
                        </div>
                        <div className='produc_image'>
                            <img className='img-fluid' src={pp2} alt='pp2' />
                            <span className='d-block'>In pp có độ nét và độ thẩm mỹ cao</span>
                        </div>

                    </div>

                    <div className='inQCPP_body_item'>
                        <h4>In pp cán format</h4>
                        <p><Link className='text-bold' to={"/"}>INNHANH</Link> là đơn vị chuyên in pp cán formex tại TPHCM ✅ In nhanh lấy ngay trong ngày ✅ Giao hàng tận nhà TPHCM và giao hàng xe chành đi tỉnh.</p>
                        <div className='produc_image'>
                            <img className='img-fluid' src={fomex} alt='fomex' />
                            <span className='d-block'>In pp cán formex</span>
                        </div>
                        <p><span className='text-bold'>In pp cán format</span> là 1 trong những sản phẩm thường xuyên được đặt kèm với dịch vụ pp. Chúng rất hữu ích trong việc quảng cáo hoặc làm các sản phẩm trưng bày, triễn lãm.
                            <br /><br />
                            Ưu điểm khi đặt in pp cán form:</p>
                        <ul>
                            <li>Có độ bền cao, trọng lượng nhẹ và không thấm nước.</li>
                            <li>Không có tính dẫn điện, cách nhiệt tốt.</li>
                            <li>Có thể tạo thành nhiều hình mẫu phù hợp với nhu cầu.</li>
                            <li>Ứng dụng được trong nhiều nhu cầu thực tế.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='inQCPP_footer'>
                <div className='container'>
                    <div className='inQCPP_footer_title'>
                        <h4>Bảng giá in pp tại in ấn <Link to={"/"}>INNHANH79</Link></h4>
                    </div>

                    <div className='inQCPP_footer_price'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">QUY CÁCH</th>
                                    <th scope="col">DIỆN TÍCH</th>
                                    <th scope="col">GIÁ</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>In pp trong nhà có keo/không keo (cán màng)</td>
                                    <td>1 – 100m2</td>
                                    <td>60.000đ/m</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>In pp trong nhà có keo/không keo (cán màng)</td>
                                    <td>{">"} 100m2</td>
                                    <td>55.000đ/m</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>In pp trong nhà có keo/không keo (cán màng)</td>
                                    <td>{">"} 200m2</td>
                                    <td>50.000đ/m</td>
                                </tr>

                                <tr>
                                    <th scope="row">4</th>
                                    <td>In pp ngoài trời (cán màng)</td>
                                    <td>1 - 100m2</td>
                                    <td>85.000đ/m</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>In pp ngoài trời (cán màng)</td>
                                    <td>{">"} 100m2</td>
                                    <td>80.000đ/m</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>In pp ngoài trời (cán màng)</td>
                                    <td>{">"} 200m2</td>
                                    <td>75.000đ/m</td>
                                </tr>



                            </tbody>
                        </table>
                    </div>

                    <div className='inQCPP_footer_commit'>
                        <h4>XƯỞNG IN PP UY TÍN, CHẤT LƯỢNG, TỐC ĐỘ TẠI HCM</h4>                       
                        <p>Nếu bạn có nhu cầu đặt hàng in pp thì in ấn <Link className='text-bold' to={"/"}>INNHANH79</Link> chính là địa chỉ uy tín để bạn ghé đến. Khi đặt hàng tại đây, bạn sẽ luôn hài lòng vì đơn hàng của bạn sẽ đạt đủ những tiêu chí:</p>
                        <ul>
                            <li>Hoàn thành nhanh chong thời gian ngắn, hầu hết các đơn hàng in từ 3m trở xuống chúng tôi sẽ hoàn thành trong vòng 2 – 4 giờ làm việc.</li>
                            <li>Nhân viên chu đáo và phục vụ nhiệt tình, sẵn sàng giải đáp mọi thắc mắc của khách hàng.</li>
                            <li>Hệ thống máy in và vật liệu in tốt, được nhập từ những nguồn uy tín chất lượng.</li>
                            <li>Có áp dụng ưu đãi cho những khách hàng khi đặt in số lượng nhiều.</li>
                            <li>Được hỗ trợ giao hàng miễn phí tận nhà khi đặt in {">"} 4.000.000đ.</li>
                        </ul>
                        <p>Để được nhân viên sale của <Link className='text-bold' to={"/"}>INNHANH79</Link> tư vấn thêm về dịch vụ in pp TPHCM, bạn hãy gọi cho chúng tôi theo hotline: 0943830707 nhé.</p>
                        <div className='row'>
                            <div className='col-XL-4 col-lg-4 col-md-6 col-sm-12'>
                                <div className='inQCPP_footer_image'>
                                    <div className='image_1'>
                                        <div className='overlay'></div>
                                    </div>
                                    {/* <img className='img-fluid w-100' src={pp3} alt='pp3' /> */}
                                    <span className='d-block'>In PP Standee Chân X</span>
                                </div>
                            </div>
                            <div className='col-XL-4 col-lg-4 col-md-6 col-sm-12'>
                                <div className='inQCPP_footer_image'>
                                    <div className='image_2'>
                                        <div className='overlay'></div>
                                    </div>
                                    <span className='d-block'>Công nghệ in hiện đại</span>
                                </div>
                            </div>
                            <div className='col-XL-4 col-lg-4 col-md-6 col-sm-12'>
                                <div className='inQCPP_footer_image'>
                                    <div className='image_3'>
                                        <div className='overlay'></div>
                                    </div>
                                    <span className='d-block'>In PP Standee Chân cuốn</span>
                                </div>
                            </div>
                            <div className='col-XL-4 col-lg-4 col-md-6 col-sm-12'>
                                <div className='inQCPP_footer_image'>
                                    <div className='image_4'>
                                        <div className='overlay'></div>
                                    </div>
                                    <span className='d-block'>In PP Cán bồi fomex</span>
                                </div>
                            </div>
                            <div className='col-XL-4 col-lg-4 col-md-6 col-sm-12'>
                                <div className='inQCPP_footer_image'>
                                    <div className='image_5'>
                                        <div className='overlay'></div>
                                    </div>
                                    <span className='d-block'>In PP Standee Chân X</span>
                                </div>
                            </div>
                            <div className='col-XL-4 col-lg-4 col-md-6 col-sm-12'>
                                <div className='inQCPP_footer_image'>
                                    <div className='image_6'>
                                        <div className='overlay'></div>
                                    </div>
                                    <span className='d-block'>In PP Standee Chân Sắt</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InPP;