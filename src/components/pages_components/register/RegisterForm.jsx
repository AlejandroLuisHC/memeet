import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LOG_IN } from '../../../redux/features/user_data/userSlice'
import { postUser } from '../../../api'
import { BtnSubmitRegister, DivInputContainer, FieldsetRegister, FormRegister, InputFileRegister, InputRegister, LabelFileRegister, LabelRegister, LegendRegister, PErrorInput } from '../../style/registerStyle'

const RegisterForm = ({ userAuth0, usersDB }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [user, setUser] = useState({
        name: userAuth0.name || '',
        email: userAuth0.email,
        image: {
            url: userAuth0.picture || null,
        }
    })
    const [loadingUser, setLoadingUser] = useState(false)

    const createUser = async ({
        name
    }) => {
        const newUser = { ...user, name }
        const data = await postUser(newUser);
        data && dispatch(LOG_IN(data)) && navigate('/') && setLoadingUser(false);
        !data && console.log("There was a problem creating the user") && setLoadingUser(false);
    }

    return (
        loadingUser ?
            <h1>Loading...</h1>
            :
            <FormRegister
                onSubmit={
                    handleSubmit(data => {
                        setLoadingUser(true)
                        createUser(data)
                    })
                }
            >
                <FieldsetRegister>
                    <LegendRegister>Give us a nickname! :D</LegendRegister>
                    <DivInputContainer>
                        <LabelRegister>
                            Username:
                            <InputRegister
                                type="text"
                                placeholder={user.name || "Username"}
                                {...register("name", {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 20,
                                    validate: value => !usersDB.find(user => user.name === value)
                                })}
                            />
                        </LabelRegister>
                        {errors.name?.type === "required" && <PErrorInput>This field is required</PErrorInput>}
                        {errors.name?.type === "minLength" && <PErrorInput>Username must have at least 3 characters</PErrorInput>}
                        {errors.name?.type === "maxLength" && <PErrorInput>Username must have less than 20 characters</PErrorInput>}
                        {errors.name?.type === "validate" && <PErrorInput>Username already exists</PErrorInput>}
                    </DivInputContainer>

                    <BtnSubmitRegister type="submit">
                        Create user
                    </BtnSubmitRegister>
                </FieldsetRegister>
            </FormRegister>
    )
}

export default RegisterForm