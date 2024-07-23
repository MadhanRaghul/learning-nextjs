import { serverSideFuntion } from "../utils/server-utils"

export default function ServerRendering(){
    console.log('Server route rendered')
    const result = serverSideFuntion()
    return(
        <>
            <h1>SERVER</h1>
            <p>{result}</p>
        </>
    )
}