"use client"

import { serverSideFuntion } from "../utils/server-utils"

export default function ClientRendering(){
    console.log('This is public')
    const result = serverSideFuntion()
    return(
        <>
            <h1>CLIENT</h1>
            <p>{result}</p>
        </>
    )
}