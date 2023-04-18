import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import WeatherApp from './Weather';
import store from './redux/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
      <WeatherApp />
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import weatherReducer from './store';
// import WeatherApp from './WeatherApp';

// const store = configureStore({
//   reducer: weatherReducer
// });

// ReactDOM.render(
//   <Provider store={store}>
//     <WeatherApp />
//   </Provider>,
//   document.getElementById('root')
// );

