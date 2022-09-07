import React from 'react';
import "./footer.scss";
import logo from "../../Access/Image/logo.png";
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div id='footer'>
            <div className='footerTop'>
                <div className='innhanh_90'>
                    <div className='row'>
                        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
                            <div className='footer_item'>
                                <img src={logo} className='footerLogo innhanh_70' alt='footerLogo' />
                                <p className='website'>www.innhanh79.vn</p>
                                <div className='timeWorlk d-flex justify-content-center align-items-center'>
                                    <svg className='innhanh_30' id="icon_Time"
                                        data-name="Layer 1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 61.73 61.29">
                                        <defs>
                                            <style>{`.cls-1{fill:#fff;`}</style>
                                        </defs>
                                        <title>time</title>
                                        <path className="cls-1" d="M61.73,32a2.63,2.63,0,0,1-2.13,2,2.45,2.45,0,0,1-2.81-2.23c0-.66,0-1.33,0-2a2.44,2.44,0,0,1,2.17-2.41A2.49,2.49,0,0,1,61.6,29l.14.4Z" />
                                        <path className="cls-1" d="M48.05,5.23c.64-.93,1.23-1.82,1.87-2.67.21-.27.61-.61.87-.57s.56.48.65.8c.76,2.6,1.48,5.21,2.19,7.82.33,1.21-.2,1.94-1.47,2.05l-7.86.71a.67.67,0,0,1-.24,0c-.33-.1-.77-.13-.93-.36s0-.66.18-.92c.59-.93,1.24-1.83,1.93-2.84-1.24-.67-2.42-1.39-3.67-2a25,25,0,0,0-13-2.21,25.43,25.43,0,0,0-17.9,9.62A24.4,24.4,0,0,0,5,30.16c-.08,9.23,3.62,16.65,11.19,22a25.3,25.3,0,0,0,9.93,4.14,2.48,2.48,0,1,1-.82,4.89,30.54,30.54,0,0,1-21.16-15A29.68,29.68,0,0,1,0,29.68,30.15,30.15,0,0,1,7.17,11.14,30,30,0,0,1,24.82.64,30.15,30.15,0,0,1,47.35,4.79Z" />
                                        <path className="cls-1" d="M31.35,21.37c0,2.81,0,5.63,0,8.44a.83.83,0,0,0,.54.86q7.68,3.95,15.35,7.93a2,2,0,0,1,1.27,2.33,2,2,0,0,1-2.59,1.46,5,5,0,0,1-.66-.29l-17.38-9a.79.79,0,0,1-.53-.81c0-6.41,0-12.82,0-19.23a2,2,0,1,1,4-.14C31.35,15.74,31.34,18.56,31.35,21.37Z" />
                                        <path className="cls-1" d="M50,49.27v-.06c0-1.56,2.08-3.74,3.53-3.75a2.44,2.44,0,0,1,2.15,3.66,10.3,10.3,0,0,1-1.57,2,2.27,2.27,0,0,1-2.62.45A2.39,2.39,0,0,1,50,49.27Z" />
                                        <path className="cls-1" d="M37.35,56a2.59,2.59,0,0,1,2.79,2,2.4,2.4,0,0,1-1.55,2.74,12.63,12.63,0,0,1-2.4.54,2.41,2.41,0,0,1-2.58-1.89A2.37,2.37,0,0,1,35,56.55,19.71,19.71,0,0,1,37.35,56Z" />
                                        <path className="cls-1" d="M60.42,39.81a18.78,18.78,0,0,1-1.11,2.66,2.29,2.29,0,0,1-2.89.78A2.34,2.34,0,0,1,55,40.62a12,12,0,0,1,.85-2.49,2.39,2.39,0,0,1,2.76-1.19A2.66,2.66,0,0,1,60.42,39.81Z" />
                                        <path className="cls-1" d="M57.7,24.43A2.3,2.3,0,0,1,55.56,23a17,17,0,0,1-.71-2A2.44,2.44,0,0,1,56.3,18a2.41,2.41,0,0,1,3.08,1.14,11.69,11.69,0,0,1,.85,2.37A2.45,2.45,0,0,1,57.7,24.43Z" />
                                        <path className="cls-1" d="M46.51,52a2.62,2.62,0,0,1,2.34,1.67,2.37,2.37,0,0,1-.71,2.72A11.84,11.84,0,0,1,46,57.68a2.39,2.39,0,0,1-3.15-1,2.43,2.43,0,0,1,.79-3.23,16,16,0,0,1,1.69-1A6.72,6.72,0,0,1,46.51,52Z" />
                                    </svg>
                                    <div className='time'>
                                        <p>Thứ 2 - Thứ 7</p>
                                        <p>8h00 - 12h00</p>
                                        <p>13h30 - 18h30</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
                            <div className='footer_item'>
                                <h2>CN1</h2>
                                <div className='footer_infor'>
                                    <p className='d-flex justify-content-start align-items-center'>
                                        <div>  <i className="fa fa-map-marker-alt"></i></div>

                                        <span>43D/10 Hồ Văn Huê - P.9 - Q.Phú Nhuận - TP.HCM.</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-phone"></i>
                                        <span>
                                            <Link to={"#"}>0888.229.079</Link> - <Link to={"#"}>0918.196.699</Link>
                                        </span>
                                    </p>
                                    <p>
                                        <i className="fa fa-envelope"></i>
                                        <span>
                                            <Link to={"#"}>innhanh7979@gmail.com</Link>
                                        </span>
                                    </p>
                                    <p>
                                        <div className='icon_zalo'>
                                            <svg className='innhanh_80' id="zalo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.64 7.11"><defs><style>{`.cls-1{fill:#fff;`}</style></defs><title>zalo</title><path className="cls-1" d="M3.31,1.47H1C.5,1.46.07,1.34,0,.78S.44,0,.9,0C2.16,0,3.43,0,4.68,0c.81,0,1.08.73.58,1.42C4.36,2.68,3.43,3.89,2.51,5.1l-.35.47H3.67c.45,0,.9,0,1.35,0a.67.67,0,0,1,.64.72A.63.63,0,0,1,5,7.06c-.54,0-1.09,0-1.63,0-.81,0-1.62,0-2.43,0A1.25,1.25,0,0,1,.05,6.6,1.29,1.29,0,0,1,.23,5.54C1.06,4.37,2,3.26,2.83,2.13,3,2,3.09,1.77,3.31,1.47Z" /><path className="cls-1" d="M9,6.71c-1.38.63-2.3.47-3-.54a2.79,2.79,0,0,1,.21-3.48,2,2,0,0,1,2.42-.48,1,1,0,0,0,.69,0,.73.73,0,0,1,1.13.63q0,1.72,0,3.43C10.42,7,9.83,7.21,9,6.71ZM8.95,4.55c0-.73-.39-1.18-1-1.16A1,1,0,0,0,7,4.55,1.06,1.06,0,0,0,8,5.73C8.58,5.71,9,5.23,8.95,4.55Z" /><path className="cls-1" d="M15.16,2a2.39,2.39,0,0,1,2.48,2.54,2.49,2.49,0,1,1-5,0A2.37,2.37,0,0,1,15.16,2Zm1,2.53a1,1,0,0,0-1-1.17c-.57,0-1,.45-1,1.13a1.08,1.08,0,0,0,.92,1.21A1,1,0,0,0,16.13,4.56Z" /><path className="cls-1" d="M10.86,3.47c0-.88,0-1.76,0-2.65,0-.54.27-.84.71-.82a.72.72,0,0,1,.76.8c0,1.78,0,3.57,0,5.35,0,.59-.28.86-.76.85s-.7-.29-.7-.89C10.86,5.23,10.86,4.35,10.86,3.47Z" /></svg>
                                        </div>
                                        <span>
                                            <Link to={"#"}>0888.229.079</Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
                            <div className='footer_item'>
                                <h2>CN2</h2>
                                <div className='footer_infor'>
                                    <p className='d-flex justify-content-start align-items-center'>
                                        <div>  <i className="fa fa-map-marker-alt"></i></div>

                                        <span>29 Bis Nguyễn Đình Chiểu - P.Đa Kao - Q.1 - TP.HCM.</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-phone"></i>
                                        <span>
                                            <Link to={"#"}>0888.229.079</Link> - <Link to={"#"}>0918.196.699</Link>
                                        </span>
                                    </p>
                                    <p>
                                        <i className="fa fa-envelope"></i>
                                        <span>
                                            <Link to={"#"}>innhanh7979@gmail.com</Link>
                                        </span>
                                    </p>
                                    <p>
                                        <div className='icon_zalo'>
                                            <svg className='innhanh_80' id="zalo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.64 7.11"><defs><style>{`.cls-1{fill:#fff;`}</style></defs><title>zalo</title><path className="cls-1" d="M3.31,1.47H1C.5,1.46.07,1.34,0,.78S.44,0,.9,0C2.16,0,3.43,0,4.68,0c.81,0,1.08.73.58,1.42C4.36,2.68,3.43,3.89,2.51,5.1l-.35.47H3.67c.45,0,.9,0,1.35,0a.67.67,0,0,1,.64.72A.63.63,0,0,1,5,7.06c-.54,0-1.09,0-1.63,0-.81,0-1.62,0-2.43,0A1.25,1.25,0,0,1,.05,6.6,1.29,1.29,0,0,1,.23,5.54C1.06,4.37,2,3.26,2.83,2.13,3,2,3.09,1.77,3.31,1.47Z" /><path className="cls-1" d="M9,6.71c-1.38.63-2.3.47-3-.54a2.79,2.79,0,0,1,.21-3.48,2,2,0,0,1,2.42-.48,1,1,0,0,0,.69,0,.73.73,0,0,1,1.13.63q0,1.72,0,3.43C10.42,7,9.83,7.21,9,6.71ZM8.95,4.55c0-.73-.39-1.18-1-1.16A1,1,0,0,0,7,4.55,1.06,1.06,0,0,0,8,5.73C8.58,5.71,9,5.23,8.95,4.55Z" /><path className="cls-1" d="M15.16,2a2.39,2.39,0,0,1,2.48,2.54,2.49,2.49,0,1,1-5,0A2.37,2.37,0,0,1,15.16,2Zm1,2.53a1,1,0,0,0-1-1.17c-.57,0-1,.45-1,1.13a1.08,1.08,0,0,0,.92,1.21A1,1,0,0,0,16.13,4.56Z" /><path className="cls-1" d="M10.86,3.47c0-.88,0-1.76,0-2.65,0-.54.27-.84.71-.82a.72.72,0,0,1,.76.8c0,1.78,0,3.57,0,5.35,0,.59-.28.86-.76.85s-.7-.29-.7-.89C10.86,5.23,10.86,4.35,10.86,3.47Z" /></svg>
                                        </div>

                                        <span>
                                            <Link to={"#"}>0888.229.079</Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
                            <div className='footer_item'>
                                <h2 className='feedBack'>PHẢN HỒI</h2>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-email">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Your Email" aria-label="Username" aria-describedby="basic-email" />
                                </div>
                                <div className="input-group">
                                    <textarea className="form-control" rows={"4"}></textarea>
                                </div>
                                <button className='btn btn_SendFeedBack w-100 mt-3'>Send</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='footerBottom'>
                <div className='innhanh_80'>
                    <p>© Coppyright by innhanh79.vn. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;