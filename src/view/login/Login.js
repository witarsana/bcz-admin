import React,{useState,useRef,useContext,useEffect} from 'react'
import {UsersLoginContext} from '../../storage/UserLoginContext';
import {Redirect,withRouter,useHistory  } from 'react-router-dom';
//css
import '../../styles/Login.css'

function Login(props) {

    const [userslogin,setUserLogin] = useContext(UsersLoginContext);
    const [status,setStatus] = useState(true);
    const userName = useRef();
    const password = useRef();
    let history = useHistory();

    const login = ()=>{
        if (userName.current.value === 'admin' && password.current.value ==='admin'){
            setUserLogin({username:userName.current.value, password: password.current.value});
            setStatus(true);
            history.push('/admin');
            //sad finnally add this line, 
            //history push doesn't work in some condition
            window.location.href= "/admin";
        }else{
            setStatus(false);
        }
    }

    return (
        <>
        
        <div className="container w-screen h-screen flex">
            <div className="box m-auto flex flex-col items-center">
                <img className="logo" src={require("../../assets/img/logo.png")}/>
                <div className="box-input flex flex-col mt-10">
                    <div className="input-box text-gray-500 flex justify-between items-center px-4 py-2 w-full h-8 bg-white rounded-full mb-3">
                        <span className="icon">
                            <svg className="fill-current" width="14" height="14" viewBox="0 0 32 32"><path d="M27.711,21.887C25.332,21.026,21.368,20,16,20s-9.332,1.026-11.711,1.887 C2.322,22.598,1,24.486,1,26.587V31c0,0.552,0.448,1,1,1h28c0.552,0,1-0.448,1-1v-4.413C31,24.486,29.678,22.598,27.711,21.887z"></path> <path fill="" d="M16,18c4.411,0,8-3.589,8-8V8c0-4.411-3.589-8-8-8S8,3.589,8,8v2C8,14.411,11.589,18,16,18z"></path></svg>
                        </span>
                        <input ref={userName} type="text" placeholder="Username" className="flex-1 text-sm font-bold focus:outline-none ml-3"/>
                    </div>
                    <div className="input-box text-gray-500 flex justify-between items-center px-4 py-2 w-full h-8 bg-white rounded-full mb-6">
                        <span className="icon">
                            <svg className="fill-current"  width="14" height="14" viewBox="0 0 32 32"><g fill=""><path fill="" d="M27,10h-4V7c0-3.86-3.14-7-7-7S9,3.14,9,7v3H5c-0.552,0-1,0.448-1,1v20c0,0.552,0.448,1,1,1h22 c0.552,0,1-0.448,1-1V11C28,10.448,27.552,10,27,10z M17,22.858V26h-2v-3.142c-1.72-0.447-3-2-3-3.858c0-2.206,1.794-4,4-4 s4,1.794,4,4C20,20.858,18.72,22.411,17,22.858z M21,10H11V7c0-2.757,2.243-5,5-5s5,2.243,5,5V10z"></path></g></svg>
                        </span>
                        <input ref={password} type="password" placeholder="Password" className="flex-1 text-sm font-bold focus:outline-none ml-3"/>
                    </div>
                    <button onClick={login} className="btn-login  focus:outline-none text-sm  font-bold w-full h-10 bg-gray-800 rounded-full text-gray-400">Login</button>
                    <span style={status?{display:'none'}:{display:'block'}} className="text-center text-sm mt-2 text-red-300">Wrong Username or Password</span>
                    <a className="block see-available mt-8 text-center cursor-pointer text-gray-500 text-sm">Username : admin, Pasword : admin</a>
                </div>
            </div>
        </div> 
        </>
    )
}

export default withRouter(Login);
