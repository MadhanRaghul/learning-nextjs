import Link from "next/link"

export default function Folder1(){
    return(
        <>
            <h1>FOLDER 1</h1>
            <Link href="/folder1/folder2">go to folder 2</Link>
        </>
    )
}