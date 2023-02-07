const getPublicData = async (key) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/${key}`)
        const { data } = await res.json();
        return data;  
    } catch (error) {
        console.log(error);
    }
}

export default getPublicData