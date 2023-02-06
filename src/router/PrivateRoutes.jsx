import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { _id } = useSelector((state) => state.userData.user)

    return (
        _id ? children : <Navigate to='/' />
    )
}

export default PrivateRoutes