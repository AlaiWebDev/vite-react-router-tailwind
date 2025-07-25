import {useState,useEffect} from "react";
function Modal() {
    const [users,setUsers] = useState([]);
  const getUsers = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setUsers(json);

  }
  useEffect(() => {
    getUsers();
    
  },[]);
  return (
    <h2>{users.name}</h2>
  )
}

export default Modal
