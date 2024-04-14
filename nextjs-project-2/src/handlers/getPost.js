async function getPost(id) {
    const res = await fetch(`https://my-json-server.typicode.com/ulises2607/-NextJs-Hedy/posts/${id}`)
    
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default getPost;