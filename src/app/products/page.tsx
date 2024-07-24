type Product = {
    id: number
    title: string
    price: number
    description: string
}

export default async function ProductsPage(){
    const response = await fetch("http://localhost:3001/products")
    const products = await response.json()

    return(
        <ul className=" flex flex-col justify-center">
            {products.map((product: Product) => (
                <li key={product.id} className=" bg-slate-200 p-2 m-2 rounded">
                    <p className="text-xl">{product.title}</p>
                    <p className="text-green-600">{`$${product.price}`}</p>
                    <p>{product.description}</p>
                </li>
            ))}
        </ul>
    )
}