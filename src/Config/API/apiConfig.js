const baseURL = "http://localhost:8000/api/v1";

const axios = require("axios");

export const ApiConfig = {
    Admin: {
        Authen: {
            Login: async (userName, pass, key) => {
                await axios({
                    method: "post",
                    url: baseURL + "",
                    data: {
                        userName: userName,
                        pass: pass,
                        key: key
                    }
                })
            },
            Logout: async () => {

            }
        }
    }
}