import React from 'react';
import { Link } from 'react-router-dom';
import BackToHome from '../../../../Components/BackToHome/BackToHome';

import tuigiay1 from "../../../../Access/Image/TuiGiay/tuigiay1.jpg";
import tuigiay2 from "../../../../Access/Image/TuiGiay/tuigiay2.jpg";
import tuigiay3 from "../../../../Access/Image/TuiGiay/tuigiay3.jpg";
import tuigiay4 from "../../../../Access/Image/TuiGiay/tuigiay4.jpg";

import "./inTuiGiay.scss";

function InTuiGiay(props) {
    return (
        <div className='inTuiGiay inQCPP innhanh_fade'>
            <BackToHome
                currentPage={"In Túi Giấy"}
            />
            <div className='inTuiGiay_hearder'>
                <div className='container'>
                    <div className='innhanh_title'>
                        <h3 className='mb-3 mt-5'>In Túi Giấy tại <span>INNHANH79</span></h3>
                    </div>
                    <p><Link to={"/"}>INNHANH79</Link> - công ty chuyên in túi giấy giá rẻ TPHCM ✅ In túi giấy theo yêu cầu ✅ In túi giấy lấy liền ⭐ Hỗ trợ thiết kế theo ý tưởng khách hàng ⭐_⭐ Giá sản xuất tận xưởng.</p>
                </div>
            </div>
            <div className='inTuiGiay_body'>
                <div className='container'>
                    <div className='inTuiGiay_body_item'>
                        <h4>In túi giấy giá rẻ TPHCM | Giá sản xuất tại xưởng</h4>
                        <p>Bạn là chủ doanh nghiệp hoặc là quản lý tại 1 cửa hàng và bạn đang muốn sản xuất 1 số lượng lớn túi giấy để phục vụ cho nhu cầu kinh doanh của mình? Nhưng hiện tại vẫn chưa có doanh nghiệp nào đáp ứng đủ nhu cầu của bạn về giá in cạnh tranh, sản xuất tại xưởng, chất lượng in tốt, thiết kế mẫu đẹp và có kinh nghiệm vận hành lâu năm trong lĩnh vực in túi giấy TPHCM?
                            <br /><br />
                            Hãy tìm đến công ty in ấn <Link to={"/"}>INNHANH79</Link>, đơn vị chuyên in túi giấy uy tín TPHCM với các tiêu chí:</p>
                        <ul>
                            <li>✔️ Giá cả sản xuất tận xưởng</li>
                            <li>✔️ Chất lượng sản phẩm in tốt, đẹp, thẩm mỹ</li>
                            <li>✔️ Màu in sắc nét, không có hiện tượng nhòe màu</li>
                        </ul>
                    </div>

                    <div className='inTuiGiay_body_item'>
                        <h4>In túi giấy là gì?</h4>
                        <p>Túi giấy là 1 sản phẩm in ấn giúp khách hàng đựng những mặt hàng mình mua khi đi mua sắm. Khi mua những sản phẩm như: trái cây, đồ uống, hoa quả, mỹ phẩm, trang sức thì cửa hàng sẽ cung cấp thêm cho bạn 1 túi giấy để bạn mang đồ về nhà. Ngoài ra, một số loại túi giấy còn được thiết kế đẹp để dùng làm quà tặng cho bạn bè, người thân.
                            <br /><br />
                            Có nhiều khách hàng hiện nay rất thích sử dụng túi giấy vì độ tiện dụng và tính thẩm mỹ của nó. Đây được xem là giải pháp đựng đồ thay thế cho túi nilong, không gây ảnh hưởng nhiều tới môi trường.
                            <br /><br />
                            Hiện nay, công việc in túi giấy có thể sản xuất trên nhiều chất liệu giấy, màu in và thiết kế đa dạng khác nhau nên đây sẽ là công cụ cực kỳ hữu ích dành cho những doanh nghiệp muốn làm túi đựng đồ và quảng cáo cho thương hiệu của mình. Do túi giấy được sản xuất số lượng nhiều, in cùng 1 nội dung nên công nghệ in chúng ta áp dụng thường là công nghệ in offset.</p>
                        <div className='produc_image'>
                            <img className='img-fluid' src={tuigiay1} alt='túi giấy 1' />
                            <span className='d-block'>In túi giấy giúp khách hàng đựng sản phẩm sau khi mua hàng.</span>
                        </div>
                    </div>

                    <div className='inTuiGiay_body_item'>
                        <h4>Vai trò của in túi giấy giá rẻ với doanh nghiệp và khách hàng</h4>

                        <li className='text-bold'>Quảng cáo cho thương hiệu bán hàng</li>
                        <p>In túi giấy giá rẻ sẽ giúp doanh nghiệp quảng bá được thương hiệu. Mỗi sản phẩm túi giấy được thiết kế và in ấn đẹp sẽ tạo thiện cảm trong lòng khách hàng. Túi giấy cũng có mẫu mã đẹp, thân thiện với môi trường hơn các loại túi làm bằng nhựa hoặc nilong khác.</p>
                        <div className='produc_image'>
                            <img className='img-fluid' src={tuigiay2} alt='túi giấy 2' />
                            <span className='d-block'>Túi giấy là phương pháp quảng bá thương hiệu cực kỳ hiệu quả.</span>
                        </div>
                        <p>Khi thiết kế hài hòa, màu sắc hợp lý với chất liệu in túi giấy, sẽ làm tăng giá trị sản phẩm họ mua được cũng như sự chuyên nghiệp của doanh nghiệp cũng dần đi lên.
                            <br /><br />
                            In túi giấy là 1 phương pháp marketing mang lại nhiều hiệu quả cao. Chúng được xem là công cụ tạo thiện cảm với khách hàng, tạo thu hút với khách hàng tiềm năng, gia tăng nhận diện thương hiệu, đem lại những lợi ích vô hình cho doanh nghiệp bán hàng. Từ đó, cũng thúc đẩy doanh thu tăng khi khách hàng quan tâm tới sản phẩm của bạn nhiều hơn.</p>

                        <li className='text-bold'>Giúp bảo vệ môi trường</li>
                        <p>Chắc hẳn bạn đã biết thì chất liệu giấy có thể phân hủy ra môi trường cực kỳ dễ dàng, ít để lại nhiều tác động xấu như túi nilong. Vì thế hiện nay hầu hết các siêu thị hay cửa hàng tiện lợi đều sử dụng túi giấy như là 1 phương pháp giảm bớt tác hại cho môi trường.</p>
                    </div>

                    <div className='inTuiGiay_body_item'>
                        <h4>Chất liệu in túi giấy phổ biến</h4>
                        <p>Công ty <Link to={"/"}>INNHANH79</Link> có cung cấp giải pháp in túi giấy giá rẻ trên nhiều chất liệu cho bạn, khi bạn liên hệ chúng tôi sẵn sàng tư vấn cho bạn về tính chất, đặc điểm của từng loại giấy để bạn tìm ra sản phẩm phù hợp nhất.</p>

                        <li className='text-bold'>Giấy Kraft</li>
                        <p>Giấy kraft hiện nay được sử dụng nhiều cho nhu cầu in ấn chất lượng và chi phí sản xuất cạnh tranh nhất. Bề mặt của giấy kraft có đặc điểm là: có bề mặt màu nâu, bề mặt mịn, nhám như xi măng. Giấy kraft có độ bền khá tốt, in túi giấy kraft có thể dùng đựng các loại thực phẩm như bánh, thực phẩm khô hoặc các loại bánh mì.
                            <br /><br />
                            In túi giấy kraft mặc dù có độ thẩm mỹ không cao như các loại giấy khác nhưng chúng có thời gian sử dụng và độ hút ẩm tốt. Sản phẩm được làm từ giấy kraft có khả năng thấm hút dẫu mỡ cao.
                        </p>
                        <div className='produc_image'>
                            <img className='img-fluid' src={tuigiay3} alt='túi giấy 3' />
                            <span className='d-block'>Túi giấy được in bằng giấy Kraft (bề mặt nâu).</span>
                        </div>
                        <li className='text-bold'>Giấy couche</li>
                        <p>Giấy couche là loại giấy có bề mặt màu trắng, mịn và khi in lên cho màu nổi, có tính thẩm mỹ cao. In túi giấy couche thích hợp dùng cho những sản phẩm mỹ phẩm, quần áo hoặc trang sức sẽ rất phù hợp. Bạn có thể in bất cứ hình ảnh, màu sắc nào theo quy cách làm túi giấy giá rẻ Couche tại Sắc Kim.</p>

                        <li className='text-bold'>Giấy Ford</li>
                        <p>Giấy ford là loại giấy rất phổ biến thường dùng làm danh thiếp, tờ rơi hoặc các mặt hàng tiêu dùng như túi giấy. Sản phẩm làm từ giấy Ford có chất lượng in tốt, màu sắc đẹp và ít khi bị lỗi như các loại giấy khác. Chúng có độ dai tốt, khó bị hỏng khi bạn đựng đồ. Túi giấy Ford ngoài phục vụ nhu cầu mua bán tại cửa hàng thì chúng còn được dùng đựng tài liệu trong các cuộc họp, hội nghị rất nhiều.</p>
                        <div className='produc_image'>
                            <img className='img-fluid' src={tuigiay4} alt='túi giấy 4' />
                            <span className='d-block'>Túi giấy được in bằng giấy Kraft (bề mặt nâu).</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='inTuiGiay_footer'>
                <div className='container'>
                    <h4>Công ty chuyên in túi giấy giá rẻ, chất lượng, uy tín tại TPHCM</h4>
                    <p>In túi giấy ở đâu ? Công ty in ấn <Link to={"/"}>INNHANH79</Link> hiện đang là đơn vị chuyên nhận các đơn hàng in túi giấy giá rẻ cho khách hàng tại TPHCM, chúng tôi sở hữu những dàn máy in hiện đại cùng đội ngũ thiết kế chuyên nghiệp sáng tạo sẽ giúp tạo ra những sản phẩm in túi giấy đẹp nhất cho bạn. Đến với dịch vụ in ấn tại chúng tôi, bạn sẽ được đảm bảo các tiêu chí:</p>
                    <ul>
                        <li>Dịch vụ in túi giấy nhanh và chất lượng đảm bảo.</li>
                        <li>Dịch vụ tư vấn nhiệt tình, chu đáo, giá cả tốt.</li>
                        <li>Sử dụng đa dạng chất liệu giấy in ấn, phong phú về kích thước và kiểu dáng.</li>
                        <li>Có áp dụng mức giá ưu đãi cho những khách hàng có nhu cầu đặt in số lượng lớn.</li>
                        <li>Hỗ trợ vận chuyển tại nhà nếu quý khách hàng đặt đủ số lượng free ship.</li>
                    </ul>
                    <p>Để được nhân viên <Link to={"/"}>INNHANH79</Link> tư vấn thêm cho bạn về dịch vụ in túi giấy TPHCM, hãy nhấc máy lên và liên hệ cho chúng tôi theo hotline: 0943830707 nhé.</p>
                </div>
            </div>
        </div>
    );
}

export default InTuiGiay;