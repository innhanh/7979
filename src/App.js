import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom"
import './App.scss';
import Footer from './Components/Footer/Footer';
import Hearder from './Components/Hearder/Hearder';
import RouterConfig from './Config/Router/RouterConfig';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { ApiConfig } from './Config/API/apiConfig';
import { Selector } from './Redux/Selector';
import Error from './Components/Error/Error';
import { MaintenanceSuccess } from './Redux/Slice/MaintenanceSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const CheckMaintenance = async () => {
      await ApiConfig.Maintenances.CheckMaintenances(dispatch, MaintenanceSuccess);
    };
    CheckMaintenance();
  }, []);

  const Err = useSelector(Selector.Maintenance.SelectorMaintenance);
  console.log(Err)


  return (
    <div className="App">
      <BrowserRouter>

        {
          Err === true ?
            <Error />
            :
            <>
              <Hearder />
              <RouterConfig />
              <Footer />
            </>
        }



        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
