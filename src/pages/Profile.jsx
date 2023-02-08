import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DivProfile, DivProfileData, ImgProfile, InputImg, LabelUpdateImg, PProfileData, SpanData } from '../components/style/profileStyle'
import { IoMdCloudUpload } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import { useAuth0 } from '@auth0/auth0-react'
import { UPDATE } from '../redux/features/user_data/userSlice'
import patchUser from '../api/patchUser'
import { DivMemesContainer } from '../components/style/landingStyle'
import MemeCard from '../components/pages_components/landing/MemeCard'

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
        formState: { errors },
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
            <DivProfileData>
                <h1>Your profile</h1>
                <PProfileData>Name: <SpanData>{userData.name}</SpanData></PProfileData>
                <PProfileData>Email: <SpanData>{userData.email}</SpanData></PProfileData>
                <ImgProfile src={userData.image.url} alt="user" />

                <form onChange={handleSubmit(data => updateUserImg(data))}>
                    <LabelUpdateImg>
                        <IoMdCloudUpload /> Update image
                        <InputImg
                            type="file"
                            {...register("image", {
                                required: false,
                                validate: value => value[0].type === "image/jpeg" || value[0].type === "image/png" || value[0].type === "image/webp"
                            }
                            )}
                        />
                    </LabelUpdateImg>
                    {errors.image && <p>Only images are allowed</p>}
                </form>
            </DivProfileData>
            <section>
                <h2>{userData.name}'s memes</h2>
                {userData.myMemes.length > 0 ?
                    <DivMemesContainer>
                        {userData.myMemes.map(meme =>
                            <MemeCard key={meme._id}
                                id={meme._id}
                                name={meme.name}
                                src={meme.image.url}
                                tags={meme.tags}
                                owner={meme.owner.name}
                            />
                        )}


                    </DivMemesContainer>
                    :
                    <p>{userData.name} has no memes</p>
                }
            </section>
        </DivProfile>
    )
}

export default memo(Profile)