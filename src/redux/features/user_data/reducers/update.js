const update = (state, action) => {
    const updatedUser = {
        ...action.payload,
    }
    sessionStorage.setItem('user', JSON.stringify(updatedUser));
    state.user = { ...updatedUser }
}

export default update;