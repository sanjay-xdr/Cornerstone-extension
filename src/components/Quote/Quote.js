import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./Quote.css"


export default function Quote() {

    const [quote,setQuote] = useState(null);
   


useEffect(()=>{
    const fetchdata=(async ()=>{
        try {
          const res = await axios.get(
            "https://api.quotable.io/random?maxLength=110"
          );
       
          setQuote(res.data)
        

        } catch (error) {
          console.error(error);
        }
      })()
},[])

  return (
      <div className='container'>
      
  {quote===null ? <p className='error'>Loading Quote... </p> : <div className='quote'>
  <q>{quote.content}</q> 
  <p className='author '>by {quote.author}</p>
  </div> }
      </div>
   
  )
}
