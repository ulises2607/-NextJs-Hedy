async function getData() {
    const res = await fetch('https://my-json-server.typicode.com/ulises2607/-NextJs-Hedy/posts/')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default getData;
