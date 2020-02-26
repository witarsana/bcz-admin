import React,{useState,createContext,useEffect} from 'react';
const LOCAL_STORAGE_KEY = 'bczadmin.userlogin'
export const UsersLoginContext = createContext();

export const UsersLoginProvider = (props) => {
    const [userlogin,setUserLogin] = useState({});

    useEffect(()=>{
        const storedUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedUsers) setUserLogin(storedUsers)
    },[])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(userlogin))
    },[userlogin])

    return (
        <UsersLoginContext.Provider value={[userlogin,setUserLogin]}>
            {props.children}
        </UsersLoginContext.Provider>
    );
}