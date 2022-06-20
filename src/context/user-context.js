import { createContext,useContext,useState } from "react";


const UserContext=createContext({user:null});


const UserProvider=({children})=>{

const [user,setUser]=useState(null);


    return <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
}




const useUserInfo=()=>useContext(UserContext);


export {UserProvider,useUserInfo};
