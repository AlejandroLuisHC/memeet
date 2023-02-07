import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    BtnAddMeme,
    BtnLogin,
    BtnSubmitSearchBar,
    DivSearchBarContainer,
    InputSearchBar
} from '../style/headerStyle'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiImageAdd } from 'react-icons/bi'

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const { _id: id } = useSelector(state => state.userData.user)
    useEffect(() => {
        if (id) {
            setLoggedIn(true)
        }
    }, [id])

    return (
        <>
            <DivSearchBarContainer>
                <InputSearchBar type="text" placeholder="Search" />
                <BtnSubmitSearchBar><AiOutlineSearch /></BtnSubmitSearchBar>
            </DivSearchBarContainer>
            {
                loggedIn ? <BtnAddMeme><BiImageAdd /></BtnAddMeme> : <BtnLogin>Log in</BtnLogin>
            }
        </>
    )
}

export default Header