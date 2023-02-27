import React from 'react';
import './Footer.css';
import { getFootercopy, getFullYear } from '../utils/utils'

function Footer() {
    return (
        <div className='App-footer'>
            <p>copyright {getFullYear()} - {getFootercopy()}</p>
        </div>
    )
}

export default Footer;