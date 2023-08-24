import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='h-screen bg-slate-500'>
      <div className='pt-5 pl-5 pb-2 pr-5 text-lg font-bold'>
        <Link to='/createpage'>Creact Contact</Link>
      </div>
      <div className='pt-5 pl-5 pb-2 pr-5 text-lg font-bold'>
        <Link to='/contacts'>Contacts</Link>
      </div>
      <div className='pt-5 pl-5 pb-5 pr-5 text-lg font-bold'>
        <Link to='/chartandmap'>Charts and Graphs</Link>
      </div>
    </div>
  )
}
