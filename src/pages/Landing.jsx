import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Toaster } from 'react-hot-toast'
import { useOutletContext } from 'react-router-dom'
import { getPublicData } from '../api'
import MemeCard from '../components/pages_components/landing/MemeCard'

import ModalUpload from '../components/pages_components/landing/ModalUpload'

const Landing = () => {
    const [Modal, , close] = useOutletContext()
    const { data: memes, status, refetch } = useQuery(
        ['getPublicData', 'memes'],
        () => getPublicData('memes')
    )
    const { data: tags, status: statusTags } = useQuery(
        ['getPublicData', 'tags'],
        () => getPublicData('tags')
    )

    return (
        (status === 'loading' || statusTags === 'loading') ? <div>Loading...</div> :
            (status === 'error' || statusTags === 'error') ? <div>Error</div> :
                <div>
                    {memes?.map(meme => {
                        return <MemeCard key={meme._id}
                            name={meme.name}
                            src={meme.image.url}
                            tags={meme.tags}
                            owner={meme.owner.name}
                        />
                    })}
                    <Toaster
                        position="bottom-right"
                        reverseOrder={false}
                    />
                    <ModalUpload 
                        memes={memes}
                        tags={tags}
                        Modal={Modal}
                        close={close}
                        refetch={refetch}
                    />
                </div >
    )
}

export default Landing