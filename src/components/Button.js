import React from 'react'

const Button = ({text, onClick, disabled}) => {
  return (
    <button
      className='w-auto p-[4px] rounded-[4px] bg-primary text-white hover:opacity-[0.8]'
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button;