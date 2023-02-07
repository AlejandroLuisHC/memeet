import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { getPublicData } from '../api'
import MemeCard from '../components/pages_components/landing/MemeCard'

const Landing = () => {
    const { data: memes, status } = useQuery(
        ['getPublicData', 'memes'],
        () => getPublicData('memes')
    )

    return (
        status === 'loading' ? <div>Loading...</div> :
            status === 'error' ? <div>Error: {error.message}</div> :
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
                </div>
    )
}

export default Landing