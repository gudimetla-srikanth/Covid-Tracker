import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function ContactView() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.currentr);
    const Navigate = useNavigate();
    const dispatchingvalues = () => {
        dispatch({
            type: "DELETE_ITEM", payload: {
                lastname: state[0].lastname
            }
        })
        dispatch({
            type: "REMOVE_ITEM"
        })
        Navigate('/contacts')
    }
    console.log(state)
    return (
        <div className=' text-center'>
            <div>
                <div>
                    <span className='pr-1'>{state[0].firstname}</span>
                    <span>{state[0].lastname}</span>
                    <div><span>{state[0].status}</span></div>
                    <div>
                        <span className='pr-4 bg-green-600 m-1 cursor-pointer' onClick={() => Navigate('/editcontact')}>Edit</span>
                        <span className='bg-red-600'><button onClick={dispatchingvalues}>Delete</button></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
