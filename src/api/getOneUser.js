const getOneUser = async (id) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`)
        const { data } = await res.json();
        return data;  
    } catch (error) {
        console.log(error);
    }
}

export default getOneUser