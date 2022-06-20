
import './App.css';
import {useUserInfo} from "./context/user-context";
import UserBoarding from "./components/userBoarding/UserBoarding";
import Homepage from './components/Homepage/Homepage';
import { useEffect } from 'react';


function App() {

  const myStyle = {
    backgroundImage: "url('https://source.unsplash.com/random/1920x888/?night,moon')",
    height: "100vh",

    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };



  const {user,setUser} = useUserInfo();


useEffect(()=>{
  const result=localStorage.getItem("cornerstone-user")
  setUser(result);
})



  return (
    <div className="App" style={myStyle}>
 
   {user===null ? <UserBoarding/> : <Homepage/>}
    </div>
  );
}

export default App;
