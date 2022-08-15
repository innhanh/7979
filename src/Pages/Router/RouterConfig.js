import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from '../Home/HomePage';
import IntroPage from '../Intro/Intro';

import Payments from '../Payment/Payments';
import Regulation from '../Regulation/Regulation';
import Contact from '../Contact/Contact';
import InBanVe from '../Categorys/BV/InBanVe';

import InDecalKhoLon from "../Categorys/QC/InDecal/InDecalKhoLon";
import InPP from '../Categorys/QC/InPP/InPP';

import InBaoThu from '../Categorys/InNhanh/InBaoThu/InBaoThu';
import InCatalogue from '../Categorys/InNhanh/InCatalogue/InCatalogue';
import InFolder from '../Categorys/InNhanh/InFolder/InFolder';
import InGiayTieuDe from '../Categorys/InNhanh/InGiayTieuDe/InGiayTieuDe';
import InHoaDon from '../Categorys/InNhanh/InHoaDon/InHoaDon';
import InMenu from '../Categorys/InNhanh/InMenu/InMenu';
import InNameCard from '../Categorys/InNhanh/InNameCard/InNameCard';
import InNDTH from '../Categorys/InNhanh/InNDTH/InNDTH';
import InNoteBook from '../Categorys/InNhanh/InNoteBook/InNoteBook';
import InOffset from '../Categorys/InNhanh/InOffset/InOffset';
import InPhotoBook from '../Categorys/InNhanh/InPhotoBook/InPhotoBook';
import InToRoi from '../Categorys/InNhanh/InToRoi/InToRoi';
import InTuiGiay from '../Categorys/InNhanh/InTuiGiay/InTuiGiay';
import DecalSticker from '../Categorys/DecalSticker/DecalSticker';

import Design from '../Categorys/Design/Design';

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



        </Routes>
    );
}

export default RouterConfig;
