import { useQuery } from '@tanstack/react-query'
import React, { lazy, Suspense, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import {
    useLocation,
    useNavigate,
} from 'react-router-dom'
import { getPublicData } from '../api'
import MemeCard from '../components/pages_components/landing/MemeCard'
import {
    BtnGoLanding,
    BtnGoToTop,
    BtnTagFilter,
    BtnTagFilterActive,
    DivMemesContainer,
    DivTagFilterBtns
} from '../components/style/landingStyle'
import { ImArrowUp } from '@react-icons/all-files/im/ImArrowUp'
import Spinner from '../components/general_components/spinner/Spinner'
const ModalUpload = lazy(() => import('../components/pages_components/landing/ModalUpload'))

const Landing = () => {
    const navigate = useNavigate()
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

    const [tagsFilter, setTagsFilter] = useState([])

    const [showButton, setShowButton] = useState(false);
    const handleScroll = () => {
        if (window.pageYOffset > 1) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };
    window.addEventListener('scroll', handleScroll);

    const memeCard = (meme) => {
        return (
            <MemeCard key={meme._id}
                id={meme._id}
                name={meme.name}
                src={meme.image.url}
                tags={meme.tags}
                owner={meme.owner.name}
                ownerId={meme.owner._id}
                refetch={refetch}
            />
        )
    }

    return (
        (status === 'loading' || statusTags === 'loading') ? <Spinner />:
            (status === 'error' || statusTags === 'error') ? <div>Error</div> :
                <>
                    <DivTagFilterBtns>
                        {tags?.map(tag => {
                            if (tagsFilter.includes(tag.name)) {
                            return <BtnTagFilterActive key={tag._id}
                                onClick={() => {
                                    if (tagsFilter.includes(tag.name)) {
                                        setTagsFilter(prev => prev = tagsFilter.filter(tagFilter => tagFilter !== tag.name))
                                    } else {
                                        setTagsFilter(prev => prev = [...tagsFilter, tag.name])
                                    }
                                }}
                            >
                                {tag.name}
                            </BtnTagFilterActive>
                            } else {
                                return <BtnTagFilter key={tag._id}
                                    onClick={() => {
                                        if (tagsFilter.includes(tag.name)) {
                                            setTagsFilter(prev => prev = tagsFilter.filter(tagFilter => tagFilter !== tag.name))
                                        } else {
                                            setTagsFilter(prev => prev = [...tagsFilter, tag.name])
                                        }
                                    }}
                                >
                                    {tag.name}
                                </BtnTagFilter>
                            }
                        })}
                    </DivTagFilterBtns>
                    {search && <BtnGoLanding onClick={() => navigate('/')}>Exit search</BtnGoLanding>}
                    <DivMemesContainer>
                        {memes?.map(meme => {
                            if (search) {
                                if (meme.name.toLowerCase().includes(search.toLowerCase())) {
                                    if (tagsFilter.length > 0) {
                                        return meme.tags.some(tag => tagsFilter.includes(tag.name)) ?
                                            memeCard(meme)
                                            : null
                                    } else {
                                        return memeCard(meme)
                                    }
                                } else {
                                    return null
                                }
                            } else {
                                if (tagsFilter.length > 0) {
                                    return meme.tags.some(tag => tagsFilter.includes(tag.name)) ?
                                        memeCard(meme)
                                        : null
                                } else {
                                    return memeCard(meme)
                                }
                            }
                        })}               
                    </DivMemesContainer>
                    <Toaster
                        position="bottom-right"
                        reverseOrder={false}
                    />
                    <Suspense fallback={<Spinner />}>
                        <ModalUpload
                            memesData={memes}
                            tagsData={tags}
                            refetch={refetch}
                        />
                    </Suspense>
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