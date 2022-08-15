import React from 'react';
import { BrowserRouter } from "react-router-dom"
import './App.scss';
import Footer from './Components/Footer/Footer';
import Hearder from './Components/Hearder/Hearder';
import RouterConfig from './Pages/Router/RouterConfig';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Hearder />
        <RouterConfig />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
