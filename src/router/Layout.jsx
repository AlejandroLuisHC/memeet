import { Outlet } from 'react-router-dom';
import Footer from '../components/general_components/Footer';
import Header from '../components/general_components/Header';
import {
    DivMain,
    HeaderStyle,
    FooterStyle,
    MainStyle
} from '../components/style/generalStyle';
import { useModal } from 'react-hooks-use-modal'

const Layout = () => {
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true,
        closeOnEsc: true,
    })

    return (
        <DivMain>
            <HeaderStyle>
                <Header
                    open={open}
                />
            </HeaderStyle>
            <MainStyle>
                <Outlet
                    context={[Modal, open, close, isOpen]}
                />
            </MainStyle>
            <FooterStyle>
                <Footer />
            </FooterStyle>
            
        </DivMain>
    )
}

export default Layout