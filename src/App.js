import './App.css';
import Base from './Base/Base';
import AddUsers from './Component/AddUsers';
import UpdateUsers from './Component/UpdateUsers';
import UsersApp from './Component/UsersApp';
import {  Route } from 'react-router-dom';
import data from './Data/Data';
import { useState } from 'react';

function App() {
  const [user, setUsers] = useState(data);
  return (
    <div className="App">
     <Route exact path = "/">
      <UsersApp
      user = {user}
      setUsers = {setUsers}
      />
     </Route>
     
     <Route  path = "/add">
      <AddUsers
      user = {user}
      setUsers = {setUsers}
      />
     </Route>

     <Route  path = "/update/:id">
      <UpdateUsers
       user = {user}
       setUsers = {setUsers}
      />
     </Route>
    </div>
  );
}

export default App;
