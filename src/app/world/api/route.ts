import { type NextRequest } from "next/server"

export async function GET(req: NextRequest){
    const reqHeaders = new Headers(req.headers)
    console.log(reqHeaders.get("Authorization"))
    return new Response("yup")
}

