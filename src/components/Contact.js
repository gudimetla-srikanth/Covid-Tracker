import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Contact({ val }) {
  const Navigate=useNavigate();
  const dispatch=useDispatch()
  const navigating=()=>{
    dispatch({type:"CURRENT_ITEM",payload:{
      firstname:val.firstname,
      lastname:val.lastname,
      status:val.status
    }})
    Navigate('/contactview')
  }
  const name=val.firstname+" "+val.lastname;
  return (
    <div className='bg-sky-500 m-1'>
      <div> <div>{name}</div>
      <div onClick={navigating}>View Contact</div></div>
    </div>
  )
}
