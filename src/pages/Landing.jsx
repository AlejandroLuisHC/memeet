import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useLocation, useOutletContext, useParams } from 'react-router-dom'
import { getPublicData } from '../api'
import MemeCard from '../components/pages_components/landing/MemeCard'
import ModalUpload from '../components/pages_components/landing/ModalUpload'
import { BtnGoToTop, DivMemesContainer } from '../components/style/landingStyle'
import { ImArrowUp } from 'react-icons/im'

const Landing = () => {
    const [Modal, , close] = useOutletContext()

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const search = queryParams.get('search')

    const { data: memes, status, refetch } = useQuery(
        ['getPublicData', 'memes'],
        () => getPublicData('memes')
    )

    const { data: tags, status: statusTags } = useQuery(
        ['getPublicData', 'tags'],
        () => getPublicData('tags')
    )

    const [showButton, setShowButton] = useState(false);
    const handleScroll = () => {
        if (window.pageYOffset > 1) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };
    window.addEventListener('scroll', handleScroll);

    return (
        (status === 'loading' || statusTags === 'loading') ? <div>Loading...</div> :
            (status === 'error' || statusTags === 'error') ? <div>Error</div> :
                <>
                    <DivMemesContainer>
                        {memes?.map(meme => {
                            if (search) {
                                if (meme.name.toLowerCase().includes(search.toLowerCase())) {
                                    return <MemeCard key={meme._id}
                                        id={meme._id}
                                        name={meme.name}
                                        src={meme.image.url}
                                        tags={meme.tags}
                                        owner={meme.owner.name}
                                    />
                                } else {
                                    return null
                                }
                            } else {
                                return <MemeCard key={meme._id}
                                    id={meme._id}
                                    name={meme.name}
                                    src={meme.image.url}
                                    tags={meme.tags}
                                    owner={meme.owner.name}
                                />
                            }
                        })}
                    </DivMemesContainer>
                    <Toaster
                        position="bottom-right"
                        reverseOrder={false}
                    />
                    <ModalUpload
                        memesData={memes}
                        tagsData={tags}
                        Modal={Modal}
                        close={close}
                        refetch={refetch}
                    />
                    {showButton && (
                        <BtnGoToTop
                            style={{
                                position: 'fixed',
                                bottom: '20px',
                                left: '20px',
                                zIndex: '999'
                            }}
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            <ImArrowUp />
                        </BtnGoToTop>
                    )}
                </>
    )
}

export default Landing