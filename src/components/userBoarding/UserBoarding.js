import React , {useState}from 'react'
import "./UserBoarding.css"
import { useUserInfo } from '../../context/user-context'

export default function UserBoarding() {


    const {setUser} = useUserInfo();
    const [name,setName]=useState(null);
    const [error,setError]=useState(false);

const inputHandler=(e)=>{
  if(e.target.value){
    setError(false)
    setName(e.target.value)
  }else {
    setName(null)
  }
}

const UserBoarding=()=>{
  if(!name){
    setError(true);
  }
  else{
    setUser(name);
    localStorage.setItem("cornerstone-user",name)
  }
}



  return (
    <div className="userBoarding-screen">
    <h3 className="userBoarding-heading">Hello, Whats Your Name? </h3>
    <input
      type="text"
      className="input"
      onChange={(e) => inputHandler(e)} />

    <button onClick={UserBoarding}  className="btn">Next</button>
    {error ? <p>Enter a Valid Input</p> : ""}
  </div>
  )
}
