import React, { useState } from "react";
import Base from "../Base/Base";
import data from "../Data/Data";
import AddUsers from "./AddUsers";
import UpdateUsers from "./UpdateUsers";
import { useHistory } from "react-router-dom";

function UsersApp({ user, setUsers }) {
  const history = useHistory();
  // delete Functionality
  const deleteUser = (userId) => {
    const reminingUser = user.filter((user, idx) => idx !== userId);
    setUsers(reminingUser);
  };

  return (
    <Base
      title={"Users Dashboard"}
      Description={"This Page Contains all Users Data"}
    >
      <div className="card-conainer">
        {user.map((user, idx) => (
          <div className="card" key={idx}>
            <div className="content">
              <h3>{user.name}</h3>
              <p>{user.gender}</p>
              <p>{user.qualification}</p>
            </div>

            <div className="control">
              <button onClick={() => history.push(`/update/${idx}`)}>Edit user</button>{" "}
              <button onClick={() => deleteUser(idx)}>Delete user</button>
            </div>
          </div>
        ))}
      </div>
    </Base>
  );
}

export default UsersApp;
