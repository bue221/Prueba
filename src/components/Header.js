import React from 'react';

import { IconButton, TextField} from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import './styles/header.css'

const Header = ()=>{
        return(
                <div className='header'>
                        <div className='header-info'>
                                <img src="https://scontent.fbog3-1.fna.fbcdn.net/v/t1.0-1/c0.0.386.386a/543598_10151181893796620_1021189650_n.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=Omkx2Ld1NDgAX-a1J1Q&_nc_ht=scontent.fbog3-1.fna&oh=58c427391f36c9cf74d575b7e0475753&oe=5F865028" alt="" />
                                <h1>Unusual minds</h1>
                        </div>
                        <div>
                                <TextField id="standard-basic" label="Buscar" />
                                <IconButton>
                                        <SearchIcon></SearchIcon>
                                </IconButton>
                        </div>
                </div>
                );
}

export default Header;
