import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { persistor, Store } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import LoadingPage from './Pages/Loading/LoadingPage';

import "./style/theme.scss";
import './index.scss';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LoadingPage />
  </React.StrictMode>

)
setTimeout(() => {
  root.render(
    <React.StrictMode>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          {/* <LogoLight/> */}
        </PersistGate>
      </Provider>
    </React.StrictMode>
  )
}, 3000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
