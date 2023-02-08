import React from 'react'
import {
    BtnClipboard,
    FigcaptionMeme,
    FigureMemeCard,
    H2Meme,
    ImgMeme,
    SmallAuthorship
} from '../../style/landingStyle'
import { AiOutlineLink } from 'react-icons/ai'
import { toast } from 'react-hot-toast'
import { useNavigate, useSearchParams } from 'react-router-dom'

const MemeCard = ({ id, name, src, tags, owner }) => {
    const tagsNames = tags.map(tag => tag.name)
    const tagList = tagsNames.join(', ')
    const navigate = useNavigate()

    const copyToClipboard = (url) => {
        navigator.clipboard.writeText(window.location.origin + '/meme/' + id)
        toast.success("URL copied to clipboard!");
    }

    return (
        <FigureMemeCard>
            <H2Meme onClick={() => navigate(`/meme/${id}`)}>{name}</H2Meme>
            <ImgMeme src={src} />
            <BtnClipboard onClick={() => copyToClipboard(src)}><AiOutlineLink /></BtnClipboard>
            <SmallAuthorship>by: {owner}</SmallAuthorship>
            <FigcaptionMeme>Tags: {tagList}</FigcaptionMeme>
        </FigureMemeCard>
    )
}

export default MemeCard