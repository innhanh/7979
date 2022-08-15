import React from 'react';
import BackToHome from '../../Components/BackToHome/BackToHome';
import "./regulation.scss";

import quidinh from "../../Access/Image/quidinh.jpg";
import { Link } from 'react-router-dom';

function Regulation(props) {
    return (
        <div className='Regulation innhanh_fade'>
            <BackToHome
                currentPage={"Thỏa Thuận & Chính Sách"}
            />
            <div className='container'>
                <div className='Regulation-content'>
                    <div className='innhanh_title'>
                        <h3 className='mb-3 mt-5'>Thỏa Thuận & <span>CHÍNH SÁCH</span></h3>
                    </div>
                    <div className='Regulation_item mb-5'>
                        <img src={quidinh} className='img-fluid w-100 mt-5 mb-5' />
                        <p>Website <Link to={"/"}>innhanh79.vn</Link> là một trong những sản phẩm thương mại điện tử do <Link to={"/"}>Công Ty Cổ Phần Dịch Vụ In Nhanh 79</Link>  xây dựng và phát triển. Khi quý khách đã đặt hàng trực tuyến trên hệ thống website của chúng tôi đồng nghĩa là bạn đã đọc, hiểu, chấp nhận và tuân thủ những điều khoản quy định sử dụng dưới đây:</p>
                        <ul>
                            <li>
                                <h4>Điều 1</h4>
                                <p>
                                    - Khách hàng phải cung cấp thông tin liên hệ đầy đủ và chính xác gồm có họ tên, địa chỉ, email, điện thoại. Trong trường hợp cần thiết (theo quy định của pháp luật tùy theo loại dịch vụ hoặc điều khoản của hợp đồng), khách hàng phải cung cấp các giấy tờ có liên quan theo yêu cầu của chúng tôi(bản sao chứng minh thư nhân dân, giấy phép kinh doanh hoặc các văn bản khác).<br /><br />
                                    - Đây là những thông tin bắt buộc, quý khách hàng phải cung cấp đầy đủ thông tin để chúng tôi căn cứ theo đó mà phục vụ quý khách một cách tốt nhất.<br /><br />
                                    - Những trường hợp điền thiếu thông tin hoặc thông tin sai sự thật sẽ không được giải quyết.
                                </p>
                            </li>

                            <li>
                                <h4>Điều 2</h4>
                                <p>
                                    Chúng tôi có quyền chấp nhận in lại hoặc không in lại nếu quý khách gặp 1 trong các trường hợp sau.<br /><br />
                                    Những trường hợp in lại hoặc đền bù:<br /><br />
                                    - Khách hàng đã duyệt nội dung nhưng thành phẩm sai nội dung hoặc mất nét chữ so với mẫu khách hàng đã duyệt.<br /><br />
                                    - Khách hàng đã duyệt màu sắc nhưng thành phẩm sai màu.<br /><br />
                                    - Thành phẩm in sai quy cách in như: sai kích thước, cán màng sai,…<br /><br />
                                    - Sản phẩm in của khách hàng bị các sự cố như: ướt, nấm mốc, nhăn nheo,… trong quá trình nhân viên của chúng tôi bảo quản hoặc vận chuyển.<br /><br />
                                    Những trường hợp không in lại hoặc đền bù:<br /><br />
                                    - Khách hàng duyệt nội dung sai nên khi thành phẩm in sai nội dung.<br />
                                    - Khách hàng không đưa mẫu canh màu hoặc không duyệt màu trước khi in, nên khi thành phẩm in sai lệch màu sắc.<br />
                                    - Thành phẩm in sai quy cách in nhưng có thể xử lý bằng kỹ thuật để khắc phục sự cố.<br />
                                    - Sản phẩm in của khách hàng bị các sự cố như: ướt, nấm mốc, nhăn nheo,… trong quá trình giao nhận của khách hàng và vận chuyển tại các chành xe.
                                </p>
                            </li>

                            <li>
                                <h4>Điều 3</h4>
                                <p>
                                    Chúng tôi không chịu trách nhiệm hoặc từ chối thực hiện các đơn hàng vi phạm các mục sau:<br />
                                    - Cung cấp nội dung cá nhân sai hoặc cố tình spam.<br />
                                    - Nội dung in ấn tuyên truyền, chống phá và xuyên tạc chính quyền và liên quan đến chính trị.

                                </p>
                            </li>

                            <li>
                                <h4>Điều 4</h4>
                                <p>
                                    Mọi thông tin cá nhân của khách hàng sẽ được chúng tôi bảo mật, và sử dụng vào mục đích quản lý đơn hàng ,cũng như việc quản lý khách hàng và tuyệt đối không tiết lộ ra ngoài. Chúng tôi không bán hay trao đổi những thông tin này với bất kỳ một bên thứ ba nào khác. Ngoại trừ trường hợp cơ quan chức năng có thẩm quyền, và việc cung cấp chỉ phục vụ cho mục đích điều tra nếu cơ quan pháp luật yêu cầu.
                                </p>
                            </li>

                            <li>
                                <h4>Điều 5</h4>
                                <p>
                                    Chúng tôi có quyền thay đổi quy định sử dụng bất kỳ lúc nào. Những thay đổi trong quy định sử dụng sẽ được thông báo tới khách hàng qua email, được đưa lên trang web của <Link to={"/"}>innhanh79.vn</Link> và có hiệu lực ngay lập tức.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Regulation;