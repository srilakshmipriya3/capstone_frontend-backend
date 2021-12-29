import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import Navigation from './common/Navigation';
import ProductDetails from './components/product/ProductDetails';
//import Product from './components/product/ProductDetails';
//import Home from './components/home/Home';


// ReactDOM.render(
// <BrowserRouter><Navigation/></BrowserRouter>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <BrowserRouter><ProductDetails/></BrowserRouter>,
    document.getElementById('root')
  );