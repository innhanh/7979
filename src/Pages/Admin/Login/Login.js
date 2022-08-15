import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ApiConfig } from '../../../Config/API/apiConfig';
import "./login.scss";
function Login(props) {
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [key, setKey] = useState("");

    const Login = async () => {
        await ApiConfig.Admin.Authen.Login(userName, pass, key)
    };
    return (
        <div className='adminLogin mt-3 mb-5'>
            <div class="wrapper fadeInDown">
                <div id="formContent">
                    {/* <!-- Tabs Titles --> */}

                    {/* <!-- Icon --> */}
                    <div class="fadeIn first">
                        <div className='innhanh_title mt-5'>
                            <h3 className='mb-3'>Login <span>ADMIN</span></h3>
                        </div>
                    </div>

                    {/* <!-- Login Form --> */}
                    <div>
                        <input type="text" id="userName" class="fadeIn second" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} value={userName} />
                        <input type="text" id="password" class="fadeIn third" placeholder="Passworld" onChange={(e) => setPass(e.target.value)} value={pass} />
                        <input type="text" id="key" class="fadeIn fourth" placeholder="Key Admin" onChange={(e) => setKey(e.target.value)} value={key} />
                        {/* <button class="fadeIn fourth">Log In</button> */}
                        <input type="button" class="fadeIn five" value="Log In" onClick={() => Login()} />
                    </div>

                    {/* <!-- Remind Passowrd --> */}
                    <div id="formFooter">
                        <Link class="underlineHover mr-2" to={"#"}>Forgot Password?</Link>
                        <Link class="underlineHover ml-2" to={"#"}>Register now?</Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;