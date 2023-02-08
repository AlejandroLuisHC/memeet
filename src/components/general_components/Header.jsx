import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    BtnAddMeme,
    BtnLogin,
    BtnSubmitSearchBar,
    DivLogContainer,
    FormSearchBar,
    H1Header,
    ImgUser,
    InputSearchBar
} from '../style/headerStyle'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiImageAdd } from 'react-icons/bi'
import { useAuth0 } from '@auth0/auth0-react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { LOG_OUT } from '../../redux/features/user_data/userSlice'
import { useForm } from 'react-hook-form'

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
        formState: { errors },
    } = useForm();

    return (
        <>
            <H1Header onClick={() => navigate('/')}>Memeet</H1Header>
            <FormSearchBar onSubmit={
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
                <BtnSubmitSearchBar type="submit"><AiOutlineSearch /></BtnSubmitSearchBar>
            </FormSearchBar>
            {
                loggedIn
                    ?
                    <DivLogContainer>
                        <BtnAddMeme onClick={open}><BiImageAdd /></BtnAddMeme>
                        <BtnLogin onClick={() => Logout()}>Log out</BtnLogin>
                        <ImgUser onClick={() => navigate('/profile')} src={user?.image?.url} alt="user" />
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