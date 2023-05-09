import React, { useEffect, useState } from 'react'
import UsersApp from './UsersApp'
import {useParams} from 'react-router-dom'
import Base from '../Base/Base';
import {useHistory} from 'react-router-dom'

const UpdateUsers = ({user,setUsers}) => {
    const {id} = useParams();
    const editUser = user[id];
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
   const history = useHistory();
    useEffect(()=>{
     
        setName(editUser.name)
        setGender(editUser.gender)
        setQualification(editUser.qualification)
    },[editUser])
    
    function updateUsers (){
       const updatedObject = {
        name,
        gender,
        qualification
       }

       console.log(updatedObject)
       user[id] = updatedObject
       setUsers([...user])
       history.push("/")
    }
  
    return (
        <Base
        title={"Edit a User"}
        Description={"Edit Users data here"}
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
        onClick={updateUsers}
        >Update Userss</button>
    </div>
    </Base>
  )
}

export default UpdateUsers
