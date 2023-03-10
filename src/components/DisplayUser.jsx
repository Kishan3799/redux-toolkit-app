import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {MdDeleteForever} from 'react-icons/all.js'
import { removeUser } from '../stroe/slice/UserSlice';

const DisplayUser = () => {
    const dispatch = useDispatch();
    const data = useSelector((state)=> {
        return state.users
    })

    const deleteUser = (id)=>{
        dispatch(removeUser(id))
    }
   
  return (
    data.map((user,id)=> {
        return <li className='detailList' key={id}>
            {user}
            <button className='btn-delete' onClick={()=> deleteUser(id)}>
            <MdDeleteForever className='delete-icon'/> 
            </button>
            </li>
    })
  )
}

export default DisplayUser
