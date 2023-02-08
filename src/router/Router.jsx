import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Spinner from '../components/general_components/spinner/Spinner'
import GeneralProvider from '../helper/utils/general_provider/GeneralProvider'

const Layout = lazy(() => import('./Layout'))
const Landing = lazy(() => import('../pages/Landing'))
const PrivateRoutes = lazy(() => import('./PrivateRoutes'))

const Policy = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/Policy"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const Register = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/Register"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const Profile = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/Profile"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const Meme = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/Meme"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});

const Router = () => {
    return (
        <GeneralProvider>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Landing />} />
                            <Route path='/policy' element={<Policy />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/profile' element={<PrivateRoutes><Profile /></PrivateRoutes>} />
                            <Route path='/meme/:id' element={<Meme />} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </GeneralProvider>
    )
}

export default Router