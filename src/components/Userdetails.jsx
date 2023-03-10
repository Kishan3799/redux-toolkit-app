import React from 'react'
import DeleteAllUser  from "./DeleteAllUser";
import DisplayUser from './DisplayUser';
import { fakeUserData } from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../stroe/slice/UserSlice';
const Userdetails = () => {
  const dispatch = useDispatch();
  const addNewUser = (payLoad)=> {
    console.log(payLoad);
    dispatch(addUser(payLoad));
  };
  return (
    <div className="content">
    <div className="admin-table">
      <div className="admin-subtitle">List of User Details</div>
      <button className="btn add-btn" onClick={()=> addNewUser(fakeUserData())}>Add New Users</button>
    </div>
    <ul>
      <DisplayUser/>
    </ul>
    <hr />
    <DeleteAllUser/>
  </div>
  )
}

export default Userdetails
