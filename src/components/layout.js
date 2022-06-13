import React from 'react'
import { useOutlet, useNavigate } from "react-router-dom"
import mic_logo from '../assets/logo-mic.png'
import '../styles/layout.css'
import FooterMenu from './footer_menu'

const Layout = () => {
    const outlet = useOutlet();
    const navigate = useNavigate();
    return (
        <div style={{ padding: "65px 0"}}>
            <div className='fixed-top private-header-wrapper container-width'>
                <div className='private-header-container'>
                    <img src={mic_logo} alt='' className='mic-logo' />
                </div>
            </div>
            <div className='top-header-content my-3 px-3'>
                <button onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>
                </button>
            </div>
            <div className='container'>
                {outlet}
            </div>
            <FooterMenu />
        </div>
    )
}

export default Layout