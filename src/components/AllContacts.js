import React from 'react'
import { useSelector } from 'react-redux'
import Contact from './Contact'

export default function AllContacts() {
    const state=useSelector((state)=>state.contactr)
  return (
    <div className='flex flex-wrap pl-10 pr-10 '>
    {state.map((val)=> <Contact val={val}/>)}
    </div>
  )
}
