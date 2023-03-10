import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAllUser } from '../stroe/actions';


const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const clearUser = ()=> {
    dispatch(deleteAllUser());
  }

  return (
    <button className='btn clear-btn' onClick={clearUser}>clear user</button>
  )
}

export default DeleteAllUser
