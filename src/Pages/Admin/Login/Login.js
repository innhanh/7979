import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { ApiConfig } from '../../../Config/API/apiConfig';
import KeySvg from '../../../Config/icon/KeySvg';
import PasswordSvg from '../../../Config/icon/passwordSvg';
import UserSvg from '../../../Config/icon/UserSvg';
import { loginAdminSuccess } from '../../../Redux/Slice/AdminSlice';
import "./login.scss";
function Login(props) {
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [key, setKey] = useState("");
    const [admin, setAdmin] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [showKey, setShowKey] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const Login = async () => {
        await ApiConfig.Admin.Authen.Login(userName, pass, key, navigate, dispatch, loginAdminSuccess)
    };
    return (
        <div className='adminLogin innhanh_fade'>
            <div className='adminLogin-content'>
                <div className='adminLogin-hearder'></div>
                <div className='adminLogin-main'>
                    <div className='adminLogin_main_content'>
                        <div className='adminLogin_main_content_item'>
                            <h1>Sign up now</h1>

                            <div className='typeLogin'>
                                <div className="admin">
                                    <input type="radio" name="admin" id="admin" value={admin} checked={admin} onChange={() => setAdmin(true)} />
                                    <label className="form-check-label" for="admin">
                                        Admin
                                    </label>
                                </div>
                                <div className="staff">
                                    <input type="radio" name="staff" id="staff" value="option1" checked={!admin} onChange={() => setAdmin(false)} />
                                    <label className="form-check-label" for="staff">
                                        Staff
                                    </label>
                                </div>
                            </div>

                            <div className='userName'>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><UserSvg /></span>
                                    </div>
                                    <input className='input_info form-control' onChange={(e) => setUserName(e.target.value)} value={userName} type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>

                            <div className='password'>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-password"><PasswordSvg /></span>
                                    </div>
                                    <input className='input_info form-control' onChange={(e) => setPass(e.target.value)} value={pass} type={showPass ? "text" : "password"} placeholder="Password" aria-label="Password" aria-describedby="basic-password" />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-password"><i className="fa fa-eye btn_showPass" onClick={() => setShowPass(!showPass)}></i></span>
                                    </div>
                                </div>
                            </div>
                            {
                                admin &&
                                <div className='keyAdmin'>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-keyAdmin"><KeySvg /></span>
                                        </div>
                                        <input className='input_info form-control' onChange={(e) => setKey(e.target.value)} value={key} type={showKey ? "text" : "password"} placeholder="Key Admin" aria-label="KeyAdmin" aria-describedby="basic-keyAdmin" />

                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-password"><i className="fa fa-eye btn_showPass" onClick={() => setShowKey(!showKey)}></i></span>
                                        </div>
                                    </div>
                                </div>
                            }


                            <div className="btn-group w-100" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-primary w-100">SIGN UP</button>
                            </div>

                            <div className='login_footer'>
                                <p>or sign up with:</p>
                                <div className='login_icon'>
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-google"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-github"></i>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;