import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function CreateContactPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userdata, setUserdata] = useState({
        firstname: "",
        lastname: "",
        status: ""
    })
    const handle = (e) => {
        const { name, value, id } = e.target;
        if (id) {
            setUserdata({
                ...userdata, status: id,
            })
        } else {
            setUserdata({
                ...userdata, [name]: value,
            })
        }
    }
    const handle1 = () => {
        dispatch({ type: "ADD_ITEM", payload: userdata })
        navigate('/')
    }
    return (
        <div className='text-center'>
            <div className='pt-5 pl-5 pb-5 pr-5 text-lg font-bold'>
                Firstname :
                <input type="text" name="firstname" value={userdata.firstname} onChange={handle} />
            </div>
            <div className='pt-5 pl-5 pb-5 pr-5 text-lg font-bold'>
                Lastname :
                <input type="text" name="lastname" value={userdata.lastname} onChange={handle} />
            </div>
            <div className='pt-5 pl-5 pb-5 pr-5 text-lg font-bold'>
                status:
                <span className='pl-4'>
                Active:<span className='pl-1'><input type='radio' name='status' value={userdata.status} id='active' onChange={handle} /></span>
                </span>
                <span className='pl-2'>
                Inactive:<span className='pl-1'><input type='radio' name='status' value={userdata.status} id='Inactive' onChange={handle} /></span>
                </span>
            </div>
            <div className='pt-5 pl-5 pb-5 pr-5 text-lg font-bold'>
                <button className='bg-sky-500/100 rounded-lg' onClick={handle1}>save contact</button>
            </div>
        </div>
    )
}
