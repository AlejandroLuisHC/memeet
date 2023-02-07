const postUser = async (data) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: data.email,
            name: data.name,
            image: {
                url: data.picture,
            },
        }),
    }
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, options)
        const { data } = await res.json() 
        return data
        
    } catch (error) {
        console.log(error);
    }
}

export default postUser