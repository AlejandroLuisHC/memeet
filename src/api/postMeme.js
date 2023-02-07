const postMeme = async (data, token) => {
    console.log("DATA", data);
    const formData = new FormData()
    formData.append('image', data.image[0])
    formData.append('name', data.name)
    formData.append('owner', data.owner)
    formData.append('tags', data.tags)

    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    }
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/memes`, options)
        const { data } = await res.json() 
        return data
        
    } catch (error) {
        console.log(error);
    }
}

export default postMeme