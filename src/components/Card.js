import React from 'react'
import Button from './Button'

const Card = ({onClick, image, title, price}) => {
  return (
    <div className='flex flex-col justify-around w-[250px] md:w-[300px] h-[400px] m-[.5rem] p-[.5rem] rounded-[.5rem] bg-white'>
      <div className='w-[200px] h-[200px] mx-auto my-[1rem]'>
        <img src={image} alt={title} className='w-full h-full' />
      </div>
      <div>
        <p> {title}</p>
      </div>
      <div className='flex justify-between items-center mt-[1rem]'>
        <p className='font-bold'> Price: NGN { price }</p>
        <Button text='buy' onClick={onClick} />
      </div>
    </div>
  )
}

export default Card