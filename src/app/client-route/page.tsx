"use client"

import { useTheme } from "@/components/theme-provider"
import { serverSideFuntion } from "../utils/server-utils"

export default function ClientRendering(){
    const theme = useTheme()
    const settings = {
        dots: true,
    }

    return(
        <>
            <h1 style={{color: theme.colors.primary}}>CLIENT</h1>
        </>
    )
}