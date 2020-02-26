import React,{useState,createContext,useEffect} from 'react';
const LOCAL_STORAGE_KEY = 'bczadmin.user'
export const UsersContext = createContext();

export const UsersProvider = (props) => {
    const [users,setUser] = useState([
        // {
        //     id : '1',
        //     username : 'admin',
        //     firstname : 'Made',
        //     lastname : 'Witarsana',
        //     password : '12345'
        // },
        
    ]);

    useEffect(()=>{
        const storedUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedUsers) setUser(storedUsers)
    },[])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(users))
    },[users])

    return (
        <UsersContext.Provider value={[users,setUser]}>
            {props.children}
        </UsersContext.Provider>
    );
}