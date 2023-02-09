import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    BtnAddMeme,
    BtnLogin,
    BtnLogout,
    DivLogContainer,
    FormSearchBar,
    H1Header,
    ImgUser,
    InputSearchBar,
    SpanLetterBlue,
    SpanLetterRed
} from '../style/headerStyle'
import { BiImageAdd } from '@react-icons/all-files/bi/BiImageAdd'
import { useAuth0 } from '@auth0/auth0-react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { LOG_OUT } from '../../redux/features/user_data/userSlice'
import { useForm } from 'react-hook-form'
import { GiMeatCleaver } from '@react-icons/all-files/gi/GiMeatCleaver'

const Header = ({ open }) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.userData)
    useEffect(() => {
        if (user._id) {
            setLoggedIn(true)
        }
    }, [user._id])
    const { loginWithRedirect, logout } = useAuth0();
    const Logout = () => {
        logout()
        dispatch(LOG_OUT())
    }
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
    } = useForm();

    return (
        <>
            <H1Header onClick={() => navigate('/')}>
                Mem<SpanLetterBlue>e</SpanLetterBlue><SpanLetterRed>ǝ</SpanLetterRed>t 
                <GiMeatCleaver />
            </H1Header>
            <FormSearchBar onChange={
                handleSubmit(data => {
                    navigate({ pathname: '/', search: `?${createSearchParams(data)}` })
                })
            }>
                <InputSearchBar
                    type="text"
                    placeholder="Search a meme"
                    {...register("search", {
                        required: true,
                        minLength: 3
                    })}
                />
            </FormSearchBar>
            {
                loggedIn
                    ?
                    <DivLogContainer>
                        <BtnAddMeme onClick={open}><BiImageAdd /></BtnAddMeme>
                        <ImgUser onClick={() => navigate('/profile')} src={user?.image?.url} alt="user" />
                        <BtnLogout onClick={() => Logout()}>Log out</BtnLogout>
                    </DivLogContainer>
                    :
                    <DivLogContainer>
                        <BtnLogin onClick={() => loginWithRedirect()}>Log in / Sign up</BtnLogin>
                    </DivLogContainer>
            }
        </>
    )
}

export default memo(Header)