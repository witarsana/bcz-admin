import React from 'react'
import {Switch,Route,useRouteMatch}  from 'react-router-dom'

//css
import '../../styles/Admin.css';

//component
import Nav from  '../../component/Nav';

//view
import UserList from '../user/Userlist';

export default function Admin() {
    let {path, url} = useRouteMatch();
    return (
        <div className="container-admin w-screen  flex justify-between relative">
            <div className="left-side fixed shadow-2xl h-screen z-20 flex flex-col">
                <span className="logo-box h-12  block w-full flex shadow-lg">
                    <img className="logo m-auto" src={require("../../assets/img/logo.png")}/>
                </span>
                <span className="profile-box w-full  relative flex justify-center items-center">
                    <span className="cover absolute w-full h-full "></span>
                    <img className="w-12 rounded-full shadow" src={require("../../assets/avatar/avatar2.jpg")}/>
                    <span className="ml-4 text-gray-300">
                        <h3 className="font-bold">Made Witarsana</h3>
                        <p className="font-light text-xs">Front End Developer</p>
                    </span>
                </span>
                <div className="navigation flex-1">
                    <Nav/>
                </div>
            </div>
            <div className="right-side flex-1  h-screen overflow-hidden z-10 ">
                <div className="header-right bg-gray-100 text-gray-700 w-full h-12 shadow flex justify-between items-center">
                    <div className="box-button w-12 flex  h-8 border relative cursor-pointer rounded bg-gray-200 ml-2">
                        <svg className="m-auto"  width="30" height="30" viewBox="0 0 48 48">
                            <g fill="#111111">
                                <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z"></path>
                            </g>
                        </svg>
                    </div>
                    <span className="flex-1 ml-5 text-sm font-bold">Blockchain Zoo Admin</span>
                    <ul className="flex items-center mr-5">
                        <li>
                            <a className="cursor-pointer">
                                <svg className="fill-current notification-click"  width="24" height="24" viewBox="0 0 48 48">                     
                                    <path className="notification-click" d="M24 44c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4zm12-12V22c0-6.15-3.27-11.28-9-12.64V8c0-1.66-1.34-3-3-3s-3 1.34-3 3v1.36c-5.73 1.36-9 6.49-9 12.64v10l-4 4v2h32v-2l-4-4z"></path>                     
                                </svg>
                            </a>
                        </li>
                        <li className="ml-5">
                            <a className="cursor-pointer">
                                <svg className="fill-current message-click"  width="24" height="24" viewBox="0 0 24 24">                
                                    <path className="message-click" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>                  
                                </svg>
                            </a>
                        </li>
                        <li className="ml-5">
                            <a className="cursor-pointer">
                                <img className="w-8 rounded-full border border-gray-200" src={require("../../assets/avatar/avatar2.jpg")}/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="content-right px-5 py-5 h-full overflow-y-auto flex flex-col">
                    <Switch>
                        <Route exact path={path} >
                            <UserList/>
                        </Route>
                        <Route path={`${path}/user`} >
                            <UserList/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
