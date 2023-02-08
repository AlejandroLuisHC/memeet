const getOneMeme = async (id) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/memes/${id}`)
        const { data } = await res.json();
        return data;  
    } catch (error) {
        console.log(error);
    }
}

export default getOneMeme