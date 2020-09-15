import React,{useState, useEffect} from 'react';
import axios from 'axios';

import FolderIcon from '@material-ui/icons/Folder';
import './styles/cuenta.css'
import Avatar from '@material-ui/core/Avatar';

const Cuenta = ()=>{

        const [friend, setFriend] = useState('');

        useEffect(()=>{
                getData();
        },[]);

        const getData = ()=>{
                let url = "https://jsonplaceholder.typicode.com/users";
                axios.get(url).then(res => res.data).then((data)=>{
                        setFriend(data);
                }).catch((error) => {
                        console.log(error);
                });
        }

        console.log(friend);

        return(
                <div className='cuenta'>
                        <h1>Tu cuenta</h1>
                        <img src="https://avatars2.githubusercontent.com/u/52434296?s=460&u=590ab73c9e5f84051484a78096ad3c8110ac5539&v=4" alt="img" />
                        <h3>Andres Camilo Plaza</h3>
                        <h3>Amigos:</h3>
                        <div className='amigos'>
                                {friend ? friend.map(i=>(
                                <div>
                                        <p>{i.name}</p>

                                        <Avatar alt="A" src="/static/images/avatar/1.jpg" className='icono' />
                                </div>
                                ))
                                :''}
                        </div>
                </div>
                );
}

export default Cuenta;
