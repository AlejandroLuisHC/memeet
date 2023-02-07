import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GeneralProvider from '../helper/utils/general_provider/GeneralProvider'

const Layout = lazy(() => import('./Layout'))
const Landing = lazy(() => import('../pages/Landing'))

const Policy = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/Policy"),
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
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </GeneralProvider>
    )
}

export default Router