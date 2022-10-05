import { toast } from "react-toastify";
import { axiosClient } from "./AxiosClient";
const axios = require("axios");

const baseURL = "http://localhost:8000/api/v1";

export const ApiConfig = {
    Images: {
        GetImageCarousel: async (idCategory, dispatch, carouselSuccess) => {
            await axiosClient({
                method: "get",
                url: `/images/${idCategory}`
            })
                .then((res) => {
                    dispatch(carouselSuccess(res.data.images));
                })
                .catch((err) => {
                    if (err.response) {
                        toast.error(err.response.data.error)
                    } else {
                        console.log("Error", err.message);
                    }
                })
        }
    },    
    Maintenances: {
        CheckMaintenances: async (dispatch, MaintenanceSuccess) => {
            await axiosClient({
                method: "post",
                url: "/maintenances/check"
            }).then((res) => {
                dispatch(MaintenanceSuccess(res.data.Maintenance.on))
            }).catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.error)
                } else {
                    console.log("Error", err.message);
                }
            })
        }
    }
}

