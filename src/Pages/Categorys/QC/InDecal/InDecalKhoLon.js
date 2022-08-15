import React from 'react';
import { Link } from 'react-router-dom';
import BackToHome from '../../../../Components/BackToHome/BackToHome';

import decal1 from "../../../../Access/Image/QC/decal1.jpg";
import decalsua from "../../../../Access/Image/QC/decalsua.jpg";
import decalluoi from "../../../../Access/Image/QC/decalluoi.jpg";
import decaltrong from "../../../../Access/Image/QC/decaltrong.webp";
import "./inDecalKhoLon.scss";

function DecalKhoLon(props) {
    return (
        <div className='decalKhoLon innhanh_fade'>
            <BackToHome
                currentPage={"Tem Nhãn Decal"}
            />
            <div className='decalKhoLon_hearder'>
                <div className='container'>
                    <div className='innhanh_title'>
                        <h3 className='mb-3 mt-5'>In Decal Khổ Lớn tại <span>INNHANH79</span></h3>
                    </div>
                    <p>In decal giá rẻ ✅ in decal khổ lớn, in tem nhãn decal, in sticker decal, in tem decal giấy, in tem decal bảo hành, decal phản quang,…✅ In nhanh ✅ In Chất Lượng ✅ Giá tốt tại <Link to={"/"}>INNHANH79</Link>.</p>
                </div>
            </div>
            <div className='decalKhoLon_body'>
                <div className='container'>
                    <div className='decalKhoLon_body_price'>
                        <h4>Bảng giá in decal sữa, decal trong suốt, decal lưới, decal giấy 2022</h4>
                        <span className='text-danger text-italic'>*Lưu ý: bảng giá in dưới đây đã bao gồm vật liệu.</span>
                        <div className='table_price'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Chất Liệu</th>
                                        <th scope="col">Số Lượng</th>
                                        <th scope="col">Giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Decal trắng sữa/trong suốt (không cán màng)</td>
                                        <td>1 - 100m2</td>
                                        <td>60.000đ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Decal trắng sữa/trong suốt (không cán màng)</td>
                                        <td>{">"} 100m2</td>
                                        <td>55.000đ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Decal trắng sữa/trong suốt (không cán màng)</td>
                                        <td>{">"} 200m2</td>
                                        <td>55.000đ</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Decal trắng sữa/trong suốt (cán màng)</td>
                                        <td>1 - 100m2</td>
                                        <td>75.000đ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Decal trắng sữa/trong suốt (không cán màng)</td>
                                        <td>{">"} 100m2</td>
                                        <td>70.000đ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Decal trắng sữa/trong suốt (không cán màng)</td>
                                        <td>{">"} 200m2</td>
                                        <td>65.000đ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Decal lưới</td>
                                        <td>1 - 1002</td>
                                        <td>150.000đ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='decalSticker_body_intro'>
                        <h4>In decal là gì ?</h4>
                        <div className='decalSticker_body_text'>
                            <p>Decal (đề can) là loại nhãn tự dính dưới tác động lực nhẹ. Mặt trước decal là nhựa PVC còn mặt sau có lớp keo giúp decal dính chặt vào bề mặt dán. Khi mua về bạn chỉ cần lột lớp giấy phía sau và ấn nhẹ vào bề mặt dán là dính ngay. Ngày nay, do công nghệ in ngày càng phát triển nên các sản phẩm in đều có chất lượng tốt, thời gian sử dụng lâu dài.
                                <br /><br />
                                Decal hiện nay được chia làm nhiều loại khác nhau như decal giấy, decal nhựa, decal lưới,….Các công nghệ in decal tem nhãn phổ biến là: in mực dầu, in mực nước, in uv</p>
                        </div>
                        <div className='produc_image'>
                            <img className='img-fluid' src={decal1} alt='decal1' />
                            <span className='d-block'>Vật liệu decal có thể dính dễ dàng chỉ với lực nhấn nhẹ.</span>
                        </div>
                    </div>

                    <div className='decalSticker_body_typeDecal'>
                        <h4>Các loại decal thông dụng trong in ấn</h4>
                        <div className='decalSticker_body_text'>
                            <p>Tùy theo nhu cầu sử dụng và hình thức trang trí mà có nhiều loại decal khác nhau. Hiện nay, người ta thường đặt in trên các chất liệu decal sau:</p>
                            <div className='decal_Sua'>
                                <h5>Decal Sữa</h5>
                                <p>Đây là loại decal được sử dụng nhiều nhất. Bạn có thể gọi là decal trắng sữa hay decal sữa đều được. Bề mặt in decal sữa giá rẻ có màu trắng và thể hiện mực in tốt. Do màu nền là màu trắng nên khi in, bạn không thể nhìn xuyên qua decal được.</p>
                                <div className='produc_image'>
                                    <img className='img-fluid' src={decalsua} alt='decal sữa' />
                                    <span className='d-block'>Chất liệu decal sữa</span>
                                </div>
                            </div>
                            <div className='decal_Trong'>
                                <h5>In decal trong suốt</h5>
                                <p>Trái ngược với decal sữa, decal trong suốt trong như kính nên bạn có thể nhìn xuyên qua được. Hình ảnh in chỉ hiển thị khoảng 30 – 50% so với decal trắng sữa. Vì thế, người ta thường dùng bản in decal trong giá rẻ dán lên những bề mặt trong suốt như kính, mica để trang trí.</p>
                                <div className='produc_image'>
                                    <img className='img-fluid' src={decaltrong} alt='decal trong' />
                                    <span className='d-block'>Chất liệu decal trong.</span>
                                </div>
                            </div>
                            <div className='decal_Trong'>
                                <h5>In decal lưới</h5>
                                <p>Đây là loại decal đặc biệt có những lỗ tròn li ti trên bề mặt. Mặt trước của chúng có màu trắng sữa, lớp sau có màu đen nên có thể sử dụng như 1 lớp che thần kỳ. Chúng chuyên sử dụng dán kính xe hoặc quảng cáo ở nơi có kính.
                                    <br /><br />
                                    Đặc điểm của decal lưới là nhìn từ ngoài vào sẽ thấy hình ảnh in. Còn nhìn từ trong ra sẽ thấy toàn bộ bên ngoài. Chúng thường dán ở kính văn phòng hoặc kính ô tô, xe buýt.</p>
                                <div className='produc_image'>
                                    <img className='img-fluid' src={decalluoi} alt='decal lưới' />
                                    <span className='d-block'>Chất liệu decal trong.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='decalSticker_size'>
                        <p>Hiện nay, công ty in ấn Sắc Kim có cung cấp dịch vụ in decal khổ lớn, in decal số lượng ít cho khách hàng với những khổ in sau:</p>
                        <ul>
                            <li>Decal khố 0.914m</li>
                            <li>Decal khố 1.07m</li>
                            <li>Decal khố 1.27m</li>
                            <li>Decal khố 1.52m</li>
                        </ul>
                        <p>Tùy theo file của khách hàng đặt in mà chúng tôi sẽ sắp xếp cho phù hợp để tiết kiệm giá in cho khách hàng.</p>
                    </div>
                </div>
            </div>
            <div className='decalSticker_footer'>
                <div className='container'>
                    <div className='decalSticker_footer_item'>
                        <h4 className='text-color-green'>Xưởng in decal giá rẻ, chất lượng tại TPHCM</h4>
                        <p>Hiện nay, trên thị trường có nhiều cơ sở in decal lấy liền chất lượng, mỗi công ty sẽ có quy trình in cùng giá khác nhau. Tùy theo loại máy in decal và giá thành vật liệu mỗi cơ sở nhập vào.
                            <br /><br />
                            Tuy nhiên, nếu nhu cầu của bạn là tìm đơn vị in giá rẻ chất lượng HCM thì in ấn <Link to={"/"}>INNHANH79</Link> là địa chỉ uy tín giúp bạn hoàn thành điều đó. Giá in decal TPHCM tại Sắc Kim rất cạnh tranh, thích hợp cho cả những đơn hàng in decal lẻ hoặc in decal số lượng nhiều.
                            <br /><br />
                            Trên đây là một vài thông tin về dịch vụ in decal giá rẻ tại TPHCM. Với nhiều năm hoạt động trong nghành in ấn, chúng tôi tự tin đáp ứng cho bạn những sản phẩm in chất lượng với giá cả vô cùng phải chăng. Để được tư vấn thêm về dịch vụ, bạn vui lòng liên hệ chúng tôi theo hotline: 0943830707 nhé.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DecalKhoLon;