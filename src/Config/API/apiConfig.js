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
                    console.log(err)
                })
            },
            Login: async (userName, pass, key, navigate) => {
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
                    navigate("/admin/dashboard")
                }).catch((err) => {
                    console.log(err)
                })
            },
            Logout: async () => {

            }
        },
        Image: {
            GetListImage: async (type, dispath, action) => {
                await axios({
                    method: "get",
                    url: baseURL + `/admin/listImage/${type}`,
                }).then((res) => {
                    dispath(action(res.data.listImage));
                }).catch((err) => {
                    alert(err)
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