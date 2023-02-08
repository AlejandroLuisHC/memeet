const deleteMeme = async (id, token) => {
    const options = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/memes/${id}`, options)
        const data = await res.json() 
        return data
        
    } catch (error) {
        console.log(error);
    }
}

export default deleteMeme