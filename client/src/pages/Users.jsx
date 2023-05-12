import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import UserTableContainer from "../components/userTable/UserTable"
import {fetchUsers} from "../redux/slices/userSlice"

function Users() {
  const dispath = useDispatch();
  useEffect(() =>{
    //getUsers(1);
    dispath(fetchUsers(1));
  }, [dispath]);
  return( 
    <div className="user-page">
        <UserTableContainer/>
    </div>
  );
}

export default Users;
