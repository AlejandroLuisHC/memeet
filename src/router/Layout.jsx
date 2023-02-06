import { Outlet } from 'react-router-dom';
import Footer from '../components/general_components/Footer';
import Header from '../components/general_components/Header';
import { 
    DivMain, 
    HeaderStyle, 
    FooterStyle, 
    MainStyle
} from '../components/style/generalStyle';

const Layout = () => {
    return (
        <DivMain>
            <HeaderStyle>
                <Header />
            </HeaderStyle>
            <MainStyle>
                <Outlet />
            </MainStyle>
            <FooterStyle> 
                <Footer />
            </FooterStyle>
        </DivMain>
    )
}

export default Layout