import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DivProfile, ImgProfile, InputImg, LabelUpdateImg, PProfileData, SpanData } from '../components/style/profileStyle'
import { IoMdCloudUpload } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import { useAuth0 } from '@auth0/auth0-react'
import { UPDATE } from '../redux/features/user_data/userSlice'
import patchUser from '../api/patchUser'

const Profile = () => {
    const { user } = useSelector(state => state.userData)
    const [userData, setUserData] = useState({ ...user })
    useEffect(() => {
        setUserData(prev => prev = { ...user })
    }, [user])
    const dispatch = useDispatch();
    const { getAccessTokenSilently } = useAuth0()
    const {
        register,
        handleSubmit,
    } = useForm();

    const updateUserImg = async ({
        image,
        name
    }) => {
        const updatedData = { 
            img: image || null,
            name: name || null
        }

        const token = await getAccessTokenSilently()
        const updatedUser = await patchUser(updatedData, user._id, token)
        updatedUser && dispatch(UPDATE(updatedUser))
    }

    return (
        <DivProfile>
            <h1>Your profile</h1>
            <PProfileData>Name: <SpanData>{userData.name}</SpanData></PProfileData>
            <PProfileData>Email: <SpanData>{userData.email}</SpanData></PProfileData>
            <ImgProfile src={userData.image.url} alt="user" />

            <form onChange={handleSubmit(data => updateUserImg(data))}>
                <LabelUpdateImg>
                    <IoMdCloudUpload /> Update image
                    <InputImg
                        type="file"
                        {...register("image")}
                    />
                </LabelUpdateImg>
            </form>
        </DivProfile>
    )
}

export default Profile