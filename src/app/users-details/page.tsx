type User = {
    id: number
    name: string
    username: string
    email: string
    phone: string
}

export default async function UsersDetails(){
    await new Promise((resolve) => setTimeout(resolve,2000))
    const responce = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await responce.json()
    console.log(users)
    return(
        <>
            {users.map((user: User) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <h3>{user.username}</h3>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
            ))}
        </>
    )
}