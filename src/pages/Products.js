import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { acceptPayment } from '../services';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    const getProducts = async() => {
      const data = await axios.get('https://fakestoreapi.com/products');
      setProductsData(data.data);
    }
    getProducts()
  }, []);

  const paynow = async(amount) => {
    if (amount && email) {
      amount = amount * 100;
      const authorize = await acceptPayment(amount, email)
      authorize && window.open(authorize?.data.authorization_url, '_blank', 'noreferrer')
    }
  }

  return (
    <>
      {openModal &&
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <p className='text-center font-bold mb-[2rem]'> {currentItem?.title} </p>
          <div className="flex items-center justify-around">
            <div className='flex flex-col mb-[20px]'>
              <label>Email</label>
               <input
                type="text"
                id="email"
                placeholder='Enter email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-auto border-solid border-[1px] border-primary'
              />
            </div>
              <Button
                text='Proceed to Pay'
                onClick={()=> paynow(currentItem?.price)}
                disabled={!email}
              />
          </div>
        </Modal>
      }
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {productsData?.length > 0 && productsData?.map((item => (
          <Card
            key={item.id}
            onClick={() => { setOpenModal(true); setCurrentItem(item)}}
            image = {item.image}
            title = {item.title}
            price = {item.price}
          />
        )))}

      </div>
    </>
  )
}

export default Products;