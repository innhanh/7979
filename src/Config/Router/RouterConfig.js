import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from '../../Pages/Home/HomePage';
import IntroPage from '../../Pages/Intro/Intro';

import Payments from '../../Pages/Payment/Payments';
import Regulation from '../../Pages/Regulation/Regulation';
import Contact from '../../Pages/Contact/Contact';
import InBanVe from '../../Pages/Categorys/BV/InBanVe';

import InDecalKhoLon from "../../Pages/Categorys/QC/InDecal/InDecalKhoLon";
import InPP from '../../Pages/Categorys/QC/InPP/InPP';

import InBaoThu from '../../Pages/Categorys/InNhanh/InBaoThu/InBaoThu';
import InCatalogue from '../../Pages/Categorys/InNhanh/InCatalogue/InCatalogue';
import InFolder from '../../Pages/Categorys/InNhanh/InFolder/InFolder';
import InGiayTieuDe from '../../Pages/Categorys/InNhanh/InGiayTieuDe/InGiayTieuDe';
import InHoaDon from '../../Pages/Categorys/InNhanh/InHoaDon/InHoaDon';
import InMenu from '../../Pages/Categorys/InNhanh/InMenu/InMenu';
import InNameCard from '../../Pages/Categorys/InNhanh/InNameCard/InNameCard';
import InNDTH from '../../Pages/Categorys/InNhanh/InNDTH/InNDTH';
import InNoteBook from '../../Pages/Categorys/InNhanh/InNoteBook/InNoteBook';
import InOffset from '../../Pages/Categorys/InNhanh/InOffset/InOffset';
import InPhotoBook from '../../Pages/Categorys/InNhanh/InPhotoBook/InPhotoBook';
import InToRoi from '../../Pages/Categorys/InNhanh/InToRoi/InToRoi';
import InTuiGiay from '../../Pages/Categorys/InNhanh/InTuiGiay/InTuiGiay';
import DecalSticker from '../../Pages/Categorys/DecalSticker/DecalSticker';

import Design from '../../Pages/Categorys/Design/Design';
import Login from '../../Pages/Admin/Login/Login';
import Register from '../../Pages/Admin/Register/Register';
import ResetPass from '../../Pages/Admin/ResetPass/ResetPass';
import Dashboard from '../../Pages/Admin/Dashboard/Dashboard';

function RouterConfig(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        const ScrollToTop = () => {
            window.scroll(0, 0)
        };
        ScrollToTop()
    }, [pathname])

    return (
        <Routes>

            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/in-nhanh-gia-re' element={<IntroPage />} />
            <Route exact path='/thanh-toan' element={<Payments />} />
            <Route exact path='/thoa-thuan-chinh-sach' element={<Regulation />} />
            <Route exact path='/lien-he' element={<Contact />} />

            {/* BV */}
            <Route exact path='/in-ban-ve' element={<InBanVe />} />
            {/* QC */}
            <Route exact path='/in-decal-kho-lon' element={<InDecalKhoLon />} />
            <Route exact path='/in-qc-pp' element={<InPP />} />
            {/* INNHANH */}
            <Route exact path='/in-bao-thu' element={<InBaoThu />} />
            <Route exact path='/in-catalogue' element={<InCatalogue />} />
            <Route exact path='/in-folder' element={<InFolder />} />
            <Route exact path='/in-giay-tieu-de' element={<InGiayTieuDe />} />
            <Route exact path='/in-hoa-don' element={<InHoaDon />} />
            <Route exact path='/in-menu' element={<InMenu />} />
            <Route exact path='/in-namecard' element={<InNameCard />} />
            <Route exact path='/in-nhan-dang-thuong-hieu' element={<InNDTH />} />
            <Route exact path='/in-notebook' element={<InNoteBook />} />
            <Route exact path='/in-offset' element={<InOffset />} />
            <Route exact path='/in-photobook' element={<InPhotoBook />} />
            <Route exact path='/in-to-roi' element={<InToRoi />} />
            <Route exact path='/in-tui-giay' element={<InTuiGiay />} />

            {/* Decal Sticker */}
            <Route exact path='/in-tem-nhan-decal' element={<DecalSticker />} />

            <Route exact path='/thiet-ke-sang-tao' element={<Design />} />

            {/* Admin */}
            <Route exact path='/admin/login' element={<Login />} />
            <Route exact path='/admin/register' element={<Register />} />
            <Route exact path='/admin/resetPass' element={<ResetPass />} />
            <Route exact path='/admin/dashboard' element={<Dashboard />} />

        </Routes>
    );
}

export default RouterConfig;
