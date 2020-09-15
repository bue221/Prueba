import React from 'react'

import { Link } from 'react-router-dom'

import './styles/lateral.css';
import { Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BookIcon from '@material-ui/icons/Book';

const Lateral = ()=>{
        return(
                <div className='lateral'>
                        <Link className='link' to='/'>
                                <HomeIcon/> Inicio
                        </Link>
                        <Link  className='link' to='/blog'>
                                <BookIcon /> Blog
                        </Link>
                        <Link className='link' to='/cuenta'>
                                <AccountCircleIcon /> Mi cuenta
                        </Link>
                </div>
                );
}

export default Lateral;
