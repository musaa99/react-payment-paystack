import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Goods } from './data/products'

const Home = () => {
  const navigate = useNavigate()
  return (
      <div className="w-[300px] m-auto mt-20 gap-3 justify-around items-center justify-center w-full h-[40px] text-2xl ">
        {Goods.map((product) => (
          <div key={product.id} className="bg-[grey] items-center justify-center px-4 ">
            <img src={product.image} alt={product.name} placeholder="blurred" />
            <h2 className="">{product.name}</h2>
            <div className="flex justify-between">
              <span className="text-[red]">
                &#8358; {product.price}
              </span>
              <button  onClick={() => navigate("/paystack")} className='bg-[green] w-[80px]'>
                Buy
              </button>
              <button className="bg-[green] items-center  w-[50px]">
                <svg
                  width="16"
                  height="16"
                  className="icon"
                  fill="#f5ebdc"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 15.125a.75.75 0 100-1.5.75.75 0 000 1.5zm6 0a.75.75 0 100-1.5.75.75 0 000 1.5zM.875.875h2.25l2.025 9.3a1.5 1.5 0 001.5 1.2h5.775a1.5 1.5 0 001.5-1.2l1.2-6.3h-10.8"
                    stroke="#f5ebdc"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Home