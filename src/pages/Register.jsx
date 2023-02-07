import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPublicData } from '../api'
import RegisterForm from '../components/pages_components/register/RegisterForm'
import { LOG_IN } from '../redux/features/user_data/userSlice'

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user: userAuth0, isLoading: authLoading } = useAuth0()
    const { data: usersDB, status } = useQuery(
        ['users', 'users'],
        () => getPublicData('users')
    )

    function checkUserExists(userAuth0, usersDB) {
        const foundUser = usersDB.find((user) =>
            user.email === userAuth0.email
        )
        if (foundUser) {
            dispatch(LOG_IN(foundUser))
            navigate("/")
        } else {
            return (
                <RegisterForm
                    userAuth0={userAuth0}
                    usersDB={usersDB}
                />
            )
        }
    }

    return (
        (status === 'loading' || authLoading) ? <div>Loading...</div> :
            status === 'error' ? <div>Error</div> :
                checkUserExists(userAuth0, usersDB)
    )
}

export default Register