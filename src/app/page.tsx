"use client"

import Link from "next/link";
import LogIn from "./log-in";
import { useAppSelector } from "@/redux/store";

export default function Home(){
    const username = useAppSelector((state) => state.authReducer.value.username)
    const isMod = useAppSelector((state) => state.authReducer.value.isMod)
    return (
        <>
            <h1>Welcome home</h1>
            <Link href="/blog">Blog</Link>
            <Link href="/product">Product</Link>
            <Link href="/login">Login</Link>
            <div className="m-5 p-3 flex flex-col w-max justify-center items-center rounded border bg-zinc-100">
                <LogIn />

                <h1>Username: {username}</h1>
                {isMod && <h1>MODERATOR</h1>}
            </div>
        </>
        
    )
}