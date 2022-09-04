import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import BackToHome from '../../../Components/BackToHome/BackToHome';
import { ApiConfig } from '../../../Config/API/apiConfig';
import KeySvg from '../../../Config/icon/KeySvg';
import PasswordSvg from '../../../Config/icon/passwordSvg';
import UserSvg from '../../../Config/icon/UserSvg';
import { loginAdminSuccess } from '../../../Redux/Slice/AdminSlice';
import "./login.scss";
function Login(props) {

    const [register, setRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [rePass, setRePass] = useState("")

    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [key, setKey] = useState("");
    const [admin, setAdmin] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [showRePass, setShowRePass] = useState(false);
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
                            {
                                register ? <h1>Register now</h1> : <h1>Sign up now</h1>
                            }

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

                            {
                                register ?
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='userName'>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1"><UserSvg /></span>
                                                    </div>
                                                    <input className='input_info form-control' onChange={(e) => setUserName(e.target.value)} value={userName} type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='email'>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-email"><UserSvg /></span>
                                                    </div>
                                                    <input className='input_info form-control' onChange={(e) => setEmail(e.target.value)} value={email} type={"email"} placeholder="Your Email" aria-label="Email" aria-describedby="basic-email" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className='userName'>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><UserSvg /></span>
                                            </div>
                                            <input className='input_info form-control' onChange={(e) => setUserName(e.target.value)} value={userName} type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                            }

                            {
                                register ?
                                    <div className='row'>
                                        <div className='col-6'>
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
                                        </div>
                                        <div className='col-6'>
                                            <div className='rePassword'>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-password"><PasswordSvg /></span>
                                                    </div>
                                                    <input className='input_info form-control' onChange={(e) => setRePass(e.target.value)} value={rePass} type={showRePass ? "text" : "password"} placeholder="RePassword" aria-label="Password" aria-describedby="basic-password" />
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-Repassword"><i className="fa fa-eye btn_showPass" onClick={() => setShowRePass(!showRePass)}></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
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
                            }

                            {
                                admin &&
                                <div className='keyAdmin innhanh_fade'>
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
                                {
                                    register ?
                                        <>
                                            <button onClick={() => Login()} type="button" className="btn btn-primary w-100">Register</button>
                                            <button onClick={() => setRegister(false)} type="button" className="btn btn-danger w-100">Cancle</button>
                                        </>

                                        :
                                        <button onClick={() => Login()} type="button" className="btn btn-primary w-100">SIGN UP</button>
                                }

                            </div>

                            <div className='login_footer'>
                                <p>or sign up with:</p>
                                <div className='login_icon'>
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-google"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-github"></i>
                                </div>
                                <div className='login_link'>
                                    <Link to={"/"}>Forgot your password?</Link>
                                    <button onClick={() => setRegister(true)} className='btn'>Register now</button>
                                </div>

                                <Link className='login_backToHome' to={"/"}>x</Link>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div >
    );
}

export default Login;