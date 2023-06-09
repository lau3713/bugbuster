import React from 'react';

import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css';

import App from './App';

import Layout from './components/Layout'

import About from './pages/About'

import Product from './pages/Product';

import Contact from './pages/Contact';

import reportWebVitals from './reportWebVitals';




const router = createBrowserRouter([

  {

    element: <Layout />,

    children: [

      {

        path: '/',

        element: <App />

      },

      {

        path: '/qui-sommes-nous',

        element: <About />

      },

      {

        path: '/produit',

        element: <Product/>

      },

      {

        path: '/contact',

        element: <Contact />

      },

   

    ]

  }

])




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

          <RouterProvider router={router} />

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
