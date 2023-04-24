import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Navbar from './Navbar';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className=''>
    <div className='mx-auto m-[4rem] mb-4 w-[full] md:w-[70%] '>
    <Navbar/>

    </div>
      <div className='grid gap-4 justify-center m-4  '>

        <Button text='View Products' onClick={()=> navigate('/products')} />
        <Button text='View Transactions' onClick={()=> navigate('/transactions')} />
      </div>
    </div>
  )
}

export default Home;