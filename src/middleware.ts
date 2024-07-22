import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest){
    if(req.nextUrl.pathname === '/world'){
        return NextResponse.redirect(new URL("/", req.url))
    }
}