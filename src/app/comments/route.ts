import { comments } from "./data";

export async function GET(){
    return Response.json(comments)
}

export async function POST(req: Request){
    const comment = await req.json()
    const newcomment = {
        id: comments.length + 1,
        text: comment.text
    }
    comments.push(newcomment)
    return new Response(JSON.stringify(newcomment),{
        headers:{
            "Content-Type": "application/json"
        },
        status: 201
    })
}