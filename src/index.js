import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
   <Routes>
    <Route path='/*' element={
     <Provider store={store}>
      <App />
    </Provider>
  }/>
   </Routes>
  </Router>

);
