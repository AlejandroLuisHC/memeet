import React, { memo } from 'react'
import { BiCopyright } from 'react-icons/bi'
import { LinkFooterPolicy, SmallFooter } from '../style/footerStyle'

const Footer = () => {
    return (
        <>
            <SmallFooter><BiCopyright /> Alejandro L. Herrero</SmallFooter>
            <LinkFooterPolicy to="/policy">Terms and conditions </LinkFooterPolicy>
            <SmallFooter>Thanks for visiting</SmallFooter>
        </>
    )
}

export default memo(Footer)