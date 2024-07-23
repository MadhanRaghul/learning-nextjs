export const Posts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return <h1>POSTS</h1>
}