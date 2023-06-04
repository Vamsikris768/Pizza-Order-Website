import React from 'react'
import { Instagram } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram></Instagram>
            <Twitter></Twitter>
            <Facebook></Facebook>
            <LinkedIn></LinkedIn>
            <p>&copy;2021 pedrotechpizza.com</p>
        </div>
    </div>
  )
}

export default Footer;