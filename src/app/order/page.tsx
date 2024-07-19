"use client"

import { useRouter } from "next/navigation"

export default function Order(){
    const router = useRouter()
    const handleOrder = () => {
        console.log("order placed successfully!")
        router.push("/")
        /* router.replace("/")
        router.back()
        router.forward() */
    }
    return (
        <>
            <h1>Order page</h1>
            <button onClick={handleOrder}>place order</button>
        </>
    )
}