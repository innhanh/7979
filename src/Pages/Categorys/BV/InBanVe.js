import React from 'react';
import BackToHome from '../../../Components/BackToHome/BackToHome';
import "./inBanVe.scss";

import photo from "../../../Access/Image/photocopy.png";
import photo2 from "../../../Access/Image/photo2.webp";
import photo3 from "../../../Access/Image/photo3.webp";
import photo4 from "../../../Access/Image/photo4.webp";

import banve1 from "../../../Access/Image/banve1.webp";
import banve2 from "../../../Access/Image/banve2.webp";
import banve3 from "../../../Access/Image/banve3.webp";

import mayin1 from "../../../Access/Image/mayin1.webp";
import mayin2 from "../../../Access/Image/mayin2.webp";

import scanmau from "../../../Access/Image/scanmau.webp";

import giacong from "../../../Access/Image/giacong.webp";
import { Link } from 'react-router-dom';


function InBanVe(props) {   
    
    return (
        <div className='inBanVe innhanh_fade'>
            <BackToHome
                currentPage={"In Bản Vẽ"}
            />
            <div className='container'>
                <div className='inBanVe-content'>
                    <div className='inBanVe_banner'>
                        <img className='img-fluid w-100' src={photo} alt='banner' />
                    </div>

                    <div className='inBanVe_body'>
                        <div className='inbBanVe_item'>
                            <div className='inbBanVe_item_hearder'>
                                <h4>GIẢI PHÁP IN MÀU, PHOTO, SCAN (A0 - A5) GIÁ RẺ - DỊCH VỤ HOÀN HẢO - GIAO NHẬN HÀNG TẬN NƠI</h4>
                            </div>
                            <div className='inbBanVe_item_text'>
                                <p><span className='text-bold'>in photo scan giá rẻ</span> là cái tên đã không còn xa lạ trên thị trường in ấn tại TP. Hồ Chí Minh. Giải pháp in ấn không chỉ là nơi cung cấp dịch vụ hoàn hảo mà còn là người bạn đồng hành đáng tin cậy đối với những đối tác thân thuộc trong nhiều lĩnh vực.</p>
                            </div>
                            <div className='produc_image'>
                                <img className='img-fluid w-100' src={photo2} alt='photo1' />

                            </div>
                        </div>

                        <div className='inbBanVe_item'>
                            <div className='inbBanVe_item_hearder'>
                                <h4>IN, PHOTO BẢN VẼ XÂY DỰNG GIÁ RẺ</h4>
                            </div>
                            <div className='inbBanVe_item_text'>
                                <p>Bản vẽ xây dựng là một tài liệu vô cùng quan trọng được xem như là một bản hợp đồng pháp lý giữa nhà thầu xây dựng và chủ lao động. Bản vẽ thường bao gồm những thông số quan trọng, sơ đồ hạ tầng, mặt cắt, tiến độ xây dựng…nên luôn đòi hỏi độ chính xác và rõ nét tuyệt đối khi in ấn thành phẩm.</p>
                            </div>
                            <div className='inbBanVe_item_image'>
                                <div className='image d-flex justify-content-around'>
                                    <img className='img-fluid' src={banve1} alt='banve1' />
                                    <img className='img-fluid' src={banve2} alt='banve2' />
                                    <img className='img-fluid' src={banve3} alt='banve3' />
                                </div>
                            </div>
                        </div>

                        <div className='inbBanVe_item'>
                            <div className='inbBanVe_item_hearder'>
                                <h4>PHOTO, IN ẤN TÀI LIỆU GIÁ RẺ (A4-A0)</h4>
                            </div>
                            <div className='inbBanVe_item_text'>
                                <p>Photo tài liệu giá rẻ là công việc cần thiết mà bất cứ cá nhân hay tổ chức nào cũng cần đến. Với mọi đối tượng dù là học sinh, sinh viên, gia đình, doanh nghiệp lớn nhỏ,.. đều luôn cần chuẩn bị những tài liệu, giấy tờ để phục vụ cho việc học tập, pháp lý, đào tạo nhân viên hay chuẩn bị hợp đồng với đối tác,…Có rất nhiều công việc cần đến photo giá rẻ, in ấn giá rẻ mà chúng tôi không thể kể hết chỉ trong 1 bài viết.</p>
                            </div>
                            <div className='produc_image'>
                                <img className='img-fluid w-100' src={photo3} alt='photo3' />
                            </div>
                            <div className='inbBanVe_item_text'>
                                <p>Đến với Giải pháp in ấn, mọi nhu cầu của bạn đều được giải quyết nhanh chóng và hoàn hảo. Chúng tôi sở hữu những dòng máy photo đa dạng và cao cấp nhất thị trường như HP, Toshiba, Ricoh,… với công suất hoạt động liên tục lên đến 50.000 bản in một ngày cho cả bản in 2 mặt với nhiều kích thước khác nhau từ A4 đến A0.<br /><br />
                                    Về công cụ photo, Giải pháp in ấn cung cấp đa dạng các loại giấy Double A, IK Plus, Supreme, IDEA,…với định lượng 70gsm và 80gsm đảm bảo đáp ứng nhu cầu của quý khách hàng cho những mục đích khác nhau. Điểm chung của những loại giấy kể trên là bề cấu trúc cứng cáp và dày dặn, bề mặt giấy nhẵn mịn không chứa tạp chất cũng như có độ bám màu bền bỉ sau thời gian dài.</p>
                            </div>
                            <div className='produc_image'>
                                <img className='img-fluid w-100' src={photo4} alt='photo4' />
                            </div>
                            <div className='inbBanVe_item_text'>
                                <p>Đối với in ấn trắng đen, Giải pháp in ấn có thể tạo ra thành phẩm trên các chất liệu giấy đa dạng từ Couche, Couche Matt, Ford, Ivory, Duplex cho đến Kraft, Cacbon, Bristol. Những loại giấy này cho dù là loại có bề mặt nhẵn mịn hay nhám sần đều khó bị nhăn hay lem mực và có khả năng nhận mực in rất tốt cho ra thành phẩm chi tiết và sắc nét.</p>
                            </div>
                        </div>

                        <div className='inbBanVe_item'>
                            <div className='inbBanVe_item_hearder'>
                                <h4>IN MÀU GIÁ RẺ</h4>
                            </div>
                            <div className='inbBanVe_item_text'>
                                <p>In màu giá rẻ luôn là lựa chọn tối ưu cho khách hàng khi cần đến những thành phẩm chân thực và bắt mắt, đánh bay sự nhàm chán với 2 tông màu đen trắng như khi in thông thường. Công nghệ in màu thường xuất hiện trên các sản phẩm như danh thiếp, tờ rơi, voucher, catalog, bao bì thư,…</p>
                            </div>
                            <div className='inbBanVe_item_image d-flex justify-content-around'>
                                <img className='img-fluid w-50' src={mayin1} alt='mayin1' />
                                <img className='img-fluid w-50' src={mayin2} alt='mayin2' />
                            </div>
                            <div className='inbBanVe_item_text'>
                                <p>Máy in màu giá rẻ lên bề mặt giấy dựa trên trên hệ màu CMYK tiêu chuẩn cho ra những thành phẩm có màu sắc chính xác như bản gốc. Tuy nhiên, với nhiều dòng máy in kém chất lượng sẽ tạo ra sự sai số không nhỏ gây ảnh hưởng đến kết quả in cuối cùng.
                                    <br /><br />
                                    Để đảm bảo chất lượng hoàn hảo cho những sản phẩm in màu, Giải pháp in ấn ngay từ khi thành lập đã luôn sử dụng dòng máy in cao cấp Konica (máy in nhanh test offset kỹ thuật số) và máy in màu công nghiệp Ricoh dòng production (Ricoh pro C901) để đảm bảo in với công suất lớn, vừa rút ngắn thời gian in vừa tối ưu chi phí cho khách hàng.</p>
                            </div>
                        </div>

                        <div className='inbBanVe_item'>
                            <div className='inbBanVe_item_hearder'>
                                <h4>SCAN MÀU (A4-A0)</h4>
                            </div>
                            <div className='inbBanVe_item_text'>
                                <p>Với mong muốn đem đến trải nghiệm đa dạng cho khách hàng, Giải pháp in ấn cung cấp dịch vụ Scan màu cao cấp trên các khổ giấy A4-A0. Công nghệ scan màu đang dần trở nên quen thuộc hơn với khách hàng khi yêu cầu về chất lượng của tài liệu số hóa ngày càng cao.</p>
                            </div>
                            <div className='produc_image'>
                                <img className='img-fluid w-100' src={scanmau} alt='scanmau' />
                            </div>
                            <div className='inbBanVe_item_text'>
                                <p>Với các doanh nghiệp hay tổ chức hướng tới sự chuyên nghiệp thì scan màu là một phần không thể thiếu trong quy trình chuẩn bị tài liệu. Nắm bắt được nhu cầu này từ rất sớm, Giải pháp in ấn đã tạo được uy tín nhất định trong mảng scan màu bởi chất lượng in ấn ưu việt, thời gian nhanh chóng và thái độ làm việc chuyên nghiệp.
                                    <br /><br />
                                    Với việc sử dụng các dòng máy scan đẳng cấp cho tốc độ scan nhanh chóng lên đến 25-50 tờ/ phút. Tài liệu cứng của bạn sẽ ngay lập tức được chuyển thành file dữ liệu số với dao diện chân thực có độ phân giải cao giống hệt với phiên bản thực tế. Nhờ vậy mà thông tin sẽ được lưu trữ lâu dài trên hệ thống mà không bị phai mờ hay hư hỏng vì điều kiện môi trường xung quanh.</p>
                            </div>
                        </div>

                        <div className='inbBanVe_item'>
                            <div className='inbBanVe_item_hearder'>
                                <h4>SCAN TÀI LIỆU SAO LƯU GIÁ RẺ</h4>
                            </div>
                            <div className='inbBanVe_item_text'>
                                <p>Vượt trội hơn hẳn những doanh nghiệp khác, công ty Giải pháp in ấn cung cấp thêm các gói dịch vụ scan giá rẻ tài liệu sao lưu cả Onsite và Offsite ở các định dạng các định dạng số PDF, TIFF,  JPG, PNG… giúp giảm thiểu chi phí cho cách hàng cũng như hỗ trợ tư vấn thêm về các giải pháp số hóa và chuyển đổi dữ liệu hiệu quả.</p>
                            </div>
                            <div className='produc_image'>
                                <img className='img-fluid w-100' src={scanmau} alt='scanmau' />
                            </div>
                            <div className='inbBanVe_item_text'>
                                <p>Về gói dịch vụ scan tài liệu giá rẻ sao lưu Onsite ngay tại địa điểm được khách hàng chỉ định, Giải pháp in ấn chỉ mất 4 bước để giải quyết nhu cầu của khách hàng một cách hoàn hảo.</p>

                                <h5>B1: Nhận tài liệu</h5>
                                <p>Giải pháp in ấn tiếp nhận tài liệu từ người đại diện khách hàng. Trong trường hợp khách hàng yêu cầu, tất cả nhân viên phụ trách việc scan sẽ ký cam kết bảo mật tuyệt đối thông tin mà họ xử lý theo tiêu chuẩn của hệ thống an ninh thông tin ISO/IEC 27001:2013.</p>

                                <h5>B2: Chuẩn bị tài liệu</h5>
                                <p>Những chi tiết bìa cứng, kẹp giấy, đinh kẹp đều được lấy ra khỏi tài liệu để phục vụ cho quá trình xử lý dữ liệu. Những trang giấy kém chất lượng cũng sẽ được kiểm tra kỹ càng.</p>

                                <h5>B3: Scan và thiết lập hệ thống ảnh</h5>
                                <p>Giải pháp in ấn sử dụng các thiết bị của hãng Plustek, HP, Kodak… để scan toàn bộ tài liệu, công suất hoạt động tối đa của các máy này có thể lên đens 100,000 bản/ngày. Tên của file tài liệu và các định dạng TIFF, JPEG, PDF, RTF hoặc Searchable PDF sẽ được điều chỉnh tùy theo yêu cầu của khách hàng.
                                    <br /><br />
                                    Thêm vào đó, việc phân loại và thiết lập hệ thống ảnh scan theo các mã vạch (barcode), mã phân tách (patch code), vùng nhận dạng ký tự quang học (OCR, bao gồm cả MICR) cũng được ứng dụng trong hệ thống xử lý của Giải pháp in ấn</p>

                                <h5>B4: Kiểm tra chất lượng</h5>
                                <p>Sau đó, bên phía Giải pháp in ấn  tiếp tục tiến hành kiểm tra file scan theo tiêu chuẩn ISO 9001:2013 và cung cấp thành phẩm cuối cùng có chất lượng tối ưu nhất đến cho khách hàng.
                                    <br /><br />
                                    Về gói dịch vụ Offsite, đội ngũ nhân viên của Giải pháp in ấn sẽ đến địa điểm của khách hàng nhận tài liệu cần scan giá rẻ, sau đó đem về phòng văn phòng để thực hiện số hoá dữ liệu. Quy trình scan cũng sẽ được thực hiện tương tự như scan giá rẻ tại địa điểm của khách hàng và thông tin sẽ được bảo mật tuyệt đối.
                                    <br /><br />
                                    Sau khi các bước của quy trình scan hoàn tất, Giải pháp in ấn sẽ thực hiện giao trả CD, DVD chứa ảnh scan cùng tài liệu giấy tận địa điểm của khách hàng hoặc tải trực tiếp tập tin chứa ảnh scan lên FTP Server hoặc website mà khách hàng cung cấp.</p>
                            </div>
                        </div>

                        <div className='inbBanVe_item'>
                            <div className='inbBanVe_item_hearder'>
                                <h4>GIA CÔNG ĐÓNG SÁCH TÀI LIỆU</h4>
                            </div>
                            <div className='inbBanVe_item_text'>
                                <p>Sau khi hoàn thành các gói in ấn và xử lý tài liệu một cách tỉ mỉ thì quy trình gia công chắc chắn là bước không thể thiếu đối với một công ty cung cấp dịch vụ in ấn chuyên nghiệp như Giải pháp in ấn.
                                    <br /><br />
                                    Tài liệu sau khi được in ấn kĩ lưỡng với chất lượng hoàn thiện tuyệt đối có thể được đóng thành từng tập với nhiều cách đóng gói khách nhau. Một số phương pháp đóng sách tài liệu mà Giải pháp in ấn thường xuyên xử lý đó là:</p>
                            </div>
                            <div className='inbBanVe_item_image'>
                                <img className='img-fluid w-100' src={giacong} alt='giacong' />
                            </div>
                            <div className='inbBanVe_item_text'>
                                <ul>
                                    <li>Đóng bằng gáy lò xo chất liệu nhựa hoặc kẽm</li>
                                    <li>Đóng bằng kim bấm và dán băng leo trơn hoặc nhám</li>
                                    <li>Đóng bọc gáy bằng keo nhiệt</li>
                                </ul>
                                <p>Bên cạnh đó, in ấn Giải pháp in ấn còn nhận thêm gia công đóng gáy các loại giấy trơn để sử dụng làm tập vở học tập và ghi chép công việc. Với kinh nghiệm lâu năm trong ngành, Giải pháp in ấn còn có thể ứng dụng nhiều phương pháp gia công đa dạng khác tùy phụ thuộc vào yêu cầu của từng khách hàng.</p>
                            </div>
                        </div>

                    </div>
                    <div className='inBanVe_footer'>
                        <div className='inBanVe_footer-content'>
                            <div className='inBanVe_footer_item'>
                                <h4>ƯU ĐÃI KHI SỬ DỤNG DỊCH VỤ CỦA CÔNG TY CỔ PHẦN DỊCH VỤ <Link to={"/"}>INNHANH79</Link></h4>
                                <p>Với đội ngũ nhân viên chuyên nghiệp luôn sẵn sàng giao nhận tài liệu thành phẩm cho quý khách hàng trong thời gian nhanh nhất, chất lượng sản phẩm tuyệt nhất và thông tin được bảo mật kỹ càng nhất. Giải pháp in ấn cam kết sản phẩm được giao đến tay khách hàng luôn là thành phẩm đạt tiêu chuẩn đến mức hoàn hảo và có tính thẩm mỹ ưu việt.
                                    <br /><br />
                                    Giải pháp in ấn hiện đang triển khai nhiều gói dịch vụ với giá thành phải chăng và rất nhiều ưu đãi cho những vị khách mới tìm đến chúng tôi và kể cả những vị khách hàng thân thiết nhất.<br />
                                    Quý khách hàng có nhu cầu in ấn, scan số hóa, đóng gáy gia công tài liệu,… đừng ngần ngại liên hệ với Giải pháp in ấn tại:</p>
                            </div>
                            <div className='inBanVe_footer_tablePrice'>
                                <h4>BẢNG GIÁ IN MÀU - PHOTO - SCAN TẠI <Link to={"/"}>INNHANH79</Link></h4>

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InBanVe;