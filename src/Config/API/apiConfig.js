import { toast } from "react-toastify";

const baseURL = "http://localhost:8000/api/v1";


const axios = require("axios");

export const ApiConfig = {
    Admin: {
        Authen: {
            Register: async (userName, pass, email, tel, key, navigate) => {
                await axios({
                    method: "post",
                    url: baseURL + "/admin/register",
                    data: {
                        userName: userName,
                        pass: pass,
                        email: email,
                        tel: tel,
                        key: key
                    }
                }).then((res) => {
                    console.log(res.data);
                    navigate("/admin/login")
                }).catch((err) => {
                    if (err.response) {
                        toast.error(err.response.data.error)
                    } else {
                        toast.error(err)
                    }
                })
            },
            Login: async (userName, pass, key, navigate, dispatch, loginAdminSuccess) => {
                await axios({
                    method: "post",
                    url: baseURL + "/admin/login",
                    data: {
                        userName: userName,
                        pass: pass,
                        key: key
                    }
                }).then((res) => {
                    console.log(res.data);
                    dispatch(loginAdminSuccess(res.data.admin))
                    navigate("/admin/dashboard");
                }).catch((err) => {
                    console.log(err)
                })
            },
            Logout: async () => {

            }
        },
        Image: {
            GetListImage: async (dispatch, actionSuccess, type) => {
                await axios({
                    method: "get",
                    url: baseURL + `/admin/listImage/${type}`,
                }).then((res) => {
                    dispatch(actionSuccess(res.data.listImage));
                }).catch((err) => {
                    if (err.response) {
                        toast.error(err.response.data.error)
                    } else {
                        console.log("Error", err.message);
                    }
                })
            },
            UploadImage: async (type, name, photo) => {
                const formData = new FormData();
                formData.append('photo', photo);
                formData.append('type', type);
                formData.append('name', name);
                await axios({
                    method: "post",
                    url: baseURL + "/admin/upload",
                    data: formData
                }).then((res) => {
                    console.log(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }
}

export const ApiManager = {
    GetCarousel: async () => {
        await axios({
            method: "get",
            url: ""
        })
    }
}