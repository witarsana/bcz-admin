import React,{useState,useRef,useContext,useEffect} from 'react';
import {UsersContext} from '../../storage/UserContext';
//uuid
import uuidv4 from 'uuid/v4'
//component
import Table from '../../component/table/Table'

//css
import '../../styles/Form.css';

export default function Userlist() {

    
    const [users,setUser] = useContext(UsersContext);
    const [testuser,setTestUser] = useState([]);
    // const [users,setUser] = useState([{
    //     id : '1',
    //     username : 'koyo',
    //     firstname : 'test',
    //     lastname : 'test',
    //     password : '12345'
    // }]);
    
    useEffect(()=>{
        setTestUser(users);
    },[users])
    
    const [showForm,setShowForm] = useState(false);
    const [statusSave,setStatusSave] = useState('');
    const [userSelect,setUserSelect] = useState({});
    const userName = useRef();
    const firstName = useRef();
    const lastName = useRef();
    const password = useRef();

    //setting which field will display
    const [tableSetting,setTableSetting] = useState([    
        {field:'username', title : 'User Name'},
        {field:'firstname', title : 'First Name'},
        {field:'lastname', title : 'Last Name'}    
    ]);


    //table operation
    const viewAct = (id) =>{
        alert('Hore' + id)
    }

    const editAct = (id) =>{
        //setUserSelect(users.find(usr=> usr.id === id));
        setStatusSave('Edit');
        const userLocal = JSON.parse(localStorage.getItem('bczadmin.user'));
        const userLoc = userLocal.find(usr=> usr.id === id)
        setUserSelect(userLoc);
        userName.current.value = userLoc.username;
        firstName.current.value = userLoc.firstname;
        lastName.current.value = userLoc.lastname;
        password.current.value = userLoc.password;
        setShowForm(true);
    }

    const deleteAct = (id) =>{
        const userLocal = JSON.parse(localStorage.getItem('bczadmin.user'));
        const newArray = userLocal.filter(usr => usr.id!==id )
        setUser(newArray);
    }

    const newAct = () =>{
        setStatusSave('New');
        cleanForm();
        setShowForm(true);
    }

    const cancelAct = () => {
        cleanForm();
        setShowForm(false);
    }

    const saveAct = () =>{
        if (userName.current.value===''){
            alert('Please fill User Name');
        }else if (firstName.current.value===''){
            alert('Please fill First Name');
        }else if (lastName.current.value===''){
            alert('Please fill Last Name');
        }else if (password.current.value===''){
            alert('Please fill Password');
        }else{
            if (statusSave==='New'){
                const newUser = [...users,{
                    id : uuidv4(),
                    username : userName.current.value,
                    firstname : firstName.current.value,
                    lastname : lastName.current.value,
                    password : password.current.value
                }]
                //alert(JSON.stringify(newUser));
                setUser(newUser);
                setShowForm(false);
            }else{
                const userLocal = JSON.parse(localStorage.getItem('bczadmin.user'));
                const index = userLocal.findIndex(el => el.id === userSelect.id);
                userLocal[index]['username'] = userName.current.value;
                userLocal[index]['firstname'] = firstName.current.value;
                userLocal[index]['lastname'] = lastName.current.value;
                userLocal[index]['password'] = password.current.value;
                setUser(userLocal);
                setShowForm(false);
            }
        }
    }



    const cleanForm = () =>{
        userName.current.value = null;
        firstName.current.value = null;
        lastName.current.value = null;
        password.current.value = null;
    }

   
    return (
        <>
            {/* Title Page */}
            <span className="title-page flex justify-between items-center">
                <span className="title flex text-gray-700 items-center">
                    <svg className="fill-current" width="24" height="24" viewBox="0 0 548.169 548.169"><g fill=""><path d="M109.634 164.452c20.179 0 37.402-7.135 51.674-21.411 14.277-14.275 21.416-31.503 21.416-51.678 0-20.173-7.139-37.401-21.416-51.678-14.272-14.275-31.496-21.414-51.674-21.414-20.177 0-37.401 7.139-51.676 21.414-14.274 14.277-21.413 31.501-21.413 51.678 0 20.179 7.139 37.403 21.413 51.678 14.275 14.272 31.499 21.411 51.676 21.411z"></path><path d="M196.569 278.519c21.413 21.406 47.248 32.114 77.516 32.114 30.269 0 56.103-10.708 77.515-32.114 21.409-21.42 32.117-47.258 32.117-77.52 0-30.264-10.708-56.101-32.117-77.515-21.412-21.414-47.246-32.121-77.515-32.121-30.268 0-56.105 10.709-77.516 32.121-21.411 21.411-32.12 47.248-32.12 77.515s10.709 56.103 32.12 77.52z"></path><path d="M438.543 164.452c20.17 0 37.397-7.135 51.671-21.411 14.274-14.275 21.409-31.503 21.409-51.678 0-20.173-7.135-37.401-21.409-51.678-14.273-14.275-31.501-21.414-51.671-21.414-20.184 0-37.407 7.139-51.682 21.414-14.271 14.277-21.409 31.501-21.409 51.678 0 20.179 7.139 37.403 21.409 51.678 14.275 14.272 31.498 21.411 51.682 21.411z"></path><path d="M512.763 164.456c-1.136 0-5.276 1.999-12.415 5.996-7.132 3.999-16.416 8.044-27.833 12.137-11.416 4.089-22.747 6.136-33.972 6.136-12.758 0-25.406-2.187-37.973-6.567.945 7.039 1.424 13.322 1.424 18.842 0 26.457-7.71 50.819-23.134 73.089 30.841.955 56.056 13.134 75.668 36.552h38.256c15.605 0 28.739-3.863 39.396-11.57 10.657-7.703 15.989-18.986 15.989-33.83.003-67.194-11.793-100.789-35.406-100.785z"></path><path d="M470.096 395.284c-1.999-11.136-4.524-21.464-7.57-30.978-3.046-9.521-7.139-18.794-12.271-27.836-5.141-9.034-11.044-16.748-17.706-23.127-6.667-6.379-14.805-11.464-24.414-15.276-9.609-3.806-20.225-5.708-31.833-5.708-1.906 0-5.996 2.047-12.278 6.14a3489 3489 0 0 0-20.841 13.702c-7.615 5.037-17.789 9.609-30.55 13.702-12.762 4.093-25.608 6.14-38.544 6.14-12.941 0-25.791-2.047-38.544-6.14-12.756-4.093-22.936-8.665-30.55-13.702a3554.86 3554.86 0 0 0-20.841-13.702c-6.283-4.093-10.373-6.14-12.279-6.14-11.609 0-22.22 1.902-31.833 5.708-9.613 3.812-17.749 8.897-24.41 15.276-6.667 6.372-12.562 14.093-17.705 23.127-5.137 9.042-9.229 18.315-12.275 27.836-3.045 9.514-5.564 19.842-7.566 30.978-2 11.136-3.331 21.505-3.997 31.121a427.043 427.043 0 0 0-.999 29.554c0 22.836 6.945 40.874 20.839 54.098 13.899 13.223 32.363 19.842 55.389 19.842h249.535c23.028 0 41.49-6.619 55.392-19.842 13.894-13.224 20.841-31.262 20.841-54.098 0-10.088-.335-19.938-.992-29.554-.676-9.616-2.007-19.986-3.998-31.121z"></path><path d="M169.303 274.088c-15.418-22.27-23.125-46.632-23.122-73.089 0-5.52.477-11.799 1.427-18.842-12.564 4.377-25.221 6.567-37.974 6.567-11.23 0-22.552-2.046-33.974-6.136-11.417-4.093-20.699-8.138-27.834-12.137-7.138-3.997-11.281-5.996-12.422-5.996C11.801 164.456 0 198.051 0 265.24c0 14.844 5.33 26.127 15.987 33.83 10.66 7.707 23.794 11.563 39.397 11.563h38.26c19.607-23.411 44.823-35.591 75.659-36.545z"></path></g></svg>
                    <h1 className="font-bold text-2xl ml-4">User Data</h1>
                </span>
                <span className="carrot text-xs">Master Data / <b>User Data</b> </span>
            </span>

            {/* Card for Table */}
            <div className="card px-4 py-8 rounded mt-10 w-full shadow bg-white flex flex-col mb-20">
                <span className="add-container flex justify-start items-center">
                    <h1 className="font-bold text-gray-700 mb-2">List of User</h1>
                    <button onClick={newAct} className="w-12 text-blue-500 hover:opacity-75 transition-opacity ease-in-out focus:outline-none rounded-full ml-4 h-12 bg-white shadow-outline flex">
                        <svg className="m-auto fill-current" width="24" height="24" viewBox="0 0 24 24"><g fill=""><path d="M23.64 9.25c-0.32-0.32-0.71-0.48-1.17-0.48h-7.12v-7.13c0-0.46-0.16-0.85-0.48-1.16-0.32-0.32-0.71-0.48-1.17-0.48h-3.28c-0.46 0-0.85 0.16-1.17 0.48-0.32 0.32-0.48 0.71-0.48 1.16v7.13h-7.13c-0.46 0-0.85 0.16-1.16 0.48s-0.48 0.71-0.48 1.17v3.28c0 0.46 0.16 0.85 0.48 1.17 0.32 0.32 0.71 0.48 1.16 0.48h7.13v7.13c0 0.46 0.16 0.85 0.48 1.16 0.32 0.32 0.71 0.48 1.17 0.48h3.28c0.46 0 0.85-0.16 1.17-0.48 0.32-0.32 0.48-0.71 0.48-1.16v-7.13h7.12c0.46 0 0.85-0.16 1.17-0.48 0.32-0.32 0.48-0.71 0.48-1.17v-3.28c0-0.46-0.16-0.85-0.48-1.17z"></path></g></svg>
                    </button>
                </span>
               
                <Table setting={tableSetting} viewact={viewAct} editact={editAct} deleteact={deleteAct} data={users}/> 
            </div>

            {/* Form CRUD */}
            <div style={showForm?{display:'flex'}:{display:'none'}} className="absolute form bg-white shadow-xl rounded flex-col">
                <div className="head-form px-5 rounded-tl rounded-tr text-white font-bold w-full bg-blue-500">User Management</div>
                <div className="form-body px-4 py-2 text-gray-700">
                    <span className="mb-2 block">
                        <label htmlFor="Username" className="text-sm font-semibold">Username</label> 
                        <input ref={userName} type="text" className="w-full rounded focus:outline-none h-8 border text-sm border-gray-200 px-2 py-2" />
                    </span>
                    <span className="mb-2 block">
                        <label htmlFor="FirstName" className="text-sm font-semibold">First Name</label> 
                        <input ref={firstName} type="text" className="w-full rounded focus:outline-none h-8 border text-sm border-gray-200 px-2 py-2" />
                    </span>
                    <span className="mb-2 block">
                        <label htmlFor="LastName" className="text-sm font-semibold">Last Name</label> 
                        <input ref={lastName} type="text" className="w-full rounded focus:outline-none h-8 border text-sm border-gray-200 px-2 py-2" />
                    </span>
                    <span className="mb-2 block">
                        <label htmlFor="Password" className="text-sm font-semibold">Password</label> 
                        <input ref={password} type="Password" className="w-full rounded focus:outline-none h-8 border text-sm border-gray-200 px-2 py-2" />
                    </span>
                    <span className="flex justify-end mt-4">
                        <button onClick={saveAct} className="px-6 mr-2 text-white focus:outline-none hover:opacity-75 text-sm font-semibold py-2 bg-blue-500 rounded-full">Save</button> 
                        <button onClick={cancelAct} className="px-6 mr-2 text-white focus:outline-none hover:opacity-75 text-sm font-semibold py-2 bg-red-500 rounded-full">Cancel</button>
                    </span>
                </div>
            </div>
        </>
    )
}
