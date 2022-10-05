import React, { useState } from 'react';
import "./error.scss";
import InnhanhError from "../../Access/Image/InnhanhError/bao-tri-web.jpg";
import { ApiConfig } from '../../Config/API/apiConfig';
import { CheckErrSuccess } from '../../Redux/Slice/ErrorSlice';
import { useDispatch } from 'react-redux';

function Error(props) {
    const dispatch = useDispatch();
    const [key, setKey] = useState("");
    const [type, setType] = useState(true);
    const handleCheckAdmin = async () => {
        await ApiConfig.Error.OnOfBaoTri(1, false, key);
        await ApiConfig.Error.CheckError(1, CheckErrSuccess, dispatch)
    }
    return (
        <div id='innhanh_error'>
            <div className='error-content'>
                <img src={InnhanhError} alt='InNhanh Error' />
            </div>
        </div>
    );
}

export default Error;