import React, { useState, useEffect } from 'react'
import {
    BtnClipboard,
    FigcaptionMeme,
    FigureMemeCard,
    H2Meme,
    ImgMeme,
    SmallAuthorship,
    BtnDeleteMeme,
    BtnConfirmDeleteMeme
} from '../../style/landingStyle'
import { AiOutlineLink } from '@react-icons/all-files/ai/AiOutlineLink'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillDelete } from '@react-icons/all-files/ai/AiFillDelete'
import { AiFillWarning } from '@react-icons/all-files/ai/AiFillWarning'
import { useAuth0 } from '@auth0/auth0-react'
import { deleteMeme, getOneUser } from '../../../api'
import { UPDATE } from '../../../redux/features/user_data/userSlice'

const MemeCard = ({ id, name, src, tags, owner, ownerId, refetch }) => {
    const tagsNames = tags.map(tag => tag.name)
    const tagList = tagsNames.join(', ')
    const navigate = useNavigate()
    const { _id: loggedId } = useSelector(state => state.userData.user)
    const [isUserMeme, setIsUserMeme] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false)
    const { getAccessTokenSilently } = useAuth0()
    const dispatch = useDispatch()

    useEffect(() => {
        if (confirmDelete) {
            setTimeout(() => {
                setConfirmDelete(prev => prev = false)
            }, 3000)
        }
    }, [confirmDelete])

    useEffect(() => {
        if (loggedId === ownerId) {
            setIsUserMeme(prev => true)
        }
    }, [loggedId, ownerId])

    const copyToClipboard = (url) => {
        navigator.clipboard.writeText(window.location.origin + '/meme/' + id)
        toast.success("URL copied to clipboard!");
    }

    async function deleteThisMeme(id) {
        const token = await getAccessTokenSilently()
        const data = await deleteMeme(id, token)

        data ? toast("Meme deleted!", {
            icon: '🗑️',
        }) : toast.error("Something went wrong!")

        const user = await getOneUser(loggedId)
        user && dispatch(UPDATE(user))
        refetch && refetch()
    }

    return (
        <FigureMemeCard>
            {
                isUserMeme && (
                    !confirmDelete ?
                        <BtnDeleteMeme
                            onClick={() => setConfirmDelete(prev => prev = true)}
                        >
                            <AiFillDelete />
                        </BtnDeleteMeme>
                        :
                        <BtnConfirmDeleteMeme
                            onClick={() => deleteThisMeme(id)}
                        >
                            <AiFillWarning />
                        </BtnConfirmDeleteMeme>
                )
            }
            <H2Meme onClick={() => navigate(`/meme/${id}`)}>
                {name}
            </H2Meme>
            <ImgMeme src={src} />
            <BtnClipboard onClick={() => copyToClipboard(src)}><AiOutlineLink /></BtnClipboard>
            <SmallAuthorship>by: {owner}</SmallAuthorship>
            <FigcaptionMeme>Tags: {tagList}</FigcaptionMeme>

        </FigureMemeCard>
    )
}

export default MemeCard