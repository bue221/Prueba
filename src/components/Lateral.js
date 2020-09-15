import React from 'react'

import { Link } from 'react-router-dom'

import './styles/lateral.css';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Lateral = ()=>{
        return(
                <div className='lateral'>
                        <Link className='link' to='/'>
                                <HomeIcon/> Inicio
                        </Link>
                        <Link to='/blog'>
                                Blog
                        </Link>
                        <Link className='link' to='/search'>
                                <AccountCircleIcon /> Mi cuenta
                        </Link>
                </div>
                );
}

export default Lateral;
