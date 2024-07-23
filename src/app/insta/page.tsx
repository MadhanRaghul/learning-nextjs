import {Posts} from "@/components/posts"
import {Replies} from "@/components/replies"
import { Suspense } from "react"

export default function Insta(){
    return(
        <>
            <h1>INSTA</h1>
            <Suspense fallback ={<p>Loading posts...</p>}>
                <Posts />
            </Suspense>
            <Suspense fallback ={<p>Loading replies...</p>}>
                <Replies />
            </Suspense>

        </>
    )
}