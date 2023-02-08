import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { useOutletContext, useParams } from 'react-router-dom'
import { getOneMeme } from '../api'
import Spinner from '../components/general_components/spinner/Spinner'
import MemeCard from '../components/pages_components/landing/MemeCard'
import ModalUpload from '../components/pages_components/landing/ModalUpload'
import { DivMemeContainer } from '../components/style/memeStyle'

const Meme = () => {
    const [Modal, , close] = useOutletContext()
    const { id } = useParams()
    const { data: meme, status } = useQuery(
        ['meme', id],
        () => getOneMeme(id)
    )

    return (
        (status === 'loading') ? <Spinner /> :
            (status === 'error') ? <div>Error</div> :
                <>
                    <DivMemeContainer>
                        <MemeCard key={meme._id}
                            id={meme._id}
                            name={meme.name}
                            src={meme.image.url}
                            tags={meme.tags}
                            owner={meme.owner.name}
                        />
                    </DivMemeContainer>
                    <Toaster
                        position="bottom-right"
                        reverseOrder={false}
                    />
                    <ModalUpload
                        Modal={Modal}
                        close={close}
                    />
                </>
    )
}

export default Meme