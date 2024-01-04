import react,{createContext,useContext,useState} from 'react'

let UserContext=createContext();

const UserAuthProvider=({children})=>{
    const[WhoIsLoggedIn,setWhoIsLoggedIn]=useState(null);
    let[IsLoggedIn,setIsLoggedIn]=useState(false);
    const[UserData,setUserData]=useState(null);

    return(
        <UserContext.Provider value={{WhoIsLoggedIn,setWhoIsLoggedIn,IsLoggedIn,
                                        setIsLoggedIn,UserData,setUserData}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserAuth=()=>{
    return useContext(UserContext);
}


export {UserAuthProvider,useUserAuth}