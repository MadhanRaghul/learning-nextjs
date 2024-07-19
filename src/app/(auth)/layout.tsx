"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css"
import { useState } from "react";

const navLinks = [
    { name: "Login", href: "/login"},
    { name: "Register", href: "/register"},
    { name: "Forgot Password", href: "/forgot-password"}
]

export default function AuthLayout({ children }:{
    children: React.ReactNode
}){
    const pathname = usePathname()
    const [name, setName] = useState("")

    return(
        <>
            <input type="text" className=" bg-gray-400" value={name} onChange={(e) => setName(e.target.value) } />
            {navLinks.map((navLink) => {
                    const isActive = pathname.startsWith(navLink.href)
                return (
                    <Link href={navLink.href} key={navLink.name} className={isActive? "font-bold mr-4": "text-blue-400 mr-4"} >{navLink.name}</Link>
                    
                )
            }
            )}
            {children}
        </>
    )
}