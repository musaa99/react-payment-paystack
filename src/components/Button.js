import React from 'react'

const Button = ({text, onClick, disabled}) => {
  return (
    <button
      className='w-[300px]  p-[20px] rounded-[4px] bg-primary text-white hover:opacity-[0.8]'
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button;