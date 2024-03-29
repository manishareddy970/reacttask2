import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './heading';
import Jello from './name';
import Kello from './carrer';
import Lello from './tech';
import Mello from './edu';
import Api from './table';
import Fake from './fakeapi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hello />
    <Jello/>
    <Kello/>
    
    <Mello/>
    <Lello/> */}
    {/* <Api/> */}
    <Fake/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
