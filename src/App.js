import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Transactions from './pages/Transactions';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='hero-img'>
      <Routes>
        <Route path={'/products'} element={<Products />} />
        <Route path={'/*'} element={<Home />} />
        <Route path={'/transactions'} element={<Transactions data />} />
      </Routes>
    </div>
  );
};

export default App;
