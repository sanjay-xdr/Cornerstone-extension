import React, { useEffect, useState } from 'react'
import { useUserInfo } from '../../context/user-context';
import MainFocus from '../MainFocus/MainFocus';
import "./Homepage.css"

export default function Homepage() {

    const [time,setTime] = useState(null);
    const {user}=useUserInfo();





    useEffect(()=>{
        setInterval(() => {
            var time = new Date();
            let a = time.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true
            });
          
            setTime(a);
         
          }, 1000);
          
    })


    
  return (
    <div>
      <div className='homepage'>
     
        <h1 className='homepage-time'>{time}</h1>
       <h3 className='username'>Hello {user}</h3>
     
    
      <MainFocus/>
    
      </div>
     
       
    


    </div>
  )
}
