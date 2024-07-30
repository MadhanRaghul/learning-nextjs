"use client"

import { useState } from "react"
import { login, logout, toggleModerator} from "@/redux/features/authSlice"
import { UseSelector, useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"

export default function LogIn(){
    const [username, setUsername] = useState("")
    const dispatch = useDispatch<AppDispatch>()

    const handleLogIn = () => {
        dispatch(login(username))
    }

    const handleLogOut = () => {
        dispatch(logout())
    }

    const handleToggle = () => {
        dispatch(toggleModerator())
    }

    return (
        <>
            <input type="text" onChange={(e) => setUsername(e.target.value)} className=" border-2 border-gray-300 h-10 rounded"/> <br />
            <button onClick={handleLogIn} className=" bg-green-200 w-20 p-2 rounded">Log in</button> <br />
            <button onClick={handleLogOut} className=" bg-red-200 w-20 p-2 rounded">Log out</button> <br />
            <button onClick={handleToggle} className=" bg-blue-200 w-20 p-2 rounded">Toggle</button> <br />
        </>
    )
}