import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ApiConfig } from '../../../Config/API/apiConfig';
import "./register.scss"

function Register(props) {
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [key, setKey] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

    const navigate = useNavigate();

    const HandleRegister = async () => {
        await ApiConfig.Admin.Authen.Register(userName, pass, email, tel, key, navigate)
    };
    return (
        <div className='adminRegister'>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    {/* <!-- Tabs Titles --> */}

                    {/* <!-- Icon --> */}
                    <div className="fadeIn first">
                        <div className='innhanh_title mt-5'>
                            <h3 className='mb-3'>Register <span>ADMIN</span></h3>
                        </div>
                    </div>

                    {/* <!-- Login Form --> */}
                    <div>
                        <input type="text" id="userName" className="fadeIn second" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} value={userName} />
                        <input type="text" id="password" className="fadeIn third" placeholder="Passworld" onChange={(e) => setPass(e.target.value)} value={pass} />

                        <input type="text" id="key" className="fadeIn fourth" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <input type="text" id="key" className="fadeIn fourth" placeholder="Tel" onChange={(e) => setTel(e.target.value)} value={tel} />
                        <input type="text" id="key" className="fadeIn fourth" placeholder="Key Admin" onChange={(e) => setKey(e.target.value)} value={key} />

                        <input type="button" className="fadeIn five" value="Register" onClick={() => HandleRegister()} />
                    </div>

                    {/* <!-- Remind Passowrd --> */}
                    <div id="formFooter">
                        <Link className="underlineHover mr-2" to={"#"}>Forgot Password?</Link>
                        <Link className="underlineHover ml-2" to={"/admin/register"}>Register now?</Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Register;