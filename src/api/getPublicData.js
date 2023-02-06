const getPublicData = async (data) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/${data}`)
        const { status, data } = res.json();
        if (status !== "OK") {
            throw new Error("Error fetching data");
        } else {
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

export default getPublicData