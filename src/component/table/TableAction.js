import React from 'react'

export default function TableAction({id,viewAct,editAct,deleteAct}) {

    const viewAction = () =>{
        viewAct(id);
    }

    const editAction = () =>{
        editAct(id);
    }

    const deleteAction = () =>{
        deleteAct(id);
    }

    return (
        <>
            {/* <button onClick={viewAction}  className="mr-2 focus:outline-none hover:opacity-75 btn-action w-10 h-10 shadow text-gray-300 rounded-full bg-green-500 flex">
                <svg className="m-auto fill-current"  width="20" height="20" viewBox="0 0 511.626 511.626"><g fill=""><path d="M505.918 236.117c-26.651-43.587-62.485-78.609-107.497-105.065-45.015-26.457-92.549-39.687-142.608-39.687s-97.595 13.225-142.61 39.687C68.187 157.508 32.355 192.53 5.708 236.117 1.903 242.778 0 249.345 0 255.818c0 6.473 1.903 13.04 5.708 19.699 26.647 43.589 62.479 78.614 107.495 105.064 45.015 26.46 92.551 39.68 142.61 39.68 50.06 0 97.594-13.176 142.608-39.536 45.012-26.361 80.852-61.432 107.497-105.208 3.806-6.659 5.708-13.223 5.708-19.699 0-6.473-1.902-13.04-5.708-19.701zm-311.35-78.087c17.034-17.034 37.447-25.554 61.242-25.554 3.805 0 7.043 1.336 9.709 3.999 2.662 2.664 4 5.901 4 9.707 0 3.809-1.338 7.044-3.994 9.704-2.662 2.667-5.902 3.999-9.708 3.999-16.368 0-30.362 5.808-41.971 17.416-11.613 11.615-17.416 25.603-17.416 41.971 0 3.811-1.336 7.044-3.999 9.71-2.667 2.668-5.901 3.999-9.707 3.999-3.809 0-7.044-1.334-9.71-3.999-2.667-2.666-3.999-5.903-3.999-9.71 0-23.79 8.52-44.207 25.553-61.242zm185.299 191.01c-38.164 23.12-79.514 34.687-124.054 34.687-44.539 0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222c28.931-44.921 65.19-78.518 108.777-100.783-11.61 19.792-17.417 41.207-17.417 64.236 0 35.216 12.517 65.329 37.544 90.362s55.151 37.544 90.362 37.544c35.214 0 65.329-12.518 90.362-37.544s37.545-55.146 37.545-90.362c0-23.029-5.808-44.447-17.419-64.236 43.585 22.265 79.846 55.865 108.776 100.783-25.31 39.022-57.046 70.095-95.21 93.222z"></path></g></svg>
            </button> */}
            <button onClick={editAction} className="mr-2 focus:outline-none hover:opacity-75 btn-action w-10 h-10 shadow text-gray-300 rounded-full bg-yellow-500 flex">
                <svg className="m-auto fill-current" width="20" height="20" viewBox="0 0 24 24"><g fill=""><path fill="" d="M22.3,3.9l-2.2-2.2c-1.1-1.1-3.1-1.1-4.2,0L2.3,15.3c-0.1,0.1-0.1,0.2-0.2,0.3c0,0,0,0.1,0,0.1 c0,0,0,0.1,0,0.1l-1,6c-0.1,0.3,0.1,0.6,0.3,0.9C1.5,22.9,1.7,23,2,23c0.1,0,0.1,0,0.2,0l6-1c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0 c0.1,0,0.2-0.1,0.3-0.2L22.3,8.1C23.5,7,23.5,5,22.3,3.9z M17,10.6L13.4,7l2.3-2.3l3.6,3.6L17,10.6z"></path></g></svg>
            </button>
            <button onClick={deleteAction} className="mr-2 focus:outline-none hover:opacity-75 btn-action w-10 h-10 shadow text-gray-300 rounded-full bg-red-500 flex">
                <svg className="fill-current m-auto"  width="20" height="20" viewBox="0 0 24 24"><g fill=""><path fill="" d="M3,8v15c0,0.552,0.448,1,1,1h16c0.552,0,1-0.448,1-1V8H3z M9,19H7v-6h2V19z M13,19h-2v-6h2V19z M17,19h-2v-6 h2V19z"></path> <path d="M23,4h-6V1c0-0.552-0.447-1-1-1H8C7.447,0,7,0.448,7,1v3H1C0.447,4,0,4.448,0,5s0.447,1,1,1 h22c0.553,0,1-0.448,1-1S23.553,4,23,4z M9,2h6v2H9V2z"></path></g></svg>
            </button>
        </>
    )
}