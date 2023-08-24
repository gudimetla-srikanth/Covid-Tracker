import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const handle = () => {
    navigate('/createpage');
  }
  return (
    <div className='text-center pt-10 text-lg font-bold w-auto '>
      <button className='bg-sky-500/100' onClick={handle}>create contact</button>
    </div>
  )
}
