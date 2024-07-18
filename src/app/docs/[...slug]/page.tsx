export default function Docs({ params }:{
    params: {
        slug: string[]
    }
}){
    if(params.slug.length === 2){
        return <h2>Viewing docs for {params.slug[0]} and concept {params.slug[1]}</h2>
    } else if(params.slug.length === 1){
        return <h2>Viewing docs for {params.slug[0]}</h2>
    }
    return <h1>This is Docs page</h1>
}