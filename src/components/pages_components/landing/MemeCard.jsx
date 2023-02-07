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
const MemeCard = ({name, src, tags, owner}) => {

    const tagsNames = tags.map(tag => tag.name)
    const tagList = tagsNames.join(', ')
    
    const copyToClipboard = (url) => {
        navigator.clipboard.writeText(url)
        toast.success("URL copied to clipboard!");
    }

    return (
        <FigureMemeCard>
            <H2Meme>{name}</H2Meme>
            <ImgMeme src={src}/>
            <BtnClipboard onClick={() => copyToClipboard(src)}><AiOutlineLink /></BtnClipboard>
            <SmallAuthorship>by: {owner}</SmallAuthorship>
            <FigcaptionMeme>Tags: {tagList}</FigcaptionMeme>
        </FigureMemeCard>
    )
}

export default MemeCard