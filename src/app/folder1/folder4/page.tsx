import Link from "next/link";

export default function folder4(){
    return(
        <>
            <h1>FOLDER 4</h1>
            <Link href="/folder1/folder3">go to folder 3</Link>
            <Link href="/about">go to about</Link>
        </>
    )
}