import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import './styles/publi.css'

const Publi = ()=>{

        const [img, setImg] = useState('');

        useEffect(()=>{
                getData();
        },[]);

        const getData = ()=>{
                let url = "https://jsonplaceholder.typicode.com/albums/1/photos";
                axios.get(url).then(res => res.data).then((data)=>{
                        setImg(data);
                }).catch((error) => {
                        console.log(error);
                });
        }


        return(
                <div className='content-publi'>
                        {img ? img.map(i=>(
                        <div key={i.id} className='publi'>
                                <div className='info'>
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" />
                                <p>User</p>
                                </div>
                                <h1>{i.title}</h1>
                                <img src={i.thumbnailUrl} alt={i.title} />
                                <div className='icon'>
                                        <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
                                </div>
                        </div>
                        )) : '' }
                </div>
        );
}

export default Publi;
