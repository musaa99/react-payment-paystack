import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Navbar from './Navbar';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className='mx-auto  m-[4rem] mb-4 w-[70%] '>
    <Navbar/>

    </div>
      <div className='mx-auto bg-white p-[4rem] w-[70%] flex justify-between'>

        <Button text='View Products' onClick={()=> navigate('/products')} />
        <Button text='View Transactions' onClick={()=> navigate('/transactions')} />
      </div>
    </>
  )
}

export default Home;