import React from 'react'
import { Container } from '../../utils/Utils'
import '../../assests/styles/Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <Container>
            <div className="footer__content">
                <p className='footer__content-text'>Copyright © 2024 All rights reserved | Develop by <a href="https://mirodiluz.netlify.app" target='_blank' rel="noreferrer">Mirodil Mavlonov</a></p>
            </div>
        </Container>
    </div>
  )
}

export default Footer