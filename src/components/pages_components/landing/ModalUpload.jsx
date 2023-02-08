import React from 'react'
import {
    BtnCloseModal,
    DivInputContainerCheckbox,
    DivModalUploadMeme,
    H3Checkbox,
    InputCheckbox,
    LabelCheckbox,
    LabelFileMeme
} from '../../style/landingStyle'
import {
    DivInputContainer,
    FieldsetRegister,
    FormRegister,
    InputRegister,
    InputFileRegister,
    LabelRegister,
    LegendRegister,
    BtnSubmitRegister,
    PErrorInput
} from '../../style/registerStyle'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { getPublicData, postMeme } from '../../../api'
import { useQuery } from '@tanstack/react-query'

const ModalUpload = ({ memesData, tagsData, Modal, close, refetch }) => {
    const { _id } = useSelector(state => state.userData.user)
    const { getAccessTokenSilently } = useAuth0()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const memes = memesData ?? useQuery(
        ['getPublicData', 'memes'],
        () => getPublicData('memes')
    ).data
    const tags = tagsData ?? useQuery(
        ['getPublicData', 'tags'],
        () => getPublicData('tags')
    ).data

    const createMeme = async ({
        name,
        image,
        tags
    }) => {
        const newMeme = {
            name,
            image,
            tags: tags.map(tag => {
                if (typeof tag === "string") return tag
            }),
            owner: _id            
        }
        const token = await getAccessTokenSilently()
        const createdMeme = await postMeme(newMeme, token)
        createdMeme && toast("A new meme was born!", { icon: '👏' });
    }

    return (
        <Modal>
            <DivModalUploadMeme>
                <FormRegister onSubmit={
                    handleSubmit(data => {
                        createMeme(data)
                        close()
                        setTimeout(() => {
                            refetch && refetch()
                        }, 1000)
                    })
                }
                >
                    <FieldsetRegister>
                        <LegendRegister>Upload a new meme!</LegendRegister>
                        <DivInputContainer>
                            <LabelRegister>
                                Name of the meme:
                                <InputRegister
                                    type="text"
                                    placeholder="Name of the meme"
                                    {...register("name", {
                                        required: true,
                                        minLength: 3,
                                        maxLength: 30,
                                        validate: value => !memes.find(meme => meme.name === value)
                                    })}
                                />
                            </LabelRegister>
                            {errors.name?.type === "required" && <PErrorInput>This field is required</PErrorInput>}
                            {errors.name?.type === "minLength" && <PErrorInput>Name must have at least 3 characters</PErrorInput>}
                            {errors.name?.type === "maxLength" && <PErrorInput>Name must have less than 30 characters</PErrorInput>}
                            {errors.name?.type === "validate" && <PErrorInput>Name already exists</PErrorInput>}
                        </DivInputContainer>

                        <DivInputContainer>
                            <LabelFileMeme>
                                Upload your meme (.jpg, .png, .gif, .webp)
                                <InputFileRegister
                                    type="file"
                                    {...register("image", {
                                        required: true,
                                        validate: value => value[0].type === "image/jpeg" || value[0].type === "image/png" || value[0].type === "image/gif" || value[0].type === "image/webp"
                                    })}
                                />
                            </LabelFileMeme>
                            {errors.image?.type === "required" && <PErrorInput>This field is required</PErrorInput>}
                            {errors.image?.type === "validate" && <PErrorInput>File must be an image</PErrorInput>}
                        </DivInputContainer>

                        <H3Checkbox>Add some tags to your meme:</H3Checkbox>
                        <DivInputContainerCheckbox>
                            {
                                tags?.map(tag =>
                                    <LabelCheckbox key={tag._id}
                                        htmlFor={tag.name}
                                    >
                                        <InputCheckbox
                                            id={tag.name}
                                            type="checkbox"
                                            value={tag._id}
                                            {...register(`tags`)}
                                        />
                                        {tag.name}
                                    </LabelCheckbox>
                                )
                            }
                        </DivInputContainerCheckbox>

                        <DivInputContainer>
                            <BtnSubmitRegister type="submit">Upload</BtnSubmitRegister>
                        </DivInputContainer>
                        <BtnCloseModal onClick={close}><AiOutlineCloseCircle /></BtnCloseModal>
                    </FieldsetRegister>
                </FormRegister>
            </DivModalUploadMeme>
        </Modal>
    )
}

export default ModalUpload