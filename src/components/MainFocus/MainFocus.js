import React ,{useState,useEffect} from 'react'
import Quote from '../Quote/Quote';
import { Weather } from '../Weather';
import "./MainFocus.css"

export default function MainFocus() {

    const [focusMode,setFocusMode]= useState(true)
    const [isChecked,setIsChecked]= useState(false)


    const [task,setTask]= useState();

    const TaskHandler=()=>{
        setFocusMode(false);
        localStorage.setItem("cornerstone-task",task)
    }

    useEffect(() => {
        setIsChecked(JSON.parse(localStorage.getItem("isChecked")) || isChecked);
        if (localStorage.getItem("cornerstone-task") !== null) {
            setTask(localStorage.getItem("cornerstone-task"));
            setFocusMode(false);
        }
      }, [isChecked]);




  return (
    <div className='mainfocus'>
      <div>
      <h2 className='title'>My Main Focus for today is </h2>
      </div>
       
           {focusMode ?
            
            <div className='focusmode'>
       <input type="text" className='input' value={task} onChange={(e)=>setTask(e.target.value)} />
             <button onClick={TaskHandler} className="btn">Lets do this</button>

            </div>
           
          : 
            <div>
               <input type="checkbox" name="task"  checked={isChecked}  onChange={()=>{
                       setIsChecked(item=>!item)
                       localStorage.setItem("isChecked",!isChecked)

                       
               }} />
               <label htmlFor="task" className='task' style={{textDecoration : isChecked ? "line-through" :"none"}}>{task}</label>

               {!isChecked && <button className='btn' onClick={()=>setFocusMode(true)}>Edit</button>}
                <button className='btn' onClick={()=>{
                    setTask("")
                    setFocusMode(true)
                    localStorage.removeItem("cornerstone-task")
                    setIsChecked(false)
                    localStorage.setItem("isChecked",false)
                }}>Delete</button>
            </div>
          
         } 
      

         <Quote/>
         <Weather/>

    </div>
  )
}
