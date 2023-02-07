const patchUser = async (newData, id, token) => {
    const formData = new FormData()
    newData.img && formData.append('image', newData.img[0])
    newData.name && formData.append('name', newData.name)
    try {
        const options = {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        }
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`, options)
        const { data } = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

export default patchUser;