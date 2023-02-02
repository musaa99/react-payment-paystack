import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getTransactions } from '../services';

const Transactions = ({ data }) => {
  const [tx, setTx] = useState([]);

  useEffect(() => {
    const getProducts = async() => {
      const data = await getTransactions();
      setTx(data.data);
      console.log(data);
    }
    getProducts()
  }, [])

  return (
    <table class="table-auto bg-white mx-auto w-[70%]">
      <thead>
        <tr>
          <th className='text-left'>id</th>
          <th className='text-left'>channel</th>
          <th className='text-left'>amount</th>
          <th className='text-left'>Status</th>
          <th className='text-left'>email</th>
        </tr>
      </thead>
      <tbody>
        {tx?.map((x, index) => (
          <tr className='p-[1rem]' key={index}>
            <td className='py-[1rem]'>{x.id }</td>
            <td>{x.channel }</td>
            <td> {x.currency} {x.amount / 100 }</td>
            <td> {x.status} </td>
            <td>{x?.customer?.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Transactions;