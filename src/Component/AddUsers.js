import React, { useState } from 'react'
import UsersApp from './UsersApp'
import Base from '../Base/Base'
import {useHistory} from 'react-router-dom'

const AddUsers = ({user,setUsers}) => {
  const history = useHistory();
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
    const createUser = () =>{
        //creating object from input states
       const newUser = {
        name,
        gender,
        qualification,
       }
       setUsers([...user, newUser])
       history.push("/");
    }
    return (
      <Base
      title={"Add New Users"}
      Description={"We can able add new Users Data"}
      >
      
    <div>
        <input 
        placeholder='Enter Name'
        type='text'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <input 
        placeholder='Gender'
        type='text'
        value={gender}
        onChange={(e)=>setGender(e.target.value)}
        />
        <input 
        placeholder='Qualification'
        type='text'
        value={qualification}
        onChange={(e)=>setQualification(e.target.value)}
        />
        <button 
        onClick={createUser}
        >Add Userss</button>
    </div>
    </Base>
  )
}

export default AddUsers
