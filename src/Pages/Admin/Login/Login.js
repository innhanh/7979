import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ApiConfig } from '../../../Config/API/apiConfig';
import "./login.scss";
function Login(props) {
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [key, setKey] = useState("");
    const navigate = useNavigate();

    const Login = async () => {
        await ApiConfig.Admin.Authen.Login(userName, pass, key, navigate)
    };
    return (
        <div className='adminLogin mt-3 mb-5'>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    {/* <!-- Tabs Titles --> */}

                    {/* <!-- Icon --> */}
                    <div className="fadeIn first">
                        <div className='innhanh_title mt-5'>
                            <h3 className='mb-3'>Login <span>ADMIN</span></h3>
                        </div>
                    </div>

                    {/* <!-- Login Form --> */}
                    <div>
                        <input type="text" id="userName" className="fadeIn second" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} value={userName} />
                        <input type="text" id="password" className="fadeIn third" placeholder="Passworld" onChange={(e) => setPass(e.target.value)} value={pass} />
                        <input type="text" id="key" className="fadeIn fourth" placeholder="Key Admin" onChange={(e) => setKey(e.target.value)} value={key} />
                        {/* <button className="fadeIn fourth">Log In</button> */}
                        <input type="button" className="fadeIn five" value="Log In" onClick={() => Login()} />
                    </div>

                    {/* <!-- Remind Passowrd --> */}
                    <div id="formFooter">
                        <Link className="underlineHover mr-2" to={"/admin/resetPass"}>Forgot Password?</Link>
                        <Link className="underlineHover ml-2" to={"/admin/register"}>Register now?</Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;