import React from 'react';
import { BrowserRouter } from "react-router-dom"
import './App.scss';
import Footer from './Components/Footer/Footer';
import Hearder from './Components/Hearder/Hearder';
import RouterConfig from './Config/Router/RouterConfig';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Hearder />
        <RouterConfig />
        <Footer />

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
